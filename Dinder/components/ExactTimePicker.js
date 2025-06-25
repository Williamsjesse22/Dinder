import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "../styles/ExactTimePickerStyles";

const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

const minutes = ["00", "15", "30", "45"];

const ITEM_HEIGHT = Dimensions.get("window").height * 0.075;

const ExactTimePicker = ({
  selectedHour,
  setSelectedHour,
  selectedMinute,
  setSelectedMinute,
  selectedMeridiem,
  setSelectedMeridiem,
}) => {
  const scrollHourRef = useRef();
  const scrollMinuteRef = useRef();

  const scrollToIndex = (ref, index) => {
    ref.current?.scrollTo({ y: index * ITEM_HEIGHT, animated: true });
  };

  const handleScrollEnd = (event, data, setSelected, ref) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    setSelected(data[index]);
    scrollToIndex(ref, index);
  };

  const renderPickerColumn = (
    data,
    selectedValue,
    setSelectedValue,
    scrollRef,
    changeFn
  ) => (
    <View style={styles.pickerColumn}>
      <TouchableOpacity
        onPress={() => changeFn("up")}
        style={styles.arrowButton}
      >
        <Text style={[styles.arrow, { fontSize: 30 }]}>▲</Text>
      </TouchableOpacity>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={(e) =>
          handleScrollEnd(e, data, setSelectedValue, scrollRef)
        }
      >
        {data.map((val) => (
          <TouchableOpacity
            key={val}
            onPress={() => setSelectedValue(val)}
            style={styles.timeOption}
          >
            <Text style={[styles.timeText, val === selectedValue]}>{val}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => changeFn("down")}
        style={styles.arrowButton}
      >
        <Text style={[styles.arrow, { fontSize: 30 }]}>▼</Text>
      </TouchableOpacity>
    </View>
  );

  const changeHour = (direction) => {
    const currentIndex = hours.indexOf(selectedHour);
    const newIndex =
      direction === "up"
        ? (currentIndex - 1 + hours.length) % hours.length
        : (currentIndex + 1) % hours.length;
    setSelectedHour(hours[newIndex]);
    scrollToIndex(scrollHourRef, newIndex);
  };

  const changeMinute = (direction) => {
    const currentIndex = minutes.indexOf(selectedMinute);
    const newIndex =
      direction === "up"
        ? (currentIndex - 1 + minutes.length) % minutes.length
        : (currentIndex + 1) % minutes.length;
    setSelectedMinute(minutes[newIndex]);
    scrollToIndex(scrollMinuteRef, newIndex);
  };

  useEffect(() => {
    scrollToIndex(scrollHourRef, hours.indexOf(selectedHour));
    scrollToIndex(scrollMinuteRef, minutes.indexOf(selectedMinute));
  }, []);

  return (
    <View style={styles.container}>
      {renderPickerColumn(
        hours,
        selectedHour,
        setSelectedHour,
        scrollHourRef,
        changeHour
      )}
      <Text style={styles.colon}>:</Text>
      {renderPickerColumn(
        minutes,
        selectedMinute,
        setSelectedMinute,
        scrollMinuteRef,
        changeMinute
      )}
      <View style={styles.meridiemToggle}>
        {["AM", "PM"].map((meridiem) => (
          <TouchableOpacity
            key={meridiem}
            onPress={() => setSelectedMeridiem(meridiem)}
            style={[
              styles.meridiemButton,
              selectedMeridiem === meridiem && styles.selectedMeridiemButton,
            ]}
          >
            <Text
              style={[
                styles.meridiemText,
                selectedMeridiem === meridiem && styles.selectedMeridiemText,
              ]}
            >
              {meridiem}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ExactTimePicker;
