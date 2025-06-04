import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
	return (
		<SafeAreaView style={styles.iphone16Pro44}>
			<Text style={[styles.signUp, styles.textFlexBox]}>SIGN UP</Text>
			<Image
				style={styles.newwhitelogo1Icon}
				resizeMode="cover"
				source="newwhitelogo 1.png"
			/>
			<View style={styles.rectangleParent}>
				<View style={[styles.groupChild, styles.groupChildLayout2]} />
				<View style={[styles.groupItem, styles.groupChildLayout2]} />
				<View style={[styles.groupInner, styles.groupChildLayout2]} />
				<View
					style={[styles.rectangleView, styles.groupChildLayout2]}
				/>
				<View style={[styles.groupChild1, styles.groupChildLayout2]} />
				<Text style={[styles.firstName, styles.nameLayout]}>
					FIRST NAME
				</Text>
				<Text style={[styles.lastName, styles.nameLayout]}>
					LAST NAME
				</Text>
				<Text style={[styles.phone, styles.nameLayout]}>PHONE</Text>
				<Text style={[styles.birthday, styles.nameLayout]}>
					BIRTHDAY
				</Text>
				<Text style={[styles.eMail, styles.nameLayout]}>E-MAIL</Text>
				<View style={styles.groupChild2} />
				<Pressable style={styles.signUpWrapper} onPress={() => {}}>
					<Text style={styles.signUp1}>SIGN UP</Text>
				</Pressable>
			</View>
			<Pressable style={styles.wrapper} onPress={() => {}}>
				<Image
					style={styles.icon}
					resizeMode="cover"
					source="Polygon 8.svg"
				/>
			</Pressable>
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View style={[styles.rectangleGroup, styles.rectanglePosition]}>
					<View style={[styles.groupChild3, styles.childLayout]} />
					<View
						style={[styles.groupChild4, styles.groupChildLayout1]}
					/>
					<View style={styles.groupChild5} />
				</View>
				<View
					style={[
						styles.rectangleContainer,
						styles.rectanglePosition,
					]}>
					<View
						style={[styles.groupChild6, styles.groupChildLayout]}
					/>
					<View
						style={[styles.groupChild7, styles.groupChildLayout]}
					/>
					<View
						style={[styles.groupChild8, styles.groupChildLayout]}
					/>
				</View>
				<Image
					style={[styles.groupIcon, styles.groupLayout]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View style={[styles.iphone16Pro44Child, styles.childLayout]} />
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
	groupChildLayout2: {
		height: 62,
		borderWidth: 3,
		borderColor: '#fff',
		borderStyle: 'solid',
		backgroundColor: '#f99a99',
		borderRadius: 11,
		left: 0,
		width: 284,
		position: 'absolute',
	},
	nameLayout: {
		height: 19,
		width: 157,
		alignItems: 'center',
		display: 'flex',
		fontSize: 20,
		left: 5,
		fontFamily: 'Rubik-Regular',
		textAlign: 'left',
		color: '#fff',
		lineHeight: 20,
		letterSpacing: 0,
		position: 'absolute',
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
	childLayout: {
		height: 8,
		position: 'absolute',
	},
	groupChildLayout1: {
		borderRadius: 3,
		backgroundColor: '#fff',
	},
	groupChildLayout: {
		height: 2,
		borderRadius: 4,
		backgroundColor: '#fff',
		position: 'absolute',
	},
	signUp: {
		top: 369,
		left: 121,
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
		color: '#fff',
	},
	newwhitelogo1Icon: {
		top: 168,
		left: 116,
		width: 169,
		height: 165,
		position: 'absolute',
	},
	groupChild: {
		top: 30,
	},
	groupItem: {
		top: 143,
	},
	groupInner: {
		top: 259,
	},
	rectangleView: {
		top: 485,
	},
	groupChild1: {
		top: 372,
	},
	firstName: {
		top: 0,
	},
	lastName: {
		top: 113,
	},
	phone: {
		top: 229,
	},
	birthday: {
		top: 455,
	},
	eMail: {
		top: 342,
	},
	groupChild2: {
		top: 598,
		left: 183,
		width: 101,
		height: 44,
		backgroundColor: '#fff',
		borderRadius: 11,
		position: 'absolute',
	},
	signUp1: {
		fontSize: 16,
		color: '#272727',
		fontFamily: 'Rubik-Regular',
		top: 0,
		left: 0,
		textAlign: 'left',
		lineHeight: 20,
		letterSpacing: 0,
		position: 'absolute',
	},
	signUpWrapper: {
		top: 610,
		left: 202,
		width: 64,
		height: 20,
		position: 'absolute',
	},
	rectangleParent: {
		top: 449,
		left: 59,
		height: 642,
		width: 284,
		position: 'absolute',
	},
	icon: {
		height: '100%',
		nodeWidth: 27,
		nodeHeight: 41,
		borderRadius: 2,
		width: '100%',
	},
	wrapper: {
		left: 36,
		top: 82,
		width: 27,
		height: 41,
		position: 'absolute',
	},
	groupChild3: {
		top: 2,
		left: 2,
		width: 14,
		borderRadius: 3,
		backgroundColor: '#fff',
	},
	groupChild4: {
		top: 4,
		left: 20,
		width: 1,
		height: 4,
		position: 'absolute',
	},
	groupChild5: {
		width: 20,
		borderRadius: 4,
		height: 12,
		backgroundColor: '#fff',
		top: 0,
		left: 0,
		position: 'absolute',
	},
	rectangleGroup: {
		left: 52,
		width: 21,
	},
	groupChild6: {
		width: 22,
		top: 0,
		left: 0,
	},
	groupChild7: {
		top: 5,
		left: 3,
		width: 17,
	},
	groupChild8: {
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
		top: 0,
		left: 0,
	},
	groupParent: {
		top: 35,
		left: 300,
		width: 73,
	},
	iphone16Pro44Child: {
		top: 38,
		left: 354,
		backgroundColor: '#d9d9d9',
		width: 12,
		borderRadius: 2,
	},
	text: {
		top: 32,
		left: 50,
		fontSize: 18,
		fontFamily: 'Jua-Regular',
		width: 77,
		height: 23,
	},
	iphone16Pro44: {
		backgroundColor: '#f33534',
		flex: 1,
		height: 1154,
		overflow: 'hidden',
		width: '100%',
	},
});

export default SignUpScreen;
