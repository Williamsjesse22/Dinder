import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FriendsAndGroups = () => {
	return (
		<SafeAreaView style={styles.groupsPage}>
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View style={styles.rectangleParent}>
					<View style={styles.groupChild} />
					<View style={styles.groupItem} />
					<View style={styles.groupInner} />
				</View>
				<View style={styles.rectangleGroup}>
					<View style={styles.rectangleView} />
					<View style={styles.groupChild1} />
					<View style={styles.groupChild2} />
				</View>
				<Image
					style={[styles.groupIcon, styles.iconPosition]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View style={styles.groupsPageChild} />
			<View style={styles.groupsPageChild} />
			<View style={[styles.ellipseParent, styles.ellipseLayout]}>
				<View style={styles.rectangleContainer}>
					<View style={styles.groupChild3} />
					<View style={styles.groupChildPosition} />
				</View>
			</View>
			<Pressable
				style={[styles.ellipseGroup, styles.ellipseLayout]}
				onPress={() => {}}>
				<View style={styles.rectangleContainer}>
					<View style={styles.groupChild3} />
					<View style={styles.groupChildPosition} />
				</View>
			</Pressable>
			<Pressable style={styles.groupsPageInner} onPress={() => {}} />
			<Text style={styles.typeHere}>TYPE HERE...</Text>
			<Image
				style={styles.groupsPageChild1}
				resizeMode="cover"
				source="Group 45.png"
			/>
			<Text style={[styles.groups, styles.textFlexBox]}>GROUPS</Text>
			<Text style={[styles.friends, styles.textFlexBox]}>FRIENDS</Text>
			<Pressable
				style={[styles.tommyJones, styles.doePosition]}
				onPress={() => {}}>
				<Text style={styles.doeTypo}>TOMMY JONES</Text>
			</Pressable>
			<Pressable
				style={[styles.rectanglePressable, styles.groupsChildLayout]}
				onPress={() => {}}
			/>
			<Pressable
				style={[
					styles.inviteToGroupContainer,
					styles.inviteGroupPosition,
				]}
				onPress={() => {}}>
				<Text style={styles.inviteGroupTypo}>INVITE TO GROUP</Text>
			</Pressable>
			<View style={[styles.groupsPageChild3, styles.groupsChildLayout]} />
			<Text style={[styles.inviteToGroup1, styles.inviteGroupTypo]}>
				INVITE TO GROUP
			</Text>
			<View style={[styles.groupsPageChild4, styles.groupsChildLayout]} />
			<Text style={[styles.inviteToGroup2, styles.inviteGroupTypo]}>
				INVITE TO GROUP
			</Text>
			<View style={[styles.groupsPageChild5, styles.groupsChildLayout]} />
			<Text style={[styles.inviteToGroup3, styles.inviteGroupTypo]}>
				INVITE TO GROUP
			</Text>
			<View style={[styles.groupsPageChild6, styles.groupsChildLayout]} />
			<Text style={[styles.inviteToGroup4, styles.inviteGroupTypo]}>
				INVITE TO GROUP
			</Text>
			<View style={[styles.groupsPageChild7, styles.groupsChildLayout]} />
			<Text style={[styles.inviteToGroup5, styles.inviteGroupTypo]}>
				INVITE TO GROUP
			</Text>
			<Text style={[styles.marthaWilson, styles.doeTypo]}>
				MARTHA WILSON
			</Text>
			<Text style={[styles.janeDoe, styles.doeTypo]}>JANE DOE</Text>
			<Text style={[styles.johnDoe, styles.doeTypo]}>JOHN DOE</Text>
			<Text style={[styles.mattJohnson, styles.doeTypo]}>
				MATT JOHNSON
			</Text>
			<Text style={[styles.jasonMarty, styles.doeTypo]}>JASON MARTY</Text>
			<Image
				style={styles.maskGroupIcon}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.groupsPageChild8, styles.maskGroupLayout1]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.groupsPageChild9, styles.maskGroupLayout1]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.groupsPageChild10, styles.maskGroupLayout1]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.maskGroupIcon4, styles.maskGroupLayout1]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.maskGroupIcon5, styles.maskGroupLayout1]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Pressable
				style={[styles.maskGroup, styles.maskGroupLayout]}
				onPress={() => {}}>
				<Image
					style={styles.icon}
					resizeMode="cover"
					source="Mask group.png"
				/>
			</Pressable>
			<Image
				style={[styles.maskGroupIcon6, styles.maskGroupLayout]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Image
				style={[styles.maskGroupIcon7, styles.maskGroupLayout]}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<View style={styles.groupsPageChild} />
			<View style={styles.groupsPageChild} />
			<Text style={[styles.text, styles.textFlexBox]}>9:53</Text>
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View style={styles.rectangleParent}>
					<View style={styles.groupChild} />
					<View style={styles.groupItem} />
					<View style={styles.groupInner} />
				</View>
				<View style={styles.rectangleGroup}>
					<View style={styles.rectangleView} />
					<View style={styles.groupChild1} />
					<View style={styles.groupChild2} />
				</View>
				<Image
					style={[styles.groupIcon, styles.iconPosition]}
					resizeMode="cover"
					source="Group 23.png"
				/>
			</View>
			<View style={styles.groupsPageChild} />
			<View style={styles.groupsPageChild} />
			<Text style={[styles.text, styles.textFlexBox]}>9:53</Text>
			<Image
				style={styles.groupsPageChild15}
				resizeMode="cover"
				source="Group 111.png"
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	groupLayout: {
		height: 15,
		position: 'absolute',
	},
	iconPosition: {
		top: 0,
		left: 0,
	},
	ellipseLayout: {
		width: 23,
		height: 23,
		position: 'absolute',
	},
	textFlexBox: {
		textAlign: 'left',
		position: 'absolute',
	},
	polygonIconLayout: {
		height: 41,
		width: 27,
		top: 248,
		borderRadius: 2,
		position: 'absolute',
	},
	doePosition: {
		left: 70,
		position: 'absolute',
	},
	groupsChildLayout: {
		height: 28,
		width: 141,
		backgroundColor: '#f33534',
		borderRadius: 9,
		left: 254,
		position: 'absolute',
	},
	inviteGroupPosition: {
		left: 267,
		position: 'absolute',
	},
	inviteGroupTypo: {
		width: 117,
		color: '#fff',
		lineHeight: 15,
		fontSize: 13,
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		textAlign: 'center',
		letterSpacing: 0,
		height: 12,
	},
	doeTypo: {
		fontFamily: 'Rubik-Medium',
		fontWeight: '500',
		textAlign: 'left',
		color: '#f33534',
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 20,
	},
	maskGroupLayout1: {
		height: 38,
		width: 38,
		left: 14,
		position: 'absolute',
	},
	maskGroupLayout: {
		height: 83,
		width: 83,
		top: 227,
		position: 'absolute',
	},
	groupChild: {
		top: 2,
		left: 2,
		width: 14,
		height: 8,
		backgroundColor: '#272727',
		borderRadius: 3,
		position: 'absolute',
	},
	groupItem: {
		top: 4,
		left: 20,
		width: 1,
		height: 4,
		backgroundColor: '#272727',
		borderRadius: 3,
		position: 'absolute',
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
		height: 2,
		width: 22,
		borderRadius: 4,
		left: 0,
		top: 0,
		backgroundColor: '#272727',
		position: 'absolute',
	},
	groupChild1: {
		left: 3,
		width: 17,
		top: 5,
		height: 2,
		borderRadius: 4,
		backgroundColor: '#272727',
		position: 'absolute',
	},
	groupChild2: {
		top: 10,
		width: 10,
		left: 6,
		height: 2,
		borderRadius: 4,
		backgroundColor: '#272727',
		position: 'absolute',
	},
	rectangleGroup: {
		left: 23,
		width: 22,
		height: 12,
		top: 1,
		position: 'absolute',
	},
	groupIcon: {
		width: 13,
		left: 0,
		height: 15,
		position: 'absolute',
	},
	groupParent: {
		top: 35,
		left: 300,
		width: 73,
	},
	groupsPageChild: {
		top: 38,
		left: 354,
		backgroundColor: '#d9d9d9',
		width: 12,
		borderRadius: 2,
		height: 8,
		position: 'absolute',
	},
	ellipseIcon: {
		left: 0,
		top: 0,
	},
	groupChild3: {
		left: 5,
		width: 2,
		backgroundColor: '#f4f4f4',
		height: 11,
		borderRadius: 2,
		top: 0,
		position: 'absolute',
	},
	groupChildPosition: {
		transform: [
			{
				rotate: '90deg',
			},
		],
		left: 11,
		width: 2,
		backgroundColor: '#f4f4f4',
		height: 11,
		borderRadius: 2,
		top: 5,
		position: 'absolute',
	},
	rectangleContainer: {
		top: 6,
		width: 11,
		height: 11,
		left: 6,
		position: 'absolute',
	},
	ellipseParent: {
		top: 185,
		left: 173,
		height: 23,
	},
	ellipseGroup: {
		top: 339,
		left: 178,
		height: 23,
	},
	groupsPageInner: {
		top: 107,
		left: 30,
		borderRadius: 17,
		width: 342,
		height: 48,
		backgroundColor: '#f4f4f4',
		position: 'absolute',
	},
	typeHere: {
		top: 119,
		left: 89,
		fontWeight: '800',
		fontFamily: 'Rubik-ExtraBold',
		color: 'rgba(243, 53, 52, 0.5)',
		width: 134,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		textAlign: 'center',
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 20,
		height: 23,
		position: 'absolute',
	},
	groupsPageChild1: {
		top: 115,
		left: 42,
		width: 32,
		height: 32,
		position: 'absolute',
	},
	groups: {
		top: 171,
		color: '#f33534',
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		lineHeight: 50,
		fontSize: 32,
		left: 31,
		textAlign: 'left',
		letterSpacing: 0,
	},
	friends: {
		top: 326,
		color: '#f33534',
		fontFamily: 'Rubik-Bold',
		fontWeight: '700',
		lineHeight: 50,
		fontSize: 32,
		left: 31,
		textAlign: 'left',
		letterSpacing: 0,
	},
	polygonIcon: {
		left: 356,
	},
	groupsPageChild2: {
		left: 18,
	},
	tommyJones: {
		top: 395,
	},
	rectanglePressable: {
		top: 389,
	},
	inviteToGroupContainer: {
		top: 397,
	},
	groupsPageChild3: {
		top: 451,
	},
	inviteToGroup1: {
		top: 459,
		left: 267,
		position: 'absolute',
	},
	groupsPageChild4: {
		top: 631,
	},
	inviteToGroup2: {
		top: 639,
		left: 267,
		position: 'absolute',
	},
	groupsPageChild5: {
		top: 691,
	},
	inviteToGroup3: {
		top: 699,
		left: 267,
		position: 'absolute',
	},
	groupsPageChild6: {
		top: 511,
	},
	inviteToGroup4: {
		top: 519,
		left: 267,
		position: 'absolute',
	},
	groupsPageChild7: {
		top: 571,
	},
	inviteToGroup5: {
		top: 581,
		left: 267,
		position: 'absolute',
	},
	marthaWilson: {
		top: 455,
		left: 70,
		position: 'absolute',
	},
	janeDoe: {
		top: 515,
		left: 70,
		position: 'absolute',
	},
	johnDoe: {
		top: 575,
		left: 70,
		position: 'absolute',
	},
	mattJohnson: {
		top: 635,
		left: 70,
		position: 'absolute',
	},
	jasonMarty: {
		top: 695,
		left: 70,
		position: 'absolute',
	},
	maskGroupIcon: {
		top: 385,
		left: 13,
		width: 39,
		height: 39,
		position: 'absolute',
	},
	groupsPageChild8: {
		top: 446,
	},
	groupsPageChild9: {
		top: 506,
	},
	groupsPageChild10: {
		top: 566,
	},
	maskGroupIcon4: {
		top: 626,
	},
	maskGroupIcon5: {
		top: 686,
	},
	icon: {
		height: '100%',
		nodeWidth: 83,
		nodeHeight: 83,
		width: '100%',
	},
	maskGroup: {
		left: 59,
	},
	maskGroupIcon6: {
		left: 259,
	},
	maskGroupIcon7: {
		left: 159,
	},
	text: {
		top: 32,
		left: 50,
		fontSize: 18,
		fontFamily: 'Jua-Regular',
		color: '#272727',
		width: 77,
		height: 23,
	},
	groupsPageChild15: {
		top: 802,
		width: 402,
		height: 72,
		left: 0,
		position: 'absolute',
	},
	groupsPage: {
		backgroundColor: '#fff',
		flex: 1,
		height: 874,
		overflow: 'hidden',
		width: '100%',
	},
});

export default FriendsAndGroups;
