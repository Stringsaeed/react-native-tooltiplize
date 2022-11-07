import type { Animated } from 'react-native';

export default function useAnimatedStyles(
  animatedPresence?: Animated.AnimatedValue
) {
  const stylez = {
    opacity: animatedPresence?.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return stylez;
}
