import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Color } from '../../base/Color';
import DialogClose from './DialogClose';

type DialogHeaderProps = ViewProps & {
  children: React.ReactNode;
};

/**
 * DialogHeader component
 * @param {DialogHeaderProps} props
 * @returns JSX.Element
 */
const DialogHeader = (props: DialogHeaderProps) => {
  const { children, style, ...attrs } = props;

  return (
    <View
      style={[
        styles.container,
        style,
        React.Children.toArray(children).length > 1 && styles.headerWithBtn,
      ]}
      {...attrs}
    >
      {React.Children.toArray(children).map((child, i) => {
        if (i === 0) {
          if (React.isValidElement(child) && child.type === DialogClose) {
            return child;
          }
        } else {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              style: [styles.childWithBtn, child.props.style],
            } as React.Attributes);
          }
        }
        return child;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: Color.grey[7],
    borderBottomWidth: 1,
    borderStyle: 'solid',
    position: 'relative',
  },
  headerWithBtn: {
    paddingVertical: 20,
  },
  childWithBtn: {
    paddingHorizontal: 64,
  },
});

export default DialogHeader;
