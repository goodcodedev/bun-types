# Interface: Crypto

[globals](../modules/globals.md).Crypto

## Table of contents

### Methods

- [getRandomValues](globals.Crypto.md#getrandomvalues)
- [randomUUID](globals.Crypto.md#randomuuid)

## Methods

### getRandomValues

▸ **getRandomValues**<`T`\>(`array`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](../modules/bun.md#typedarray) = [`TypedArray`](../modules/bun.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

#### Defined in

[globals.d.ts:740](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L740)

___

### randomUUID

▸ **randomUUID**(): `string`

Generate a cryptographically secure random UUID.

**`Example`**

```js
crypto.randomUUID()
'5e6adf82-f516-4468-b1e1-33d6f664d7dc'
```

#### Returns

`string`

#### Defined in

[globals.d.ts:751](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L751)
