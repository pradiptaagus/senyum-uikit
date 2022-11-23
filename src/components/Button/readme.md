# Button

Button is a component pressed to invoke actions.

## ButtonProps

| Props              | Type                                                       | Optional | Default value | Description                                            |
| ------------------ | ---------------------------------------------------------- | -------- | ------------- | ------------------------------------------------------ |
| size               | [**ButtonSize**](#buttonsize--small--medium--large)        | Yes      | medium        | The button size                                        |
| children           | ReactNode                                                  | No       | -             | The children of button. Generally the button text      |
| disabled           | boolean                                                    | Yes      | undefined     | Defined disabled button status                         |
| bordered           | boolean                                                    | No       | undefined     | Defined bordered button status                         |
| buttonColor        | string                                                     | No       | undefined     | Define the button color                                |
| activeButtonColor  | string                                                     | No       | undefined     | Define the button color when pressed                   |
| textColor          | string                                                     | No       | undefined     | Defined the button text color                          |
| activeTextColor    | string                                                     | No       | undefined     | Defined the button text color when pressed             |
| variant            | [**ButtonVariant**](#buttonvariant--primary--secondary)    | No       | undefined     | Define the button variant                              |
| style              | StyleProp<ViewStyle>                                       | No       | undefined     | Define the button custom style                         |
| textStyle          | StyleProp<TextStyle>                                       | No       | undefined     | Define the custome button text style                   |
| accessibilityLabel | string                                                     | No       | undefined     | Define the accessibility label                         |
| accessibilityHint  | string                                                     | No       | undefined     | Define the accessibility hint                          |
| testID             | string                                                     | No       | undefined     | Define the testID                                      |
| icon               | keyof typeof Icon                                          | No       | undefined     | Define the button icon                                 |
| iconPosition       | [**ButtonIconPosition**](#buttoniconposition--left--right) | No       | left          | Define the button icon position                        |
| onPress            | () => void                                                 | No       | undefined     | Define the invoked function when button is pressed     |
| onPressIn          | () => void                                                 | No       | undefined     | Define the invoked function when button is pressed in  |
| onPressOut         | () => void                                                 | No       | undefined     | Define the invoked function when button is pressed out |

## Usage

```
<Button>This is button</Button>
```

## Additional Info

### ButtonSize = 'sm' | 'md' | 'lg'

### ButtonVariant = 'primary' | 'secondary'

### ButtonIconPosition = 'left' | 'right'
