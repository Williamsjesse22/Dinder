// src/styles/RestaurantPreviewStyles.js
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: width * 0.125,
		paddingTop: 10,
	},

	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},

	imageContainer: {
		height: height * 0.25,
		overflow: 'hidden',
		borderRadius: 15,
		marginBottom: 10,
	},

	image: {
		width: '100%',
		height: height * 0.5,
		resizeMode: 'cover',
		transform: [{ translateY: -height * 0.125 }],
	},

	descriptorList: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 4,
		justifyContent: 'flex-end',
		marginVertical: Dimensions.get('window').width * 0.025,
	},
	descriptor: {
		backgroundColor: '#F33534',
		borderRadius: 20,
		paddingHorizontal: 12,
		paddingVertical: 8,
		alignSelf: 'center',
	},

	descriptorText: {
		color: 'white',
		textAlign: 'center',
	},

	// DescriptorBar and InfoBadge styling are handled in their respective style files
});

export default styles;
