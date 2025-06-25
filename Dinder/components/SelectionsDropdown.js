// src/components/SelectionsDropdown.js
import React from "react";
import { Text, View, Pressable, FlatList } from "react-native";
import styles from "../styles/SelectionsDropdownStyles";
import checkmark from "../assets/images/Checkmark.png";
import { Image } from "react-native";

const SelectionsDropdown = ({
  isOpen,
  onToggle,
  selectedOptions,
  sliderValues,
  onRemove,
  onClearAll,
}) => {
  const hasSelections =
    Object.values(selectedOptions).some((arr) => arr.length > 0) ||
    sliderValues.location !== 10 ||
    sliderValues.waitTime !== 15;

  const renderPill = (category, value) => (
    <View key={`${category}-${value}`} style={styles.selectionPill}>
      <Text style={styles.pillText}>{value}</Text>
      <Image source={checkmark} style={styles.pillCheckmark} />
      <Pressable onPress={() => onRemove(category, value)}>
        <Text style={styles.pillRemove}>✕</Text>
      </Pressable>
    </View>
  );

  return (
    hasSelections && (
      <View style={styles.dropdownContainer}>
        <Pressable onPress={onToggle} style={styles.dropdownHeader}>
          <Text style={styles.dropdownTitle}>PREFERENCES</Text>
          <Text style={styles.dropdownArrow}>{isOpen ? "▲" : "▼"}</Text>
        </Pressable>

        {isOpen && (
          <View style={styles.selectionList}>
            {Object.entries(selectedOptions).map(([category, values]) =>
              values.map((value) => renderPill(category, value))
            )}
            <View style={styles.selectionPill}>
              <Text style={styles.pillText}>
                Location: {sliderValues.location} mi
              </Text>
              <Image source={checkmark} style={styles.pillCheckmark} />
            </View>
            <View style={styles.selectionPill}>
              <Text style={styles.pillText}>
                Wait Time: {sliderValues.waitTime} min
              </Text>
              <Image source={checkmark} style={styles.pillCheckmark} />
            </View>
            <Pressable onPress={onClearAll} style={styles.clearAllButton}>
              <Text style={styles.clearAllText}>Clear All</Text>
            </Pressable>
          </View>
        )}
      </View>
    )
  );
};

export default SelectionsDropdown;
