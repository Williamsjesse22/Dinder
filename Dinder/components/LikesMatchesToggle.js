import { Pressable, Text, View, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";
import styles from "../styles/LikesMatchesToggleStyles";

const { width } = Dimensions.get("window");

const LikesMatchesToggle = ({ selected, onSelect }) => {
  const toggleAnim = useRef(new Animated.Value(0)).current;
  const CONTAINER_WIDTH = width * 0.65;

  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: selected === "Likes" ? -(CONTAINER_WIDTH / 4) : CONTAINER_WIDTH / 4,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedHighlight,
            { transform: [{ translateX: toggleAnim }] },
          ]}
        />
        <Pressable
          style={[styles.toggleButton, styles.rightRounded]}
          onPress={() => onSelect("Likes")}
        >
          <Text
            style={[
              styles.toggleText,
              selected === "Likes" ? styles.activeText : styles.inactiveText,
            ]}
          >
            LIKES
          </Text>
        </Pressable>
        <Pressable
          style={[styles.toggleButton, styles.leftRounded]}
          onPress={() => onSelect("Matches")}
        >
          <Text
            style={[
              styles.toggleText,
              selected === "Matches" ? styles.activeText : styles.inactiveText,
            ]}
          >
            MATCHES
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LikesMatchesToggle;
