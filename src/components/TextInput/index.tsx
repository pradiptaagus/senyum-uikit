import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Pressable,
  StyleProp,
  Animated,
  TextInput as RNTextInput,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import type { TextInputProps } from './type';
import type { TextInputIconProps } from './type';
import {
  defaultLargeStyles,
  defaultSmallStyles,
  textInputIconStyles,
} from './style';
import { Icon } from '../../base/Icon';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';
import { Shadow } from '../../base/Shadow';

const TextInput = (props: TextInputProps) => {
  const { size = 'md', ...otherProps } = props;

  return (
    <View style={Shadow[1]}>
      {size === 'md' && <MediumTextInput {...otherProps} />}
      {size !== 'md' && <SmallTextInput {...otherProps} />}
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

const SmallTextInput = (props: Omit<TextInputProps, 'labelStyle'>) => {
  const {
    testID,
    containerStyle,
    disabled,
    status,
    inputContainerStyle,
    disabledInputContainerStyle,
    focusedInputContainerStyle,
    inputStyle,
    label,
    onChangeText,
    value: defaultValue,
    icon,
    ...otherTextInputProps
  } = props;

  const textInputRef = useRef<RNTextInput>(null);

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const mergedInputContainerStyle = useMemo(() => {
    let style: StyleProp<ViewStyle>[] = [
      defaultSmallStyles.inputContainerStyle,
    ];
    if (disabled) {
      style.push(defaultSmallStyles.disabledInputContainerStyle);
      if (disabledInputContainerStyle) {
        style.push(disabledInputContainerStyle);
      }
    } else if (focused) {
      style.push(defaultSmallStyles.focusedInputContainerStyle);
      if (focusedInputContainerStyle) {
        style.push(focusedInputContainerStyle);
      }
    } else {
      switch (status) {
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
  }, [
    disabled,
    focused,
    disabledInputContainerStyle,
    focusedInputContainerStyle,
    status,
  ]);

  const composedTestIDs = useMemo(() => {
    if (testID) {
      return {
        rootView: `${testID}-rootview`,
        pressable: `${testID}-pressable`,
        inputContainer: `${testID}-inputcontainer`,
        innerContainer: `${testID}-innercontainer`,
        textInput: `${testID}-textinput`,
      };
    }
    return undefined;
  }, [testID]);

  return (
    <Pressable
      testID={composedTestIDs?.rootView}
      style={[defaultSmallStyles.containerStyle, containerStyle]}
      onPress={() => textInputRef.current?.focus()}
    >
      <View
        testID={composedTestIDs?.inputContainer}
        style={[mergedInputContainerStyle, inputContainerStyle]}
      >
        <View
          testID={composedTestIDs?.innerContainer}
          style={[defaultSmallStyles.innerContainerStyle, inputContainerStyle]}
        >
          <RNTextInput
            ref={textInputRef}
            {...otherTextInputProps}
            testID={composedTestIDs?.textInput}
            value={value}
            numberOfLines={1}
            style={[defaultSmallStyles.inputStyle, inputStyle]}
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
    </Pressable>
  );
};

const MediumTextInput = (props: TextInputProps) => {
  const {
    testID,
    containerStyle,
    disabled,
    status,
    inputContainerStyle,
    disabledInputContainerStyle,
    focusedInputContainerStyle,
    label,
    labelStyle,
    onChangeText,
    value: defaultValue,
    icon,
    ...otherTextInputProps
  } = props;

  const textInputRef = useRef<RNTextInput>(null);
  const labelAnimatedValue = useRef(new Animated.Value(0)).current;

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const [targetY, setTargetY] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);

  const mergedInputContainerStyle = useMemo(() => {
    let style: StyleProp<ViewStyle>[] = [
      defaultLargeStyles.inputContainerStyle,
    ];
    if (disabled) {
      style.push(defaultLargeStyles.disabledInputContainerStyle);
      if (disabledInputContainerStyle) {
        style.push(disabledInputContainerStyle);
      }
    } else if (focused) {
      style.push(defaultLargeStyles.focusedInputContainerStyle);
      if (focusedInputContainerStyle) {
        style.push(focusedInputContainerStyle);
      }
    } else {
      switch (status) {
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
  }, [
    disabled,
    focused,
    value,
    disabledInputContainerStyle,
    focusedInputContainerStyle,
    status,
  ]);

  const mergedInnerContainerStyle = useMemo(() => {
    let style: ViewStyle[] = [defaultLargeStyles.innerContainerStyle];
    if (!label) {
      style.push(defaultLargeStyles.innerContainerStyleWithoutLabel);
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
        textInput: `${testID}-textinput`,
        animatingLabelContainer: `${testID}-animatinglabelcontainer`,
        label: `${testID}-label`,
        value: `${testID}-value`,
      };
    }
    return undefined;
  }, [testID]);

  useEffect(() => {
    if (focused || value) {
      Animated.timing(labelAnimatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(labelAnimatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused, value]);

  return (
    <Pressable
      testID={composedTestIDs?.rootView}
      style={[defaultLargeStyles.containerStyle, containerStyle]}
      onPress={() => textInputRef.current?.focus()}
    >
      <View
        testID={composedTestIDs?.inputContainer}
        style={[mergedInputContainerStyle, inputContainerStyle]}
      >
        <View
          testID={composedTestIDs?.innerContainer}
          style={mergedInnerContainerStyle}
        >
          <View
            testID={composedTestIDs?.animatingLabelContainer}
            style={defaultLargeStyles.animatingLabelContainer}
          >
            <Animated.Text
              testID={composedTestIDs?.label}
              style={[
                defaultLargeStyles.zoomedLabelStyle,
                labelStyle,
                {
                  transform: [
                    {
                      scale: labelAnimatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          1,
                          currentHeight > 0 ? targetHeight / currentHeight : 1,
                        ],
                      }),
                    },
                    {
                      translateY: labelAnimatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, targetY - currentY],
                      }),
                    },
                    {
                      translateX: labelAnimatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          0,
                          currentHeight > 0
                            ? ((currentWidth / 2) * targetHeight) /
                                currentHeight -
                              currentWidth / 2
                            : 0,
                        ],
                      }),
                    },
                  ],
                },
              ]}
              onLayout={({ nativeEvent }) => {
                const { width, height, y } = nativeEvent.layout;
                setCurrentHeight(height);
                setCurrentWidth(width);
                setCurrentY(y);
              }}
            >
              {label}
            </Animated.Text>
          </View>
          {label && (
            <Text
              style={[defaultLargeStyles.labelStyle, labelStyle]}
              onLayout={({ nativeEvent }) => {
                const { height, y } = nativeEvent.layout;
                setTargetHeight(height);
                setTargetY(y);
              }}
            />
          )}
          <RNTextInput
            ref={textInputRef}
            {...otherTextInputProps}
            testID={composedTestIDs?.textInput}
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
    </Pressable>
  );
};

export default TextInput;
