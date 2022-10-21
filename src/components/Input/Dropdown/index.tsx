import React, { useMemo } from 'react';
import {
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableNativeFeedback,
  StyleProp,
} from 'react-native';
import type { DropdownProps } from './type';
import { defaultStyles, dropdownIconStyles } from './style';
import { Icon } from '../../../base/Icon';
import { Color } from '../../../base/Color';
import { Spacing } from '../../../base/Spacing';

const DropdownIcon = () => {
  const CurrentIcon = Icon.ChevronDown;
  return (
    <CurrentIcon
      size={Spacing[20].toString()}
      color={Color.grey[3]}
      style={dropdownIconStyles.icon}
    />
  );
};

const Dropdown = (props: DropdownProps) => {
  const {
    containerStyle,
    disabled,
    borderType,
    inputContainerStyle,
    disabledInputContainerStyle,
    inputStyle,
    label,
    labelProps,
    labelStyle,
    testID,
    value,
    onPress,
  } = props;

  const mergedContainerStyle = useMemo(() => {
    let style: StyleProp<ViewStyle>[] = [
      defaultStyles.containerStyle,
      { borderRadius: defaultStyles.inputContainerStyle.borderRadius },
    ];
    return style;
  }, []);
  const mergedInputContainerStyle = useMemo(() => {
    let style: StyleProp<ViewStyle>[] = [defaultStyles.inputContainerStyle];
    if (disabled) {
      style.push(defaultStyles.disabledInputContainerStyle);
      if (disabledInputContainerStyle) {
        style.push(disabledInputContainerStyle);
      }
    } else {
      switch (borderType) {
        case 'success':
          style.push(defaultStyles.successInputContainerStyle);
          break;
        case 'warning':
          style.push(defaultStyles.warningInputContainerStyle);
          break;
        case 'error':
          style.push(defaultStyles.errorInputContainerStyle);
          break;
      }
    }
    if (value) {
      style.push(defaultStyles.filledInputContainerStyle);
    }
    return style;
  }, [disabled, value, disabledInputContainerStyle, borderType]);
  const mergedLabelStyle = useMemo(() => {
    let style: TextStyle[] = [defaultStyles.labelStyle];
    if (value) {
      style.push(defaultStyles.focusedLabelStyle);
    }
    return style;
  }, [value]);
  const mergedInnerContainerStyle = useMemo(() => {
    let style: ViewStyle[] = [defaultStyles.innerContainerStyle];
    if (!label) {
      style.push(defaultStyles.innerContainerStyleWithoutLabel);
    }
    return style;
  }, [label]);
  const composedTestIDs = useMemo(() => {
    if (testID) {
      return {
        rootView: `${testID}-rootview`,
        pressable: `${testID}-pressable`,
        inputContainer: `${testID}-inputcontainer`,
        innerContainer: `${testID}-innercontainer`,
        label: `${testID}-label`,
        value: `${testID}-value`,
      };
    }
    return undefined;
  }, [testID]);

  return (
    <View
      testID={composedTestIDs?.rootView}
      style={[mergedContainerStyle, containerStyle]}
    >
      <TouchableNativeFeedback
        testID={composedTestIDs?.pressable}
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple('#ddd', false)}
        onPress={onPress}
      >
        <View
          testID={composedTestIDs?.inputContainer}
          style={[mergedInputContainerStyle, inputContainerStyle]}
        >
          <View
            testID={composedTestIDs?.innerContainer}
            style={mergedInnerContainerStyle}
          >
            {label && (
              <Text
                testID={composedTestIDs?.label}
                style={[mergedLabelStyle, labelStyle]}
                {...labelProps}
              >
                {label}
              </Text>
            )}
            <Text
              testID={composedTestIDs?.value}
              numberOfLines={1}
              style={[defaultStyles.inputStyle, inputStyle]}
            >
              {value}
            </Text>
          </View>
          <DropdownIcon />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Dropdown;
