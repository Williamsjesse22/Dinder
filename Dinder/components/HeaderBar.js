import { Image, Pressable, Text, View } from 'react-native';
import dropdownIcon from '../assets/images/dropdownIcon.png';
import locationIcon from '../assets/images/locationIcon.png';
import GlobalStyles from '../styles/Global';
import styles from '../styles/HomeScreenStyles';

const HeaderBar = () => (
	<View style={styles.groupHeading}>
		<View style={styles.locationGroup}>
			<Image source={require=locationIcon}/>
			<Text style={[styles.locationText, GlobalStyles.subText]}>
				Ames, IA
			</Text>
		</View>
		<Pressable style={styles.groupDropdown}>
			<Text style={[GlobalStyles.subHeading, styles.groupText]}>Book Club</Text>
			<Image source={require=dropdownIcon} style={styles.dropdownIcon}/>
		</Pressable>
	</View>
);

export default HeaderBar;
