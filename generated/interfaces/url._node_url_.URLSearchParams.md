# Interface: URLSearchParams

[url](../modules/url.md).["node:url"](../modules/url._node_url_.md).URLSearchParams

## Table of contents

### Methods

- [append](url._node_url_.URLSearchParams.md#append)
- [delete](url._node_url_.URLSearchParams.md#delete)
- [forEach](url._node_url_.URLSearchParams.md#foreach)
- [get](url._node_url_.URLSearchParams.md#get)
- [getAll](url._node_url_.URLSearchParams.md#getall)
- [has](url._node_url_.URLSearchParams.md#has)
- [set](url._node_url_.URLSearchParams.md#set)
- [sort](url._node_url_.URLSearchParams.md#sort)
- [toString](url._node_url_.URLSearchParams.md#tostring)

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

[url.d.ts:325](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L325)

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

[url.d.ts:327](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L327)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](url._url_.URLSearchParams.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[url.d.ts:339](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L339)

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

[url.d.ts:329](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L329)

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

[url.d.ts:331](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L331)

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

[url.d.ts:333](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L333)

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

[url.d.ts:335](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L335)

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[url.d.ts:336](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L336)

___

### toString

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

[url.d.ts:338](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/url.d.ts#L338)
