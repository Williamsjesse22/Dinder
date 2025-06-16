import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

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
    export default styles