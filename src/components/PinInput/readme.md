# PinInput

`PinInput` is a component which used to input PIN.

## PinInputProps

| Props            | Type                          | Optional | Default value | Description                                                                          |
| ---------------- | ----------------------------- | -------- | ------------- | ------------------------------------------------------------------------------------ |
| style            | StyleProp<ViewStyle>          | Yes      | undefined     | Define the `PinInput` custom style                                                   |
| autoFocus        | boolean                       | Yes      | undefined     | Define auto-focus status                                                             |
| length           | number                        | Yes      | 6             | Define the PIN length                                                                |
| type             | 'outlined' or 'underlined'    | Yes      | 'outlined'    | Define the `PinInput` type                                                           |
| securedTextEntry | boolean                       | Yes      | undefined     | Define the `PinInput` displayed value. If `true`, the value will be displayed as dot |
| size             | 'small', 'medium', or 'large' | Yes      | undefined     | Define the `PinInput` size                                                           |
| disabled         | boolean                       | Yes      | undefined     | Define the disabled status                                                           |
| errorMessage     | string                        | Yes      | undefined     | Define the error message if status is 'error'                                        |
| initialValue     | string                        | Yes      | undefined     | Define the `PinInput` initial value                                                  |
| onChangeText     | (text: string) => void        | Yes      | undefined     | Define the invoked function when typing                                              |
| onComplete       | (text: string) => void        | Yes      | undefined     | Define the invoked function when the value reach the max `PinInput` length           |
