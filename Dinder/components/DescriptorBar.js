import { Dimensions, Text, View } from 'react-native';
import GlobalStyles from '../styles/Global';
import styles from '../styles/HomeScreenStyles';

const DescriptorBar = ({ descriptors }) => {
	const screenWidth = Dimensions.get('window').width;
	const availableWidth = screenWidth * 0.9;
	const pillPadding = 24;
	const pillMargin = screenWidth * 0.025;
	const estimatedCharWidth = 8;

	let currentWidth = 0;
	let limitedDescriptors = [];
	for (let desc of descriptors) {
		const pillWidth =
			desc.length * estimatedCharWidth + pillPadding + pillMargin;
		if (currentWidth + pillWidth > availableWidth) break;
		limitedDescriptors.push(desc);
		currentWidth += pillWidth;
	}

	return (
		<View style={styles.descriptorList}>
			{limitedDescriptors.map((desc, index) => (
				<View key={index} style={styles.descriptor}>
					<Text style={[styles.descriptorText, GlobalStyles.subText]}>
						{desc}
					</Text>
				</View>
			))}
		</View>
	);
};

export default DescriptorBar;
