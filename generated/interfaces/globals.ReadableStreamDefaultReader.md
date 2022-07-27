# Interface: ReadableStreamDefaultReader<R\>

[globals](../modules/globals.md).ReadableStreamDefaultReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](globals.ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](globals.ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](globals.ReadableStreamDefaultReader.md#cancel)
- [read](globals.ReadableStreamDefaultReader.md#read)
- [releaseLock](globals.ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](globals.ReadableStreamGenericReader.md).[closed](globals.ReadableStreamGenericReader.md#closed)

#### Defined in

[globals.d.ts:1757](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1757)

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](globals.ReadableStreamGenericReader.md).[cancel](globals.ReadableStreamGenericReader.md#cancel)

#### Defined in

[globals.d.ts:1758](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1758)

___

### read

▸ **read**(): `Promise`<[`ReadableStreamDefaultReadResult`](../modules/globals.md#readablestreamdefaultreadresult)<`R`\>\>

#### Returns

`Promise`<[`ReadableStreamDefaultReadResult`](../modules/globals.md#readablestreamdefaultreadresult)<`R`\>\>

#### Defined in

[globals.d.ts:1747](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1747)

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1748](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1748)
