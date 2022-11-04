import React, { useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useLayout } from '../../hooks';
import type { TooltipWrapperProps } from '../../types';
import { getPointerWrapperStyle, getPositionStyles } from '../../utils';

import Pointer from '../Pointer';

import styles from './styles';

const TooltipWrapperComponent: React.FC<TooltipWrapperProps> = (props) => {
  const {
    children,
    position = 'bottom',
    animatedPresence,
    ...pointerProps
  } = props;

  const { onLayout, ...layout } = useLayout();

  const stylez = useAnimatedStyle(
    () => ({ opacity: animatedPresence?.value }),
    [animatedPresence]
  );

  const positionStyles = useMemo(() => {
    const { offset, childrenLayout, pointerStyle: pointerStyles } = props;

    return getPositionStyles({
      offset,
      childrenLayout,
      pointerStyle: pointerStyles,
      position,
      layout,
    });
  }, [layout, position, props]);

  const pointerStyles = useMemo(() => {
    return StyleSheet.flatten<ViewStyle>([
      styles.pointer,
      getPointerWrapperStyle({ position, ...pointerProps }, layout),
    ]);
  }, [position, pointerProps, layout]);

  return (
    <Animated.View
      onLayout={onLayout}
      style={[styles.tooltipWrapper, positionStyles, stylez]}
    >
      {children}
      <View style={pointerStyles}>
        <Pointer {...pointerProps} position={position} />
      </View>
    </Animated.View>
  );
};

const TooltipWrapper = React.memo<TooltipWrapperProps>(TooltipWrapperComponent);
export default TooltipWrapper;
