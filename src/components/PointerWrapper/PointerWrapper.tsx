import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { getPointerWrapperStyle } from '../../utils';
import type { PointerProps, PointerWrapperProps } from '../../types';

import Pointer from '../Pointer';

import styles from './styles';

const _renderPointer = (props: PointerProps) => <Pointer {...props} />;

const PointerWrapper: React.FC<PointerWrapperProps> = ({
  tooltipLayout,
  renderPointer = _renderPointer,
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

  return <View style={pointerStyles}>{renderPointer(pointerProps)}</View>;
};

export default PointerWrapper;
