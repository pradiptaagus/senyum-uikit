import React, { useState, useMemo } from 'react';
import {
  Text,
  TextInput as RNTextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import type { InputProps, TextInputIconProps } from './type';
import {
  defaultLargeStyles,
  defaultSmallStyles,
  textInputIconStyles,
} from './style';
import { Icon } from '../../base/Icon';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';
import { Shadow } from '../../base/Shadow';

const TextInput = (props: InputProps) => {
  const { type = 'medium', ...otherProps } = props;

  return (
    <View style={Shadow[3]}>
      {type === 'medium' && <MediumTextInput {...otherProps} />}
      {type !== 'medium' && <SmallTextInput {...otherProps} />}
    </View>
  );
};

const TextInputIcon = (props: TextInputIconProps) => {
  const CurrentIcon = Icon[props.icon];
  return (
    <CurrentIcon
      size={Spacing[20].toString()}
      color={Color.grey[3]}
      style={textInputIconStyles.icon}
    />
  );
};

const SmallTextInput = (props: InputProps) => {
  const {
    type,
    containerStyle,
    disabled,
    disabledInputStyle,
    borderType,
    inputContainerStyle,
    inputStyle,
    label,
    labelProps,
    labelStyle,
    testID,
    onChangeText,
    value: defaultValue,
    icon,
    ...otherTextInputProps
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const mergedInputContainerStyle = useMemo(() => {
    let style: ViewStyle[] = [defaultSmallStyles.inputContainerStyle];
    if (disabled) {
      style.push(defaultSmallStyles.disabledInputContainerStyle);
    } else if (focused) {
      style.push(defaultSmallStyles.focusedInputContainerStyle);
    } else {
      switch (borderType) {
        case 'success':
          style.push(defaultSmallStyles.successInputContainerStyle);
          break;
        case 'warning':
          style.push(defaultSmallStyles.warningInputContainerStyle);
          break;
        case 'error':
          style.push(defaultSmallStyles.errorInputContainerStyle);
          break;
      }
    }
    return style;
  }, [focused, value, borderType]);

  return (
    <View style={[defaultSmallStyles.containerStyle, containerStyle]}>
      <View style={[mergedInputContainerStyle, inputContainerStyle]}>
        <View
          style={[defaultSmallStyles.innerContainerStyle, inputContainerStyle]}
        >
          <RNTextInput
            {...otherTextInputProps}
            value={value}
            numberOfLines={1}
            style={defaultSmallStyles.inputStyle}
            editable={!disabled}
            placeholder={label}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={(text) => {
              setValue(text);
              onChangeText && onChangeText(text);
            }}
          />
        </View>
        {icon && <TextInputIcon icon={icon} />}
      </View>
    </View>
  );
};

const MediumTextInput = (props: InputProps) => {
  const {
    type,
    containerStyle,
    disabled,
    disabledInputStyle,
    borderType,
    inputContainerStyle,
    inputStyle,
    label,
    labelProps,
    labelStyle,
    testID,
    onChangeText,
    value: defaultValue,
    icon,
    ...otherTextInputProps
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const mergedInputContainerStyle = useMemo(() => {
    let style: ViewStyle[] = [defaultLargeStyles.inputContainerStyle];
    if (disabled) {
      style.push(defaultLargeStyles.disabledInputContainerStyle);
    } else if (focused) {
      style.push(defaultLargeStyles.focusedInputContainerStyle);
    } else {
      switch (borderType) {
        case 'success':
          style.push(defaultLargeStyles.successInputContainerStyle);
          break;
        case 'warning':
          style.push(defaultLargeStyles.warningInputContainerStyle);
          break;
        case 'error':
          style.push(defaultLargeStyles.errorInputContainerStyle);
          break;
      }
    }
    if (value) {
      style.push(defaultLargeStyles.filledInputContainerStyle);
    }
    return style;
  }, [focused, value, borderType]);
  const mergedLabelStyle = useMemo(() => {
    let style: TextStyle[] = [defaultLargeStyles.labelStyle];
    if (focused || value) {
      style.push(defaultLargeStyles.focusedLabelStyle);
    }
    return style;
  }, [focused, value]);
  const mergedInnerContainerStyle = useMemo(() => {
    let style: ViewStyle[] = [defaultLargeStyles.innerContainerStyle];
    if (!label) {
      style.push(defaultLargeStyles.innerContainerStyleWithoutLabel);
    }
    return style;
  }, [label]);

  return (
    <View style={[defaultLargeStyles.containerStyle, containerStyle]}>
      <View style={[mergedInputContainerStyle, inputContainerStyle]}>
        <View style={mergedInnerContainerStyle}>
          {label && <Text style={[mergedLabelStyle]}>{label}</Text>}
          <RNTextInput
            {...otherTextInputProps}
            numberOfLines={1}
            value={value}
            style={defaultLargeStyles.inputStyle}
            editable={!disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={(text) => {
              setValue(text);
              onChangeText && onChangeText(text);
            }}
          />
        </View>
        {icon && <TextInputIcon icon={icon} />}
      </View>
    </View>
  );
};

export default TextInput;
