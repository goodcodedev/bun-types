# Interface: Headers

[globals](../modules/globals.md).Headers

This Fetch API interface allows you to perform various actions on HTTP
request and response headers. These actions include retrieving, setting,
adding to, and removing. A Headers object has an associated header list,
which is initially empty and consists of zero or more name and value
pairs.

You can add to this using methods like append()

In all methods of this interface, header names are matched by
case-insensitive byte sequence.

## Table of contents

### Methods

- [append](globals.Headers.md#append)
- [delete](globals.Headers.md#delete)
- [entries](globals.Headers.md#entries)
- [forEach](globals.Headers.md#foreach)
- [get](globals.Headers.md#get)
- [has](globals.Headers.md#has)
- [keys](globals.Headers.md#keys)
- [set](globals.Headers.md#set)
- [values](globals.Headers.md#values)

## Methods

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:272](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L272)

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:273](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L273)

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

[globals.d.ts:277](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L277)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](../modules/globals.md#headers)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:280](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L280)

___

### get

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[globals.d.ts:274](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L274)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[globals.d.ts:275](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L275)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:278](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L278)

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:276](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L276)

___

### values

▸ **values**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:279](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L279)
