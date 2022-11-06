# Badge

Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.

## Props

**visible**

Type: `boolean`

Default value: `true`

Whether the badge is visible


**type**

Type: `success` | `warning` | `error`

Default value: `success`

Defining badge color

**numberOfLines**

Type: `number`

Default value: `1`

Text number of lines

**style?**

Type: `StyleProp<ViewStyle>`

Component's style

**text**

Type: `string`

Component's title / label


## Usage

```
<Badge type="success" text="Status" />
<Badge type="warning" text="Status" />
<Badge type="error" text="Status" />
```