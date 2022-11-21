# Dropdown

`Dropdown` is a component which used to choose a choice.

## DropdownProps

| Props                       | Type                                                       | Optional | Default value | Description                                             |
| --------------------------- | ---------------------------------------------------------- | -------- | ------------- | ------------------------------------------------------- |
| value                       | string                                                     | Yes      | undefined     | The `Dropdown` value                                    |
| containerStyle              | StyleProp<ViewStyle>                                       | Yes      | undefined     | Define the custom container style                       |
| disabled                    | boolean                                                    | Yes      | undefined     | Define the `Dropdown` disabled value                    |
| status                      | [DropdownStatus](#dropdownstatus--success--warning--error) | Yes      | undefined     | Define the Dropdown status                              |
| inputContainerStyle         | StyleProp<ViewStyle>                                       | Yes      | undefined     | Define the custom input container style                 |
| disabledInputContainerStyle | StyleProp<ViewStyle>                                       | Yes      | undefined     | Define the custom input container style when disabled   |
| inputStyle                  | StyleProp<ViewStyle>                                       | Yes      | undefined     | Define the custom input style                           |
| label                       | string                                                     | No       | -             | Define the dropdown label                               |
| labelStyle                  | StyleProp<TextStyle>                                       | Yes      | undefined     | Define the dropdown label custom style                  |
| testID                      | string                                                     | Yes      | undefined     | Define the testID                                       |
| onPress                     | () => void                                                 | Yes      | undefined     | Define the invoked function when the `Dropdown` pressed |

### DropdownStatus = 'success' | 'warning' | 'error';
