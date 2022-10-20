import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Icon } from '../../base/Icon';

type DialogIconProps = {
  color?: string;
  icon: keyof typeof Icon;
  size?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * DialogIcon component
 * @param {DialogIconProps} props
 * @returns JSX.Element
 */
const DialogIcon = (props: DialogIconProps) => {
  const { icon, size = '72', color, style } = props;

  return (
    <View style={[styles.container, style]}>
      <SelectedIcon icon={icon} size={size} color={color} />
    </View>
  );
};

type IconProps = {
  color?: string;
  icon?: keyof typeof Icon;
  size?: string;
};
const SelectedIcon = (props: IconProps) => {
  const { icon, size = '72', color } = props;

  if (icon) {
    const CurrentIcon = Icon[icon];
    return <CurrentIcon size={size} color={color} />;
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DialogIcon;
