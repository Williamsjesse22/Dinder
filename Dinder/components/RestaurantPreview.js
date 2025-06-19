// src/components/RestaurantPreview.js
import GlobalStyles from '@/styles/Global';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/RestaurantPreviewStyles';
import InfoBadge from './InfoBadge';

const RestaurantPreview = ({ name, image, descriptors, address, rating }) => {
	return (
		<View style={styles.container}>
			<Text style={GlobalStyles.subTitle}>{name}</Text>
			<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} />
			</View>
			<View style={styles.descriptorList}>
				{descriptors.map((desc, idx) => (
					<View key={idx} style={styles.descriptor}>
						<Text style={[styles.descriptorText, GlobalStyles.smallerHeadings]}>{desc}</Text>
					</View>
				))}
			</View>
			<InfoBadge address={address} rating={rating} />
		</View>
	);
};

export default RestaurantPreview;
