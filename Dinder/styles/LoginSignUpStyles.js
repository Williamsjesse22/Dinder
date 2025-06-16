import { Dimensions, StyleSheet } from 'react-native';
const LSUStyles = StyleSheet.create({
	main: {
		backgroundColor: '#f33534',
		flex: 1,
		overflowX: 'hidden',
		display: 'flex',
	},
	LoginLogo: {
		width: Dimensions.get('window').width * 0.6,
		height: Dimensions.get('window').height * 0.25,
		marginTop: Dimensions.get('window').height * 0.06,
		marginBottom: Dimensions.get('window').height * 0.025,
		alignSelf: 'center',
		resizeMode: 'contain',
	},
	dinder: {
		color: '#fff',
		textAlign: 'center',
	},
	loginButtons: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	loginButtonsSubText: {
		color: '#fff',
		marginTop: 20,
		marginBottom: 10,
	},
    loginSignUpButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 40,
        gap: 40,
    },
	loginSignUpButtons: {
		height: Dimensions.get('window').height * 0.06,
		width: Dimensions.get('window').width * 0.3,
		borderRadius: 15,
        justifyContent: 'center',
		backgroundColor: 'white',
	},
	groupItemLayout1: {
		width: 14,
		borderRadius: 3,
	},
	ActiveButton: {
		backgroundColor: '#fff',
        alignItems: 'center',
	},
	InactiveButton: {
		alignItems: 'center',
		borderWidth: 3,
		borderColor: '#fff',
		backgroundColor: 'transparent',

	},
	inactiveText: {
		color: '#fff',
	},

	activeText: {
		color: '#000',
	},

	rememberMeForget: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: '#fff',
	},

	rememberMe: {
		color: '#fff',
		marginTop: -20,
	},

	forgotPassword: {
		color: '#fff',
		marginTop: 5,
	}
});

export default LSUStyles;
