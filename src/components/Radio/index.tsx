import React, { useMemo } from 'react';
import {
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import { FontSize } from '../../base/Font';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';

type RadioStatus = 'checked' | 'unchecked' | 'indeterminate';

type RadioProps = {
  status: RadioStatus;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
  borderColor?: string;
  backgroundColor?: string;
  checkedBorderColor?: string;
  checkedBackgroundColor?: string;
  style?: ViewStyle;
  label?: string;
  labelStyle?: TextStyle;
  position?: 'leading' | 'trailing';
};

/**
 * Radio Component
 * @param {RadioProps} props
 * @returns JSX.Element
 */
const Radio = (props: RadioProps) => {
  const {
    status,
    disabled,
    onPress,
    testID,
    borderColor,
    backgroundColor,
    checkedBorderColor,
    checkedBackgroundColor,
    style,
    label,
    labelStyle,
    position,
  } = props;

  const radioStyle = useMemo(() => {
    let currentStyle: ViewStyle = { ...styles.radio };
    if (status === 'checked') {
      currentStyle = {
        ...currentStyle,
        ...styles.radioChecked,
      };
      if (checkedBackgroundColor) {
        currentStyle = {
          ...currentStyle,
          backgroundColor: checkedBackgroundColor,
        };
      }
      if (checkedBorderColor) {
        currentStyle = {
          ...currentStyle,
          borderColor: checkedBorderColor,
        };
      }
    } else {
      if (backgroundColor) {
        currentStyle = {
          ...currentStyle,
          backgroundColor: backgroundColor,
        };
      }
      if (borderColor) {
        currentStyle = {
          ...currentStyle,
          borderColor: borderColor,
        };
      }
    }
    return currentStyle;
  }, [
    backgroundColor,
    borderColor,
    checkedBackgroundColor,
    checkedBorderColor,
    status,
  ]);

  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}
    >
      {position === 'trailing' && label && (
        <Text
          style={{
            ...styles.label,
            ...styles.trailingLabel,
            ...labelStyle,
          }}
        >
          {label}
        </Text>
      )}
      <Pressable
        style={radioStyle}
        onPress={!disabled ? onPress : undefined}
        testID={testID}
      />
      {(!position || position === 'leading') && label && (
        <Text
          style={{
            ...styles.label,
            ...styles.leadingLabel,
            ...labelStyle,
          }}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 18,
    height: 18,
    borderColor: Color.grey[7],
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 999,
    position: 'relative',
    backgroundColor: Color.light[6],
  },
  radioChecked: {
    backgroundColor: Color.primary[2],
    borderColor: Color.blue[5],
    borderWidth: 3,
  },
  label: {
    color: Color.grey[1],
    fontSize: FontSize[14],
    fontWeight: '500',
  },
  leadingLabel: {
    marginLeft: Spacing[10],
  },
  trailingLabel: {
    marginRight: Spacing[10],
  },
});

export default Radio;
