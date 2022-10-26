import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Color } from '../../base/Color';
import { Icon } from '../../base/Icon';

type DialogCloseProps = {
  onPress?: () => void;
};

/**
 * DialogClose component
 * @param {DialogCloseProps} props
 * @returns JSX.Element
 */
const DialogClose = (props: DialogCloseProps) => {
  const { onPress } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon.Close color={Color.grey[5]} size="32" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    top: 16,
    bottom: 16,
  },
});

export default DialogClose;
