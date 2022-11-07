import React from 'react';

import { useAnimatedPresence } from '../../animated';
import type { AnimatedPresenceProp, WrapperProps } from '../../types';

import Overlay from '../Overlay';
import TooltipWrapper from '../TooltipWrapper';

const WrapperComponent: React.FC<WrapperProps> = (props) => {
  const {
    withOverlay,
    onDismiss,
    children,
    overlayStyle,
    timingConfig,
    ...tooltipWrapperProps
  } = props;
  const animatedPresence = useAnimatedPresence(
    // @ts-ignore
    timingConfig
  ) as AnimatedPresenceProp['animatedPresence'];

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
