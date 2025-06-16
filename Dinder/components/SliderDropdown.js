// src/components/SliderDropdown.js
import Slider from '@react-native-community/slider';
import { Text, View } from 'react-native';
import styles from '../styles/PreferencesPopupStyles';

const SliderDropdown = ({ label, min, max, value, onValueChange, unit }) => {
	return (
		<View style={styles.dropdown}>
			<Text style={styles.dropdownText}>{label}</Text>
            <Text style={styles.dropdownText}>▼</Text>
			<View style={styles.sliderWrapper}>
				<Slider
					style={styles.slider}
					minimumValue={min}
					maximumValue={max}
					value={value}
					onValueChange={onValueChange}
					minimumTrackTintColor="#F33534"
					maximumTrackTintColor="#FFF"
					thumbTintColor="#F33534"
				/>
				<Text style={styles.sliderValue}>
					{Math.round(value)} {unit}
				</Text>
			</View>
		</View>
	);
};

export default SliderDropdown;
