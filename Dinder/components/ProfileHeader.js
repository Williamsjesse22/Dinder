import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/ProfileHeaderStyles";

const ProfileHeader = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.profileImage} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ProfileHeader;
