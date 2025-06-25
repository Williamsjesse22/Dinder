// src/screens/LikesScreen.js
import { View, StatusBar, ScrollView, Dimensions } from "react-native";
import styles from "../styles/LikesMatchesStyles";
import PageHeader from "@/components/PageHeader";
import BottomNavBar from "@/components/bottomNavBar";
import DualOptionToggle from "../components/LikesMatchesToggle";
import LikesList from "../components/LikesList";
import MatchesList from "../components/MatchesList";
import { useState } from "react";

const LikesScreen = () => {
  const [selected, setSelected] = useState("Likes");

  return (
    <View style={styles.likesmatches}>
      <View>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <PageHeader heightRatio={0.15} width={Dimensions.get("window").width}>
          <DualOptionToggle
            leftLabel="Likes"
            rightLabel="Matches"
            selected={selected}
            onSelect={setSelected}
          />
        </PageHeader>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {selected === "Likes" ? <LikesList /> : <MatchesList />}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

export default LikesScreen;
