import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { Layout, FadeIn, FadeOut } from "react-native-reanimated";
import styles from "../styles/ApproxTimeDropdownsStyles";

const TIME_BLOCKS = {
  Breakfast: ["4am - 6am", "6am - 8am", "8am - 10am", "10am - 12pm"],
  Lunch: ["11am - 1pm", "12pm - 2pm", "1pm - 3pm", "2pm - 4pm"],
  Dinner: ["4pm - 6pm", "6pm - 8pm", "8pm - 10pm", "10pm - 12am"],
};

const ApproxTimeDropdowns = ({
  selectedTimes,
  setSelectedTimes,
  onFallbackToOpenNow,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const toggleTimeOption = (label, time) => {
    const identifier = `${label}:${time}`;
    setSelectedTimes((prev) => {
      const updated = prev.includes(identifier)
        ? prev.filter((t) => t !== identifier)
        : [...prev, identifier];

      if (updated.length === 0) {
        onFallbackToOpenNow?.();
      }

      return updated;
    });
  };

  const renderDropdown = (label, timeRanges) => {
    const isOpen = openDropdown === label;
    const selected = selectedTimes.includes(`${label}:${timeRanges[0]}`); // Just to trigger style if any selected

    return (
      <Animated.View
        key={label}
        layout={Layout.springify().mass(2).damping(20).stiffness(120)}
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.dropdownSection}
      >
        <TouchableOpacity
          onPress={() => toggleDropdown(label)}
          style={styles.dropdownHeader}
        >
          <Text style={styles.dropdownLabel}>
            {label.toUpperCase()} {isOpen ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>

        {isOpen && (
          <Animated.View
            entering={FadeIn.duration(500)}
            style={styles.optionsGrid}
          >
            {timeRanges.map((time) => {
              const identifier = `${label}:${time}`;
              const selected = selectedTimes.includes(identifier);
              return (
                <TouchableOpacity
                  key={time}
                  onPress={() => toggleTimeOption(label, time)}
                  style={[styles.timeOption, selected && styles.selectedOption]}
                >
                  <Text
                    style={[
                      styles.timeOptionText,
                      selected && styles.selectedOptionText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const dropdownOrder = openDropdown
    ? [
        openDropdown,
        ...Object.keys(TIME_BLOCKS).filter((k) => k !== openDropdown),
      ]
    : Object.keys(TIME_BLOCKS);

  return (
    <View style={styles.container}>
      {dropdownOrder.map((label) => {
        // If a dropdown is open, only show it
        if (openDropdown && openDropdown !== label) return null;
        return renderDropdown(label, TIME_BLOCKS[label]);
      })}
    </View>
  );
};

export default ApproxTimeDropdowns;
