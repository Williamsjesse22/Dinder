import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
	return (
		<SafeAreaView style={styles.iphone16Pro32}>
			<Text style={[styles.dinder, styles.textFlexBox]}>DINDER</Text>
			<View style={[styles.iphone16Pro32Child, styles.iphone16Layout]} />
			<View style={[styles.iphone16Pro32Item, styles.iphone16Layout]} />
			<Text style={[styles.login, styles.loginLayout]}>LOGIN</Text>
			<Text style={[styles.password, styles.loginLayout]}>PASSWORD</Text>
			<View
				style={[
					styles.iphone16Pro32Inner,
					styles.iphone16Pro32InnerLayout,
				]}
			/>
			<Pressable
				style={[
					styles.rectanglePressable,
					styles.iphone16Pro32InnerLayout,
				]}
				onPress={() => {}}
			/>
			<Pressable
				style={[styles.login1, styles.login1Position]}
				onPress={() => {}}>
				<Text style={[styles.login2, styles.login2Typo]}>LOGIN</Text>
			</Pressable>
			<Pressable
				style={[styles.signUp, styles.login1Position]}
				onPress={() => {}}>
				<Text style={[styles.signUp1, styles.login2Typo]}>SIGN UP</Text>
			</Pressable>
			<Text style={[styles.rememberMe, styles.login2Typo]}>
				REMEMBER ME
			</Text>
			<Pressable style={styles.rectangleParent} onPress={() => {}}>
				<View style={styles.groupChild} />
				<Text style={[styles.forgotPassword, styles.login2Typo]}>
					FORGOT PASSWORD?
				</Text>
			</Pressable>
			<View style={[styles.rectangleView, styles.groupItemLayout1]} />
			<Image
				style={styles.newwhitelogo1Icon}
				resizeMode="cover"
				source="newwhitelogo 1.png"
			/>
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View style={[styles.rectangleGroup, styles.rectanglePosition]}>
					<View style={[styles.groupItem, styles.groupItemLayout]} />
					<View style={styles.groupInner} />
					<View style={styles.groupChild1} />
				</View>
				<View
					style={[
						styles.rectangleContainer,
						styles.rectanglePosition,
					]}>
					<View
						style={[styles.groupChild2, styles.groupChildLayout]}
					/>
					<View
						style={[styles.groupChild3, styles.groupChildLayout]}
					/>
					<View
						style={[styles.groupChild4, styles.groupChildLayout]}
					/>
				</View>
				<Image
					style={[styles.groupIcon, styles.groupPosition]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View
				style={[styles.iphone16Pro32Child1, styles.groupItemLayout]}
			/>
			<Text style={[styles.text, styles.textFlexBox]}>9:53</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	textFlexBox: {
		textAlign: 'left',
		color: '#fff',
		position: 'absolute',
	},
	iphone16Layout: {
		height: 62,
		width: 284,
		borderRadius: 11,
		left: 59,
		borderWidth: 3,
		borderColor: '#fff',
		borderStyle: 'solid',
		backgroundColor: '#f99a99',
		position: 'absolute',
	},
	loginLayout: {
		height: 19,
		width: 157,
		alignItems: 'center',
		display: 'flex',
	},
	iphone16Pro32InnerLayout: {
		height: 44,
		width: 101,
		top: 705,
		borderRadius: 11,
		position: 'absolute',
	},
	login1Position: {
		top: 717,
		position: 'absolute',
	},
	login2Typo: {
		fontSize: 16,
		fontFamily: 'Rubik-Regular',
		textAlign: 'left',
		lineHeight: 20,
		letterSpacing: 0,
	},
	groupItemLayout1: {
		width: 14,
		borderRadius: 3,
	},
	groupLayout: {
		height: 15,
		position: 'absolute',
	},
	rectanglePosition: {
		height: 12,
		top: 1,
		position: 'absolute',
	},
	groupItemLayout: {
		height: 8,
		position: 'absolute',
	},
	groupChildLayout: {
		height: 2,
		borderRadius: 4,
		backgroundColor: '#fff',
		position: 'absolute',
	},
	groupPosition: {
		top: 0,
		left: 0,
	},
	dinder: {
		top: 368,
		left: 128,
		fontSize: 64,
		fontFamily: 'VinaSans-Regular',
		textShadowColor: 'rgba(0, 0, 0, 0.25)',
		textShadowOffset: {
			width: 0,
			height: 4,
		},
		textShadowRadius: 0,
		lineHeight: 20,
		letterSpacing: 0,
		textAlign: 'left',
	},
	iphone16Pro32Child: {
		top: 479,
	},
	iphone16Pro32Item: {
		top: 592,
	},
	login: {
		top: 449,
		fontFamily: 'Rubik-Regular',
		fontSize: 20,
		left: 64,
		width: 157,
		alignItems: 'center',
		display: 'flex',
		textAlign: 'left',
		color: '#fff',
		lineHeight: 20,
		letterSpacing: 0,
		position: 'absolute',
	},
	password: {
		top: 562,
		fontFamily: 'Rubik-Regular',
		fontSize: 20,
		left: 64,
		width: 157,
		alignItems: 'center',
		display: 'flex',
		textAlign: 'left',
		color: '#fff',
		lineHeight: 20,
		letterSpacing: 0,
		position: 'absolute',
	},
	iphone16Pro32Inner: {
		left: 216,
		backgroundColor: '#fff',
	},
	rectanglePressable: {
		left: 85,
		borderWidth: 3,
		height: 44,
		width: 101,
		top: 705,
		borderColor: '#fff',
		borderStyle: 'solid',
	},
	login2: {
		color: '#272727',
		height: 19,
		width: 157,
		alignItems: 'center',
		display: 'flex',
	},
	login1: {
		left: 245,
	},
	signUp1: {
		color: '#fff',
		fontSize: 16,
	},
	signUp: {
		left: 104,
	},
	rememberMe: {
		top: 819,
		left: 154,
		color: '#fff',
		fontSize: 16,
		position: 'absolute',
	},
	groupChild: {
		top: 42,
		left: 0,
		height: 42,
		width: 196,
		backgroundColor: '#f99a99',
		borderRadius: 11,
		position: 'absolute',
	},
	forgotPassword: {
		top: 11,
		left: 16,
		color: '#fff',
		fontSize: 16,
		position: 'absolute',
	},
	rectangleParent: {
		top: 763,
		left: 103,
		height: 42,
		width: 196,
		position: 'absolute',
	},
	rectangleView: {
		top: 822,
		left: 133,
		borderWidth: 1,
		height: 14,
		borderColor: '#fff',
		borderStyle: 'solid',
		backgroundColor: '#f99a99',
		width: 14,
		position: 'absolute',
	},
	newwhitelogo1Icon: {
		top: 168,
		left: 116,
		width: 169,
		height: 165,
		position: 'absolute',
	},
	groupItem: {
		top: 2,
		left: 2,
		width: 14,
		borderRadius: 3,
		backgroundColor: '#fff',
	},
	groupInner: {
		top: 4,
		left: 20,
		width: 1,
		height: 4,
		borderRadius: 3,
		backgroundColor: '#fff',
		position: 'absolute',
	},
	groupChild1: {
		width: 20,
		borderRadius: 4,
		top: 0,
		height: 12,
		left: 0,
		backgroundColor: '#fff',
		position: 'absolute',
	},
	rectangleGroup: {
		left: 52,
		width: 21,
	},
	groupChild2: {
		width: 22,
		top: 0,
		left: 0,
	},
	groupChild3: {
		top: 5,
		left: 3,
		width: 17,
	},
	groupChild4: {
		top: 10,
		left: 6,
		width: 10,
	},
	rectangleContainer: {
		left: 23,
		width: 22,
	},
	groupIcon: {
		width: 13,
		height: 15,
		position: 'absolute',
	},
	groupParent: {
		top: 35,
		left: 300,
		width: 73,
	},
	iphone16Pro32Child1: {
		top: 38,
		left: 354,
		borderRadius: 2,
		backgroundColor: '#d9d9d9',
		width: 12,
	},
	text: {
		top: 32,
		left: 50,
		fontSize: 18,
		fontFamily: 'Jua-Regular',
		width: 77,
		height: 23,
	},
	iphone16Pro32: {
		backgroundColor: '#f33534',
		flex: 1,
		width: '100%',
		height: 874,
		overflow: 'hidden',
	},
});

export default LoginScreen;
