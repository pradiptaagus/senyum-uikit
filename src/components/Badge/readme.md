# Badge

Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.

## BadgeProps

| Props         | Type                    | Optional | Default Value | Description                     |
| ------------- | ----------------------- | -------- | ------------- | ------------------------------- |
| children      | ReactNode               | No       | -             | Define the `Badge` children     |
| visible       | boolean                 | Yes      | true          | Define the `Badge` visibility   |
| variant       | success, warning, error | Yes      | success       | Define the `Badge` color        |
| numberOfLines | number                  | Yes      | 1             | text's number of lines          |
| style         | StyleProp<ViewStyle>    | Yes      | undefined     | Define the `Badge` custom style |
| testID        | string                  | Yes      | undefined     | -                               |

## Usage

```
import {Badge} from "senyum-uikit";

<Badge type="success" text="Status" />
<Badge type="warning" text="Status" />
<Badge type="error" text="Status" />
```
