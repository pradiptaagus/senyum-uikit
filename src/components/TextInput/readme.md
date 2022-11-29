# TextInput

A component to allow users to input text.

## TextInputProps

| Props                       | Type                                                         | Optional | Default Value | Description                      |
| --------------------------- | ------------------------------------------------------------ | -------- | ------------- | -------------------------------- |
| size                        | 'sm' or 'md'                                                 | Yes      | medium        | The text input size              |
| containerStyle              | StyleProp<ViewStyle>                                         | Yes      | undefined     | The custom container style       |
| disabled                    | boolean                                                      | Yes      | false         | Define disable status            |
| status                      | [TextInputStatus](#textinputstatus--success--warning--error) | Yes      | undefined     | Define the `TextInput` status    |
| inputContainerStyle         | StyleProp<ViewStyle>                                         | Yes      | undefined     | The custom input container style |
| disabledInputContainerStyle | StyleProp<ViewStyle>                                         | Yes      | undefined     | the custom disabled style        |
| focusedInputContainerStyle  | StyleProp<ViewStyle>                                         | Yes      | undefined     | the custom focused style         |
| inputStyle                  | StyleProp<TextStyle>                                         | Yes      | undefined     | the custom input style           |
| label                       | string                                                       | Yes      | undefined     | The `TextInput` label            |
| labelStyle                  | TextStyle                                                    | Yes      | undefined     | The custom label style           |
| testID                      | string                                                       | Yes      | undefined     | -                                |
| icon                        | keyof typeof `Icon`                                          | Yes      | undefined     | The icon of `TextInput`          |

### TextInputStatus = 'success' | 'warning' | 'error';
