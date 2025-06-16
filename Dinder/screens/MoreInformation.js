import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from '../styles/Global';
import styles from '../styles/MoreInformationStyles';

const MoreInformation = () => {
	const navigation = useNavigation();

	const [locationEnabled, setLocationEnabled] = useState(null); // TS will infer
	const [cameraRollAccess, setCameraRollAccess] = useState(null);
	const [contactsEnabled, setContactsEnabled] = useState(null);
	return (
		<SafeAreaView style={styles.main}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Image
					style={styles.redlogo1Icon}
					source={require('../assets/images/LogoRed150.png')}
				/>
				<Text style={[styles.tellUsMore, GlobalStyles.header]}>
					TELL US MORE
				</Text>
				<View>
					<Text
						style={[
							styles.TellUsMoreSubHeader,
							GlobalStyles.subHeading,
						]}>
						DIETARY RESTRICTIONS?
					</Text>
					<View
						style={[
							styles.DropdownTextbox,
							GlobalStyles.ColorlessTextbox,
						]}
					/>
				</View>
				<View>
					<Text
						style={[
							styles.TellUsMoreSubHeader,
							GlobalStyles.subHeading,
						]}>
						ACCESSIBILITY NEEDS?
					</Text>
					<View
						style={[
							styles.DropdownTextbox,
							GlobalStyles.ColorlessTextbox,
						]}
					/>
				</View>
				<View>
					<Text
						style={[
							styles.TellUsMoreSubHeader,
							GlobalStyles.subHeading,
						]}>
						ENABLE LOCATION?
					</Text>
					<CheckboxWithLabel
						label="ALLOW"
						selected={locationEnabled === true}
						onPress={() => setLocationEnabled(true)}
					/>
					<CheckboxWithLabel
						label="DON’T ALLOW"
						selected={locationEnabled === false}
						onPress={() => setLocationEnabled(false)}
					/>
				</View>
				<View>
					<Text
						style={[
							styles.TellUsMoreSubHeader,
							GlobalStyles.subHeading,
						]}>
						CAMERA ROLL ACCESS?
					</Text>
					<CheckboxWithLabel
						label="ALLOW"
						selected={cameraRollAccess === true}
						onPress={() => setCameraRollAccess(true)}
					/>
					<CheckboxWithLabel
						label="DON’T ALLOW"
						selected={cameraRollAccess === false}
						onPress={() => setCameraRollAccess(false)}
					/>
				</View>
				<View>
					<Text
						style={[
							styles.TellUsMoreSubHeader,
							GlobalStyles.subHeading,
						]}>
						ENABLE CONTACTS?
					</Text>
					<CheckboxWithLabel
						label="ALLOW"
						selected={contactsEnabled === true}
						onPress={() => setContactsEnabled(true)}
					/>
					<CheckboxWithLabel
						label="DON’T ALLOW"
						selected={contactsEnabled === false}
						onPress={() => setContactsEnabled(false)}
					/>
				</View>
				<Pressable
					style={styles.textFlexBox}
					onPress={() =>
						navigation.reset({
							index: 0,
							routes: [{ name: 'Home' }],
						})
					}>
					<Text style={styles.submit}>SUBMIT</Text>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MoreInformation;
