// src/components/PageHeader.js
import React from 'react';
import { Dimensions, View } from 'react-native';
import NavSpike from '../assets/images/navSpike.svg';
import styles from '../styles/PageHeaderStyles';

const PageHeader = ({ heightRatio, width, children, text, rounded }) => {
	const spikeWidth = 30; // px from Figma
	const spikeCount = Math.ceil(width / spikeWidth);
	const spikes = Array.from({ length: spikeCount }, (_, i) => (
		<NavSpike
			key={`spike-${i}`}
			width={30}
			height={30}
			style={styles.spike}
		/>
	));

	return (
		<View>
			<View
				style={[
					styles.headerContainer,
					{ height: Dimensions.get('window').height * heightRatio,
						borderTopLeftRadius: rounded ? 15 : 0,
						borderTopRightRadius: rounded ? 15 : 0,
						borderBottomLeftRadius: rounded ? 5 : 0,
						borderBottomRightRadius: rounded ? 5 : 0,
					 },
				]}>
				{children && (
					<View style={styles.headerContent}>
						{children}
					</View>
				)}
			</View>
			<View style={styles.spikeRow}>{spikes}</View>
		</View>
	);
};

export default PageHeader;
