import React, { useMemo } from 'react';
import { View } from 'react-native';

import { getPointerStyles } from '../../utils';
import type { PointerProps } from '../../types';

import styles from './styles';

const PointerComponent: React.FC<PointerProps> = (props) => {
  const borderStyles = useMemo(() => getPointerStyles(props), [props]);

  return <View style={[styles.pointer, borderStyles]} />;
};

const Pointer = React.memo<PointerProps>(PointerComponent);
export default Pointer;
