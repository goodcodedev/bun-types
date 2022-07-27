# Interface: ReadableStreamDefaultController<R\>

[globals](../modules/globals.md).ReadableStreamDefaultController

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [desiredSize](globals.ReadableStreamDefaultController.md#desiredsize)

### Methods

- [close](globals.ReadableStreamDefaultController.md#close)
- [enqueue](globals.ReadableStreamDefaultController.md#enqueue)
- [error](globals.ReadableStreamDefaultController.md#error)

## Properties

### desiredSize

• `Readonly` **desiredSize**: `number`

#### Defined in

[globals.d.ts:1726](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1726)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1727](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1727)

___

### enqueue

▸ **enqueue**(`chunk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `R` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1728](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1728)

___

### error

▸ **error**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1729](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1729)
