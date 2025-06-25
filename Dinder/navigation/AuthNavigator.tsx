import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthScreen from "../screens/AuthScreen"; // renamed from LoginScreen
import FriendsAndGroups from "../screens/FriendsAndGroups";
import HomeScreen from "../screens/HomeScreen";
import LikesScreen from "../screens/LikesScreen";
import MoreInformation from "../screens/MoreInformation";
import RestaurantInfo from "../screens/RestaurantInfo";
import UserProfile from "@/screens/UserProfile";
import GroupProfile from "@/screens/GroupProfile";
import SearchFriends from "@/screens/SearchFriends";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: "fade", // 🪄 try "slide_from_bottom" or "simple_push" too!
    }}
  >
    <Stack.Screen name="Auth" component={AuthScreen} />
    <Stack.Screen name="MoreInformation" component={MoreInformation} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Likes" component={LikesScreen} />
    <Stack.Screen name="Profile" component={UserProfile} />
    <Stack.Screen name="Social" component={FriendsAndGroups} />
    <Stack.Screen name="RestInfo" component={RestaurantInfo} />
    <Stack.Screen name="GroupProfile" component={GroupProfile} />
    <Stack.Screen name="SearchFriends" component={SearchFriends} />
  </Stack.Navigator>
);

export default AuthNavigator;
