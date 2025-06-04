import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ellipse28 from '../assets/ellipse28';
import Group111 from '../assets/group111';
import Group33 from '../assets/group33';

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.iphone16Pro36}>
			<Image
				style={[styles.iphone16Pro36Child, styles.containerPosition]}
				resizeMode="cover"
				source="Group 99.png"
			/>
			<Text style={[styles.amesIa, styles.amesIaFlexBox]}>AMES, IA</Text>
			<View style={styles.groupParent}>
				<View style={[styles.rectangleParent, styles.rectangleLayout1]}>
					<View style={[styles.groupChild, styles.groupBg]} />
					<View style={[styles.groupItem, styles.groupBg]} />
					<View style={styles.groupInner} />
				</View>
				<View style={[styles.rectangleGroup, styles.rectangleLayout]}>
					<View
						style={[styles.rectangleView, styles.groupChildLayout1]}
					/>
					<View style={[styles.groupChild1, styles.childLayout]} />
					<View style={[styles.groupChild2, styles.textPosition]} />
				</View>
				<Image
					style={[styles.groupIcon, styles.wrapperLayout1]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View style={styles.iphone16Pro36Item} />
			<View style={styles.iphone16Pro36Item} />
			<Group33
				style={[styles.iphone16Pro36Child1, styles.childLayout]}
				width={17}
				height={24}
			/>
			<Pressable
				style={[styles.rectanglePressable, styles.groupChildLayout]}
				onPress={() => {}}
			/>
			<Pressable style={styles.bookClub} onPress={() => {}}>
				<Text style={[styles.bookClub1, styles.textClr]}>
					BOOK CLUB
				</Text>
			</Pressable>
			<Pressable
				style={[styles.laVineBistroContainer, styles.containerPosition]}
				onPress={() => {}}>
				<Text style={[styles.laVineBistro, styles.amesIaFlexBox]}>
					LA VINE BISTRO
				</Text>
			</Pressable>
			<View style={[styles.rectangleContainer, styles.containerPosition]}>
				<View style={[styles.groupChild3, styles.groupChildLayout]} />
				<View style={[styles.groupChild4, styles.groupChildLayout]} />
				<View style={[styles.groupChild5, styles.groupChildLayout]} />
				<View style={[styles.groupChild6, styles.groupChildLayout]} />
				<Text style={[styles.bistro, styles.textTypo]}>BISTRO</Text>
				<Text style={[styles.dineIn, styles.textTypo]}>DINE-IN</Text>
				<Text style={[styles.glutenFree, styles.textTypo]}>
					GLUTEN-FREE
				</Text>
				<Text style={[styles.text, styles.textTypo]}>$$</Text>
			</View>
			<Pressable
				style={[styles.wrapper, styles.wrapperLayout1]}
				onPress={() => {}}>
				<Image
					style={[styles.icon, styles.iconLayout]}
					resizeMode="cover"
					source="Polygon 6.svg"
				/>
			</Pressable>
			<Pressable
				style={[styles.container, styles.wrapperLayout]}
				onPress={() => {}}>
				<Image
					style={[styles.icon1, styles.iconLayout]}
					resizeMode="cover"
					source="Star 5.svg"
				/>
			</Pressable>
			<View
				style={[
					styles.laneDrDesMoinesParent,
					styles.containerPosition,
				]}>
				<Pressable style={styles.laneDrDesContainer} onPress={() => {}}>
					<Text
						style={[
							styles.laneDrDesMoines,
							styles.textTypo,
						]}>{`123 LANE DR
            						DES MOINES`}</Text>
				</Pressable>
				<Pressable
					style={[styles.frame, styles.wrapperLayout]}
					onPress={() => {}}>
					<Image
						style={[styles.icon1, styles.iconLayout]}
						resizeMode="cover"
						source="Star 1.svg"
					/>
				</Pressable>
				<Pressable
					style={[styles.starPressable, styles.wrapperLayout]}
					onPress={() => {}}>
					<Image
						style={[styles.icon1, styles.iconLayout]}
						resizeMode="cover"
						source="Star 2.svg"
					/>
				</Pressable>
				<Pressable
					style={[styles.wrapper1, styles.wrapperLayout]}
					onPress={() => {}}>
					<Image
						style={[styles.icon1, styles.iconLayout]}
						resizeMode="cover"
						source="Star 3.svg"
					/>
				</Pressable>
				<Pressable
					style={[styles.wrapper2, styles.wrapperLayout]}
					onPress={() => {}}>
					<Image
						style={[styles.icon1, styles.iconLayout]}
						resizeMode="cover"
						source="Star 4.svg"
					/>
				</Pressable>
				<Pressable
					style={[styles.wrapper3, styles.wrapperLayout]}
					onPress={() => {}}>
					<Image
						style={[styles.icon1, styles.iconLayout]}
						resizeMode="cover"
						source="Star 6.svg"
					/>
				</Pressable>
				<Pressable style={styles.pressable} onPress={() => {}}>
					<Text style={[styles.text1, styles.text1FlexBox]}>
						(245)
					</Text>
				</Pressable>
			</View>
			<Image
				style={styles.iphone16Pro36Child2}
				resizeMode="cover"
				source="Group 104.png"
			/>
			<Image
				style={styles.iphone16Pro36Child3}
				resizeMode="cover"
				source="Group 59.png"
			/>
			<Pressable
				style={[styles.iphone16Pro36Child4, styles.iphone16ChildLayout]}
				onPress={() => {}}
			/>
			<Pressable
				style={[styles.iphone16Pro36Child5, styles.iphone16ChildLayout]}
				onPress={() => {}}
			/>
			<Ellipse28 style={styles.ellipseIcon} width={42} height={42} />
			<Image
				style={[styles.newwhitelogo3Icon, styles.text2Layout]}
				resizeMode="cover"
				source="newwhitelogo 3.png"
			/>
			<View style={styles.iphone16Pro36Item} />
			<Text style={[styles.text2, styles.text2Layout]}>9:53</Text>
			<Group111
				style={styles.iphone16Pro36Child7}
				width={402}
				height={72}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	containerPosition: {
		left: 28,
		position: 'absolute',
	},
	amesIaFlexBox: {
		alignItems: 'center',
		display: 'flex',
		color: '#272727',
	},
	rectangleLayout1: {
		height: 12,
		top: 1,
	},
	groupBg: {
		backgroundColor: '#272727',
		borderRadius: 3,
		position: 'absolute',
	},
	rectangleLayout: {
		width: 22,
		position: 'absolute',
	},
	groupChildLayout1: {
		height: 2,
		borderRadius: 4,
		backgroundColor: '#272727',
	},
	childLayout: {
		width: 17,
		position: 'absolute',
	},
	textPosition: {
		top: 10,
		position: 'absolute',
	},
	wrapperLayout1: {
		width: 13,
		position: 'absolute',
	},
	groupChildLayout: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		height: 35,
		position: 'absolute',
	},
	textClr: {
		color: '#fff',
		fontSize: 15,
	},
	textTypo: {
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		textAlign: 'left',
		lineHeight: 15,
		letterSpacing: 0,
	},
	iconLayout: {
		height: '100%',
		width: '100%',
	},
	wrapperLayout: {
		height: 21,
		width: 21,
		position: 'absolute',
	},
	text1FlexBox: {
		textAlign: 'left',
		lineHeight: 15,
		letterSpacing: 0,
	},
	iphone16ChildLayout: {
		opacity: 0,
		height: 497,
		width: 103,
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		borderRadius: 45,
		top: 164,
		position: 'absolute',
	},
	text2Layout: {
		height: 23,
		position: 'absolute',
	},
	iphone16Pro36Child: {
		top: 186,
		width: 345,
		height: 456,
	},
	amesIa: {
		top: 100,
		left: 58,
		width: 88,
		height: 16,
		textAlign: 'left',
		fontFamily: 'Rubik-SemiBold',
		fontWeight: '600',
		lineHeight: 15,
		letterSpacing: 0,
		fontSize: 15,
		position: 'absolute',
	},
	groupChild: {
		top: 2,
		left: 2,
		width: 14,
		height: 8,
	},
	groupItem: {
		top: 4,
		left: 20,
		width: 1,
		height: 4,
	},
	groupInner: {
		width: 20,
		borderRadius: 4,
		left: 0,
		top: 0,
		backgroundColor: '#272727',
		height: 12,
		position: 'absolute',
	},
	rectangleParent: {
		left: 52,
		width: 21,
		height: 12,
		top: 1,
		position: 'absolute',
	},
	rectangleView: {
		width: 22,
		position: 'absolute',
		left: 0,
		top: 0,
	},
	groupChild1: {
		top: 5,
		left: 3,
		height: 2,
		borderRadius: 4,
		backgroundColor: '#272727',
	},
	groupChild2: {
		left: 6,
		width: 10,
		height: 2,
		borderRadius: 4,
		backgroundColor: '#272727',
	},
	rectangleGroup: {
		left: 23,
		height: 12,
		top: 1,
		width: 22,
	},
	groupIcon: {
		left: 0,
		top: 0,
		height: 15,
	},
	groupParent: {
		top: 35,
		left: 300,
		width: 73,
		height: 15,
		position: 'absolute',
	},
	iphone16Pro36Item: {
		top: 38,
		left: 354,
		borderRadius: 2,
		backgroundColor: '#d9d9d9',
		width: 12,
		height: 8,
		position: 'absolute',
	},
	iphone16Pro36Child1: {
		top: 96,
		left: 31,
	},
	rectanglePressable: {
		top: 91,
		left: 251,
		width: 122,
		height: 35,
	},
	bookClub1: {
		textAlign: 'left',
		fontFamily: 'Rubik-SemiBold',
		fontWeight: '600',
		lineHeight: 15,
		letterSpacing: 0,
	},
	bookClub: {
		left: 263,
		top: 101,
		position: 'absolute',
	},
	laVineBistro: {
		fontSize: 40,
		fontFamily: 'VinaSans-Regular',
		width: 330,
		height: 33,
		textAlign: 'left',
		lineHeight: 15,
		letterSpacing: 0,
	},
	laVineBistroContainer: {
		top: 141,
	},
	groupChild3: {
		width: 37,
		height: 35,
		left: 0,
		top: 0,
	},
	groupChild4: {
		left: 47,
		width: 78,
		height: 35,
		top: 0,
	},
	groupChild5: {
		left: 135,
		width: 80,
		height: 35,
		top: 0,
	},
	groupChild6: {
		left: 225,
		width: 128,
		height: 35,
		top: 0,
	},
	bistro: {
		left: 57,
		color: '#fff',
		fontSize: 15,
		top: 10,
		position: 'absolute',
	},
	dineIn: {
		left: 145,
		color: '#fff',
		fontSize: 15,
		top: 10,
		position: 'absolute',
	},
	glutenFree: {
		left: 235,
		color: '#fff',
		fontSize: 15,
		top: 10,
		position: 'absolute',
	},
	text: {
		left: 8,
		color: '#fff',
		fontSize: 15,
		top: 10,
		position: 'absolute',
	},
	rectangleContainer: {
		top: 661,
		width: 353,
		height: 35,
	},
	icon: {
		borderRadius: 1,
		nodeWidth: 13,
		nodeHeight: 8,
	},
	wrapper: {
		left: 351,
		top: 104,
		height: 8,
	},
	icon1: {
		nodeWidth: 21,
		nodeHeight: 21,
	},
	container: {
		left: 120,
		top: 715,
	},
	laneDrDesMoines: {
		fontSize: 13,
		width: 153,
		height: 35,
		alignItems: 'center',
		display: 'flex',
		color: '#272727',
	},
	laneDrDesContainer: {
		top: 31,
		left: 0,
		position: 'absolute',
	},
	frame: {
		left: 0,
		top: 0,
	},
	starPressable: {
		left: 23,
		top: 0,
	},
	wrapper1: {
		left: 46,
		top: 0,
	},
	wrapper2: {
		left: 69,
		top: 0,
	},
	wrapper3: {
		left: 92,
		top: 0,
	},
	text1: {
		fontFamily: 'Rubik-Regular',
		color: '#9e9e9e',
		textAlign: 'left',
		fontSize: 15,
	},
	pressable: {
		left: 115,
		top: 3,
		position: 'absolute',
	},
	laneDrDesMoinesParent: {
		height: 66,
		width: 153,
		top: 715,
	},
	iphone16Pro36Child2: {
		top: 692,
		left: 233,
		width: 155,
		height: 143,
		position: 'absolute',
	},
	iphone16Pro36Child3: {
		top: 18,
		left: 172,
		width: 43,
		height: 32,
		position: 'absolute',
	},
	iphone16Pro36Child4: {
		left: 299,
	},
	iphone16Pro36Child5: {
		left: -1,
	},
	ellipseIcon: {
		top: 766,
		left: 176,
		position: 'absolute',
	},
	newwhitelogo3Icon: {
		top: 773,
		left: 185,
		width: 24,
	},
	text2: {
		top: 32,
		left: 50,
		fontSize: 18,
		fontFamily: 'Jua-Regular',
		width: 77,
		textAlign: 'left',
		color: '#272727',
		height: 23,
	},
	iphone16Pro36Child7: {
		top: 802,
		left: 0,
		position: 'absolute',
	},
	iphone16Pro36: {
		backgroundColor: '#fff',
		flex: 1,
		height: 874,
		overflow: 'hidden',
		width: '100%',
	},
});

export default HomeScreen;
