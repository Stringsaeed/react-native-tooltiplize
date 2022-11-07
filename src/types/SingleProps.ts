import type { ReactNode } from 'react';
import type { Animated } from 'react-native';
import type Reanimated from 'react-native-reanimated';

export interface PositionProp {
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface AnimatedPresenceProp {
  animatedPresence:
    | (Animated.Value & Reanimated.SharedValue<number>)
    | undefined;
}

export interface RequiredChildrenProp {
  children: ReactNode;
}
