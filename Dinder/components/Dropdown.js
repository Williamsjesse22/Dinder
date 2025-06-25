// src/components/Dropdown.js
import { FlatList, Pressable, Text, View, Image } from "react-native";
import styles from "../styles/PreferencesPopupStyles";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useEffect } from "react";
import checkmark from "../assets/images/Checkmark.png";

const Dropdown = ({
  label,
  options = [],
  selectedValues = [],
  onSelect = () => {},
  isOpen = false,
  onToggle = () => {},
  isReadOnly = false,
}) => {
  const rotation = useSharedValue(0);

  const animatedArrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withTiming(isOpen ? 180 : 0, { duration: 200 });
  }, [isOpen]);

  const isSelected = (item) => selectedValues.includes(item);

  return (
    <View style={styles.dropdownContainer}>
      <Pressable
        style={[styles.dropdown, isOpen && styles.dropdownOpen]}
        onPress={onToggle}
      >
        <Text style={styles.dropdownText}>{label}</Text>
        <Animated.Text style={[styles.dropdownText, animatedArrowStyle]}>
          ▼
        </Animated.Text>
      </Pressable>

      {isOpen && (
        <View style={[styles.dropdownOptionContainer, { maxHeight: 200 }]}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const selected = isSelected(item);
              return (
                <Pressable
                  style={[
                    styles.optionWrapper,
                    selected && styles.selectedOption,
                  ]}
                  onPress={() => onSelect(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected && styles.selectedOptionText,
                    ]}
                  >
                    {item}
                  </Text>
                  {selected && (
                    <Image
                      source={checkmark}
                      style={styles.selectionCheckmark}
                    />
                  )}
                </Pressable>
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            persistentScrollbar={true}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
