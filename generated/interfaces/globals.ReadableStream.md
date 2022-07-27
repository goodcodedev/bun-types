# Interface: ReadableStream<R\>

[globals](../modules/globals.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](globals.ReadableStream.md#locked)

### Methods

- [cancel](globals.ReadableStream.md#cancel)
- [forEach](globals.ReadableStream.md#foreach)
- [getReader](globals.ReadableStream.md#getreader)
- [pipeThrough](globals.ReadableStream.md#pipethrough)
- [pipeTo](globals.ReadableStream.md#pipeto)
- [tee](globals.ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

[globals.d.ts:1674](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1674)

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1675](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1675)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules/globals.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1686](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1686)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/globals.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/globals.md#readablestreamdefaultreader)<`R`\>

#### Defined in

[globals.d.ts:1676](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1676)

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/globals.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](globals.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](globals.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/globals.md#readablestream)<`T`\>

#### Defined in

[globals.d.ts:1677](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1677)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/globals.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](globals.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1681](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1681)

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/globals.md#readablestream)<`R`\>, [`ReadableStream`](../modules/globals.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/globals.md#readablestream)<`R`\>, [`ReadableStream`](../modules/globals.md#readablestream)<`R`\>]

#### Defined in

[globals.d.ts:1685](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1685)
