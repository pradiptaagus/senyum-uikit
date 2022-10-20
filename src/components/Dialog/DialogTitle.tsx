import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { FontSize } from '../../base/Font';
import { Color } from '../../base/Color';

type DialogTitleProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

/**
 * DialogTitle component
 * @param {DialogTitleProps} props
 * @returns JSX.Element
 */
const DialogTitle = (props: DialogTitleProps) => {
  const { children, style, titleStyle } = props;

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: Color.grey[7],
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    textAlign: 'center',
    fontSize: FontSize[16],
    fontWeight: '600',
    color: Color.grey[2],
  },
});

export default DialogTitle;
