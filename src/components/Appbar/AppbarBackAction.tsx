import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { Icon } from '../../base/Icon';
import { Color } from '../../base/Color';
import { AppbarContext } from '.';

type AppbarBackActionProps = {
  onPress: () => void;
  testID?: string;
};

/**
 * AppbarBackAction component
 * @param {AppbarBackActionProps} props
 * @returns JSX.Element
 */
const AppbarBackAction = (props: AppbarBackActionProps) => {
  const variant = useContext(AppbarContext);

  return (
    <Pressable onPress={props.onPress} testID={props.testID}>
      <Icon.ArrowLeft
        size="24"
        color={variant === 'primary' ? Color.light[1] : Color.grey[6]}
      />
    </Pressable>
  );
};

export default AppbarBackAction;
