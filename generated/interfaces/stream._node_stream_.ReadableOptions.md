# Interface: ReadableOptions

[stream](../modules/stream.md).["node:stream"](../modules/stream._node_stream_.md).ReadableOptions

## Hierarchy

- [`StreamOptions`](stream._stream_.StreamOptions.md)<[`Readable`](../classes/stream._stream_.Readable.md)\>

  ↳ **`ReadableOptions`**

## Table of contents

### Properties

- [autoDestroy](stream._node_stream_.ReadableOptions.md#autodestroy)
- [emitClose](stream._node_stream_.ReadableOptions.md#emitclose)
- [encoding](stream._node_stream_.ReadableOptions.md#encoding)
- [highWaterMark](stream._node_stream_.ReadableOptions.md#highwatermark)
- [objectMode](stream._node_stream_.ReadableOptions.md#objectmode)
- [signal](stream._node_stream_.ReadableOptions.md#signal)

### Methods

- [construct](stream._node_stream_.ReadableOptions.md#construct)
- [destroy](stream._node_stream_.ReadableOptions.md#destroy)
- [read](stream._node_stream_.ReadableOptions.md#read)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[autoDestroy](stream._stream_.StreamOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L43)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[emitClose](stream._stream_.StreamOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Defined in

[stream.d.ts:46](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[highWaterMark](stream._stream_.StreamOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[objectMode](stream._stream_.StreamOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L36)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[signal](stream._stream_.StreamOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L639)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/stream._stream_.Readable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[construct](stream._stream_.StreamOptions.md#construct)

#### Defined in

[stream.d.ts:37](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L37)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/stream._stream_.Readable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[destroy](stream._stream_.StreamOptions.md#destroy)

#### Defined in

[stream.d.ts:38](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L38)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/stream._stream_.Readable.md)<`any`\> |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[stream.d.ts:47](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L47)
