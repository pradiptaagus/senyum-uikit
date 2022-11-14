import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type DialogActionProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

/**
 * DialogAction component
 * @param {DialogActionProps} props
 * @returns JSX.Element
 */
const DialogAction = (props: DialogActionProps) => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default DialogAction;
