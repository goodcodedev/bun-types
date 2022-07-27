# Interface: WritableOptions

[stream](../modules/stream.md).["stream"](../modules/stream._stream_.md).WritableOptions

## Hierarchy

- [`StreamOptions`](stream._stream_.StreamOptions.md)<[`Writable`](../classes/stream._stream_.Writable.md)\>

  ↳ **`WritableOptions`**

  ↳↳ [`DuplexOptions`](stream._stream_.DuplexOptions.md)

  ↳↳ [`DuplexOptions`](stream._node_stream_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](stream._stream_.WritableOptions.md#autodestroy)
- [decodeStrings](stream._stream_.WritableOptions.md#decodestrings)
- [defaultEncoding](stream._stream_.WritableOptions.md#defaultencoding)
- [emitClose](stream._stream_.WritableOptions.md#emitclose)
- [highWaterMark](stream._stream_.WritableOptions.md#highwatermark)
- [objectMode](stream._stream_.WritableOptions.md#objectmode)
- [signal](stream._stream_.WritableOptions.md#signal)

### Methods

- [construct](stream._stream_.WritableOptions.md#construct)
- [destroy](stream._stream_.WritableOptions.md#destroy)
- [final](stream._stream_.WritableOptions.md#final)
- [write](stream._stream_.WritableOptions.md#write)
- [writev](stream._stream_.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[autoDestroy](stream._stream_.StreamOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Defined in

[stream.d.ts:494](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Defined in

[stream.d.ts:495](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[emitClose](stream._stream_.StreamOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L34)

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
| `this` | [`Writable`](../classes/stream._stream_.Writable.md)<`any`\> |
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
| `this` | [`Writable`](../classes/stream._stream_.Writable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream._stream_.StreamOptions.md).[destroy](stream._stream_.StreamOptions.md#destroy)

#### Defined in

[stream.d.ts:38](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L38)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream._stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:510](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L510)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream._stream_.Writable.md)<`any`\> |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:496](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L496)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream._stream_.Writable.md)<`any`\> |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/bun.md#bufferencoding)  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:502](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L502)
