import React, { useMemo } from 'react';
import {
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  Text,
  ViewStyle,
} from 'react-native';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';
import { FontSize } from '../../base/Font';

type CheckboxStatus = 'checked' | 'unchecked' | 'indeterminate';

type CheckboxProps = {
  status: CheckboxStatus;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
  color?: string;
  backgroundColor?: string;
  uncheckedColor?: string;
  style?: ViewStyle;
  label?: string;
  labelStyle?: TextStyle;
  position?: 'leading' | 'trailing';
  bordered?: boolean;
};

/**
 * Checkbox Component
 * @param {CheckboxProps} props
 * @returns JSX.Element
 */
const Checkbox = (props: CheckboxProps) => {
  const {
    status,
    disabled,
    onPress,
    testID,
    color,
    backgroundColor,
    style,
    label,
    labelStyle,
    position,
    bordered = true,
  } = props;

  const checkboxStyle = useMemo(() => {
    let currentStyle: ViewStyle = { ...styles.checkbox };
    if (disabled) {
      if (bordered) {
        currentStyle = {
          ...currentStyle,
          ...styles.disabledCheckbox,
        };
      } else {
        currentStyle = {
          ...currentStyle,
          ...styles.disabledSolidCheckbox,
        };
      }
    } else if (color || backgroundColor) {
      if (color) {
        currentStyle = {
          ...currentStyle,
          borderColor: color,
        };
      }
      if (backgroundColor) {
        currentStyle = {
          ...currentStyle,
          backgroundColor: backgroundColor,
        };
      }
    } else {
      if (!bordered) {
        currentStyle = {
          ...currentStyle,
          ...styles.solidCheckbox,
        };
      }
    }
    return currentStyle;
  }, [disabled, bordered, color, backgroundColor]);

  const checkStyle = useMemo(() => {
    let currentStyle: ViewStyle = { ...styles.check };
    if (disabled) {
      if (bordered) {
        currentStyle = {
          ...currentStyle,
          ...styles.disabledCheck,
        };
      } else if (color) {
        currentStyle = {
          ...currentStyle,
          borderColor: color,
        };
      } else {
        currentStyle = {
          ...currentStyle,
          ...styles.disabledSolidCheck,
        };
      }
    } else if (color) {
      currentStyle = {
        ...currentStyle,
        borderColor: color,
      };
    } else {
      if (!bordered) {
        currentStyle = {
          ...currentStyle,
          ...styles.solidCheck,
        };
      }
    }
    return currentStyle;
  }, [disabled, bordered, color]);

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
        style={checkboxStyle}
        onPress={!disabled ? onPress : undefined}
        testID={testID}
      >
        {status === 'checked' && <View style={checkStyle} />}
      </Pressable>
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
  checkbox: {
    width: 18,
    height: 18,
    borderColor: Color.primary[2],
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: Color.blue[7],
  },
  solidCheckbox: {
    backgroundColor: Color.primary[2],
    borderColor: Color.primary[2],
  },
  disabledCheckbox: {
    borderColor: Color.grey[7],
    backgroundColor: Color.light[6],
  },
  disabledSolidCheckbox: {
    borderColor: Color.light[6],
    backgroundColor: Color.light[6],
  },
  check: {
    width: 10,
    height: 6,
    borderColor: Color.primary[2],
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    transform: [{ rotateZ: '-45deg' }],
    position: 'absolute',
    left: 2,
    top: 3,
  },
  solidCheck: {
    borderColor: Color.light[1],
  },
  disabledCheck: {
    borderColor: Color.grey[7],
  },
  disabledSolidCheck: {
    borderColor: Color.grey[6],
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

export default Checkbox;
