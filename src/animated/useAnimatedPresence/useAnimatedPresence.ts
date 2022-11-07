import { usePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const { timing } = Animated;

type TimingConfig = Partial<Omit<Animated.TimingAnimationConfig, 'toValue'>>;

const defaultConfig: TimingConfig = {
  duration: 300,
};

export default function useAnimatedPresence(
  timingConfig: TimingConfig = defaultConfig
) {
  const animatedIsPresent = useRef(new Animated.Value(0)).current;

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    timing(animatedIsPresent, {
      toValue: isPresent ? 1 : 0,
      duration: timingConfig.duration,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && !isPresent && safeToRemove) {
        safeToRemove();
      }
    });
  }, [animatedIsPresent, isPresent, safeToRemove, timingConfig.duration]);

  return animatedIsPresent;
}
