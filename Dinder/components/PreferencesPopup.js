// src/components/PreferencesPopup.js
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import preferencesData from '../assets/data/preferencesData.json';
import closeX from '../assets/images/closeX.png';
import magnifyingGlass from '../assets/images/magnifyingGlass.png';
import Dropdown from '../components/Dropdown';
import SliderDropdown from '../components/SliderDropdown';
import styles from '../styles/PreferencesPopupStyles';

const PreferencesPopup = ({ visible, onClose }) => {
	
	const [showLocationSlider, setShowLocationSlider] = useState(false);
	const [showWaitTimeSlider, setShowWaitTimeSlider] = useState(false);
	const [locationValue, setLocationValue] = useState(10);
	const [waitTimeValue, setWaitTimeValue] = useState(15);
	
	if (!visible) return null;
	return (
		<View style={StyleSheet.absoluteFill} pointerEvents="box-none">
			<BlurView
				intensity={100}
				tint="dark"
				style={[StyleSheet.absoluteFill, { zIndex: 1000 }]}
			/>
			<View style={[styles.popupWrapper]}>
				<View style={styles.popupWindow}>
					<Pressable style={styles.closeButton} onPress={onClose}>
						<Image source={closeX} />
					</Pressable>

					<View style={styles.overlay}>
						<View style={styles.searchBar}>
							<Image
								source={magnifyingGlass}
								style={styles.magnifyingGlass}
							/>
						</View>

						<View style={styles.dropdownContainer}>
							<Dropdown
								label="PRICE"
								options={preferencesData.price}
							/>
							<Dropdown
								label="CUISINE"
								options={preferencesData.cuisine}
							/>
							<SliderDropdown
								label="LOCATION"
								min={0}
								max={100}
								unit="mi"
								value={locationValue}
								onValueChange={setLocationValue}
								isOpen={showLocationSlider}
								onToggle={() =>
									setShowLocationSlider((prev) => !prev)
								}
							/>
							<SliderDropdown
								label="WAIT TIME"
								min={0}
								max={120}
								unit="min"
								value={waitTimeValue}
								onValueChange={setWaitTimeValue}
								isOpen={showWaitTimeSlider}
								onToggle={() =>
									setShowWaitTimeSlider((prev) => !prev)
								}
							/>
							<Dropdown
								label="DINING STYLE"
								options={preferencesData.diningStyle}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PreferencesPopup;
