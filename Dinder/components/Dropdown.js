// src/components/Dropdown.js
import { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from '../styles/DropdownStyles';

const Dropdown = ({ label, options = [], onSelect }) => {
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
			<Pressable style={styles.dropdown} onPress={toggleDropdown}>
				<Text style={styles.dropdownText}>{label}</Text>
				<Text style={styles.dropdownText}>▼</Text>
			</Pressable>
			{open && (
				<View style={styles.optionContainer}>
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
					/>
				</View>
			)}
		</View>
	);
};

export default Dropdown;
