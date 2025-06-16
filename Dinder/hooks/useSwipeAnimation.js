import { Gesture } from 'react-native-gesture-handler';
import {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

export const useSwipeAnimation = (onSwipeComplete) => {
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);
	const isAnimatingOut = useSharedValue(false);

	// Animation style hook
	const animatedStyle = useAnimatedStyle(() => {
		const rotate = translateX.value / 20;
		const opacity = 1 - Math.min(Math.abs(translateX.value) / 300, 1);

		return {
			transform: [
				{ translateX: translateX.value },
				{ translateY: translateY.value },
				{ rotateZ: `${rotate}deg` },
			],
			opacity,
		};
	});

	// Gesture logic
	const panGesture = Gesture.Pan()
		.onUpdate((e) => {
			if (!isAnimatingOut.value) {
				translateX.value = e.translationX;
				translateY.value = e.translationY;
			}
		})
		.onEnd(() => {
			if (translateX.value > 150) {
				isAnimatingOut.value = true;
				translateX.value = withSpring(500, {}, () => {
					onSwipeComplete();
					reset();
				});
			} else if (translateX.value < -150) {
				isAnimatingOut.value = true;
				translateX.value = withSpring(-500, {}, () => {
					onSwipeComplete();
					reset();
				});
			} else {
				translateX.value = withSpring(0);
				translateY.value = withSpring(0);
			}
		});

	// Reset logic (JS side safe)
	const reset = () => {
		translateX.value = 0;
		translateY.value = 0;
		isAnimatingOut.value = false;
	};

	return {
		panGesture,
		animatedStyle,
	};
};
