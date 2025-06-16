// src/components/SVGSpike.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SVGSpike = ({ width = 30, height = 30 }) => (
	<Svg width={width} height={height} viewBox="0 0 22 19">
		<Path
			d="M14.4641 17C12.9245 19.6667 9.0755 19.6667 7.5359 17L1.47372 6.5C-0.0658823 3.83333 1.85862 0.5 4.93782 0.5L17.0622 0.5C20.1414 0.5 22.0659 3.83334 20.5263 6.5L14.4641 17Z"
			fill="#F33534"
		/>
	</Svg>
);

export default SVGSpike;
