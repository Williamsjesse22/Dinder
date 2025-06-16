// src/styles/BottomNavBarStyles.js
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	navBar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: Dimensions.get('window').height * 0.1,
		backgroundColor: '#F33534',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		zIndex: 999, // keeps it above other content
	},

	iconWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	icon: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		// borderColor: 'green',
		// borderWidth: 1,
	},

	home: {},

	likes: {
		marginTop: 4,
		maxHeight: 35
	},

	centerLogo: {
		height: 45,
		width: 45,
		resizeMode: 'contain',
		marginBottom: 7
	},

	profile: {
		marginTop: 4,
		maxHeight: 35
	},

	social: {},
});

export default styles;
