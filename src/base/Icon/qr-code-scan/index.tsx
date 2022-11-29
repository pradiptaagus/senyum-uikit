import React from 'react';
import type { Icon } from '../type';
import QrCodeScanIcon from './qr-code-scan.svg';

export const QrCodeScan = (props: Icon) => (
  <QrCodeScanIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
