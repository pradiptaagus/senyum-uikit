import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';
import type { BadgeProps } from './type';
import { ThemeContext } from '../../core/Provider';

const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
    minWidth: Spacing['72'],
    borderRadius: Spacing['6'],
    paddingHorizontal: Spacing['10'],
  },
  text: {
    color: Color.light['1'],
    fontSize: Spacing['12'],
    lineHeight: Spacing['20'],
    marginVertical: Spacing['4'],
    fontWeight: '600',
  },
});

const Badge = (props: BadgeProps) => {
  const {
    visible = true,
    children,
    variant,
    numberOfLines = 1,
    style,
    testID,
  } = props;

  const bgColor = useMemo(() => {
    switch (variant) {
      case 'error':
        return Color.red[1];
      case 'warning':
        return Color.yellow[1];
      case 'success':
        return Color.green[1];
      default:
        return Color.green[1];
    }
  }, [variant]);

  const composedTestIDs = useMemo(() => {
    if (testID) {
      return {
        container: `${testID}-container`,
        text: `${testID}-text`,
      };
    }
    return undefined;
  }, [testID]);

  if (!visible) {
    return null;
  }

  return (
    <ThemeContext.Consumer>
      {(ctx) => (
        <View
          testID={composedTestIDs?.container}
          style={[styles.default, { backgroundColor: bgColor }, style]}
        >
          <Text
            testID={composedTestIDs?.text}
            numberOfLines={numberOfLines}
            style={[
              styles.text,
              {
                fontFamily: ctx.fonts.demiBold.fontFamily,
                fontWeight: ctx.fonts.demiBold.fontWeight,
              },
            ]}
          >
            {children}
          </Text>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Badge;
