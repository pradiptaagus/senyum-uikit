import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { AppbarContext } from '.';
import { Color } from '../../base/Color';
import { Icon } from '../../base/Icon';

type AppbarActionProps = {
  icon: keyof typeof Icon;
  size?: number;
  color?: string;
  accessibilityLabel?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

/**
 * AppbarAction component
 * @param {AppbarActionProps} props
 * @returns JSX.Element
 */
const AppbarAction = (props: AppbarActionProps) => {
  const {
    icon,
    size = 24,
    color = Color.grey[6],
    accessibilityLabel,
    onPress,
    style,
    testID,
  } = props;

  const variant = React.useContext(AppbarContext);

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={[style]}
      testID={testID}
    >
      <SelectedIcon
        icon={icon}
        size={size}
        color={variant === 'primary' ? Color.light[1] : color}
      />
    </Pressable>
  );
};

type SelectedIconProps = {
  icon: keyof typeof Icon;
  size: number;
  color: string;
};
const SelectedIcon = (props: SelectedIconProps) => {
  if (props.icon) {
    const CurrentIcon = Icon[props.icon];
    return <CurrentIcon size={props.size} color={props.color} />;
  }
  return null;
};

export default AppbarAction;
