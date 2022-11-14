# Datepicker

Datepicker is a component which used to select a date.

## DatepickerProps

| Props             | Type                             | Optional | Default Value | Description                                                                  |
| ----------------- | -------------------------------- | -------- | ------------- | ---------------------------------------------------------------------------- |
| visible           | boolean                          | Yes      | undefined     | Datepicker visibility status                                                 |
| dismissable       | boolean                          | Yes      | true          | If true, datepicker can dismissed by press on overlay and otherwise          |
| testID            | string                           | Yes      | undefined     | -                                                                            |
| onDismis          | () => void                       | Yes      | undefined     | Called when dismis the modal. Require `dismissable` props                    |
| dayLabels         | [**DayLabel[]**](#daylabels)     | Yes      | undefined     | The custom day label                                                         |
| monthLabels       | [**MonthLabel[]**](#monthlabels) | Yes      | undefined     | The custom month label                                                       |
| value             | Date                             | Yes      | current date  | The initial value fot selected date. The value is marked by the active style |
| handleConfirm     | () => void                       | No       | -             | Called when confirm button is pressed                                        |
| handleCancel      | () => void                       | No       | -             | Called when cancel button is pressed                                         |
| cancelButtonText  | string                           | Yes      | Batal         | The custom cancel button text                                                |
| confirmButtonText | string                           | Yes      | OK            | The custom confirm button text                                               |
| headerStyle       | StyleProp<ViewStyle>             | Yes      | undefined     | The custom style for the header                                              |
| headerYearStyle   | StyleProp<TextStyle>             | Yes      | undefined     | The custom style for the year label on the header                            |
| headerDateStyle   | StyleProp<TextStyle>             | Yes      | undefined     | The custom style for the date label on the header                            |
| labelStyle        | StyleProp<TextStyle>             | Yes      | undefined     | The custome style for the date label style                                   |
| dayLabelStyle     | StyleProp<TextStyle>             | Yes      | undefined     | The custome style for the day label style                                    |
| dateStyle         | StyleProp<TextStyle>             | Yes      | undefined     | The custom style for the date                                                |
| activeStyle       | StyleProp<ViewStyle>             | Yes      | undefined     | The custom style for active date, month, and year                            |
| activeTextStyle   | StyleProp<ViewStyle>             | Yes      | undefined     | The custom text style for the active date, month, and year                   |
| confirmTextStyle  | StyleProp<TextStyle>             | Yes      | undefined     | The custom confirm text style                                                |
| prevIcon          | ReactNode                        | Yes      | undefined     | The custom previous icon                                                     |
| nextIcon          | ReactNode                        | Yes      | undefined     | The custom next icon                                                         |
| markedDates       | Date[]                           | Yes      | undefined     | The list of selectable date                                                  |

## Usage

```
<Datepicker
  visible={isOpen}
  onDismiss={handleDatepickerVisibility}
  handleConfirm={(val) => {
    setIsOpen(false);
    console.log('val', val);
  }}
  handleCancel={handleDatepickerVisibility}
/>
```

## Additional info

### dayLabels

**DayLabel** : `{full: string, abbr: string}`

Bellow is the example of dayLabels default value.

```
const dayLabels: DayLabel[] = [
{ full: 'Minggu', abbr: 'M' },
{ full: 'Senin', abbr: 'S' },
{ full: 'Selasa', abbr: 'S' },
{ full: 'Rabu', abbr: 'R' },
{ full: 'Kamis', abbr: 'K' },
{ full: 'Jumat', abbr: 'J' },
{ full: 'Sabtu', abbr: 'S' },
]
```

### monthLabels

**MonthLabel** : `{full: string; abbr: string;}`

Bellow is the example of monthLabels default value.

```
const monthLabels: MonthLabel[] = [
{ full: 'Januari', abbr: 'Jan' },
{ full: 'Februari', abbr: 'Feb' },
{ full: 'Maret', abbr: 'Mar' },
{ full: 'April', abbr: 'Apr' },
{ full: 'Mei', abbr: 'Mei' },
{ full: 'Juni', abbr: 'Jun' },
{ full: 'Juli', abbr: 'Jul' },
{ full: 'Agustus', abbr: 'Agu' },
{ full: 'September', abbr: 'Sep' },
{ full: 'Oktober', abbr: 'Okt' },
{ full: 'November', abbr: 'Nov' },
{ full: 'Desember', abbr: 'Des' },
];
```
