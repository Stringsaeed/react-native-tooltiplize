import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { getPointerWrapperStyle } from '../../utils';
import type { PointerWrapperProps } from '../../types';

import Pointer from '../Pointer';

import styles from './styles';

const PointerWrapper: React.FC<PointerWrapperProps> = ({
  tooltipLayout,
  ...pointerProps
}) => {
  const pointerStyles = useMemo(
    () =>
      StyleSheet.flatten([
        styles.wrapper,
        getPointerWrapperStyle(pointerProps, tooltipLayout),
      ]),
    [pointerProps, tooltipLayout]
  );

  return (
    <View style={pointerStyles}>
      <Pointer {...pointerProps} />
    </View>
  );
};

export default PointerWrapper;
