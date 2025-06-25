import DescriptorBar from "@/components/DescriptorBar";
import SwipeCard from "@/components/SwipeCard";
import TitleBar from "@/components/TitleBar";
import GlobalStyles from "@/styles/Global";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  Pressable,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import GreenCheck from "../assets/images/Checkmark.png";
import editIcon from "../assets/images/editIcon.png";
import RedX from "../assets/images/X.png";
import BottomNavBar from "../components/bottomNavBar";
import HeaderBar from "../components/HeaderBar";
import InfoBadge from "../components/InfoBadge";
import PreferencesPopup from "../components/PreferencesPopup";
import styles from "../styles/HomeScreenStyles";
import friendsData from "../assets/data/data.json";
import GroupScroller from "@/components/GroupScroller";
import GroupSwitcherPopup from "../components/GroupSwitcherPopup";
import TimePopupModal from "@/components/TimePopupModal";
import { getResolvedGroups } from "../utils/resolveGroupData";
import { formatApproxTimes } from "../utils/formatApproxTimes";

const groupOptions = getResolvedGroups();
const cards = [
  {
    name: "La Vine Bistro",
    image: require("../assets/images/LaVineBistro.jpg"),
  },
  {
    name: "Hamburgerz",
    image: require("../assets/images/Hamburgerz.jpg"),
  },
  {
    name: "Matcha Mates",
    image: require("../assets/images/MatchaMates.jpg"),
  },
  {
    name: "Fried Friends",
    image: require("../assets/images/FriedFriends.jpg"),
  },
];

const descriptors = [
  "$$",
  "Gluten-Free",
  "Organic Options",
  "Wheelchair Accessible",
  "Vegetarian",
  "Pet-Friendly",
  "Sustainable",
];

const HomeScreen = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const navigation = useNavigation();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const shouldAdvance = useSharedValue(false);
  const xOpacity = useSharedValue(0);
  const checkOpacity = useSharedValue(0);
  const [showPrefs, setShowPrefs] = useState(false);
  const [groupSelectorPosition, setGroupSelectorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [showTimePopup, setShowTimePopup] = useState(false);
  const [timeDisplayText, setTimeDisplayText] = useState("Open Now");

  const goToNextCard = () => {
    setCardIndex((prev) => (prev + 1) % cards.length);
    translateX.value = 0;
    translateY.value = 0;
    shouldAdvance.value = false;
  };

  useDerivedValue(() => {
    if (shouldAdvance.value) {
      runOnJS(goToNextCard)();
    }
  }, [shouldAdvance]);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
      if (e.translationX < -100) {
        xOpacity.value = withTiming(1, { duration: 100 });
        checkOpacity.value = withTiming(0, { duration: 450 });
      } else if (e.translationX > 100) {
        checkOpacity.value = withTiming(1, { duration: 100 });
        xOpacity.value = withTiming(0, { duration: 500 });
      } else {
        xOpacity.value = withTiming(0, { duration: 100 });
        checkOpacity.value = withTiming(0, { duration: 500 });
      }
    })
    .onEnd(() => {
      xOpacity.value = withTiming(0, { duration: 200 });
      checkOpacity.value = withTiming(0, { duration: 200 });

      if (translateX.value > 150) {
        translateX.value = withTiming(500, { duration: 300 }, () => {
          shouldAdvance.value = true;
        });
      } else if (translateX.value < -150) {
        translateX.value = withTiming(-500, { duration: 300 }, () => {
          shouldAdvance.value = true;
        });
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = translateX.value / 20;
    const opacity = 1 - Math.min(Math.abs(translateX.value) / 300, 1);

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotate}deg` },
      ],
      opacity,
    };
  });

  const userAsGroup = {
    name: "Jane Doe",
    image: require("../assets/images/SampleProfilePhoto.jpg"), // replace with actual image
    members: [], // no members, solo mode
  };
  const [selectedGroup, setSelectedGroup] = useState({
    name: "Jane Doe",
    image: require("../assets/images/SampleProfilePhoto.jpg"), // replace with actual image
    members: [], // no members, solo mode
  });

  const finalGroups = [userAsGroup, ...groupOptions];

  const [showGroupSelector, setShowGroupSelector] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.main,
        { paddingBottom: Dimensions.get("window").height * 0.075 },
      ]}
    >
      <HeaderBar
        selectedGroup={selectedGroup}
        setShowGroupSelector={setShowGroupSelector}
        onLongPressWithPosition={(x, y) => {
          setGroupSelectorPosition({ x, y });
          setShowGroupSelector(true);
        }}
        onOpenTimePopup={() => setShowTimePopup(true)}
        timeLabel={timeDisplayText}
      />

      <TitleBar name={cards[cardIndex].name} />

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyle]}>
          <SwipeCard
            image={cards[cardIndex].image}
            onPress={() => navigation.navigate("RestInfo")}
          />
        </Animated.View>
      </GestureDetector>
      <Animated.Image
        source={RedX}
        style={[
          styles.feedbackIcon,
          {
            left: 0,
            opacity: xOpacity,
          },
        ]}
      />

      <Animated.Image
        source={GreenCheck}
        style={[
          styles.feedbackIcon,
          {
            right: 0,
            opacity: checkOpacity,
          },
        ]}
      />

      <DescriptorBar descriptors={descriptors} />
      <View style={[styles.PreferencesReviews]}>
        <InfoBadge address="123 Main St, Ames, IA" rating={4} />
        <Pressable
          style={[styles.preferenceButton]}
          onPress={() => setShowPrefs(true)}
        >
          <Text style={[GlobalStyles.subHeading, styles.preferencesWord]}>
            PREFERENCES
          </Text>
          <Image source={editIcon} style={[styles.editIcon]} />
        </Pressable>
      </View>
      <BottomNavBar />

      {showGroupSelector && (
        <Pressable
          style={styles.groupSelectorOverlay}
          onPress={() => setShowGroupSelector(false)}
        >
          <View style={styles.groupSelectorPopupWrapper}>
            <GroupSwitcherPopup
              groupsData={finalGroups}
              onSelectGroup={(group) => {
                setSelectedGroup(group);
                setShowGroupSelector(false);
              }}
              position={groupSelectorPosition}
            />
          </View>
        </Pressable>
      )}

      <PreferencesPopup
        visible={showPrefs}
        onClose={() => setShowPrefs(false)}
      />

      <TimePopupModal
        visible={showTimePopup}
        onClose={() => setShowTimePopup(false)}
        onConfirm={(selection) => {
          const { days, time } = selection;

          let label = "Open Now";
          const daysAbbrev = days
            .filter((d) => d !== "Today")
            .map((d) => d.charAt(0))
            .join("");

          const isTimeArray = Array.isArray(time);
          const formattedTime = isTimeArray ? formatApproxTimes(time) : time;

          if (daysAbbrev && formattedTime !== "Open Now") {
            label = `${daysAbbrev}: ${formattedTime}`;
          } else if (!daysAbbrev && formattedTime !== "Open Now") {
            label = `Today: ${formattedTime}`;
          } else if (daysAbbrev && formattedTime === "Open Now") {
            label = `${daysAbbrev}: Open Now`;
          }

          setTimeDisplayText(label);
          setShowTimePopup(false);
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
