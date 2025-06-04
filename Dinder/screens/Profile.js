import * as React from 'react';
import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Group68 from '../assets/group68';
import Group69 from '../assets/group69';

const Profile = () => {
	return (
		<SafeAreaView style={styles.profile}>
			<Group68 style={styles.profileChild} width={483} height={402} />
			<Text style={[styles.janeDoe, styles.janeDoeClr]}>JANE DOE</Text>
			<Image
				style={styles.maskGroupIcon}
				resizeMode="cover"
				source="Mask group.png"
			/>
			<Pressable style={styles.wrapper} onPress={() => {}}>
				<Image
					style={styles.icon}
					resizeMode="cover"
					source="Group 40.svg"
				/>
			</Pressable>
			<View style={styles.dietaryRestrictionsParent}>
				<Text style={[styles.dietaryRestrictions, styles.textFlexBox]}>
					DIETARY RESTRICTIONS
				</Text>
				<Text style={[styles.accessibilityNeeds, styles.textFlexBox]}>
					ACCESSIBILITY NEEDS
				</Text>
				<View
					style={[styles.rectangleParent, styles.groupChildLayout2]}>
					<View style={[styles.groupChild, styles.groupBg]} />
					<Text style={[styles.nutAllergy, styles.textFlexBox]}>
						NUT ALLERGY
					</Text>
				</View>
				<View style={[styles.rectangleGroup, styles.groupLayout1]}>
					<View style={[styles.groupItem, styles.groupLayout1]} />
					<Text style={[styles.nutAllergy, styles.textFlexBox]}>
						WHEELCHAIR ACCESS
					</Text>
				</View>
				<View
					style={[
						styles.rectangleContainer,
						styles.groupInnerLayout,
					]}>
					<View
						style={[styles.groupInner, styles.groupInnerLayout]}
					/>
					<Text style={[styles.nutAllergy, styles.textFlexBox]}>
						GLUTEN-FREE
					</Text>
				</View>
				<View style={[styles.groupView, styles.viewLayout]}>
					<View style={[styles.rectangleView, styles.viewLayout]} />
					<Text style={[styles.nutAllergy, styles.textFlexBox]}>
						LACTATION ROOM
					</Text>
				</View>
			</View>
			<Group69 style={styles.profileItem} width={30} height={30} />
			<View style={[styles.groupParent, styles.groupLayout]}>
				<View
					style={[
						styles.rectangleParent1,
						styles.rectangleParentPosition,
					]}>
					<View
						style={[styles.groupChild1, styles.groupChild1Layout]}
					/>
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
			<View style={[styles.profileInner, styles.groupChild1Layout]} />
			<Text style={[styles.text, styles.textFlexBox]}>9:53</Text>
			<Image
				style={styles.profileChild1}
				resizeMode="cover"
				source="Group 111.png"
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	janeDoeClr: {
		letterSpacing: 0,
		color: '#fff',
	},
	textFlexBox: {
		textAlign: 'left',
		position: 'absolute',
	},
	groupChildLayout2: {
		height: 35,
		width: 126,
		left: 0,
		position: 'absolute',
	},
	groupBg: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		top: 0,
	},
	groupLayout1: {
		width: 184,
		height: 35,
		left: 0,
		position: 'absolute',
	},
	groupInnerLayout: {
		width: 128,
		height: 35,
		position: 'absolute',
	},
	viewLayout: {
		width: 156,
		height: 35,
		left: 0,
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
	groupChild1Layout: {
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
	janeDoe: {
		top: 255,
		left: 34,
		fontSize: 48,
		lineHeight: 60,
		fontFamily: 'VinaSans-Regular',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 334,
		textShadowColor: 'rgba(0, 0, 0, 0.25)',
		textShadowOffset: {
			width: 0,
			height: 4,
		},
		textShadowRadius: 0,
		color: '#fff',
		position: 'absolute',
	},
	maskGroupIcon: {
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
		left: 324,
		top: 83,
		width: 44,
		height: 44,
		position: 'absolute',
	},
	dietaryRestrictions: {
		color: '#f33534',
		fontFamily: 'Rubik-ExtraBold',
		fontWeight: '800',
		lineHeight: 20,
		fontSize: 20,
		textAlign: 'left',
		left: 0,
		letterSpacing: 0,
		top: 0,
	},
	accessibilityNeeds: {
		top: 118,
		color: '#f33534',
		fontFamily: 'Rubik-ExtraBold',
		fontWeight: '800',
		lineHeight: 20,
		fontSize: 20,
		textAlign: 'left',
		left: 0,
		letterSpacing: 0,
	},
	groupChild: {
		height: 35,
		width: 126,
		left: 0,
		position: 'absolute',
	},
	nutAllergy: {
		left: 10,
		fontSize: 15,
		lineHeight: 15,
		fontWeight: '700',
		fontFamily: 'Rubik-Bold',
		top: 10,
		color: '#fff',
		letterSpacing: 0,
	},
	rectangleParent: {
		top: 36,
	},
	groupItem: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		top: 0,
	},
	rectangleGroup: {
		top: 154,
	},
	groupInner: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		top: 0,
		left: 0,
	},
	rectangleContainer: {
		left: 141,
		top: 36,
	},
	rectangleView: {
		backgroundColor: '#f33534',
		borderRadius: 9,
		top: 0,
	},
	groupView: {
		top: 205,
	},
	dietaryRestrictionsParent: {
		top: 404,
		left: 35,
		width: 269,
		height: 240,
		position: 'absolute',
	},
	profileItem: {
		top: 327,
		left: 381,
		position: 'absolute',
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
	profileInner: {
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
		color: '#fff',
	},
	profileChild1: {
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

export default Profile;
