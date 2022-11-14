# Radio

`Radio` is a component which used to choose a choice.

## RadioProps

| Props                  | Type                                                           | Optional | Default value | Description                                                   |
| ---------------------- | -------------------------------------------------------------- | -------- | ------------- | ------------------------------------------------------------- |
| status                 | [RadioStatus](#radiostatus--checked--unchecked--indeterminate) | No       | -             | Define the radio check status                                 |
| disabled               | boolean                                                        | Yes      | undefined     | Define the `Radio` disable status                             |
| onPress                | () => void                                                     | Yes      | undefined     | Define the invoked function when the `Radio` pressed          |
| testID                 | string                                                         | Yes      | undefined     | -                                                             |
| borderColor            | string                                                         | Yes      | undefined     | Define the custom border color                                |
| backgroundColor        | string                                                         | Yes      | undefined     | Define the custom background color                            |
| checkedBorderColor     | string                                                         | Yes      | undefined     | Define the custom border color when the status is checked     |
| checkedBackgroundColor | string                                                         | Yes      | undefined     | Define the custom background color when the status is checked |
| style                  | StyleProp<ViewStyle>                                           | Yes      | undefined     | Define the custom style                                       |
| label                  | string                                                         | Yes      | undefined     | Define the label                                              |
| labelStyle             | StyleProp<TextStyle>                                           | Yes      | undefined     | Define the custom label style                                 |
| position               | 'leading' or 'trailing'                                        | Yes      | undefined     | Define the `Radio` position to the label                      |

### RadioStatus = 'checked' | 'unchecked' | 'indeterminate';
