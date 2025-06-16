// src/screens/AuthScreen.tsx
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthBaseFields from '../components/auth/AuthBaseFields';
import AuthExtraFields from '../components/auth/AuthExtraFields';
import AuthFooter from '../components/auth/AuthFooter';
import AuthHeader from '../components/auth/AuthHeader';
import AuthToggleButtons from '../components/auth/AuthToggleButtons';
import GlobalStyles from '../styles/Global';
import styles from '../styles/LoginSignUpStyles';

const AuthScreen = () => {
	const [isLogin, setIsLogin] = useState(true);

	const handleToggle = (target: 'login' | 'signup') => {
		setIsLogin(target === 'login');
	};

	return (
		<SafeAreaView style={[styles.main, GlobalStyles.mainNecessary]}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<AuthHeader />
							<AuthBaseFields />

							<AnimatePresence>
								{!isLogin && (
									<MotiView
										from={{ opacity: 0, translateY: -10 }}
										animate={{ opacity: 1, translateY: 0 }}
										exit={{ opacity: 0, translateY: -10 }}
										transition={{
											type: 'timing',
											duration: 300,
										}}>
										<AuthExtraFields />
									</MotiView>
								)}
							</AnimatePresence>

							<MotiView
								from={{
									translateY: isLogin ? -20 : 20,
									opacity: 0,
								}}
								animate={{ translateY: 0, opacity: 1 }}
								transition={{ type: 'timing', duration: 300 }}
								key={
									isLogin ? 'loginButtons' : 'signupButtons'
								}>
								<AuthToggleButtons
									isLogin={isLogin}
									onToggle={handleToggle}
								/>
							</MotiView>

							<AuthFooter />
						</View>
					</ScrollView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default AuthScreen;
