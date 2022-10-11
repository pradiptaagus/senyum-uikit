import React from 'react';
import type { Icon } from '../type';
import SettingIcon from './setting.svg';

export const Setting = (props: Icon) => (
  <SettingIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
