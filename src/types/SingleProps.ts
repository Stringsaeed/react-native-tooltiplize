import type { ReactNode } from 'react';
import type { SharedValue } from 'react-native-reanimated';

export interface PositionProp {
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface AnimatedPresenceProp {
  animatedPresence?: SharedValue<number>;
}

export interface RequiredChildrenProp {
  children: ReactNode;
}
