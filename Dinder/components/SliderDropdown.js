// src/components/SliderDropdown.js
import Slider from "@react-native-community/slider";
import { Pressable, Text, View } from "react-native";
import styles from "../styles/PreferencesPopupStyles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useEffect,
} from "react-native-reanimated";
import React from "react";

const SliderDropdown = ({
  label,
  min,
  max,
  value,
  onValueChange,
  unit,
  isOpen,
  onToggle,
}) => {
  const rotation = useSharedValue(0);

  const animatedArrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  // Update rotation based on isOpen prop
  React.useEffect(() => {
    rotation.value = withTiming(isOpen ? 180 : 0, { duration: 200 });
  }, [isOpen]);

  return (
    <View style={styles.dropdownContainer}>
      <Pressable
        onPress={onToggle}
        style={[styles.dropdown, isOpen && styles.dropdownOpen]}
      >
        <Text style={styles.dropdownText}>{label}</Text>
        <Animated.Text
          style={[
            styles.dropdownText,
            animatedArrowStyle, // 🎯 animated rotation style
          ]}
        >
          ▼
        </Animated.Text>
      </Pressable>

      {isOpen && (
        <View style={styles.optionContainer}>
          <View style={styles.fakeTrack} />
          <Slider
            style={styles.slider}
            minimumValue={min}
            maximumValue={max}
            value={value}
            onValueChange={onValueChange}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbTintColor="#F33934"
          />
          <Text style={styles.sliderValue}>
            {Math.round(value)} {unit}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SliderDropdown;
