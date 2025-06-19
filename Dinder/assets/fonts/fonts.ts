import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { VinaSans_400Regular } from '@expo-google-fonts/vina-sans';
import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
	return useFonts({
		Roboto: Roboto_400Regular, // <— This registers it under "Roboto"
		VinaSans_400Regular,
	});
};
