import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable,
  Dimensions,
  Modal,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";

import popupStyles from "../styles/NewGroupPopupStyles";
import GlobalStyles from "@/styles/Global";
import SampleProfilePhoto from "../assets/images/SampleProfilePhoto.jpg";
import PageHeader from "./PageHeader";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const NewGroupPopup = ({ visible, onClose, onCreate, friendsList }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isMounted, setIsMounted] = useState(visible);

  const scale = useSharedValue(0);
  const navigation = useNavigation();

  // Animate on visible toggle
  useEffect(() => {
    if (visible) {
      setIsMounted(true); // mount the modal
      scale.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.exp),
      });
    } else {
      scale.value = withTiming(
        0,
        {
          duration: 250,
          easing: Easing.in(Easing.exp),
        },
        (finished) => {
          if (finished) {
            runOnJS(setIsMounted)(false); // unmount the modal visually
            runOnJS(onClose)(); // trigger close callback (if needed)
          }
        }
      );
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: scale.value,
  }));

  const toggleMember = (member) => {
    setSelectedMembers((prev) =>
      prev.includes(member)
        ? prev.filter((m) => m !== member)
        : [...prev, member]
    );
  };

  const handleCreate = () => {
    onCreate(groupName, selectedMembers);
    setGroupName("");
    setSelectedMembers([]);
  };

  if (!isMounted) return null; // don't render modal at all when it's "invisible"

  return (
    <View>
      <Modal visible transparent statusBarTranslucent>
        <View style={popupStyles.modalOverlay}>
          <Animated.View style={[popupStyles.popup, animatedStyle]}>
            <PageHeader heightRatio={0.25} width={width * 0.8} rounded={true}>
              <View style={popupStyles.headerContent}>
                <Text style={[popupStyles.heading, GlobalStyles.subTitle]}>
                  Create New Group
                </Text>
                <TextInput
                  value={groupName}
                  onChangeText={setGroupName}
                  placeholder="Enter Group Name"
                  style={[GlobalStyles.textbox, popupStyles.textbox]}
                />
              </View>
            </PageHeader>

            <Text style={popupStyles.subHeading}>Select Members:</Text>

            <FlatList
              data={friendsList}
              keyExtractor={(item, index) =>
                item?.id?.toString?.() || index.toString()
              }
              numColumns={3}
              contentContainerStyle={popupStyles.memberList}
              renderItem={({ item }) => {
                const selected = selectedMembers.includes(item);
                return (
                  <Pressable
                    style={[
                      popupStyles.memberCard,
                      selected && popupStyles.selectedMember,
                    ]}
                    onPress={() => toggleMember(item)}
                  >
                    <View style={popupStyles.imageWrapper}>
                      <Image
                        source={item.image || SampleProfilePhoto}
                        style={popupStyles.memberImage}
                      />
                      {selected && (
                        <View style={popupStyles.checkmarkWrapper}>
                          <Image
                            source={require("../assets/images/Checkmark.png")}
                            style={popupStyles.checkmarkIcon}
                          />
                        </View>
                      )}
                    </View>
                    <Text style={popupStyles.memberName}>{item.name}</Text>
                  </Pressable>
                );
              }}
            />

            <View style={popupStyles.buttonRow}>
              <Pressable
                onPress={() => {
                  // Trigger the fade-out animation
                  scale.value = withTiming(
                    0,
                    {
                      duration: 250,
                      easing: Easing.in(Easing.exp),
                    },
                    (finished) => {
                      if (finished) {
                        runOnJS(setIsMounted)(false);
                        runOnJS(onClose)();
                      }
                    }
                  );
                }}
                style={popupStyles.cancelButton}
              >
                <Text style={[GlobalStyles.subText, popupStyles.cancelText]}>Cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  handleCreate();
                  scale.value = withTiming(
                    0,
                    {
                      duration: 250,
                      easing: Easing.in(Easing.exp),
                    },
                    (finished) => {
                      if (finished) {
                        runOnJS(setIsMounted)(false);
                        runOnJS(onClose)();
                      }
                    }
                  );
                }}
                disabled={!groupName || selectedMembers.length === 0}
                style={[
                  popupStyles.createButton,
                  (!groupName || selectedMembers.length === 0) &&
                    popupStyles.disabledButton,
                ]}
              >
                <Text style={[popupStyles.createText, GlobalStyles.subText]}>
                  Create Group
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default NewGroupPopup;
