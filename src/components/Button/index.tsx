import React, { useMemo, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { FontSize } from '../../base/Font';
import { Color } from '../../base/Color';
import { Shadow } from '../../base/Shadow';
import { Icon } from '../../base/Icon';
import { Spacing } from '../../base/Spacing';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled?: boolean;
  bordered?: boolean;
  buttonColor?: string;
  activeButtonColor?: string;
  textColor?: string;
  activeTextColor?: string;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  labelStyle?: TextStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
  icon?: keyof typeof Icon;
  iconPosition?: 'left' | 'right';
};

/**
 * Button Component
 * @param {ButtonProps} props
 * @returns JSX.Element
 */
const Button = (props: ButtonProps) => {
  const [isPressIn, setIsPressIn] = useState<boolean>(false);

  const {
    size,
    children,
    disabled,
    bordered,
    buttonColor,
    activeButtonColor,
    textColor,
    activeTextColor,
    variant,
    style,
    labelStyle,
    accessibilityLabel,
    accessibilityHint,
    testID,
    icon,
    iconPosition,
  } = props;

  const BtnIcon = () => {
    if (icon) {
      const CurrentIcon = Icon[icon];
      let iconSize = '0';
      let iconColor = Color.light[1];

      if (size === 'small') {
        iconSize = '16';
      } else if (size === 'large') {
        iconSize = '20';
      } else {
        iconSize = '18';
      }

      if (!isPressIn && textColor) {
        iconColor = textColor;
      } else if (isPressIn && activeTextColor) {
        iconColor = activeTextColor;
      } else if (variant) {
        if (variant === 'primary') {
          if (bordered) {
            if (disabled) {
              iconColor = Color.grey[6];
            } else if (isPressIn) {
              iconColor = Color.hightlight[1];
            } else {
              iconColor = Color.hightlight[2];
            }
          } else {
            if (disabled) {
              iconColor = Color.light[5];
            } else {
              iconColor = Color.light[1];
            }
          }
        }
      } else {
        if (bordered) {
          if (disabled) {
            iconColor = Color.grey[6];
          } else if (isPressIn) {
            iconColor = Color.grey[6];
          } else {
            iconColor = Color.grey[5];
          }
        } else {
          if (disabled) {
            iconColor = Color.grey[7];
          } else {
            iconColor = Color.grey[1];
          }
        }
      }

      return (
        <CurrentIcon
          size={iconSize}
          color={iconColor}
          style={{
            ...(iconPosition === 'right' && styles.buttonRightIconStyle),
            ...((!iconPosition || iconPosition === 'left') &&
              styles.buttonLeftIconStyle),
          }}
        />
      );
    }
    return null;
  };

  const buttonSize = useMemo(() => {
    if (size === 'small') {
      return styles.smallButton;
    } else if (size === 'large') {
      return styles.largeButton;
    }
    return styles.mediumButton;
  }, [size]);

  const buttonTextSize = useMemo(() => {
    if (size === 'small') {
      return styles.smallButtonText;
    } else if (size === 'large') {
      return styles.largeButtonText;
    }
    return styles.mediumButtonText;
  }, [size]);

  const button: ViewStyle = useMemo(() => {
    if (!isPressIn && buttonColor) {
      return { backgroundColor: buttonColor };
    } else if (isPressIn && activeButtonColor) {
      return { backgroundColor: activeButtonColor };
    } else if (variant) {
      if (variant === 'primary') {
        if (bordered) {
          if (disabled) {
            return styles.borderedButtonDisabled;
          } else if (isPressIn) {
            return styles.borderedButtonPrimaryActive;
          } else {
            return styles.borderedButtonPrimary;
          }
        } else {
          if (disabled) {
            return styles.buttonPrimaryDisabled;
          } else if (isPressIn) {
            return styles.buttonPrimaryActive;
          } else {
            return styles.buttonPrimary;
          }
        }
      }
    } else {
      if (bordered) {
        if (disabled) {
          return styles.borderedButtonDisabled;
        } else if (isPressIn) {
          return styles.borderedButtonActive;
        } else {
          return styles.borderedButton;
        }
      } else {
        if (disabled) {
          return styles.buttonDisabled;
        } else if (isPressIn) {
          return styles.buttonActive;
        } else {
          return styles.button;
        }
      }
    }
    return {};
  }, [activeButtonColor, bordered, buttonColor, disabled, variant, isPressIn]);

  const buttonTextColor: TextStyle = useMemo(() => {
    if (!isPressIn && textColor) {
      return { color: textColor };
    } else if (isPressIn && activeTextColor) {
      return { color: activeTextColor };
    } else if (variant) {
      if (variant === 'primary') {
        if (bordered) {
          if (disabled) {
            return styles.borderedButtonTextDisabled;
          } else if (isPressIn) {
            return styles.borderedButtonTextPrimaryActive;
          } else {
            return styles.borderedButtonTextPrimary;
          }
        } else {
          if (disabled) {
            return styles.buttonPrimaryTextDisabled;
          } else {
            return styles.buttonPrimaryText;
          }
        }
      }
    } else {
      if (bordered) {
        if (disabled) {
          return styles.borderedButtonTextDisabled;
        } else if (isPressIn) {
          return styles.borderedButtonTextActive;
        } else {
          return styles.borderedButtonText;
        }
      } else {
        if (disabled) {
          return styles.buttonTextDisabled;
        } else if (isPressIn) {
          return styles.buttonTextActive;
        }
      }
    }
    return {};
  }, [activeTextColor, bordered, disabled, textColor, variant, isPressIn]);

  return (
    <Pressable
      onPressIn={() => setIsPressIn(true)}
      onPressOut={() => setIsPressIn(false)}
      style={{
        ...styles.button,
        ...button,
        ...buttonSize,
        ...Shadow[3],
        ...style,
      }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
    >
      {(!iconPosition || iconPosition === 'left') && <BtnIcon />}
      <Text
        style={{
          ...styles.buttonText,
          ...buttonTextSize,
          ...buttonTextColor,
          ...labelStyle,
        }}
      >
        {children}
      </Text>
      {iconPosition === 'right' && <BtnIcon />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Color.light[1],
    width: '100%',
    borderColor: Color.light[2],
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonActive: {
    backgroundColor: Color.light[2],
  },
  buttonDisabled: {
    backgroundColor: Color.light[3],
    borderColor: Color.light[3],
  },
  borderedButton: {
    backgroundColor: Color.light[1],
    borderColor: Color.grey[5],
  },
  borderedButtonActive: {
    backgroundColor: Color.light[1],
    borderColor: Color.grey[6],
  },
  borderedButtonDisabled: {
    backgroundColor: Color.light[1],
    borderColor: Color.grey[6],
  },
  borderedButtonPrimary: {
    backgroundColor: Color.light[1],
    borderColor: Color.hightlight[2],
  },
  borderedButtonPrimaryActive: {
    backgroundColor: Color.light[1],
    borderColor: Color.hightlight[1],
  },
  buttonPrimary: {
    backgroundColor: Color.hightlight[2],
    borderColor: Color.hightlight[2],
  },
  buttonPrimaryActive: {
    backgroundColor: Color.hightlight[1],
    borderColor: Color.hightlight[1],
  },
  buttonPrimaryDisabled: {
    backgroundColor: Color.grey[6],
    borderColor: Color.grey[6],
  },
  buttonText: {
    color: Color.grey[1],
    fontSize: FontSize[14],
    fontWeight: '700',
  },
  buttonTextActive: {
    color: Color.grey[1],
  },
  buttonTextDisabled: {
    color: Color.grey[7],
  },
  borderedButtonText: {
    color: Color.grey[5],
  },
  borderedButtonTextActive: {
    color: Color.grey[6],
  },
  borderedButtonTextDisabled: {
    color: Color.grey[6],
  },
  buttonPrimaryText: {
    color: Color.light[1],
  },
  buttonPrimaryTextDisabled: {
    color: Color.light[5],
  },
  borderedButtonTextPrimary: {
    color: Color.hightlight[2],
  },
  borderedButtonTextPrimaryActive: {
    color: Color.hightlight[1],
  },
  smallButton: {
    height: 32,
  },
  smallButtonText: {
    fontSize: FontSize[12],
    lineHeight: 18,
  },
  mediumButton: {
    height: 40,
  },
  mediumButtonText: {
    fontSize: FontSize[14],
    lineHeight: 21,
  },
  largeButton: {
    height: 56,
  },
  largeButtonText: {
    fontSize: FontSize[16],
    lineHeight: 24,
  },
  buttonLeftIconStyle: {
    marginRight: Spacing[6],
  },
  buttonRightIconStyle: {
    marginLeft: Spacing[6],
  },
});

export default Button;
