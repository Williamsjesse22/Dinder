import { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from '../styles/PreferencesPopupStyles';

const Dropdown = ({ label, options = [], onSelect = () => {} }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	const toggleDropdown = () => setOpen(!open);

	const handleSelect = (option) => {
		setSelected(option);
		onSelect(option);
		setOpen(false);
	};

	return (
		<View style={styles.dropdownContainer}>
			<Pressable
				style={[styles.dropdown, open && styles.dropdownOpen]}
				onPress={toggleDropdown}>
				<Text style={styles.dropdownText}>{label}</Text>
				<Text style={styles.dropdownText}>▼</Text>
			</Pressable>
			{open && (
				<View style={styles.dropdownOptionContainer}>
					<FlatList
						data={options}
						keyExtractor={(item) => item}
						renderItem={({ item }) => (
							<Pressable
								style={styles.option}
								onPress={() => handleSelect(item)}>
								<Text style={styles.optionText}>{item}</Text>
							</Pressable>
						)}
						ItemSeparatorComponent={() => (
							<View style={styles.separator} />
						)}
					/>
				</View>
			)}
		</View>
	);
};

export default Dropdown;
