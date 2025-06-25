import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Pressable,
  Dimensions,
  Text,
} from "react-native";
import styles from "../styles/GroupScrollerStyles";
import ScrollButton from "../assets/images/ScrollButton.png";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.25 + 10;

const GroupScroller = ({ groupsData, onPressGroup }) => {
  const flatListRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const navigation = useNavigation();

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const handleScroll = (direction) => {
    const newIndex =
      direction === "left"
        ? Math.max(startIndex - 1, 0)
        : Math.min(startIndex + 1, groupsData.length - 3);

    setStartIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      {groupsData.length > 3 && (
        <Pressable onPress={() => handleScroll("left")}>
          <Image source={ScrollButton} style={styles.leftArrow} />
        </Pressable>
      )}

      <View style={styles.imageClipper}>
        <FlatList
          ref={flatListRef}
          data={groupsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.animatedRow}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => (
            <Animated.View
              entering={FadeIn.duration(250)}
              style={styles.groupItem}
            >
              <Pressable
                onPress={() => {
                  if (onPressGroup) {
                    onPressGroup(item);
                  } else {
                    navigation.navigate("GroupProfile", {
                      name: item.name,
                      image: item.image,
                      members: item.members,
                    });
                  }
                }}
                style={{ alignItems: "center" }}
              >
                <Image
                  source={item.image}
                  style={styles.groupImage}
                  resizeMode="cover"
                />
                <Text style={styles.groupName}>{item.name}</Text>
              </Pressable>
            </Animated.View>
          )}
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
          initialScrollIndex={startIndex}
          pagingEnabled={false}
        />
      </View>

      {groupsData.length > 3 && (
        <Pressable onPress={() => handleScroll("right")}>
          <Image
            source={ScrollButton}
            style={[styles.rightArrow, { transform: [{ rotate: "180deg" }] }]}
          />
        </Pressable>
      )}
    </View>
  );
};

export default GroupScroller;
