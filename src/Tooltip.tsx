import React, { cloneElement, Fragment } from 'react';
import { Portal } from '@gorhom/portal';
import { AnimatePresence } from 'framer-motion';
import { StyleSheet, View } from 'react-native';

import { useLayout } from './hooks';

import { Wrapper } from './components';
import type { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, isVisible, renderContent, childrenStyle, ...restProps } =
    props;
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
              <Wrapper {...restProps} childrenLayout={layout}>
                {renderContent()}
              </Wrapper>
              {restProps?.withOverlay && (
                <View
                  style={[
                    styles.absolute,
                    childrenStyle,
                    { top: layout.y, left: layout.x },
                  ]}
                >
                  {cloneElement(children as React.ReactElement)}
                </View>
              )}
            </Fragment>
          )}
        </AnimatePresence>
      </Portal>
    </Fragment>
  );
};

export default Tooltip;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
});
