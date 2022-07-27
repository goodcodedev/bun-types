# Interface: URLSearchParams

[globals](../modules/globals.md).URLSearchParams

## Table of contents

### Methods

- [append](globals.URLSearchParams.md#append)
- [delete](globals.URLSearchParams.md#delete)
- [entries](globals.URLSearchParams.md#entries)
- [forEach](globals.URLSearchParams.md#foreach)
- [get](globals.URLSearchParams.md#get)
- [getAll](globals.URLSearchParams.md#getall)
- [has](globals.URLSearchParams.md#has)
- [keys](globals.URLSearchParams.md#keys)
- [set](globals.URLSearchParams.md#set)
- [sort](globals.URLSearchParams.md#sort)
- [toString](globals.URLSearchParams.md#tostring)
- [values](globals.URLSearchParams.md#values)

## Methods

### append

▸ **append**(`name`, `value`): `void`

Appends a specified key/value pair as a new search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1439](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1439)

___

### delete

▸ **delete**(`name`): `void`

Deletes the given search parameter, and its associated value, from the list of all search parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1441](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1441)

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

[globals.d.ts:1451](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1451)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](../modules/globals.md#urlsearchparams)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1456](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1456)

___

### get

▸ **get**(`name`): `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[globals.d.ts:1443](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1443)

___

### getAll

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Defined in

[globals.d.ts:1445](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1445)

___

### has

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[globals.d.ts:1447](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1447)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:1453](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1453)

___

### set

▸ **set**(`name`, `value`): `void`

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1449](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1449)

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1450](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1450)

___

### toString

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

[globals.d.ts:1461](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1461)

___

### values

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:1455](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1455)
