import React from "react";
import { View, Text, Linking, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/CreditsScreenStyles";

const CreditsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.header}>About / Credits</Text>
        <Text style={styles.bodyText}>
          This app uses the Lookscout - Outline Icon Set under the Creative
          Commons Attribution 4.0 License (CC BY 4.0).
        </Text>
        <Text style={styles.bodyText}>
          You can find the original icon set here:
        </Text>
        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://www.figma.com/community/file/1266478139550045348"
            )
          }
        >
          <Text style={styles.link}>Lookscout - Outline Icon Set on Figma</Text>
        </Pressable>
        <Text style={styles.bodyText}>
          More details and license terms available at:
        </Text>
        <Pressable
          onPress={() =>
            Linking.openURL("https://creativecommons.org/licenses/by/4.0/")
          }
        >
          <Text style={styles.link}>CC BY 4.0 License</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreditsScreen;
