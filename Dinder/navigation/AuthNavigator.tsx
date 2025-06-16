import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen from '../screens/AuthScreen'; // renamed from LoginScreen
import FriendsAndGroups from '../screens/FriendsAndGroups';
import HomeScreen from '../screens/HomeScreen';
import LikesScreen from '../screens/LikesScreen';
import MoreInformation from '../screens/MoreInformation';
import Profile from '../screens/Profile';
import RestaurantInfo from '../screens/RestaurantInfo';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Auth" component={AuthScreen} />
		<Stack.Screen name="MoreInformation" component={MoreInformation} />
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Likes" component={LikesScreen} />
		<Stack.Screen name="Profile" component={Profile} />
		<Stack.Screen name="Social" component={FriendsAndGroups} />
		<Stack.Screen name="RestInfo" component={RestaurantInfo}/>
	</Stack.Navigator>
);

export default AuthNavigator;
