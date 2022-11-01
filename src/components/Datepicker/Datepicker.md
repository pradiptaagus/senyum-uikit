# Datepicker

Datepicker is a component which used to select a date.

## DatepickerProps

| Props             | Type                                                     | Optional | Default Value | Description                                                                  |
| ----------------- | -------------------------------------------------------- | -------- | ------------- | ---------------------------------------------------------------------------- |
| visible           | boolean                                                  | Yes      | undefined     | Datepicker visibility status                                                 |
| testID            | string                                                   | Yes      | undefined     | -                                                                            |
| dismissable       | boolean                                                  | Yes      | true          | If true, datepicker can dismissed by press on overlay and otherwise.         |
| onDismis          | () => void                                               | Yes      | undefined     | Called when dismis the modal. Require `dismissable` props                    |
| weekLabels        | string[]                                                 | Yes      | undefined     | The custom week label                                                        |
| monthLabels       | [**MonthLabel[]**](#monthlabel--full-string-abbr-string) | Yes      | undefined     | The custom mont label                                                        |
| value             | Date                                                     | Yes      | undefined     | The initial value fot selected date. The value is marked by the active style |
| handleConfirm     | () => void                                               | No       | -             | Called when confirm button is pressed                                        |
| handleCancel      | () => void                                               | No       | -             | Called when cancel button is pressed                                         |
| cancelButtonText  | string                                                   | Yes      | Batal         | The custom cancel button text                                                |
| confirmButtonText | string                                                   | Yes      | OK            | The custom confirm button text                                               |
| headerStyle       | StyleProp<ViewStyle>                                     | Yes      | undefined     | The custom style for the header                                              |
| headerYearStyle   | StyleProp<TextStyle>                                     | Yes      | undefined     | The custom style for the year label on the header                            |
| headerDateStyle   | StyleProp<TextStyle>                                     | Yes      | undefined     | The custom style for the date label on the header                            |
| dateStyle         | StyleProp<TextStyle>                                     | Yes      | undefined     | The custom style for the date                                                |
| activeStyle       | StyleProp<ViewStyle>                                     | Yes      | undefined     | The custom style for active date, month, and year                            |
| activeTextStyle   | StyleProp<ViewStyle>                                     | Yes      | undefined     | The custom text style for the active date, month, and year                   |
| confirmTextStyle  | StyleProp<TextStyle>                                     | Yes      | undefined     | The custom confirm text style                                                |
| prevIcon          | ReactNode                                                | Yes      | undefined     | The custom previous icon                                                     |
| nextIcon          | ReactNode                                                | Yes      | undefined     | The custom next icon                                                         |

## Type

### **MonthLabel** : `{full: string; abbr: string;}`
