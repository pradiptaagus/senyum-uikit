# Appbar

`Appbar` is a component which placed on top a screen. `Appbar` generally contain title, back button, or acction menu.

## AppbarProps

| Props    | Type                                              | Optional | Default value | Description                                                                                                |
| -------- | ------------------------------------------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| children | ReactNode                                         | No       | -             | The children component of `Appbar`, for example `Appbar.Action`, `Appbar.BackAction`, and `Appbar.Content` |
| style    | StyleProp<ViewStyle>                              | Yes      | undefined     | The custom style for `Appbar` component                                                                    |
| variant  | [AppbarVariant](#appbarvariant--default--primary) | Yes      | default       | The variant of `Appbar`, related to the `Appbar` color                                                     |
| testID   | string                                            | Yes      | undefined     | -                                                                                                          |

# Appbar.Action

`Appbar.Action` is a action menu wrapper.

## AppbarActionProps

| Props              | Type                 | Optional | Default value | Description                                    |
| ------------------ | -------------------- | -------- | ------------- | ---------------------------------------------- |
| icon               | keyof tyepof `Icon`  | No       | -             | The icon for menu                              |
| size               | number               | Yes      | 24            | The size of menu icon                          |
| color              | string               | No       | #B8BEC4       | The color of menu icon                         |
| accessibilityLabel | string               | Yes      | undefined     | The accessibilityLabel for `Appbar.Action`     |
| onPress            | () => void           | Yes      | -             | The invoked function when menu is pressed      |
| style              | StyleProp<ViewStyle> | No       | undefined     | The custom style for `Appbar.Action` component |
| testID             | string               | No       | undefined     | -                                              |

# Appbar.BackAction

`Appbar.BackAction` is a back navigation button.

## AppbarBackActionProps

| Props   | Type       | Optional | Default value | Description                                                  |
| ------- | ---------- | -------- | ------------- | ------------------------------------------------------------ |
| onPress | () => void | No       | -             | The invoked function when the `Appbar.BackAction` is pressed |
| testId  | string     | Yes      | -             |

# Appbar.Content

`Appbar.Content` is a wrapper for the title.

## AppbarContentProps

| Props      | Type                 | Optional | Default value | Description                           |
| ---------- | -------------------- | -------- | ------------- | ------------------------------------- |
| title      | string               | No       | -             | The displayed title                   |
| titleStyle | StyleProp<TextStyle> | Yes      | undefined     | The custom style for title            |
| style      | StyleProp<ViewStyle> | Yes      | undefined     | The custom style for `Appbar.Content` |
| testId     | string               | Yes      | -             | -                                     |

# Usage

```
<Appbar variant="primary">
    <Appbar.BackAction onPress={() => props.navigation.goBack()} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon={'Setting'} onPress={() => {}} />
</Appbar>
```

# Additional Info

### AppbarVariant = 'default' | 'primary'
