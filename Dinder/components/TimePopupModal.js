import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import styles from "../styles/TimePopupModalStyles";
import GlobalStyles from "../styles/Global";
import DaySelector from "./DaySelector";
import ExactTimePicker from "./ExactTimePicker";
import ApproxTimeDropdowns from "./ApproxTimeDropdowns";
import closeX from "../assets/images/closeX.png";
import DualOptionToggle from "./LikesMatchesToggle";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";

const TimePopupModal = ({ visible, onClose, onConfirm }) => {
  const [selectedDays, setSelectedDays] = useState(["Today"]);
  const [useExact, setUseExact] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [isOpenNowSelected, setIsOpenNowSelected] = useState(true);
  const [selectedMeridiem, setSelectedMeridiem] = useState("AM");

  useEffect(() => {
    if (
      (useExact && (selectedHour !== "12" || selectedMinute !== "00")) ||
      (!useExact && selectedTimes.length > 0)
    ) {
      if (isOpenNowSelected) setIsOpenNowSelected(false);
    }
  }, [selectedHour, selectedMinute, selectedTimes, useExact]);

  const handleConfirm = () => {
    const result = {
      days: isOpenNowSelected ? ["Today"] : selectedDays,
      time: isOpenNowSelected
        ? "Open Now"
        : useExact
        ? `${selectedHour}:${selectedMinute} ${selectedMeridiem}`
        : selectedTimes,
    };
    onConfirm(result);
    onClose();
  };

  const handleOpenNowPress = () => {
    setIsOpenNowSelected(true);
    setSelectedTimes([]);
    setSelectedHour("12");
    setSelectedMinute("00");
  };

  const handleDayUpdate = (newDays) => {
    if (newDays.includes("Today") && newDays.length > 1) {
      setSelectedDays(newDays.filter((d) => d !== "Today"));
    } else {
      setSelectedDays(newDays);
    }
  };

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <Pressable
        onPress={handleConfirm}
        style={[StyleSheet.absoluteFill, { zIndex: 1000 }]}
      >
        <View style={styles.overlay} />
      </Pressable>
      <Pressable style={styles.floatingCloseButton} onPress={handleConfirm}>
        <Image source={closeX} />
      </Pressable>

      <Animated.View
        entering={ZoomIn.springify().mass(0.3)}
        exiting={ZoomOut.springify().mass(0.3)}
        style={styles.popupWrapper}
        pointerEvents="box-none"
      >
        <View style={styles.container}>
          <View style={styles.scrollWrapper}>
            <Text style={[GlobalStyles.title, styles.sectionTitle]}>
              SELECT DAY
            </Text>

            <DaySelector
              selectedDays={selectedDays}
              setSelectedDays={handleDayUpdate}
            />

            <Text
              style={[
                GlobalStyles.title,
                styles.sectionTitle,
                styles.SelectTime,
              ]}
            >
              SELECT TIME
            </Text>

            <DualOptionToggle
              leftLabel="EXACT"
              rightLabel="APPROX"
              leftRounded
              rightRounded
              selected={useExact ? "EXACT" : "APPROX"}
              onSelect={(val) => setUseExact(val === "EXACT")}
            />

            <View>
              {useExact ? (
                <ExactTimePicker
                  selectedHour={selectedHour}
                  setSelectedHour={setSelectedHour}
                  selectedMinute={selectedMinute}
                  setSelectedMinute={setSelectedMinute}
                  selectedMeridiem={selectedMeridiem}
                  setSelectedMeridiem={setSelectedMeridiem}
                />
              ) : (
                <ApproxTimeDropdowns
                  selectedTimes={selectedTimes}
                  setSelectedTimes={setSelectedTimes}
                  onFallbackToOpenNow={() => setIsOpenNowSelected(true)}
                />
              )}
              <TouchableOpacity
                onPress={handleOpenNowPress}
                style={[
                  styles.openNowButton,
                  isOpenNowSelected && styles.openNowButtonSelected,
                ]}
              >
                <Text
                  style={[
                    styles.openNowText,
                    isOpenNowSelected && styles.openNowTextSelected,
                  ]}
                >
                  OPEN NOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default TimePopupModal;
