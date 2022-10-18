import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { Spacing } from '../../base/Spacing';
import { Color } from '../../base/Color';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogIcon from './DialogIcon';
import DialogAction from './DialogAction';

type DialogProps = {
  dismissable?: boolean;
  onDismis?: () => void;
  visible?: boolean;
  children: React.ReactNode;
};

/**
 * Dialog component
 * @param {DialogProps} props
 * @returns JSX.Element
 */
const Dialog = (props: DialogProps) => {
  const { dismissable = true, onDismis, visible, children } = props;

  console.log(React.Children.toArray(children));

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <Pressable
        style={styles.modalOverlay}
        onPress={dismissable ? onDismis : undefined}
      />
      <View style={styles.wrapper}>
        <View style={styles.modalContent}>
          {React.Children.toArray(children).map((child, i) => {
            if (
              i === 0 &&
              React.isValidElement(child) &&
              (child.type === DialogTitle || child.type === DialogIcon)
            ) {
              return child;
            } else if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                style: [{ marginTop: 16 }, child.props.style],
              } as React.Attributes);
            }
            return child;
          })}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 48, 49, 0.7)',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: Color.light[1],
    width: '100%',
    borderRadius: Spacing[10],
  },
});

Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Icon = DialogIcon;
Dialog.Action = DialogAction;

export default Dialog;
