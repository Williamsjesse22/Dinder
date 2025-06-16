// src/components/auth/AuthBaseFields.tsx
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import GlobalStyles from '../../styles/Global';
import styles from '../../styles/LoginSignUpStyles';

const AuthBaseFields = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.loginButtons}>
			<View>
				<Text
					style={[
						GlobalStyles.subHeading,
						styles.loginButtonsSubText,
					]}>
					EMAIL
				</Text>
				<TextInput
					style={[
						GlobalStyles.textbox,
						{ fontFamily: 'VinaSans_400Regular' },
					]}
					placeholder="Enter your email"
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<View>
				<Text
					style={[
						GlobalStyles.subHeading,
						styles.loginButtonsSubText,
					]}>
					PASSWORD
				</Text>
				<TextInput
					style={[
						GlobalStyles.textbox,
						{ fontFamily: 'VinaSans_400Regular' },
					]}
					placeholder="Enter your password"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>
		</View>
	);
};

export default AuthBaseFields;
