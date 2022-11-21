import React from 'react';
import type { Icon } from '../type';
import ReceiptPaperBillIcon from './receipt-paper-bill.svg';

export const ReceiptPaperBill = (props: Icon) => (
  <ReceiptPaperBillIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
