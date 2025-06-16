// src/styles/PreferencesPopupStyles.js
import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	popupWindow: {
		display: 'flex',
		backgroundColor: 'transparent',
		width: width * 0.85,
		height: height * 0.6,
	},

	blurContainer: {
		flex: 1,
		position: 'relative',
	},

	blurBackground: {
		...StyleSheet.absoluteFillObject, // fills the entire screen
		zIndex: -1,
	},

	popupWrapper: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1001,
	},

	overlay: {
		width: '80%',
		alignSelf: 'center',
		padding: 20,
		backgroundColor: '#F33534',
		borderRadius: 15,
	},

	closeButton: {
		alignItems: 'flex-end',
	},

	searchBar: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		height: height * 0.06,
		borderRadius: 15,
		marginBottom: height * 0.025,
	},

	magnifyingGlass: {
		marginHorizontal: 15,
	},

	dropdownContainer: {
		gap: 15,
	},

	dropdown: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: height * 0.05,
		backgroundColor: '#FFF',
		borderRadius: 15,
	},

	dropdownText: {
		marginHorizontal: 15,
		alignSelf: 'center',
		textAlign: 'left',
		color: '#F33534',
		fontSize: 25,
	},
});

export default styles;
