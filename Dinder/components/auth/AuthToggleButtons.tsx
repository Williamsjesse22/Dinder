import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import GlobalStyles from '../../styles/Global';
import styles from '../../styles/LoginSignUpStyles';


type Props = {
	isLogin: boolean;
	onToggle: (target: 'login' | 'signup') => void;
};



const AuthToggleButtons: React.FC<Props> = ({ isLogin, onToggle }) => {
    const navigation = useNavigation();
	return (
		<View style={styles.loginSignUpButtonsContainer}>
			<Pressable
				style={[
					styles.loginSignUpButtons,
					!isLogin ? styles.ActiveButton : styles.InactiveButton,
				]}
				onPress={() => {
					if (!isLogin) {
						navigation.navigate('MoreInformation');
					} else {
						onToggle('signup');
					}
				}}>
				<Text
					style={[
						GlobalStyles.subText,
						!isLogin ? styles.activeText : styles.inactiveText,
					]}>
					SIGN UP
				</Text>
			</Pressable>
			<Pressable
				style={[
					styles.loginSignUpButtons,
					isLogin ? styles.ActiveButton : styles.InactiveButton,
				]}
				onPress={() => {
					if (!isLogin) {
						onToggle('login');
					} else {
						navigation.navigate('Home');
					}
				}}>
				<Text
					style={[
						GlobalStyles.subText,
						isLogin ? styles.activeText : styles.inactiveText,
					]}>
					LOGIN
				</Text>
			</Pressable>
		</View>
	);
};

export default AuthToggleButtons;
