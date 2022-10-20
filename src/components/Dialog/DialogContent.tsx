import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type DialogContentProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

/**
 * DialogContent component
 * @param {DialogContentProps} props
 * @returns JSX.Element
 */
const DialogContent = (props: DialogContentProps) => {
  const { children, style } = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default DialogContent;
