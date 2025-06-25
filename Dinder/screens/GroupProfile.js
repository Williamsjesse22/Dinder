import React from "react";
import { View, Text, ScrollView, Pressable, Image, Dimensions } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import PageHeader from "@/components/PageHeader";
import ProfileHeader from "@/components/ProfileHeader";
import styles from "../styles/ProfileStyles";
import backButton from "../assets/images/backbutton.png";
import editIcon from "../assets/images/editIcon.png";
import GlobalStyles from "@/styles/Global";

const GroupProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { name = "Group Name", image, members = [] } = route.params || {};

  const dietarySet = new Set();
  const accommodationsSet = new Set();

  members.forEach((member) => {
    Array.isArray(member.dietary)
      ? member.dietary.forEach((d) => dietarySet.add(d))
      : dietarySet.add(member.dietary);
    Array.isArray(member.accommodations)
      ? member.accommodations.forEach((a) => accommodationsSet.add(a))
      : accommodationsSet.add(member.accommodations);
  });

  const dietaryList = Array.from(dietarySet);
  const accommodationsList = Array.from(accommodationsSet);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 90 }}
    >
      <PageHeader heightRatio={0.3} width={Dimensions.get('window').width}>
        <View style={styles.profileHeaderWrapper}>
          <ProfileHeader image={image} name={name} />
        </View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.backButtonWrapper}
      >
        <Image
          source={backButton}
          resizeMode="contain"
        />
      </Pressable>
      <Image source={editIcon} style={styles.editIcon} resizeMode="contain" />
      </PageHeader>



      <View style={styles.infoContainer}>
        <Text style={[styles.titlesText, GlobalStyles.subHeading]}>
          Group Members
        </Text>
        <View style={styles.memberCardGrid}>
          {members.map((member, index) => (
            <View key={index} style={styles.memberCard}>
              <Image source={member.image} style={styles.memberImage} />
              <Text style={styles.memberName}>{member.name}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.titlesText, GlobalStyles.subHeading]}>
          Dietary Restrictions
        </Text>
        <View style={styles.descriptorList}>
          {dietaryList.map((item, index) => (
            <View key={index} style={styles.descriptor}>
              <Text style={styles.descriptorText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.titlesText, GlobalStyles.subHeading]}>
          Accommodations
        </Text>
        <View style={styles.descriptorList}>
          {accommodationsList.map((item, index) => (
            <View key={index} style={styles.descriptor}>
              <Text style={styles.descriptorText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default GroupProfile;
