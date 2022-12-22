import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Color } from '../../base/Color';
import { Shadow } from '../../base/Shadow';
import AppbarBackAction from './AppbarBackAction';
import AppbarContent from './AppbarContent';
import AppbarAction from './AppbarAction';

type AppbarVariant = 'default' | 'primary';

type AppbarProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: AppbarVariant;
  testID?: string;
};

export const AppbarContext = React.createContext<AppbarVariant>('default');

/**
 * Appbar component
 * @param {AppbarProps} props
 * @returns JSX.Element
 */
const Appbar = (props: AppbarProps) => {
  const { children, style, variant = 'default', testID } = props;

  return (
    <View
      style={[
        styles.container,
        Shadow[1],
        variant === 'primary' && styles.primaryAppbarVariant,
        style,
      ]}
      testID={testID}
    >
      <AppbarContext.Provider value={variant}>
        {React.Children.toArray(children).map((child, i) => {
          if (i === 1 && React.Children.toArray(children).length >= 2) {
            if (React.isValidElement(child) && child.type === AppbarContent) {
              return React.cloneElement(child, {
                ...child.props,
                variant,
                style: [
                  {
                    paddingLeft: -24,
                  },
                  child.props.style,
                ],
              } as React.Attributes);
            }
          }
          return child;
        })}
      </AppbarContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.light[1],
    height: 56,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  primaryAppbarVariant: {
    backgroundColor: Color.blue[1],
  },
});

Appbar.BackAction = AppbarBackAction;
Appbar.Content = AppbarContent;
Appbar.Action = AppbarAction;

export default Appbar;
