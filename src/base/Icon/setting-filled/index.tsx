import React from 'react';
import type { Icon } from '../type';
import SettingFilledIcon from './setting-filled.svg';

export const SettingFilled = (props: Icon) => (
  <SettingFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
