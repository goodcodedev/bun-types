# Interface: WritableStreamDefaultWriter<W\>

[globals](../modules/globals.md).WritableStreamDefaultWriter

This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [closed](globals.WritableStreamDefaultWriter.md#closed)
- [desiredSize](globals.WritableStreamDefaultWriter.md#desiredsize)
- [ready](globals.WritableStreamDefaultWriter.md#ready)

### Methods

- [abort](globals.WritableStreamDefaultWriter.md#abort)
- [close](globals.WritableStreamDefaultWriter.md#close)
- [releaseLock](globals.WritableStreamDefaultWriter.md#releaselock)
- [write](globals.WritableStreamDefaultWriter.md#write)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Defined in

[globals.d.ts:1809](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1809)

___

### desiredSize

• `Readonly` **desiredSize**: `number`

#### Defined in

[globals.d.ts:1810](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1810)

___

### ready

• `Readonly` **ready**: `Promise`<`undefined`\>

#### Defined in

[globals.d.ts:1811](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1811)

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1812](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1812)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1813](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1813)

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1814](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1814)

___

### write

▸ **write**(`chunk?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1815](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1815)
