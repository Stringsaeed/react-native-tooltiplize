let useAnimatedPresence:
  | typeof import('./useAnimatedPresence').default
  | typeof import('./useReanimated2Presence').default;

// @ts-ignore
if (global._WORKLET) {
  useAnimatedPresence = require('./useReanimated2Presence').default;
} else {
  useAnimatedPresence = require('./useAnimatedPresence').default;
}

export default useAnimatedPresence;
