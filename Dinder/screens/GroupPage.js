import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Group68 from '../assets/group68';
import Group681 from '../assets/group681';
import Polygon11 from '../assets/polygon11';
import Polygon12 from '../assets/polygon12';

const GroupPage = () => {
	return (
		<SafeAreaView style={styles.profile}>
			<Group68 style={styles.profileChild} width={483} height={402} />
			<Text style={styles.bookClub}>BOOK CLUB</Text>
			<Text style={styles.members}>MEMBERS</Text>
			<Text style={[styles.filters, styles.filtersTypo]}>FILTERS</Text>
			<Text style={[styles.accommodations, styles.filtersTypo]}>
				ACCOMMODATIONS
			</Text>
			<Image
				style={[styles.maskGroupIcon, styles.maskGroupLayout]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Polygon11
				style={[styles.profileItem, styles.textLayout]}
				width={24}
				height={23}
			/>
			<Polygon12 style={styles.profileInner} width={23} height={24} />
			<Image
				style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={styles.maskGroupIcon4}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Pressable style={styles.wrapper} onPress={() => {}}>
				<Image
					style={styles.icon}
					resizeMode="cover"
					source="Group 69.svg"
				/>
			</Pressable>
			<View style={[styles.rectangleParent, styles.groupChildLayout2]}>
				<View style={[styles.groupChild, styles.groupPosition]} />
				<Text style={styles.nutAllergy}>NUT ALLERGY</Text>
			</View>
			<View style={[styles.rectangleGroup, styles.groupLayout1]}>
				<View style={[styles.groupItem, styles.groupLayout1]} />
				<Text style={styles.nutAllergy}>WHEELCHAIR ACCESS</Text>
			</View>
			<View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
				<View style={[styles.groupInner, styles.groupInnerLayout]} />
				<Text style={styles.nutAllergy}>GLUTEN-FREE</Text>
			</View>
			<View style={[styles.groupView, styles.viewLayout]}>
				<View style={[styles.rectangleView, styles.viewLayout]} />
				<Text style={styles.nutAllergy}>LACTATION ROOM</Text>
			</View>
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View
					style={[
						styles.rectangleParent1,
						styles.rectangleParentPosition,
					]}>
					<View style={[styles.groupChild1, styles.childLayout]} />
					<View
						style={[styles.groupChild2, styles.groupChildLayout1]}
					/>
					<View style={styles.groupChild3} />
				</View>
				<View
					style={[
						styles.rectangleParent2,
						styles.rectangleParentPosition,
					]}>
					<View
						style={[styles.groupChild4, styles.groupChildLayout]}
					/>
					<View
						style={[styles.groupChild5, styles.groupChildLayout]}
					/>
					<View
						style={[styles.groupChild6, styles.groupChildLayout]}
					/>
				</View>
				<Image
					style={[styles.groupIcon, styles.groupLayout]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View style={[styles.profileChild1, styles.childLayout]} />
			<Text style={[styles.text, styles.textLayout]}>9:53</Text>
			<Group681 style={styles.profileChild2} width={30} height={30} />
			<Image
				style={styles.profileChild3}
				resizeMode="cover"
				source="Group 111.png"
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	filtersTypo: {
		left: 49,
		textAlign: 'left',
		color: '#f33534',
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		lineHeight: 50,
		fontSize: 20,
		letterSpacing: 0,
		position: 'absolute',
	},
	maskGroupLayout: {
		height: 61,
		width: 61,
		top: 429,
		position: 'absolute',
	},
	textLayout: {
		height: 23,
		position: 'absolute',
	},
	groupChildLayout2: {
		height: 35,
		width: 126,
		position: 'absolute',
	},
	groupPosition: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		left: 0,
		top: 0,
	},
	groupLayout1: {
		width: 184,
		height: 35,
		position: 'absolute',
	},
	groupInnerLayout: {
		width: 128,
		height: 35,
		position: 'absolute',
	},
	viewLayout: {
		width: 163,
		height: 35,
		position: 'absolute',
	},
	groupLayout: {
		height: 15,
		position: 'absolute',
	},
	rectangleParentPosition: {
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
		position: 'absolute',
		backgroundColor: '#fff',
	},
	profileChild: {
		top: -41,
		left: -81,
		position: 'absolute',
	},
	bookClub: {
		top: 255,
		left: 119,
		fontSize: 48,
		lineHeight: 60,
		fontFamily: 'VinaSans-Regular',
		textAlign: 'right',
		textShadowColor: 'rgba(0, 0, 0, 0.25)',
		textShadowOffset: {
			width: 0,
			height: 4,
		},
		textShadowRadius: 0,
		color: '#fff',
		letterSpacing: 0,
		position: 'absolute',
	},
	members: {
		top: 368,
		left: 18,
		textAlign: 'left',
		color: '#f33534',
		lineHeight: 50,
		fontSize: 20,
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	filters: {
		top: 520,
	},
	accommodations: {
		top: 589,
	},
	maskGroupIcon: {
		left: 19,
	},
	profileItem: {
		top: 533,
		left: 15,
		borderRadius: 2,
	},
	profileInner: {
		top: 602,
		left: 16,
		borderRadius: 2,
		position: 'absolute',
	},
	maskGroupIcon1: {
		left: 96,
	},
	maskGroupIcon2: {
		left: 173,
	},
	maskGroupIcon3: {
		left: 250,
	},
	maskGroupIcon4: {
		top: 74,
		left: 114,
		width: 172,
		height: 172,
		position: 'absolute',
	},
	icon: {
		height: '100%',
		nodeWidth: 44,
		nodeHeight: 44,
		width: '100%',
	},
	wrapper: {
		left: 326,
		top: 83,
		width: 44,
		height: 44,
		position: 'absolute',
	},
	groupChild: {
		height: 35,
		width: 126,
		position: 'absolute',
	},
	nutAllergy: {
		left: 10,
		fontSize: 15,
		lineHeight: 15,
		top: 10,
		textAlign: 'left',
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		color: '#fff',
		letterSpacing: 0,
		position: 'absolute',
	},
	rectangleParent: {
		left: 50,
		top: 646,
	},
	groupItem: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		left: 0,
		top: 0,
	},
	rectangleGroup: {
		top: 695,
		left: 50,
	},
	groupInner: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		left: 0,
		top: 0,
	},
	rectangleContainer: {
		left: 191,
		top: 646,
	},
	rectangleView: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		left: 0,
		top: 0,
	},
	groupView: {
		top: 746,
		left: 50,
	},
	groupChild1: {
		top: 2,
		left: 2,
		width: 14,
		borderRadius: 3,
		backgroundColor: '#fff',
	},
	groupChild2: {
		top: 4,
		left: 20,
		width: 1,
		height: 4,
		position: 'absolute',
	},
	groupChild3: {
		width: 20,
		borderRadius: 4,
		height: 12,
		left: 0,
		top: 0,
		position: 'absolute',
		backgroundColor: '#fff',
	},
	rectangleParent1: {
		left: 52,
		width: 21,
	},
	groupChild4: {
		width: 22,
		left: 0,
		top: 0,
	},
	groupChild5: {
		top: 5,
		left: 3,
		width: 17,
	},
	groupChild6: {
		left: 6,
		width: 10,
		top: 10,
	},
	rectangleParent2: {
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
	profileChild1: {
		top: 38,
		left: 354,
		backgroundColor: '#d9d9d9',
		width: 12,
		borderRadius: 2,
	},
	text: {
		top: 32,
		fontSize: 18,
		fontFamily: 'Jua-Regular',
		width: 77,
		left: 50,
		textAlign: 'left',
		color: '#fff',
	},
	profileChild2: {
		top: 327,
		left: 381,
		position: 'absolute',
	},
	profileChild3: {
		top: 802,
		width: 402,
		height: 72,
		left: 0,
		position: 'absolute',
	},
	profile: {
		flex: 1,
		height: 874,
		overflow: 'hidden',
		width: '100%',
		backgroundColor: '#fff',
	},
});

export default GroupPage;
