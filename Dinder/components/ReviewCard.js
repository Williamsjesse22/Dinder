// src/components/ReviewCard.js
import { Text, View } from 'react-native';
import GlobalStyles from '../styles/Global';
import styles from '../styles/ReviewCardStyles';
import InfoBadge from './InfoBadge';
const ReviewCard = ({
	title,
	name,
	order,
	rating,
	review,
}) => {
	return (
		<View style={styles.card}>
			<Text style={styles.title}>{title}</Text>
			<InfoBadge address={''} rating={rating} />
			<Text style={[styles.name]}>{name}</Text>
			<Text style={[styles.order, GlobalStyles.subText]}>Ordered: {order}</Text>
			<Text style={styles.reviewText}>{review}</Text>
		</View>
	);
};

export default ReviewCard;
