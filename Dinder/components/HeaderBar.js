import { Image, Pressable, Text, View, Dimensions } from "react-native";
import locationIcon from "../assets/images/locationIcon.png";
import GlobalStyles from "../styles/Global";
import styles from "../styles/HomeScreenStyles";
import groupStyles from "../styles/GroupScrollerStyles";
import { useNavigation } from "@react-navigation/native";

const HeaderBar = ({
  selectedGroup,
  setShowGroupSelector,
  onLongPressWithPosition,
  timeLabel,
  onOpenTimePopup,
}) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.groupHeading}>
      {/* Location Button */}
      <Pressable onPress={() => alert("Location picker coming soon!")}>
        <View style={styles.locationGroup}>
          <Image source={locationIcon} />
          <Text style={[styles.locationText, GlobalStyles.subText]}>
            Ames, IA
          </Text>
        </View>
      </Pressable>

      {/* Open Now Button */}
      <Pressable onPress={onOpenTimePopup} style={styles.openNowButton}>
        <Text style={styles.openNowText}>{timeLabel}</Text>
      </Pressable>

      {/* Group Selector */}
      <Pressable
        onLongPress={(e) => {
          const { pageX, pageY } = e.nativeEvent;
          onLongPressWithPosition?.(pageX, pageY);
        }}
        onPress={() =>
          navigation.navigate("GroupProfile", {
            name: selectedGroup.name,
            image: selectedGroup.image,
            members: selectedGroup.members,
          })
        }
        style={[
          groupStyles.groupItem,
          {
            width: screenWidth * 0.15,
            height: screenWidth * 0.15,
          },
        ]}
      >
        <Image
          source={selectedGroup.image}
          style={[
            groupStyles.groupImage,
            {
              width: screenWidth * 0.15,
              height: screenWidth * 0.15,
            },
          ]}
          resizeMode="cover"
        />
        <Text style={groupStyles.groupName}>{selectedGroup.name}</Text>
      </Pressable>
    </View>
  );
};

export default HeaderBar;
