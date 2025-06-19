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
		marginTop: height * -0.15,
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
		marginBottom: 15,
	},

	dropdown: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: height * 0.05,
		backgroundColor: '#FFF',
		borderRadius: 15,
	},

	dropdownOpen: {
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},

	dropdownText: {
		marginHorizontal: 15,
		alignSelf: 'center',
		textAlign: 'left',
		color: '#F33534',
		fontSize: 32,
		fontFamily: 'Roboto',
	},

	dropdownOptionContainer: {
		backgroundColor: '#f99a99',
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15,
	},

	optionText: {
		color: '#FFF',
		fontSize: 30,
		fontFamily: 'Roboto',
		marginLeft: width * 0.05,
		padding: 2,
	},

	optionContainer: {
		alignItems: 'center',
		backgroundColor: '#f99a99',
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15,
	},

	slider: {
		marginTop: height * 0.01,
		width: '90%',
		height: 12, // makes the track visually thicker
	},

	sliderValue: {
		color: '#FFF',
		fontSize: 24,
		marginTop: 5,
		textAlign: 'center',
	},

	fakeTrack: {
		marginTop: height * 0.01,
		position: 'absolute',
		width: '90%',
		height: 12,
		backgroundColor: '#FFF',
		borderRadius: 6,
	},

	separator: {
		height: 1,
		width: '90%',
		backgroundColor: '#FFF',
		alignSelf: 'center',
	},
});

export default styles;
