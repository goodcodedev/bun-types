# Interface: HashOptions

[crypto](../modules/crypto.md).["node:crypto"](../modules/crypto._node_crypto_.md).HashOptions

## Hierarchy

- [`TransformOptions`](stream._stream_.TransformOptions.md)

  ↳ **`HashOptions`**

## Table of contents

### Properties

- [allowHalfOpen](crypto._node_crypto_.HashOptions.md#allowhalfopen)
- [autoDestroy](crypto._node_crypto_.HashOptions.md#autodestroy)
- [decodeStrings](crypto._node_crypto_.HashOptions.md#decodestrings)
- [defaultEncoding](crypto._node_crypto_.HashOptions.md#defaultencoding)
- [emitClose](crypto._node_crypto_.HashOptions.md#emitclose)
- [encoding](crypto._node_crypto_.HashOptions.md#encoding)
- [highWaterMark](crypto._node_crypto_.HashOptions.md#highwatermark)
- [objectMode](crypto._node_crypto_.HashOptions.md#objectmode)
- [outputLength](crypto._node_crypto_.HashOptions.md#outputlength)
- [readableHighWaterMark](crypto._node_crypto_.HashOptions.md#readablehighwatermark)
- [readableObjectMode](crypto._node_crypto_.HashOptions.md#readableobjectmode)
- [signal](crypto._node_crypto_.HashOptions.md#signal)
- [writableCorked](crypto._node_crypto_.HashOptions.md#writablecorked)
- [writableHighWaterMark](crypto._node_crypto_.HashOptions.md#writablehighwatermark)
- [writableObjectMode](crypto._node_crypto_.HashOptions.md#writableobjectmode)

### Methods

- [construct](crypto._node_crypto_.HashOptions.md#construct)
- [destroy](crypto._node_crypto_.HashOptions.md#destroy)
- [final](crypto._node_crypto_.HashOptions.md#final)
- [flush](crypto._node_crypto_.HashOptions.md#flush)
- [read](crypto._node_crypto_.HashOptions.md#read)
- [transform](crypto._node_crypto_.HashOptions.md#transform)
- [write](crypto._node_crypto_.HashOptions.md#write)
- [writev](crypto._node_crypto_.HashOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[allowHalfOpen](stream._stream_.TransformOptions.md#allowhalfopen)

#### Defined in

[stream.d.ts:808](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L808)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[autoDestroy](stream._stream_.TransformOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[decodeStrings](stream._stream_.TransformOptions.md#decodestrings)

#### Defined in

[stream.d.ts:494](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[defaultEncoding](stream._stream_.TransformOptions.md#defaultencoding)

#### Defined in

[stream.d.ts:495](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[emitClose](stream._stream_.TransformOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[encoding](stream._stream_.TransformOptions.md#encoding)

#### Defined in

[stream.d.ts:46](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[highWaterMark](stream._stream_.TransformOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[objectMode](stream._stream_.TransformOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L36)

___

### outputLength

• `Optional` **outputLength**: `number`

For XOF hash functions such as `shake256`, the
outputLength option can be used to specify the desired output length in bytes.

#### Defined in

[crypto.d.ts:185](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L185)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[readableHighWaterMark](stream._stream_.TransformOptions.md#readablehighwatermark)

#### Defined in

[stream.d.ts:811](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L811)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[readableObjectMode](stream._stream_.TransformOptions.md#readableobjectmode)

#### Defined in

[stream.d.ts:809](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L809)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[signal](stream._stream_.TransformOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L639)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[writableCorked](stream._stream_.TransformOptions.md#writablecorked)

#### Defined in

[stream.d.ts:813](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L813)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[writableHighWaterMark](stream._stream_.TransformOptions.md#writablehighwatermark)

#### Defined in

[stream.d.ts:812](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L812)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[writableObjectMode](stream._stream_.TransformOptions.md#writableobjectmode)

#### Defined in

[stream.d.ts:810](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L810)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[construct](stream._stream_.TransformOptions.md#construct)

#### Defined in

[stream.d.ts:936](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L936)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[destroy](stream._stream_.TransformOptions.md#destroy)

#### Defined in

[stream.d.ts:956](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L956)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[final](stream._stream_.TransformOptions.md#final)

#### Defined in

[stream.d.ts:955](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L955)

___

### flush

▸ `Optional` **flush**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `callback` | [`TransformCallback`](../modules/stream._stream_.md#transformcallback) |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[flush](stream._stream_.TransformOptions.md#flush)

#### Defined in

[stream.d.ts:967](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L967)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[read](stream._stream_.TransformOptions.md#read)

#### Defined in

[stream.d.ts:940](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L940)

___

### transform

▸ `Optional` **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |
| `callback` | [`TransformCallback`](../modules/stream._stream_.md#transformcallback) |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[transform](stream._stream_.TransformOptions.md#transform)

#### Defined in

[stream.d.ts:961](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L961)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[write](stream._stream_.TransformOptions.md#write)

#### Defined in

[stream.d.ts:941](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L941)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/stream._stream_.Transform.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/bun.md#bufferencoding)  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](stream._stream_.TransformOptions.md).[writev](stream._stream_.TransformOptions.md#writev)

#### Defined in

[stream.d.ts:947](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L947)
