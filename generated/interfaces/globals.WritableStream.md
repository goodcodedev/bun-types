# Interface: WritableStream<W\>

[globals](../modules/globals.md).WritableStream

This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](globals.WritableStream.md#locked)

### Methods

- [abort](globals.WritableStream.md#abort)
- [close](globals.WritableStream.md#close)
- [getWriter](globals.WritableStream.md#getwriter)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

[globals.d.ts:1783](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1783)

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

[globals.d.ts:1784](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1784)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1785](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1785)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules/globals.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules/globals.md#writablestreamdefaultwriter)<`W`\>

#### Defined in

[globals.d.ts:1786](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1786)
