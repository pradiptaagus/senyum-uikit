# Timepicker

`Timepicker` is a component which used to choose time.
## TextInputProps

| Props                       | Type                                   | Optional | Default value | Description                                     |
| --------------------------- | -------------------------------------- | -------- | ------------- | ----------------------------------------------- |
| color                       | string color                           | Yes      | '#00529C'     | Define timepicker main color                    |
| animationType               | 'fade' / 'slide'                       | Yes      | fade          | Define animation in and out type                |
| onTimeSet                   | ({hour: Hour, minute: Minute}) => void | No       | undefined     | callback function called once user set time     |
