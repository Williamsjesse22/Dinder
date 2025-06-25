import { Dimensions, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	restInfo: {
		flex: 1,
		overflowX: 'hidden',
	},

    header: {
        color: '#F33534',
    },
	
	headerSection: {
		paddingHorizontal: Dimensions.get('window').width * 0.125,
		paddingTop: 20,
	},

	menuImageContainer: {
		height: Dimensions.get('window').height * 0.25,
		overflow: 'hidden',
		borderRadius: 15,
		marginTop: Dimensions.get('window').height * 0.01,
		marginBottom: Dimensions.get('window').height * 0.03,
	},

	menuImage: {
		width: '100%',
		height: Dimensions.get('window').height * 0.5,
		resizeMode: 'cover',
		transform: [{ translateY: -Dimensions.get('window').height * 0.125 }],
	},
});

export default styles;
