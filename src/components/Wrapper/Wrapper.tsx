import React from 'react';

import { useAnimatedPresence } from '../../hooks';
import type { WrapperProps } from '../../types';

import Overlay from '../Overlay';
import TooltipWrapper from '../TooltipWrapper';

const WrapperComponent: React.FC<WrapperProps> = (props) => {
  const {
    withOverlay,
    onDismiss,
    children,
    overlayStyle,
    ...tooltipWrapperProps
  } = props;
  const animatedPresence = useAnimatedPresence();

  const renderTooltipWrapper = () => (
    <TooltipWrapper
      {...tooltipWrapperProps}
      animatedPresence={animatedPresence}
    >
      {children}
    </TooltipWrapper>
  );

  if (withOverlay) {
    return (
      <Overlay
        overlayStyle={overlayStyle}
        animatedPresence={animatedPresence}
        onDismiss={onDismiss}
      >
        {renderTooltipWrapper()}
      </Overlay>
    );
  }
  return renderTooltipWrapper();
};

const Wrapper = React.memo<WrapperProps>(WrapperComponent);
export default Wrapper;
