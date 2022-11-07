import { useMemo } from 'react';
import type Animated from 'react-native-reanimated';

export default function useReanimatedStyles(
  animatedPresence?: Animated.SharedValue<number>
) {
  const stylez = useMemo(
    () => ({
      opacity: animatedPresence?.value,
    }),
    [animatedPresence]
  );

  return stylez;
}
