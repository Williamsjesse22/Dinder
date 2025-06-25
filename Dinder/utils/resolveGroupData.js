import data from "../assets/data/data.json";

const memberImageMap = {
  TonyBradley: require("../assets/images/TonyBradley.jpg"),
  StacyBradley: require("../assets/images/StacyBradley.jpg"),
  SamanthaJones: require("../assets/images/SamanthaJones.jpg"),
  MichelleCooper: require("../assets/images/MichelleCooper.jpg"),
  MasonJames: require("../assets/images/MasonJames.jpg"),
  BobbyFrieder: require("../assets/images/BobbyFrieder.jpg"),
};

const groupImageMap = {
  DateNightGroup: require("../assets/images/DateNightGroup.jpg"),
  BookClubGroup: require("../assets/images/BookClubGroup.jpg"),
  GirlsNightGroup: require("../assets/images/GirlsNightGroup.jpg"),
  FriendsHangoutGroup: require("../assets/images/FriendsHangoutGroup.jpg"),
  TravelGroup: require("../assets/images/TravelGroup.jpg"),
  BestiesGroup: require("../assets/images/BestiesGroup.jpg"),
};


// 1. When you have a member object and want to attach its image
export const resolveMemberFromObject = (member) => ({
  ...member,
  image: memberImageMap[member.imageKey],
});

// 2. When you only have the key (used in groups' memberKeys)
export const resolveMember = (key) => {
  const member = data.members.find((m) => m.key === key);
  return {
    ...member,
    image: memberImageMap[member.imageKey],
  };
};

export const getResolvedGroups = () =>
  data.groups.map((group) => {
    return {
      name: group.name,
      image: groupImageMap[group.imageKey],
      members: group.memberKeys.map(resolveMember),
    };
  });
