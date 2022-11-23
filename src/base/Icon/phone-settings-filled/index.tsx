import React from 'react';
import type { Icon } from '../type';
import PhoneSettingsFilledIcon from './phone-settings-filled.svg';

export const PhoneSettingsFilled = (props: Icon) => (
  <PhoneSettingsFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
