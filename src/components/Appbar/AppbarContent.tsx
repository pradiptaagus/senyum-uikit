import React, { useContext } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { AppbarContext } from '.';
import { Color } from '../../base/Color';
import { FontSize } from '../../base/Font';
import { ThemeContext } from '../../core/Provider';

type AppbarContentProps = {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

/**
 * AppbarContent component
 * @param {AppbarContentProps} props
 * @returns JSX.Element
 */
const AppbarContent = (props: AppbarContentProps) => {
  const { title, titleStyle, style, testID } = props;

  const variant = useContext(AppbarContext);

  return (
    <ThemeContext.Consumer>
      {(ctx) => (
        <View style={[styles.container, style]}>
          <Text
            style={[
              styles.title,
              variant === 'primary' && styles.primaryAppbarContentTitle,
              {
                fontFamily: ctx.fonts.demiBold.fontFamily,
                fontWeight: ctx.fonts.demiBold.fontWeight,
              },
              titleStyle,
            ]}
            testID={testID}
          >
            {title}
          </Text>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize[18],
    textAlign: 'center',
    color: Color.grey[1],
    fontWeight: '600',
  },
  primaryAppbarContentTitle: {
    color: Color.light[1],
  },
});

export default AppbarContent;
