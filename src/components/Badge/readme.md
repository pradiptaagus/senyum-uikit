# Badge

Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.

## BadgeProps

| Props         | Type                    | Optional | Default Value | Description                  |
| ------------- | ----------------------- | -------- | ------------- | ---------------------------- |
| visible       | boolean                 | Yes      | true          | Whether the badge is visible |
| type          | success, warning, error | Yes      | success       | Defining badge color         |
| numberOfLines | number                  | Yes      | 1             | text's number of lines       |
| style         | StyleProp<ViewStyle>    | Yes      | undefined     | component's style            |
| text          | string                  | No       | -             | title / label                |
| testID        | string                  | Yes      | undefined     | -                            |

## Usage

```
<Badge type="success" text="Status" />
<Badge type="warning" text="Status" />
<Badge type="error" text="Status" />
```
