// src/components/BottomNavBar.js
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from '../styles/bottomNavBarStyles';

const BottomNavBar = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.navBar}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Home')}
				style={styles.iconWrapper}>
				<Image
					source={require('../assets/images/HomeIcon.png')}
					style={[styles.icon, styles.home]}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('Likes')}
				style={styles.iconWrapper}>
				<Image
					source={require('../assets/images/likesMatchesIcon.png')}
					style={[styles.icon, styles.likes]}
				/>
			</TouchableOpacity>
			<View style={styles.iconWrapper}>
				<Image
					source={require('../assets/images/LogoWhiteSmall.png')}
					style={styles.centerLogo}
				/>
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate('Profile')}
				style={styles.iconWrapper}>
				<Image
					source={require('../assets/images/profileIcon.png')}
					style={[styles.icon, styles.profile]}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('Social')}
				style={styles.iconWrapper}>
				<Image
					source={require('../assets/images/friendsGroupsIcon.png')}
					style={[styles.icon, styles.social]}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default BottomNavBar;
