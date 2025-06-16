import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from '../styles/HomeScreenStyles';

type Props = {
	name: string;
	image: any;
};

const SwipeCard: React.FC<Props> = ({ onPress, image }) => {
	return (
		<View style={styles.card}>
			<Pressable onPress={onPress}>
				<Image source={image} style={styles.image} resizeMode="cover" />
			</Pressable>
		</View>
	);
};

export default SwipeCard;
