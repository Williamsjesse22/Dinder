import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCustomFonts } from "../assets/fonts/fonts";
import { applyFontOverride } from "../components/FontOverride";
import AuthNavigator from "../navigation/AuthNavigator";

export default function Index() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) return null;

  applyFontOverride("VinaSans_400Regular");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthNavigator />
    </GestureHandlerRootView>
  );
}
