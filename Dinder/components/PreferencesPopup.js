// src/components/PreferencesPopup.js
import { BlurView } from "expo-blur";
import { useState, useMemo } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import preferencesData from "../assets/data/preferencesData.json";
import closeX from "../assets/images/closeX.png";
import magnifyingGlass from "../assets/images/magnifyingGlass.png";
import Dropdown from "../components/Dropdown";
import SliderDropdown from "../components/SliderDropdown";
import styles from "../styles/PreferencesPopupStyles";

const PreferencesPopup = ({ visible, onClose }) => {
  const [locationValue, setLocationValue] = useState(100);
  const [waitTimeValue, setWaitTimeValue] = useState(120);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selections, setSelections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const updateSelection = (category, value) => {
    setSelections((prev) => {
      const updated = { ...prev };
      if (!updated[category]) updated[category] = [];

      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter((v) => v !== value);
        if (updated[category].length === 0) delete updated[category];
      } else {
        updated[category] = [...updated[category], value];
      }
      return updated;
    });
  };

  const clearAllSelections = () => {
    setSelections({});
    setLocationValue(null);
    setWaitTimeValue(null);
  };

  // Helper: chunk into two rows
  const chunkSelections = (arr, rows) => {
    const chunks = [];
    const chunkSize = Math.ceil(arr.length / rows);
    for (let i = 0; i < chunkSize; i++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        const index = i + r * chunkSize;
        if (arr[index]) col.push(arr[index]);
      }
      chunks.push(col);
    }
    return chunks;
  };

  const selectedValues = useMemo(() => {
    const all = [];

    Object.entries(selections).forEach(([key, values]) => {
      values.forEach((v) => all.push({ category: key, value: v }));
    });

    if (locationValue !== null && locationValue !== 100) {
      all.push({
        category: "location",
        value: `${Math.round(locationValue)} mi`,
      });
    }

    if (waitTimeValue !== null && waitTimeValue !== 120) {
      all.push({
        category: "waitTime",
        value: `${Math.round(waitTimeValue)} min`,
      });
    }

    return all;
  }, [selections, locationValue, waitTimeValue]);

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <Pressable
        onPress={onClose}
        style={[StyleSheet.absoluteFill, { zIndex: 1000 }]}
      >
        <BlurView intensity={100} tint="dark" style={StyleSheet.absoluteFill} />
      </Pressable>

      <Animated.View
        entering={ZoomIn}
        exiting={ZoomOut}
        style={styles.popupWrapper}
        pointerEvents="box-none"
      >
        <View style={styles.popupWindow}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Image source={closeX} />
          </Pressable>

          <View style={styles.overlay}>
            <View style={styles.searchBar}>
              <Image source={magnifyingGlass} style={styles.magnifyingGlass} />
              <TextInput
                placeholder="Search..."
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <View style={styles.selectionsContainer}>
              <View style={styles.selectionsContainer}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.twoRowScrollWrapper}
                >
                  {/** Group items into columns of two rows */}
                  {chunkSelections(selectedValues, 2).map(
                    (column, colIndex) => (
                      <View key={colIndex} style={styles.twoRowColumn}>
                        {column.map((item, rowIndex) => (
                          <View key={rowIndex} style={styles.selectionPill}>
                            <Text style={styles.selectionText}>
                              {item.value}
                            </Text>
                          </View>
                        ))}
                      </View>
                    )
                  )}
                </ScrollView>
              </View>
            </View>

            <View style={styles.dropdownContainer}>
              <Dropdown
                label="PRICE"
                options={preferencesData.price}
                isOpen={openDropdown === "price"}
                onToggle={() =>
                  setOpenDropdown((prev) => (prev === "price" ? null : "price"))
                }
                selectedValues={selections.price || []}
                onSelect={(val) => updateSelection("price", val)}
                searchQuery={searchQuery}
              />
              <Dropdown
                label="CUISINE"
                options={preferencesData.cuisine}
                isOpen={openDropdown === "cuisine"}
                onToggle={() =>
                  setOpenDropdown((prev) =>
                    prev === "cuisine" ? null : "cuisine"
                  )
                }
                selectedValues={selections.cuisine || []}
                onSelect={(val) => updateSelection("cuisine", val)}
                searchQuery={searchQuery}
              />
              <SliderDropdown
                label="LOCATION"
                min={0}
                max={100}
                unit="mi"
                value={locationValue}
                onValueChange={setLocationValue}
                isOpen={openDropdown === "location"}
                onToggle={() =>
                  setOpenDropdown((prev) =>
                    prev === "location" ? null : "location"
                  )
                }
              />
              <SliderDropdown
                label="WAIT TIME"
                min={0}
                max={120}
                unit="min"
                value={waitTimeValue}
                onValueChange={setWaitTimeValue}
                isOpen={openDropdown === "waitTime"}
                onToggle={() =>
                  setOpenDropdown((prev) =>
                    prev === "waitTime" ? null : "waitTime"
                  )
                }
              />
              <Dropdown
                label="DINING STYLE"
                options={preferencesData.diningStyle}
                isOpen={openDropdown === "diningStyle"}
                onToggle={() =>
                  setOpenDropdown((prev) =>
                    prev === "diningStyle" ? null : "diningStyle"
                  )
                }
                selectedValues={selections.diningStyle || []}
                onSelect={(val) => updateSelection("diningStyle", val)}
                searchQuery={searchQuery}
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default PreferencesPopup;
