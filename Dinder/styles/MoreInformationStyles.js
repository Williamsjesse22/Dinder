import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	main: {
		overflowX: 'hidden',
	},

	redlogo1Icon: {
		width: Dimensions.get('window').width * 0.6,
		height: Dimensions.get('window').height * 0.25,
		marginTop: Dimensions.get('window').height * 0.06,
		marginBottom: Dimensions.get('window').height * 0.025,
		alignSelf: 'center',
		resizeMode: 'contain',
	},
	tellUsMore: {
		textAlign: 'center',
		color: '#f33534',
		marginBottom: Dimensions.get('window').height * 0.025,
	},
	TellUsMoreSubHeader: {
		color: '#f33534',
		marginLeft: Dimensions.get('window').width * 0.125,
		marginBottom: Dimensions.get('window').height * 0.005,
	},
	DropdownTextbox: {
		marginLeft: Dimensions.get('window').width * 0.125,
		marginBottom: Dimensions.get('window').height * 0.02,
	},
	singleCheckbox: {
		marginLeft: Dimensions.get('window').width * 0.125,
		marginBottom: Dimensions.get('window').height * 0.01,
	},

	checkboxLabelCombo: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},

	CheckBoxText: {
		color: '#000',
	},
	checkedBox: {
		backgroundColor: '#f99a99',
		opacity: 50,
	},
	textFlexBox: {
		width: Dimensions.get('window').width * 0.3,
		height: Dimensions.get('window').height * 0.06,
		marginRight: Dimensions.get('window').width * 0.0625,
        marginBottom: Dimensions.get('window').height * 0.01,
		borderRadius: 15,
		backgroundColor: '#f33534',
		justifyContent: 'center', // vertical center
		alignItems: 'center', // horizontal center
		alignSelf: 'flex-end', // push to the right
	},

	submit: {
        color: '#fff',
		fontSize: 32,
		textAlign: 'center',
	},
});
export default styles;
