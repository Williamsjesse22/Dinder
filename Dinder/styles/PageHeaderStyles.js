// src/styles/PageHeaderStyles.js
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#F33534',
		overflow: 'hidden',
	},

	headerContent: {
        justifyContent:	 'center',
        alignItems: 'center',
	},

    title: {
        marginTop: Dimensions.get('window').height * 0.04,
        color: '#FFF',
        justifyContent: 'center',
        textAlign: 'center',
    },

	spikeRow: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: 'transparent',
	},

	spike: {
        marginTop: -10,
		width: 30,
		height: 30,
	},
});

export default styles;
