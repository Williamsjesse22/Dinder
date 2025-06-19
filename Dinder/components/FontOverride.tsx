const defaultFontFamily = 'VinaSans_400Regular';

const oldTextRender = (Text as any).render;
(Text as any).render = function (...args: any[]) {
	const origin = oldTextRender.call(this, ...args);
	const originalStyle = origin.props.style || [];
	const flattened = Array.isArray(originalStyle)
		? originalStyle
		: [originalStyle];

	const alreadyHasFont = flattened.some((s) => s?.fontFamily != null);

	return {
		...origin,
		props: {
			...origin.props,
			style: [
				...flattened,
				!alreadyHasFont && { fontFamily: defaultFontFamily },
			].filter(Boolean),
		},
	};
};
