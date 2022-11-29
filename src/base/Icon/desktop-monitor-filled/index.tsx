import React from 'react';
import type { Icon } from '../type';
import DesktopMonitorFilledIcon from './desktop-monitor-filled.svg';

export const DesktopMonitorFilled = (props: Icon) => (
  <DesktopMonitorFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
