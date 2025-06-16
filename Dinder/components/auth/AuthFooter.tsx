import React from 'react';
import { Pressable, Text, View } from 'react-native';
import GlobalStyles from '../../styles/Global';
import styles from '../../styles/LoginSignUpStyles';

const AuthFooter = () => (
	<View style={styles.rememberMeForget}>
		<Pressable onPress={() => {}}>
			<Text style={[GlobalStyles.subText, styles.rememberMe]}>
				REMEMBER ME
			</Text>
		</Pressable>
		<Pressable onPress={() => {}}>
			<Text style={[GlobalStyles.subText, styles.forgotPassword]}>
				FORGOT PASSWORD?
			</Text>
		</Pressable>
	</View>
);

export default AuthFooter;
