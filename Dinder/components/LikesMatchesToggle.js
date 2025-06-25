// src/components/DualOptionToggle.js
import { Pressable, Text, View, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";
import styles from "../styles/LikesMatchesToggleStyles";

const { width } = Dimensions.get("window");

const DualOptionToggle = ({ leftLabel, rightLabel, selected, onSelect }) => {
  const toggleAnim = useRef(new Animated.Value(0)).current;
  const CONTAINER_WIDTH = width * 0.65;

  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue:
        selected === leftLabel ? -(CONTAINER_WIDTH / 4) : CONTAINER_WIDTH / 4,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [selected, leftLabel]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* 🔽 ABSOLUTE BACKGROUND SO IT DOESN’T BLOCK CLICKS */}
        <Animated.View
          style={[
            styles.animatedHighlight,
            {
              transform: [{ translateX: toggleAnim }],
              position: "absolute",
              zIndex: -1,
            },
          ]}
        />
        <Pressable
          style={[styles.toggleButton, styles.rightRounded]}
          onPress={() => onSelect(leftLabel)}
        >
          <Text
            style={[
              styles.toggleText,
              selected === leftLabel ? styles.activeText : styles.inactiveText,
            ]}
          >
            {leftLabel.toUpperCase()}
          </Text>
        </Pressable>
        <Pressable
          style={[styles.toggleButton, styles.leftRounded]}
          onPress={() => onSelect(rightLabel)}
        >
          <Text
            style={[
              styles.toggleText,
              selected === rightLabel ? styles.activeText : styles.inactiveText,
            ]}
          >
            {rightLabel.toUpperCase()}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DualOptionToggle;
