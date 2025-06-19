import RestaurantPreview from "./RestaurantPreview";

const LikesList = () => {
  return (
    <>
      <RestaurantPreview
        name="LA VINE BISTRO"
        image={require("../assets/images/LaVineBistro.jpg")}
        descriptors={[
          "$$",
          "Gluten-Free",
          "Organic Options",
          "Wheelchair Accessible",
          "Pet-Friendly",
          "Dine-in",
          "Buffet",
          "Happy Hour",
        ]}
        address="123 Main St, Ames, IA"
        rating={4}
      />

      <RestaurantPreview
        name="Hamburgerz"
        image={require("../assets/images/Hamburgerz.jpg")}
        descriptors={[
          "$$",
          "Organic Options",
          "Wheelchair Accessible",
          "Dine-in",
        ]}
        address="120 DUFF AVE Ames, IA, 50014"
        rating={3}
      />
    </>
  );
};

export default LikesList;
