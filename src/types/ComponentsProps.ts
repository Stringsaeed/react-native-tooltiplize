import type { ReactNode } from 'react';
import type { LayoutRectangle, ViewStyle } from 'react-native';
import type { WithTimingConfig } from 'react-native-reanimated';

import type {
  AnimatedPresenceProp,
  PositionProp,
  RequiredChildrenProp,
} from './SingleProps';

export interface PointerProps extends PositionProp {
  pointerStyle?: { width?: number; height?: number };
  pointerColor?: string;
}

export interface OverlayProps
  extends RequiredChildrenProp,
    AnimatedPresenceProp {
  onDismiss?: () => void;
  overlayStyle?: ViewStyle;
}

export interface TooltipWrapperProps
  extends RequiredChildrenProp,
    AnimatedPresenceProp,
    PointerProps {
  offset?: number;
  childrenLayout?: LayoutRectangle;
}

export interface WrapperProps
  extends RequiredChildrenProp,
    Omit<TooltipWrapperProps, 'children' | 'animatedPresence'>,
    Pick<OverlayProps, 'onDismiss' | 'overlayStyle'> {
  withOverlay?: boolean;
  timingConfig?: WithTimingConfig;
}

export interface TooltipProps
  extends Omit<WrapperProps, 'children' | 'childrenLayout'> {
  children: ReactNode;
  isVisible: boolean;
  renderContent: () => ReactNode;
  childrenStyle?: ViewStyle;
}
