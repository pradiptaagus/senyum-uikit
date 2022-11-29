import React from 'react';
import type { Icon } from '../type';
import PhoneSettingsIcon from './phone-settings.svg';

export const PhoneSettings = (props: Icon) => (
  <PhoneSettingsIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
