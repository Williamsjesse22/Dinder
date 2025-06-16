import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		overflowX: 'hidden',
		display: 'flex',
	},

	groupHeading: {
		// marginTop: Dimensions.get('window').height * 0.025,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: Dimensions.get('window').height * 0.025,
		paddingBottom: Dimensions.get('window').height * 0.01,
	},

	locationGroup: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},

	locationText: {},

	groupDropdown: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#F33534',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: Dimensions.get('window').width * 0.03,
		paddingVertical: Dimensions.get('window').width * 0.01,
		gap: 5,
	},

	groupText: {
		color: '#FFF',
	},

	dropdownIcon: {},

	title: {
		display: 'flex',
		// textAlign: 'center',
		marginLeft: Dimensions.get('window').width * 0.125,
	},

	image: {
		height: Dimensions.get('window').height * 0.5,
		width: Dimensions.get('window').width * 0.75,
		borderRadius: 20,
		alignSelf: 'center',
	},

	card: {
		borderRadius: 20,
		overflow: 'hidden',
		alignItems: 'center',
		padding: 10,
	},

	feedbackIcon: {
		position: 'absolute',
		top: '40%',
		width: '30%',
		aspectRatio: 1,
		resizeMode: 'contain',
		zIndex: 50,
	},

	descriptorList: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		marginTop: Dimensions.get('window').width * 0.025,
		alignItems: 'center',
		justifyContent: 'center',
	},

	descriptor: {
		backgroundColor: '#F33534',
		borderRadius: 20,
		paddingHorizontal: 12,
		paddingVertical: 8,
		alignSelf: 'center',
		marginRight: Dimensions.get('window').width * 0.025,
	},

	descriptorText: {
		color: 'white',
		textAlign: 'center',
	},

	PreferencesReviews: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
	},

	preferenceButton: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#000',
		borderWidth: 2,
		borderRadius: 10,
	},

	preferencesWord: {
		paddingLeft: Dimensions.get('window').width * 0.05,
		paddingRight: Dimensions.get('window').width * 0.01,
		// paddingTop: Dimensions.get('window').height * 0.001,
		paddingBottom: Dimensions.get('window').height * 0.003,
	},

	editIcon: {
		resizeMode: 'contain',
		paddingRight: Dimensions.get('window').width * 0.075,
	},

});

export default styles;
