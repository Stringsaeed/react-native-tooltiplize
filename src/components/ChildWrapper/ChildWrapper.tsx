import React, { cloneElement, ReactElement, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import type { ChildWrapperProps } from '../../types';

import styles from './styles';

const ChildWrapper: React.FC<ChildWrapperProps> = ({
  childrenStyle,
  layout,
  children,
}) => {
  const stylez = useMemo(
    () =>
      StyleSheet.flatten([
        styles.wrapper,
        childrenStyle,
        { top: layout?.y, left: layout?.x },
      ]),
    [childrenStyle, layout?.x, layout?.y]
  );

  return <View style={stylez}>{cloneElement(children as ReactElement)}</View>;
};

export default ChildWrapper;
