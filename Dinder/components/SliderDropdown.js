// src/components/SliderDropdown.js
import Slider from '@react-native-community/slider';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles/PreferencesPopupStyles';

const SliderDropdown = ({
	label,
	min,
	max,
	value,
	onValueChange,
	unit,
	isOpen,
	onToggle,
}) => {
	return (
		<View style={styles.dropdownContainer}>
			<Pressable
				onPress={onToggle}
				style={[styles.dropdown, isOpen && styles.dropdownOpen]}>
				<Text style={styles.dropdownText}>{label}</Text>
				<Text style={styles.dropdownText}>▼</Text>
			</Pressable>

			{isOpen && (
				<View style={styles.optionContainer}>
					<View style={styles.fakeTrack} />
					<Slider
						style={styles.slider}
						minimumValue={min}
						maximumValue={max}
						value={value}
						onValueChange={onValueChange}
						minimumTrackTintColor="transparent"
						maximumTrackTintColor="transparent"
						thumbTintColor="#F33934"
					/>
					<Text style={styles.sliderValue}>
						{Math.round(value)} {unit}
					</Text>
				</View>
			)}
		</View>
	);
};

export default SliderDropdown;
