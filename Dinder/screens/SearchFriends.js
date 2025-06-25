import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "../styles/FriendsAndGroupsStyles";
import magnifyingGlass from "../assets/images/magnifyingGlass.png";
import GlobalStyles from "@/styles/Global";
import backbutton from "../assets/images/backbutton.png";
import { useNavigation } from "@react-navigation/native";

const mockResults = [
  { id: 1, name: "SAMANTHA" },
  { id: 2, name: "SAMUEL101" },
  { id: 3, name: "SAMMY" },
  { id: 4, name: "SAM9990254" },
];

const SearchFriends = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const showDropdown = search.length > 0;

  const maxHeight = Dimensions.get("window").height * 0.3;
  const animatedHeight = useSharedValue(0);

  useEffect(() => {
    animatedHeight.value = withTiming(showDropdown ? maxHeight : 0, {
      duration: 200,
    });
  }, [showDropdown]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
    overflow: "hidden",
  }));

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButtonWrapper}
        >
          <Image source={backbutton} style={styles.backButton} />
        </Pressable>
        <Text style={[GlobalStyles.title, styles.addFriendsTitle]}>
          ADD FRIENDS
        </Text>
      </View>

      <View style={styles.searchWrapper}>
        <View style={styles.searchBarContainer}>
          <Image source={magnifyingGlass} style={styles.magnifyingGlass} />
          <TextInput
            style={styles.searchBar}
            placeholder="Enter Friend's Username"
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <Animated.View style={[styles.searchDropdown, animatedStyle]}>
          <FlatList
            data={mockResults.filter((r) =>
              r.name.toLowerCase().includes(search.toLowerCase())
            )}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>{item.name}</Text>
              </Pressable>
            )}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default SearchFriends;
