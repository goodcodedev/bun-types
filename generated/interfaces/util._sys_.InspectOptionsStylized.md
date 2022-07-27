# Interface: InspectOptionsStylized

[util](../modules/util.md).["sys"](../modules/util._sys_.md).InspectOptionsStylized

## Hierarchy

- [`InspectOptions`](util._util_.InspectOptions.md)

  ↳ **`InspectOptionsStylized`**

## Table of contents

### Properties

- [breakLength](util._sys_.InspectOptionsStylized.md#breaklength)
- [colors](util._sys_.InspectOptionsStylized.md#colors)
- [compact](util._sys_.InspectOptionsStylized.md#compact)
- [customInspect](util._sys_.InspectOptionsStylized.md#custominspect)
- [depth](util._sys_.InspectOptionsStylized.md#depth)
- [getters](util._sys_.InspectOptionsStylized.md#getters)
- [maxArrayLength](util._sys_.InspectOptionsStylized.md#maxarraylength)
- [maxStringLength](util._sys_.InspectOptionsStylized.md#maxstringlength)
- [showHidden](util._sys_.InspectOptionsStylized.md#showhidden)
- [showProxy](util._sys_.InspectOptionsStylized.md#showproxy)
- [sorted](util._sys_.InspectOptionsStylized.md#sorted)

### Methods

- [stylize](util._sys_.InspectOptionsStylized.md#stylize)

## Properties

### breakLength

• `Optional` **breakLength**: `number`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[breakLength](util._util_.InspectOptions.md#breaklength)

#### Defined in

[util.d.ts:38](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L38)

___

### colors

• `Optional` **colors**: `boolean`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[colors](util._util_.InspectOptions.md#colors)

#### Defined in

[util.d.ts:27](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L27)

___

### compact

• `Optional` **compact**: `number` \| `boolean`

Setting this to `false` causes each object key
to be displayed on a new line. It will also add new lines to text that is
longer than `breakLength`. If set to a number, the most `n` inner elements
are united on a single line as long as all properties fit into
`breakLength`. Short array elements are also grouped together. Note that no
text will be reduced below 16 characters, no matter the `breakLength` size.
For more information, see the example below.

**`Default`**

`true`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[compact](util._util_.InspectOptions.md#compact)

#### Defined in

[util.d.ts:49](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L49)

___

### customInspect

• `Optional` **customInspect**: `boolean`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[customInspect](util._util_.InspectOptions.md#custominspect)

#### Defined in

[util.d.ts:28](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L28)

___

### depth

• `Optional` **depth**: `number`

**`Default`**

2

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[depth](util._util_.InspectOptions.md#depth)

#### Defined in

[util.d.ts:26](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L26)

___

### getters

• `Optional` **getters**: `boolean` \| ``"get"`` \| ``"set"``

If set to `true`, getters are going to be
inspected as well. If set to `'get'` only getters without setter are going
to be inspected. If set to `'set'` only getters having a corresponding
setter are going to be inspected. This might cause side effects depending on
the getter function.

**`Default`**

`false`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[getters](util._util_.InspectOptions.md#getters)

#### Defined in

[util.d.ts:21](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L21)

___

### maxArrayLength

• `Optional` **maxArrayLength**: `number`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[maxArrayLength](util._util_.InspectOptions.md#maxarraylength)

#### Defined in

[util.d.ts:30](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L30)

___

### maxStringLength

• `Optional` **maxStringLength**: `number`

Specifies the maximum number of characters to
include when formatting. Set to `null` or `Infinity` to show all elements.
Set to `0` or negative to show no characters.

**`Default`**

10000

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[maxStringLength](util._util_.InspectOptions.md#maxstringlength)

#### Defined in

[util.d.ts:37](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L37)

___

### showHidden

• `Optional` **showHidden**: `boolean`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[showHidden](util._util_.InspectOptions.md#showhidden)

#### Defined in

[util.d.ts:22](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L22)

___

### showProxy

• `Optional` **showProxy**: `boolean`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[showProxy](util._util_.InspectOptions.md#showproxy)

#### Defined in

[util.d.ts:29](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L29)

___

### sorted

• `Optional` **sorted**: `boolean` \| (`a`: `string`, `b`: `string`) => `number`

#### Inherited from

[InspectOptions](util._util_.InspectOptions.md).[sorted](util._util_.InspectOptions.md#sorted)

#### Defined in

[util.d.ts:50](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L50)

## Methods

### stylize

▸ **stylize**(`text`, `styleType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleType` | [`Style`](../modules/util._util_.md#style) |

#### Returns

`string`

#### Defined in

[util.d.ts:69](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L69)
