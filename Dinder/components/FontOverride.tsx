import { Text } from "react-native";

let hasOverridden = false;

export const applyFontOverride = (fontFamily: string) => {
  if (hasOverridden) return;
  hasOverridden = true;

  const oldRender = (Text as any).render;

  (Text as any).render = function (...args: any[]) {
    const origin = oldRender.call(this, ...args);
    const originalStyle = origin.props.style || [];
    const flattened = Array.isArray(originalStyle)
      ? originalStyle
      : [originalStyle];

    const alreadyHasFont = flattened.some((s) => s?.fontFamily != null);

    return {
      ...origin,
      props: {
        ...origin.props,
        style: [...flattened, !alreadyHasFont && { fontFamily }].filter(
          Boolean
        ),
      },
    };
  };
};
