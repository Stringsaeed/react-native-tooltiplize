import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import type { OverlayProps } from '../../types';

const Overlay: React.FC<OverlayProps> = ({
  children,
  animatedPresence,
  onDismiss,
  overlayStyle,
}) => {
  const stylez = useAnimatedStyle(
    () => ({
      opacity: animatedPresence?.value,
    }),
    [animatedPresence]
  );

  return (
    <TouchableWithoutFeedback onPress={onDismiss}>
      <Animated.View style={[styles.overlay, overlayStyle, stylez]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
