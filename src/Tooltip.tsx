import React, { cloneElement, Fragment } from 'react';
import { View } from 'react-native';
import { Portal } from '@gorhom/portal';
import { AnimatePresence } from 'framer-motion';

import { useLayout } from './hooks';

import type { TooltipProps } from './types';
import { Wrapper, ChildWrapper } from './components';

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    isVisible,
    renderContent,
    withOverlay,
    childrenStyle,
    ...restProps
  } = props;
  const { onLayout, ...layout } = useLayout();

  return (
    <Fragment>
      <View style={childrenStyle} onLayout={onLayout}>
        {cloneElement(children as React.ReactElement)}
      </View>
      <Portal>
        <AnimatePresence>
          {isVisible && (
            <Fragment>
              <Wrapper
                {...restProps}
                withOverlay={withOverlay}
                childrenLayout={layout}
              >
                {renderContent()}
              </Wrapper>
              {withOverlay && (
                <ChildWrapper childrenStyle={childrenStyle} layout={layout}>
                  {children}
                </ChildWrapper>
              )}
            </Fragment>
          )}
        </AnimatePresence>
      </Portal>
    </Fragment>
  );
};

export default Tooltip;
