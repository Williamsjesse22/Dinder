// src/components/auth/AuthExtraFields.tsx
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import GlobalStyles from '../../styles/Global';
import styles from '../../styles/LoginSignUpStyles';

const AuthExtraFields = () => {
	const [confirm, setConfirm] = useState('');

	return (
		<View style={styles.loginButtons}>
			<View>
				<Text
					style={[
						GlobalStyles.subHeading,
						styles.loginButtonsSubText,
					]}>
					CONFIRM PASSWORD
				</Text>
				<TextInput
					style={[
						GlobalStyles.textbox,
						{ fontFamily: 'VinaSans_400Regular' },
					]}
					placeholder="Confirm your password"
					secureTextEntry
					value={confirm}
					onChangeText={setConfirm}
				/>
			</View>
		</View>
	);
};

export default AuthExtraFields;
