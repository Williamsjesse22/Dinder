import React from 'react';
import { Image, Text, View } from 'react-native';
import GlobalStyles from '../../styles/Global';
import styles from '../../styles/LoginSignUpStyles';

const AuthHeader = () => (
	<View>
		<Image
			style={styles.LoginLogo}
			source={require('../../assets/images/LogoWhitex150.png')}
		/>
		<Text style={[GlobalStyles.header, styles.dinder]}>DINDER</Text>
	</View>
);

export default AuthHeader;
