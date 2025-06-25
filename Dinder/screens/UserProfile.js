import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import PageHeader from "@/components/PageHeader";
import ProfileHeader from "@/components/ProfileHeader";
import BottomNavBar from "@/components/bottomNavBar";
import GlobalStyles from "@/styles/Global";
import styles from "../styles/ProfileStyles";
import backButton from "../assets/images/backbutton.png";
import editIcon from "../assets/images/editIcon.png";
import SampleProfilePhoto from "../assets/images/SampleProfilePhoto.jpg";
import { Dimensions } from "react-native";

const UserProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    name = "Jane Doe",
    image = SampleProfilePhoto,
    dietary = ["Gluten Free", "Mushroom Free"],
    accommodations = ["Wheelchair User", "Pregnant"],
    showBackButton = false,
    isEditable = true,
  } = route.params || {};

  return (
    <View style={styles.profile}>
      <View style={styles.headerContainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <PageHeader heightRatio={0.3} width={Dimensions.get('window').width}>
          {showBackButton && (
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Image
                source={backButton}
                style={styles.backButtonIcon}
                resizeMode="contain"
              />
            </Pressable>
          )}

          <View style={styles.profileHeaderWrapper}>
            <ProfileHeader image={image} name={name} />
          </View>

          {isEditable && (
            <Image
              source={editIcon}
              style={styles.editIcon}
              resizeMode="contain"
            />
          )}
        </PageHeader>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View style={[]}>
          <Text style={[styles.titlesText, GlobalStyles.subHeading]}>
            DIETARY RESTRICTIONS
          </Text>
          <View style={styles.descriptorList}>
            {Array.isArray(dietary) ? (
              dietary.map((desc, index) => (
                <View key={index} style={styles.descriptor}>
                  <Text style={styles.descriptorText}>{desc}</Text>
                </View>
              ))
            ) : (
              <View style={styles.descriptor}>
                <Text style={styles.descriptorText}>
                  {dietary ?? "None listed"}
                </Text>
              </View>
            )}
          </View>
          <Text style={[styles.titlesText, GlobalStyles.subHeading]}>
            ACCOMMODATIONS
          </Text>
          <View style={styles.descriptorList}>
            {accommodations.map((desc, index) => (
              <View key={index} style={styles.descriptor}>
                <Text style={styles.descriptorText}>{desc}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

export default UserProfile;
