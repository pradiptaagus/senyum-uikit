import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { FontSize } from '../../base/Font';
import { Color } from '../../base/Color';
import { ThemeContext } from '../../core/Provider';

type DialogTitleProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

/**
 * DialogTitle component
 * @param {DialogTitleProps} props
 * @returns JSX.Element
 */
const DialogTitle = (props: DialogTitleProps) => {
  const { children, style } = props;

  return (
    <ThemeContext.Consumer>
      {(ctx) => (
        <Text
          style={[
            styles.title,
            {
              fontFamily: ctx.fonts.demiBold.fontFamily,
              fontWeight: ctx.fonts.demiBold.fontWeight,
            },
            style,
          ]}
        >
          {children}
        </Text>
      )}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: FontSize[16],
    fontWeight: '600',
    color: Color.grey[2],
  },
});

export default DialogTitle;
