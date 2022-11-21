# Dialog

`Dialog` is a component to displayed on top of the screen with overlay. Sometime used to display additional info, action, etc.

## DialogProps

| Props       | Type                | Optional | Default value | Description                                                             |
| ----------- | ------------------- | -------- | ------------- | ----------------------------------------------------------------------- |
| dismissable | boolean             | Yes      | undefined     | Define the `Dialog` component can be dismissed when the overlay pressed |
| onDismiss   | () => void          | Yes      | undefined     | Define the invoked when the `Dialog` overlay pressed                    |
| visible     | boolean             | Yes      | undefined     | Define `Dialog` visibility                                              |
| children    | ReactNode           | No       | -             | Define the `Dialog` content                                             |
| testID      | string              | Yes      | -             | -                                                                       |
| position    | 'center' or 'bottom | Yes      | 'center'      | Define the dialog position                                              |

# Dialog.Action

`Dialog.Action` is a component which used to wrap the action button which placed on the bottom `Dialog`.

## DialogActionProps

| Props    | Type                 | Optional | Default value | Description                        |
| -------- | -------------------- | -------- | ------------- | ---------------------------------- |
| children | ReactNode            | No       | -             | Define the `Dialog.Action` content |
| style    | StyleProp<ViewStyle> | Yes      | undefined     | Define the custom style            |

# Dialog.Close

`Dialog.Close` is a component which used to close the dialog.

## DialogCloseProps

| Props   | Type       | Optional | Default value | Description                                            |
| ------- | ---------- | -------- | ------------- | ------------------------------------------------------ |
| onPress | () => void | No       | -             | Define the invoked function when the component pressed |

# Dialog.Content

`Dialog.Content` is a component which used to wrap the `Dialog` content.

## DialogContentProps

| Props    | Type                 | Optional | Default value | Description                         |
| -------- | -------------------- | -------- | ------------- | ----------------------------------- |
| children | ReactNode            | No       | -             | Define the `Dialog.Content` content |
| style    | StyleProp<ViewStyle> | Yes      | undefined     | Define the custom style             |

# Dialog.Header

`Dialog.Header` is a component which used to wrap the `Dialog` header.

## DialogHeaderProps

| Props    | Type      | Optional | Default value | Description                        |
| -------- | --------- | -------- | ------------- | ---------------------------------- |
| children | ReactNode | No       | -             | Define the `Dialog.Header` content |

# Dialog.Icon

`Dialog.Icon` is a component which used to display a icon to represent the dialog intention.

## DialogIconProps

| Props | Type                     | Optional  | Default value | Description                                   |
| ----- | ------------------------ | --------- | ------------- | --------------------------------------------- |
| color | string                   | Yes       | undefined     | Define the color for the icon                 |
| icon  | keyof typeof `Icon`      | No        | -             | Define the icon name                          |
| size  | string                   | Yes       | undefined     | Define the icon size                          |
| style | StyleProp<ViewStyle> Yes | undefined | undefined     | Define the custom style for the `Dialog.Icon` |

# Dialog.ScrollArea

`Dialog.ScrollArea` is a component which used to wrap the long content, so it can be scrolled.

## DialogScrollAreaProps

| Props    | Type                 | Optional | Default value | Description                                     |
| -------- | -------------------- | -------- | ------------- | ----------------------------------------------- |
| children | ReactNode            | No       | -             | Define the `Dialog.ScrollArea` content          |
| style    | StyleProp<ViewStyle> | Yes      | -             | Define the custom style for `Dialog.ScrollArea` |

# Dialog.Title

`Dialog.Title` is a component which used to wrap the `Dialog` title.

## DialogTitleProps

| Props    | Type                 | Optional | Default value | Description                                |
| -------- | -------------------- | -------- | ------------- | ------------------------------------------ |
| children | ReactNode            | No       | -             | Define the `Dialog.Title` content          |
| style    | StyleProp<ViewStyle> | Yes      | -             | Define the custom style for `Dialog.Title` |
