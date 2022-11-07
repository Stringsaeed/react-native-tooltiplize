let useAnimatedStyles:
  | typeof import('./useAnimatedStyles').default
  | typeof import('./useReanimatedStyles').default;

// @ts-ignore
if (global._WORKLET) {
  useAnimatedStyles = require('./useReanimatedStyles').default;
} else {
  useAnimatedStyles = require('./useAnimatedStyles').default;
}

export default useAnimatedStyles;
