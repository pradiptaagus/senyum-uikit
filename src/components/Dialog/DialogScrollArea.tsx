import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type DialogScrollAreaProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const DialogScrollArea = (props: DialogScrollAreaProps) => {
  const { children, style } = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 16,
    maxHeight: 300,
  },
});

export default DialogScrollArea;
