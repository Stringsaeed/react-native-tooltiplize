import { usePresence } from 'framer-motion';
import {
  runOnJS,
  useDerivedValue,
  withSequence,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

export default function useReanimated2Presence(
  timingConfig: WithTimingConfig = { duration: 50 }
) {
  const [isPresent, safeToRemove] = usePresence();

  const animatedIsPresent = useDerivedValue(() => {
    if (isPresent) {
      return withSequence(
        withTiming(0, { duration: 0 }),
        withTiming(1, timingConfig)
      );
    } else {
      return withTiming(0, timingConfig, () => {
        if (safeToRemove) {
          runOnJS(safeToRemove)();
        }
      });
    }
  }, [isPresent]);

  return animatedIsPresent;
}
