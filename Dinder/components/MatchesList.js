import RestaurantPreview from "./RestaurantPreview";

const MatchesList = () => {
  return (
    <>
      <RestaurantPreview
        name="MATCHA MATES"
        image={require("../assets/images/MatchaMates.jpg")}
        descriptors={["$$", "Matcha", "Vegan", "Chill Vibes"]}
        address="789 Cool St, Ames, IA"
        rating={4.5}
      />

      <RestaurantPreview
        name="Fried Friends"
        image={require("../assets/images/FriedFriends.jpg")}
        descriptors={["$", "Fried", "Fast Casual"]}
        address="456 Fry St, Ames, IA"
        rating={3.5}
      />
    </>
  );
};

export default MatchesList;
