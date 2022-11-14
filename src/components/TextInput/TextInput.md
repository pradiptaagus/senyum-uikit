# TextInput

A component to allow users to input text.

## Props
| Props                       | Type                      | Optional | Default Value | Description                        |
| --------------------------- | ------------------------- | -------- | ------------- | ---------------------------------- |
| size                        | small / medium            | yes      | medium        | text input size                    |
| containerStyle              | ViewStyle                 | yes      | undefined     | custom container style             |
| disabled                    | boolean                   | yes      | false         | whether this textinput is disabled |
| borderType                  | success / warning / error | yes      | undefined     | border color                       |
| inputContainerStyle         | TextStyle                 | yes      | undefined     | custom input container style       |
| disabledInputContainerStyle | ViewStyle                 | yes      | undefined     | custom disabled style              |
| focusedInputContainerStyle  | ViewStyle                 | yes      | undefined     | custom focused style               |
| inputStyle                  | TextStyle                 | yes      | undefined     | custom input style                 |
| label                       | string                    | yes      | undefined     | text input label                   |
| labelProps                  | TextProps                 | yes      | undefined     | additional label text props        |
| labelStyle                  | TextStyle                 | yes      | undefined     | custom label style                 |
| testID                      | string                    | yes      | undefined     | -                                  |
| icon                        | keyof typeof Icon         | yes      | undefined     | right positioned icon              |
