import type { ComponentProps, ComponentType } from 'react';
import type { AnimateStyle } from 'react-native-reanimated';
import type { ViewProps, ViewStyle, Animated } from 'react-native';

interface Props extends Omit<ViewProps, 'style'> {
  style?:
    | AnimateStyle<ViewStyle>
    | ComponentProps<typeof Animated.View>['style'];
}

let AnimatedView: ComponentType<Props>;

// @ts-ignore
if (global._WORKLET) {
  AnimatedView = require('./Reanimated').default;
} else {
  AnimatedView = require('./Animated').default;
}

export default AnimatedView;
