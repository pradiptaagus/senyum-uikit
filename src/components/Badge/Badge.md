# Badge

Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.

## Props
| Props         | Type                    | Optional | Default Value | Description                  |
| ------------- | ----------------------- | -------- | ------------- | ---------------------------- |
| visible       | boolean                 | yes      | true          | Whether the badge is visible |
| type          | success, warning, error | yes      | success       | Defining badge color         |
| numberOfLines | number                  | yes      | 1             | text's number of lines       |
| style         | ViewStyle               | yes      | undefined     | component's style            |
| text          | string                  | no       |               | title / label                |
| testID        | string                  | yes      | undefined     | -                            |


## Usage

```
<Badge type="success" text="Status" />
<Badge type="warning" text="Status" />
<Badge type="error" text="Status" />
```