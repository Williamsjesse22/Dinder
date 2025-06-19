import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCustomFonts } from "../assets/fonts/fonts";
import "../components/FontOverride";
import AuthNavigator from "../navigation/AuthNavigator";

export default function Index() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthNavigator />
    </GestureHandlerRootView>
  );
}
