# Interface: StatSyncFn

[fs](../modules/fs.md).["fs"](../modules/fs._fs_.md).StatSyncFn

## Hierarchy

- `Function`

  ↳ **`StatSyncFn`**

## Callable

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options?` | `undefined` |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:674](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L674)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options?` | [`StatSyncOptions`](fs._fs_.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:675](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L675)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](fs._fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options` | [`StatSyncOptions`](fs._fs_.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`BigIntStats`](fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:682](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L682)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options?` | [`StatSyncOptions`](fs._fs_.StatSyncOptions.md) & { `bigint?`: ``false``  } |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:690](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L690)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](fs._fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options` | [`StatSyncOptions`](fs._fs_.StatSyncOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:697](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L697)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](fs._fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options` | [`StatSyncOptions`](fs._fs_.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:703](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L703)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](fs._fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../modules/bun.md#pathlike) |
| `options?` | [`StatSyncOptions`](fs._fs_.StatSyncOptions.md) |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:710](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L710)

## Table of contents

### Properties

- [arguments](fs._fs_.StatSyncFn.md#arguments)
- [caller](fs._fs_.StatSyncFn.md#caller)
- [length](fs._fs_.StatSyncFn.md#length)
- [name](fs._fs_.StatSyncFn.md#name)
- [prototype](fs._fs_.StatSyncFn.md#prototype)

### Methods

- [[hasInstance]](fs._fs_.StatSyncFn.md#[hasinstance])
- [apply](fs._fs_.StatSyncFn.md#apply)
- [bind](fs._fs_.StatSyncFn.md#bind)
- [call](fs._fs_.StatSyncFn.md#call)
- [toString](fs._fs_.StatSyncFn.md#tostring)

## Properties

### arguments

• **arguments**: `any`

#### Inherited from

Function.arguments

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:310

___

### caller

• **caller**: `Function`

#### Inherited from

Function.caller

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:311

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Function.length

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:307

___

### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

Function.name

#### Defined in

genDoc/node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### prototype

• **prototype**: `any`

#### Inherited from

Function.prototype

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:306

## Methods

### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

Function.\_\_@hasInstance@140

#### Defined in

genDoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:162

___

### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the this object. |
| `argArray?` | `any` | A set of arguments to be passed to the function. |

#### Returns

`any`

#### Inherited from

Function.apply

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:286

___

### bind

▸ **bind**(`this`, `thisArg`, ...`argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[] | A list of arguments to be passed to the new function. |

#### Returns

`any`

#### Inherited from

Function.bind

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:301

___

### call

▸ **call**(`this`, `thisArg`, ...`argArray`): `any`

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the current object. |
| `...argArray` | `any`[] | A list of arguments to be passed to the method. |

#### Returns

`any`

#### Inherited from

Function.call

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:293

___

### toString

▸ **toString**(): `string`

Returns a string representation of a function.

#### Returns

`string`

#### Inherited from

Function.toString

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:304
