import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Polygon6 from '../assets/polygon6';
import Polygon7 from '../assets/polygon7';

const MoreInformation = () => {
	return (
		<SafeAreaView style={styles.iphone16Pro47}>
			<Pressable style={styles.rectangleParent} onPress={() => {}}>
				<View style={styles.groupChild} />
				<Text style={[styles.submit, styles.textFlexBox]}>SUBMIT</Text>
			</Pressable>
			<View style={[styles.iphone16Pro47Child, styles.iphone16Layout]} />
			<View style={[styles.iphone16Pro47Item, styles.iphone16Layout]} />
			<View
				style={[styles.iphone16Pro47Inner, styles.iphone16ChildLayout]}
			/>
			<View style={[styles.rectangleView, styles.iphone16ChildLayout]} />
			<View
				style={[styles.iphone16Pro47Child1, styles.iphone16ChildLayout]}
			/>
			<View
				style={[styles.iphone16Pro47Child2, styles.iphone16ChildLayout]}
			/>
			<View
				style={[styles.iphone16Pro47Child3, styles.iphone16ChildLayout]}
			/>
			<Text style={[styles.dietaryRestrictions, styles.enableTypo]}>
				DIETARY RESTRICTIONS?
			</Text>
			<Text style={[styles.accessibilityNeeds, styles.enableTypo]}>
				ACCESSIBILITY NEEDS?
			</Text>
			<Text style={[styles.enableLocation, styles.enableTypo]}>
				ENABLE LOCATION?
			</Text>
			<Text style={[styles.allow, styles.allowTypo]}>ALLOW</Text>
			<Text style={[styles.allow1, styles.allowTypo]}>ALLOW</Text>
			<Text style={[styles.allow2, styles.allowTypo]}>ALLOW</Text>
			<Text style={[styles.dontAllow, styles.allowTypo]}>
				DON’T ALLOW
			</Text>
			<Text style={styles.dontAllow1}>DON’T ALLOW</Text>
			<Text style={[styles.dontAllow2, styles.allowTypo]}>
				DON’T ALLOW
			</Text>
			<Text
				style={[
					styles.cameraRollAccess,
					styles.enableTypo,
				]}>{`CAMERA ROLL ACCESS? `}</Text>
			<Text style={[styles.enableContacts, styles.enableTypo]}>
				ENABLE CONTACTS?
			</Text>
			<Text style={[styles.tellUsMore, styles.enableTypo]}>
				TELL US MORE
			</Text>
			<Text style={[styles.tellUsMore, styles.enableTypo]}>
				TELL US MORE
			</Text>
			<Polygon6
				style={[styles.polygonIcon, styles.polygonIconLayout]}
				width={19}
				height={12}
			/>
			<Polygon7
				style={[styles.iphone16Pro47Child4, styles.polygonIconLayout]}
				width={19}
				height={12}
			/>
			<Pressable style={styles.wrapper} onPress={() => {}}>
				<Image
					style={styles.icon}
					resizeMode="cover"
					source="Polygon 5.svg"
				/>
			</Pressable>
			<Image
				style={styles.redlogo1Icon}
				resizeMode="cover"
				source="REDlogo 1.png"
			/>
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View style={[styles.rectangleGroup, styles.rectanglePosition]}>
					<View style={[styles.groupItem, styles.groupItemLayout]} />
					<View style={[styles.groupInner, styles.groupBg]} />
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
					style={[styles.groupIcon, styles.groupLayout]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View
				style={[styles.iphone16Pro47Child5, styles.groupItemLayout]}
			/>
			<Image
				style={styles.iphone16Pro47Child6}
				resizeMode="cover"
				source="Group 108.png"
			/>
			<Text style={[styles.text, styles.textFlexBox]}>9:53</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	textFlexBox: {
		textAlign: 'left',
		color: '#272727',
		position: 'absolute',
	},
	iphone16Layout: {
		height: 49,
		width: 325,
		borderWidth: 3,
		borderColor: '#272727',
		borderStyle: 'solid',
		left: 35,
		borderRadius: 11,
		position: 'absolute',
	},
	iphone16ChildLayout: {
		height: 25,
		width: 25,
		borderRadius: 5,
		borderWidth: 3,
		borderColor: '#272727',
		borderStyle: 'solid',
		left: 35,
		position: 'absolute',
	},
	enableTypo: {
		color: '#f33534',
		fontFamily: 'VinaSans-Regular',
		textAlign: 'left',
		letterSpacing: 0,
		position: 'absolute',
	},
	allowTypo: {
		color: '#000',
		fontFamily: 'Rubik-SemiBold',
		fontWeight: '600',
		left: 68,
		textAlign: 'left',
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 16,
		position: 'absolute',
	},
	polygonIconLayout: {
		height: 12,
		width: 19,
		borderRadius: 1,
		left: 331,
		position: 'absolute',
	},
	groupLayout: {
		height: 15,
		position: 'absolute',
	},
	rectanglePosition: {
		top: 1,
		height: 12,
		position: 'absolute',
	},
	groupItemLayout: {
		height: 8,
		position: 'absolute',
	},
	groupBg: {
		backgroundColor: '#272727',
		borderRadius: 3,
	},
	groupChildLayout: {
		height: 2,
		borderRadius: 4,
		backgroundColor: '#272727',
		position: 'absolute',
	},
	groupChild: {
		backgroundColor: '#f33534',
		borderRadius: 11,
		left: 0,
		top: 0,
		height: 44,
		width: 101,
		position: 'absolute',
	},
	submit: {
		top: 12,
		left: 21,
		fontFamily: 'Rubik-Regular',
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 16,
		color: '#272727',
	},
	rectangleParent: {
		top: 1009,
		left: 259,
		height: 44,
		width: 101,
		position: 'absolute',
	},
	iphone16Pro47Child: {
		top: 442,
	},
	iphone16Pro47Item: {
		top: 550,
	},
	iphone16Pro47Inner: {
		top: 663,
	},
	rectangleView: {
		top: 777,
	},
	iphone16Pro47Child1: {
		top: 889,
	},
	iphone16Pro47Child2: {
		top: 696,
	},
	iphone16Pro47Child3: {
		top: 810,
	},
	dietaryRestrictions: {
		top: 404,
		fontSize: 32,
		fontFamily: 'VinaSans-Regular',
		left: 35,
		lineHeight: 20,
	},
	accessibilityNeeds: {
		top: 516,
		fontSize: 32,
		fontFamily: 'VinaSans-Regular',
		left: 35,
		lineHeight: 20,
	},
	enableLocation: {
		top: 628,
		fontSize: 32,
		fontFamily: 'VinaSans-Regular',
		left: 35,
		lineHeight: 20,
	},
	allow: {
		top: 666,
	},
	allow1: {
		top: 780,
	},
	allow2: {
		top: 892,
	},
	dontAllow: {
		top: 699,
	},
	dontAllow1: {
		top: 813,
		fontFamily: 'Rubik-SemiBold',
		fontWeight: '600',
		left: 68,
		color: '#f33534',
		textAlign: 'left',
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 16,
		position: 'absolute',
	},
	dontAllow2: {
		top: 925,
	},
	cameraRollAccess: {
		top: 740,
		fontSize: 32,
		fontFamily: 'VinaSans-Regular',
		left: 35,
		lineHeight: 20,
	},
	enableContacts: {
		top: 852,
		fontSize: 32,
		fontFamily: 'VinaSans-Regular',
		left: 35,
		lineHeight: 20,
	},
	tellUsMore: {
		top: 306,
		left: 41,
		fontSize: 75,
		lineHeight: 50,
	},
	polygonIcon: {
		top: 461,
	},
	iphone16Pro47Child4: {
		top: 569,
	},
	icon: {
		height: '100%',
		nodeWidth: 27,
		nodeHeight: 41,
		borderRadius: 2,
		width: '100%',
	},
	wrapper: {
		left: 27,
		top: 91,
		width: 27,
		height: 41,
		position: 'absolute',
	},
	redlogo1Icon: {
		top: 112,
		left: 116,
		width: 164,
		height: 158,
		position: 'absolute',
	},
	groupItem: {
		top: 2,
		left: 2,
		width: 14,
		backgroundColor: '#272727',
		borderRadius: 3,
	},
	groupInner: {
		top: 4,
		left: 20,
		width: 1,
		height: 4,
		position: 'absolute',
	},
	groupChild1: {
		width: 20,
		borderRadius: 4,
		backgroundColor: '#272727',
		height: 12,
		left: 0,
		top: 0,
		position: 'absolute',
	},
	rectangleGroup: {
		left: 52,
		width: 21,
	},
	groupChild2: {
		width: 22,
		left: 0,
		top: 0,
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
		left: 0,
		top: 0,
	},
	groupParent: {
		top: 35,
		left: 300,
		width: 73,
	},
	iphone16Pro47Child5: {
		top: 38,
		left: 354,
		backgroundColor: '#d9d9d9',
		width: 12,
		borderRadius: 2,
	},
	iphone16Pro47Child6: {
		top: 802,
		width: 402,
		height: 72,
		left: 0,
		position: 'absolute',
	},
	text: {
		top: 32,
		left: 50,
		fontSize: 18,
		fontFamily: 'Jua-Regular',
		width: 77,
		height: 23,
	},
	iphone16Pro47: {
		backgroundColor: '#fff',
		flex: 1,
		height: 1209,
		overflow: 'hidden',
		width: '100%',
	},
});

export default MoreInformation;
