import { Text, View } from 'react-native';
import styles from '../styles/infoBadgeStyles';

const InfoBadge = ({ address, rating }) => {
	const fullStar = '★';
	const emptyStar = '☆';

	const starDisplay = fullStar.repeat(rating) + emptyStar.repeat(5 - rating);

	return (
		<View style={styles.container}>
			<Text style={styles.stars}>{starDisplay}</Text>
			<Text style={styles.address}>{address}</Text>
		</View>
	);
};

export default InfoBadge;
