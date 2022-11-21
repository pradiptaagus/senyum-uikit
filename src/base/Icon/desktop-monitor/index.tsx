import React from 'react';
import type { Icon } from '../type';
import DesktopMonitorIcon from './desktop-monitor.svg';

export const DesktopMonitor = (props: Icon) => (
  <DesktopMonitorIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
