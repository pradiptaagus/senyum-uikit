import React, { useMemo } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { Spacing } from '../../base/Spacing';
import { Color } from '../../base/Color';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogIcon from './DialogIcon';
import DialogAction from './DialogAction';
import DialogHeader from './DialogHeader';
import DialogClose from './DialogClose';
import DialogScrollArea from './DialogScrollArea';

type DialogProps = {
  dismissable?: boolean;
  onDismis?: () => void;
  visible?: boolean;
  children: React.ReactNode;
  testID?: string;
  position?: 'center' | 'bottom';
};

/**
 * Dialog component
 * @param {DialogProps} props
 * @returns JSX.Element
 */
const Dialog = (props: DialogProps) => {
  const {
    dismissable = true,
    onDismis,
    visible,
    children,
    testID,
    position = 'center',
  } = props;

  const animationType = useMemo(() => {
    if (position === 'center') {
      return 'fade';
    } else if (position === 'bottom') {
      return 'slide';
    }
    return 'none';
  }, [position]);

  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent
      testID={testID}
    >
      <Pressable
        style={styles.modalOverlay}
        onPress={dismissable ? onDismis : undefined}
      />
      <View
        style={[
          position === 'center' && styles.centerDialogWrapper,
          position === 'bottom' && styles.bottomDialogWrapper,
        ]}
      >
        <View
          style={[
            position === 'center' && styles.dialogContent,
            position === 'bottom' && styles.bottomDialogContent,
          ]}
        >
          {React.Children.toArray(children).map((child, i) => {
            if (i === 0) {
              if (
                React.isValidElement(child) &&
                (child.type === DialogTitle || child.type === DialogIcon)
              ) {
                return child;
              }
            } else {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  style: [{ marginTop: 16 }, child.props.style],
                } as React.Attributes);
              }
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
  centerDialogWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  bottomDialogWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dialogContent: {
    backgroundColor: Color.light[1],
    width: '100%',
    borderRadius: Spacing[10],
  },
  bottomDialogContent: {
    backgroundColor: Color.light[1],
    width: '100%',
    borderTopLeftRadius: Spacing[10],
    borderTopRightRadius: Spacing[10],
  },
});

Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Icon = DialogIcon;
Dialog.Action = DialogAction;
Dialog.Header = DialogHeader;
Dialog.Close = DialogClose;
Dialog.ScrollArea = DialogScrollArea;

export default Dialog;
