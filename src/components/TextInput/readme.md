# TextInput

`TextInput` is a component which used to get user text input.

## TextInputProps

| Props                       | Type                 | Optional | Default value | Description                                     |
| --------------------------- | -------------------- | -------- | ------------- | ----------------------------------------------- |
| size                        | 'small' or 'medium'  | Yes      | 'medium'      | Define the `TextInput` size                     |
| containerStyle              | StyleProp<ViewStyle> | Yes      | undefined     | Define the custom container style               |
| disabled                    | boolean              | Yes      | undefined     | Define the disable status                       |
| status                      | [TextInputStatus]    | Yes      | undefined     | Define the `TextInput` status                   |
| inputContainerStyle         | StyleProp<ViewStyle> | Yes      | undefined     | Define the custom container style               |
| disabledInputContainerStyle | StyleProp<ViewStyle> | Yes      | undefined     | Define the custom container style when disabled |
| focusedInputContainerStyle  | StyleProp<ViewStyle> | Yes      | undefined     | Define the custom container style when focus    |
| inputStyle                  | StyleProp<TextStyle> | Yes      | undefined     | Define the custom input style                   |
| label                       | string               | Yes      | undefined     | Define the label                                |
| labelStyle                  | StyleProp<TextStyle> | Yes      | undefined     | Define the custom label style                   |
| testID                      | string               | Yes      | undefined     | Define the testID                               |
| icon                        | keyof typeof `Icon`  | Yes      | undefined     | Define the icon for `TextInput`                 |
