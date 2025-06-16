import { Text, TextInput } from 'react-native';

const defaultFontFamily = 'VinaSans_400Regular';

// Cast Text to `any` so we can override internal render method
const oldTextRender = (Text as any).render;
(Text as any).render = function (...args: any[]) {
	const origin = oldTextRender.call(this, ...args);
	return {
		...origin,
		props: {
			...origin.props,
			style: [origin.props.style, { fontFamily: defaultFontFamily }],
		},
	};
};

const oldInputRender = (TextInput as any).render;
(TextInput as any).render = function (...args: any[]) {
	const origin = oldInputRender.call(this, ...args);
	return {
		...origin,
		props: {
			...origin.props,
			style: [origin.props.style, { fontFamily: defaultFontFamily }],
		},
	};
};
