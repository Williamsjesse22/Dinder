import GlobalStyles from '@/styles/Global';
import styles from '@/styles/RestaurantInfoStyles';
import { useNavigation } from '@react-navigation/native';
import {
	Image,
	Pressable,
	ScrollView,
	StatusBar,
	Text,
	View,
} from 'react-native';
import backbutton from '../assets/images/backbutton.png';
import PageHeader from '../components/PageHeader';
import RestaurantPreview from '../components/RestaurantPreview';
import ReviewCard from '../components/ReviewCard';

const RestaurantInfo = () => {
	const navigation = useNavigation();
	return (
		<View style={[styles.restInfo]}>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			<PageHeader heightRatio={0.1} />
			<ScrollView>
				<Pressable onPress={() => navigation.navigate('Home')}>
					<Image
						source={backbutton}
						style={GlobalStyles.backbutton}
					/>
				</Pressable>

				<RestaurantPreview
					name="LA VINE BISTRO"
					image={require('../assets/images/LaVineBistro.jpg')}
					descriptors={[
						'$$',
						'Gluten-Free',
						'Organic Options',
						'Wheelchair Accessible',
						'Pet-Friendly',
						'Dine-in',
						'Buffet',
						'Happy Hour',
					]}
					address="123 Main St, Ames, IA"
					rating={4}
				/>
				<View style={styles.headerSection}>
					<Text style={[GlobalStyles.title, styles.header]}>
						Menu
					</Text>
					<View style={styles.menuImageContainer}>
						<Image
							source={require('../assets/images/sampleMenu.jpg')} // placeholder for now
							style={styles.menuImage}
						/>
					</View>
				</View>
				<View style={styles.headerSection}>
					<Text style={[GlobalStyles.title, styles.header]}>
						Reviews
					</Text>
					<View>
						<ReviewCard
							title="Absolutely LOVED"
							name="Mr Grizzly"
							order="Philly Cheesesteak"
							rating="4"
							review="This is the best sandwhich that has set bun on this planet. There is nothing like it anywhere in the world and I would eat this for every meal everyday for the rest of my life."></ReviewCard>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default RestaurantInfo;
