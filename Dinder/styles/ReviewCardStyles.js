import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#FFF',
		borderRadius: 15,
		padding: 16,
		marginVertical: Dimensions.get('window').height * 0.01,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 4,
	},
	title: {
		fontSize: 40,
		color: '#F33534',
	},
	name: {
		marginTop: Dimensions.get('window').height * - 0.025,
		fontSize: 28,
	},
	order: {
		marginBottom: Dimensions.get('window').height * 0.025,
	},
	reviewText: {
		fontSize: 30,
	},
});

export default styles;