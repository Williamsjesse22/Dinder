import React, { useEffect, useRef } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDelay,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import styles from "../styles/GroupSwitcherPopupStyles";

const GroupSwitcherPopup = ({ groupsData, onSelectGroup }) => {
  // Y-axis bounce only
  const itemTranslateYRef = useRef([]);
  const animatedItemStylesRef = useRef([]);

  if (itemTranslateYRef.current.length !== groupsData.length) {
    itemTranslateYRef.current = groupsData.map(() => useSharedValue(30)); // start below final position
    animatedItemStylesRef.current = itemTranslateYRef.current.map((sv) =>
      useAnimatedStyle(() => ({
        transform: [{ translateY: sv.value }],
      }))
    );
  }

  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    itemTranslateYRef.current.forEach((itemY, index) => {
      itemY.value = withDelay(
        index * 75,
        withSpring(0, { damping: 7, stiffness: 120 }) // bounce into place
      );
    });
  }, []);

  const renderItem = ({ item, index }) => (
    <Animated.View style={animatedItemStylesRef.current[index]}>
      <Pressable onPress={() => onSelectGroup(item)} style={styles.groupItem}>
        <Image source={item.image} style={styles.groupImage} />
      </Pressable>
    </Animated.View>
  );

  return (
    <View style={styles.popupContainer}>
      <FlatList
        data={groupsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GroupSwitcherPopup;
