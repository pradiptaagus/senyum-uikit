import React from 'react';
import type { Icon } from '../type';
import ReceiptPaperBillFilledIcon from './receipt-paper-bill-filled.svg';

export const ReceiptPaperBillFilled = (props: Icon) => (
  <ReceiptPaperBillFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
