import type { ReactNode } from 'react';
import type {
  LayoutRectangle,
  ViewStyle,
  Animated,
  StyleProp,
} from 'react-native';
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
  overlayStyle?: StyleProp<ViewStyle>;
}

export interface PointerWrapperProps extends PointerProps {
  tooltipLayout?: LayoutRectangle;
}

export interface TooltipWrapperProps
  extends RequiredChildrenProp,
    AnimatedPresenceProp,
    Omit<PointerWrapperProps, 'tooltipLayout'> {
  offset?: number;
  childrenLayout?: LayoutRectangle;
}

export interface WrapperProps
  extends RequiredChildrenProp,
    Omit<TooltipWrapperProps, 'children' | 'animatedPresence'>,
    Pick<OverlayProps, 'onDismiss' | 'overlayStyle'> {
  withOverlay?: boolean;
  timingConfig?: WithTimingConfig | Animated.TimingAnimationConfig;
}

export interface ChildWrapperProps extends RequiredChildrenProp {
  layout?: LayoutRectangle;
  childrenStyle?: StyleProp<ViewStyle>;
}

export interface TooltipProps
  extends Omit<WrapperProps, 'children' | 'childrenLayout'>,
    Pick<ChildWrapperProps, 'childrenStyle'> {
  children: ReactNode;
  isVisible: boolean;
  renderContent: () => ReactNode;
}
