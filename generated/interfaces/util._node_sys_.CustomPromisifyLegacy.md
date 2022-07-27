# Interface: CustomPromisifyLegacy<TCustom\>

[util](../modules/util.md).["node:sys"](../modules/util._node_sys_.md).CustomPromisifyLegacy

## Type parameters

| Name | Type |
| :------ | :------ |
| `TCustom` | extends `Function` |

## Hierarchy

- `Function`

  ↳ **`CustomPromisifyLegacy`**

## Table of contents

### Properties

- [\_\_promisify\_\_](util._node_sys_.CustomPromisifyLegacy.md#__promisify__)
- [arguments](util._node_sys_.CustomPromisifyLegacy.md#arguments)
- [caller](util._node_sys_.CustomPromisifyLegacy.md#caller)
- [length](util._node_sys_.CustomPromisifyLegacy.md#length)
- [name](util._node_sys_.CustomPromisifyLegacy.md#name)
- [prototype](util._node_sys_.CustomPromisifyLegacy.md#prototype)

### Methods

- [[hasInstance]](util._node_sys_.CustomPromisifyLegacy.md#[hasinstance])
- [apply](util._node_sys_.CustomPromisifyLegacy.md#apply)
- [bind](util._node_sys_.CustomPromisifyLegacy.md#bind)
- [call](util._node_sys_.CustomPromisifyLegacy.md#call)
- [toString](util._node_sys_.CustomPromisifyLegacy.md#tostring)

## Properties

### \_\_promisify\_\_

• **\_\_promisify\_\_**: `TCustom`

#### Defined in

[util.d.ts:1008](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/util.d.ts#L1008)

___

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
