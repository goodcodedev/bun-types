# Interface: DuplexOptions

[stream](../modules/stream.md).["stream"](../modules/stream._stream_.md).DuplexOptions

## Hierarchy

- [`ReadableOptions`](stream._stream_.ReadableOptions.md)

- [`WritableOptions`](stream._stream_.WritableOptions.md)

  ↳ **`DuplexOptions`**

  ↳↳ [`TransformOptions`](stream._stream_.TransformOptions.md)

  ↳↳ [`TransformOptions`](stream._node_stream_.TransformOptions.md)

## Table of contents

### Properties

- [allowHalfOpen](stream._stream_.DuplexOptions.md#allowhalfopen)
- [autoDestroy](stream._stream_.DuplexOptions.md#autodestroy)
- [decodeStrings](stream._stream_.DuplexOptions.md#decodestrings)
- [defaultEncoding](stream._stream_.DuplexOptions.md#defaultencoding)
- [emitClose](stream._stream_.DuplexOptions.md#emitclose)
- [encoding](stream._stream_.DuplexOptions.md#encoding)
- [highWaterMark](stream._stream_.DuplexOptions.md#highwatermark)
- [objectMode](stream._stream_.DuplexOptions.md#objectmode)
- [readableHighWaterMark](stream._stream_.DuplexOptions.md#readablehighwatermark)
- [readableObjectMode](stream._stream_.DuplexOptions.md#readableobjectmode)
- [signal](stream._stream_.DuplexOptions.md#signal)
- [writableCorked](stream._stream_.DuplexOptions.md#writablecorked)
- [writableHighWaterMark](stream._stream_.DuplexOptions.md#writablehighwatermark)
- [writableObjectMode](stream._stream_.DuplexOptions.md#writableobjectmode)

### Methods

- [construct](stream._stream_.DuplexOptions.md#construct)
- [destroy](stream._stream_.DuplexOptions.md#destroy)
- [final](stream._stream_.DuplexOptions.md#final)
- [read](stream._stream_.DuplexOptions.md#read)
- [write](stream._stream_.DuplexOptions.md#write)
- [writev](stream._stream_.DuplexOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Defined in

[stream.d.ts:808](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L808)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[autoDestroy](stream._stream_.WritableOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[decodeStrings](stream._stream_.WritableOptions.md#decodestrings)

#### Defined in

[stream.d.ts:494](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[defaultEncoding](stream._stream_.WritableOptions.md#defaultencoding)

#### Defined in

[stream.d.ts:495](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[emitClose](stream._stream_.WritableOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Inherited from

[ReadableOptions](stream._stream_.ReadableOptions.md).[encoding](stream._stream_.ReadableOptions.md#encoding)

#### Defined in

[stream.d.ts:46](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[highWaterMark](stream._stream_.WritableOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[objectMode](stream._stream_.WritableOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L36)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Defined in

[stream.d.ts:811](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L811)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Defined in

[stream.d.ts:809](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L809)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[WritableOptions](stream._stream_.WritableOptions.md).[signal](stream._stream_.WritableOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L639)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Defined in

[stream.d.ts:813](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L813)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Defined in

[stream.d.ts:812](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L812)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Defined in

[stream.d.ts:810](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L810)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/stream._stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](stream._stream_.WritableOptions.md).[construct](stream._stream_.WritableOptions.md#construct)

#### Defined in

[stream.d.ts:814](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L814)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/stream._stream_.Duplex.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](stream._stream_.WritableOptions.md).[destroy](stream._stream_.WritableOptions.md#destroy)

#### Defined in

[stream.d.ts:831](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L831)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/stream._stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](stream._stream_.WritableOptions.md).[final](stream._stream_.WritableOptions.md#final)

#### Defined in

[stream.d.ts:830](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L830)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/stream._stream_.Duplex.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[ReadableOptions](stream._stream_.ReadableOptions.md).[read](stream._stream_.ReadableOptions.md#read)

#### Defined in

[stream.d.ts:815](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L815)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/stream._stream_.Duplex.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](stream._stream_.WritableOptions.md).[write](stream._stream_.WritableOptions.md#write)

#### Defined in

[stream.d.ts:816](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L816)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/stream._stream_.Duplex.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/bun.md#bufferencoding)  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](stream._stream_.WritableOptions.md).[writev](stream._stream_.WritableOptions.md#writev)

#### Defined in

[stream.d.ts:822](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L822)
