import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/FriendsAndGroupsStyles";
import BottomNavBar from "@/components/bottomNavBar";
import magnifyingGlass from "../assets/images/magnifyingGlass.png";
import GroupScroller from "../components/GroupScroller";
import GlobalStyles from "@/styles/Global";
import PlusIcon from "../assets/images/PlusIcon.png";
import NewGroupPopup from "@/components/NewGroupPopup";
import data from "../assets/data/data.json";
import {
  getResolvedGroups,
  resolveMemberFromObject, // ✅ proper member mapper
} from "../utils/resolveGroupData";

const FriendsAndGroups = () => {
  const [search, setSearch] = useState("");
  const [showNewGroup, setShowNewGroup] = useState(false);
  const navigation = useNavigation();

  const groupsData = getResolvedGroups();
  const friendsData = data.members.map(resolveMemberFromObject); // ✅ hydrate members properly

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={[styles.friendsAndGroups, { flex: 1 }]}>
        <View style={styles.search}>
          <View style={styles.searchBarContainer}>
            <Image source={magnifyingGlass} style={styles.magnifyingGlass} />
            <TextInput
              style={styles.searchBar}
              placeholder="Search for friends..."
              placeholderTextColor="#999"
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>

        <View style={styles.TitlePlusAdd}>
          <Text style={[GlobalStyles.title, styles.titles]}>GROUPS</Text>
          <Pressable onPress={() => setShowNewGroup(true)}>
            <View style={styles.addButton}>
              <Image source={PlusIcon} style={styles.plusIcon} />
            </View>
          </Pressable>
        </View>

        <GroupScroller groupsData={groupsData} />

        <View style={styles.TitlePlusAdd}>
          <Text style={[GlobalStyles.title, styles.titles]}>FRIENDS</Text>
          <Pressable onPress={() => navigation.navigate("SearchFriends")}>
            <View style={styles.addButton}>
              <Image source={PlusIcon} style={styles.plusIcon} />
            </View>
          </Pressable>
        </View>

        <ScrollView
          style={styles.friendsList}
          contentContainerStyle={styles.friendsListContent}
        >
          {friendsData
            .filter((friend) => friend && friend.image)
            .map((friend, index) => (
              <Pressable
                key={index}
                style={styles.friendItem}
                onPress={() =>
                  navigation.navigate("Profile", {
                    name: friend.name,
                    image: friend.image,
                    dietary: friend.dietary,
                    accommodations: friend.accommodations,
                    isEditable: false,
                    showBackButton: true,
                  })
                }
              >
                <Image source={friend.image} style={styles.friendImage} />
                <Text style={styles.friendName}>{friend.name}</Text>
              </Pressable>
            ))}
        </ScrollView>
      </View>

      <NewGroupPopup
        visible={showNewGroup}
        onClose={() => setShowNewGroup(false)}
        onCreate={(name, members) => {
          navigation.navigate("GroupProfile", { name, members });
        }}
        friendsList={friendsData}
      />

      <BottomNavBar />
    </KeyboardAvoidingView>
  );
};

export default FriendsAndGroups;
