// src/components/CheckboxWithLabel.tsx
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import GlobalStyles from '../styles/Global';
import styles from '../styles/MoreInformationStyles';

interface Props {
	label: string;
	selected: boolean;
	onPress: () => void;
}

const CheckboxWithLabel: React.FC<Props> = ({ label, selected, onPress }) => {
	return (
		<View style={styles.checkboxLabelCombo}>
			<Pressable
				onPress={onPress}
				style={[
					GlobalStyles.ColorlessCheckbox,
					styles.singleCheckbox,
					selected && styles.checkedBox,
				]}
			/>
			<Text style={[GlobalStyles.subText, styles.CheckBoxText]}>
				{label}
			</Text>
		</View>
	);
};

export default CheckboxWithLabel;
