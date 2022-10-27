import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, TextInput, Pressable, Text, TextStyle } from 'react-native';
import type { ViewStyle, StyleProp } from 'react-native';
import type { PinInputFieldProps, PinInputProps } from './type';
import styles, { outlinedStyles, underlinedStyles } from './style';

const PinInput = (props: PinInputProps) => {
  const {
    autoFocus,
    length = 6,
    style,
    errorMessage,
    initialValue = '',
    onChangeText,
    ...otherProps
  } = props;

  const textInputRef = useRef<TextInput>(null);

  const [values, setValues] = useState<string>(
    initialValue.substring(0, length)
  );
  const [valuesInArray, setValuesInArray] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const error = useMemo(() => {
    if (errorMessage) {
      return true;
    } else {
      return false;
    }
  }, [errorMessage]);

  useEffect(() => {
    let newValuesInArray: string[] = [];
    for (let i = 0; i < length; i++) {
      newValuesInArray.push(values.charAt(i));
    }
    onChangeText && onChangeText(values);
    setValuesInArray(newValuesInArray);
    setActiveIndex(values.length);
  }, [values, length, onChangeText]);
  useEffect(() => {
    if (autoFocus) {
      setActiveIndex(0);
    } else {
      setActiveIndex(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.containerStyle, style]}>
      <View style={styles.hiddenStyle}>
        <TextInput
          autoFocus={autoFocus}
          ref={textInputRef}
          maxLength={length}
          keyboardType="number-pad"
          value={values}
          onBlur={() => setActiveIndex(-1)}
          onChangeText={setValues}
        />
      </View>
      <View style={styles.innerContainerStyle}>
        {valuesInArray.map((value, index) => {
          return (
            <PinInputField
              key={`pinfield-${index}`}
              {...otherProps}
              index={index}
              activeIndex={activeIndex}
              error={error}
              value={value}
              onPress={() => {
                let newValues = values.substring(0, index);
                setValues(newValues);
                let targetIndex = Math.min(values.length, index);
                setActiveIndex(targetIndex);
                textInputRef.current?.focus();
              }}
            />
          );
        })}
      </View>
      {errorMessage && (
        <Text style={styles.errorMessageTextStyle}>{errorMessage}</Text>
      )}
    </View>
  );
};

const PinInputField = (props: PinInputFieldProps) => {
  const {
    type = 'outlined',
    index,
    activeIndex,
    size = 'small',
    securedTextEntry,
    disabled,
    error,
    value,
    onPress,
  } = props;

  const typeSpecificStyle = useMemo(() => {
    if (type === 'outlined') {
      return outlinedStyles;
    } else {
      return underlinedStyles;
    }
  }, [type]);
  const focused = useMemo(() => {
    return index === activeIndex;
  }, [index, activeIndex]);
  const mergedInputContainerStyle = useMemo(() => {
    let mergedStyles: StyleProp<ViewStyle>[] = [
      typeSpecificStyle.inputContainerStyle,
    ];
    if (size === 'medium') {
      mergedStyles.push(styles.mediumInputContainerStyle);
    } else if (size === 'large') {
      mergedStyles.push(styles.largeInputContainerStyle);
    }

    if (disabled) {
      mergedStyles.push(typeSpecificStyle.disabledInputContainerStyle);

      if (value) {
        mergedStyles.push(styles.disabledFilledInputContainerStyle);
      }
    }

    if ((focused || value) && !disabled) {
      mergedStyles.push(styles.focusedInputContainerStyle);
    }
    if (error && !disabled) {
      mergedStyles.push(styles.errorInputContainerStyle);
    }
    return mergedStyles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, disabled, error, focused, value, type]);
  const mergedTextStyle = useMemo(() => {
    let textStyle: StyleProp<TextStyle>[] = [styles.textStyle];
    if (error) {
      textStyle.push(styles.errorTextStyle);
    }
    if (disabled) {
      textStyle.push(styles.disabledTextStyle);
    }
    return textStyle;
  }, [disabled, error]);
  const mergedDotStyle = useMemo(() => {
    let dotStyle: StyleProp<ViewStyle>[] = [styles.dotStyle];
    if (disabled) {
      dotStyle.push(styles.disabledDotStyle);
    }
    return dotStyle;
  }, [disabled]);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={mergedInputContainerStyle}
    >
      {securedTextEntry && value !== '' && <View style={mergedDotStyle} />}
      {!securedTextEntry && <Text style={mergedTextStyle}>{value}</Text>}
    </Pressable>
  );
};

export default PinInput;
