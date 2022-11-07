import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import type { OverlayProps } from '../../types';
import { useAnimatedStyles, AnimatedView } from '../../animated';

const Overlay: React.FC<OverlayProps> = ({
  children,
  animatedPresence,
  onDismiss,
  overlayStyle,
}) => {
  const stylez = useAnimatedStyles(animatedPresence);

  return (
    <TouchableWithoutFeedback onPress={onDismiss}>
      <AnimatedView style={[styles.overlay, overlayStyle, stylez]}>
        {children}
      </AnimatedView>
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
