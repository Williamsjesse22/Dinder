import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/DaySelectorStyles";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Today",
];

// Split into 4 rows of 2
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const DaySelector = ({ selectedDays, setSelectedDays }) => {
  useEffect(() => {
    if (selectedDays.length === 0) {
      setSelectedDays(["Today"]);
    }
  }, [selectedDays]);

  const toggleDay = (day) => {
    if (day === "Today") {
      setSelectedDays(["Today"]);
    } else {
      const updated = selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays.filter((d) => d !== "Today"), day];
      setSelectedDays(updated);
    }
  };

  return (
    <View style={styles.container}>
      {chunkArray(allDays, 2).map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((day) => (
            <TouchableOpacity
              key={day}
              onPress={() => toggleDay(day)}
              style={[
                styles.dayButton,
                selectedDays.includes(day) && styles.selectedDay,
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDays.includes(day) && styles.selectedText,
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default DaySelector;
