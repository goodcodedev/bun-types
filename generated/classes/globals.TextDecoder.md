# Class: TextDecoder

[globals](../modules/globals.md).TextDecoder

An implementation of the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/) `TextDecoder` API.

```js
const decoder = new TextDecoder();
const u8arr = new Uint8Array([72, 101, 108, 108, 111]);
console.log(decoder.decode(u8arr)); // Hello
```

## Table of contents

### Constructors

- [constructor](globals.TextDecoder.md#constructor)

### Properties

- [encoding](globals.TextDecoder.md#encoding)
- [fatal](globals.TextDecoder.md#fatal)
- [ignoreBOM](globals.TextDecoder.md#ignorebom)

### Methods

- [decode](globals.TextDecoder.md#decode)

## Constructors

### constructor

• **new TextDecoder**(`encoding?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | [`Encoding`](../modules/globals.md#encoding) |
| `options?` | `Object` |
| `options.fatal?` | `boolean` |
| `options.ignoreBOM?` | `boolean` |

#### Defined in

[globals.d.ts:835](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L835)

## Properties

### encoding

• `Readonly` **encoding**: `string`

The encoding supported by the `TextDecoder` instance.

#### Defined in

[globals.d.ts:823](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L823)

___

### fatal

• `Readonly` **fatal**: `boolean`

The value will be `true` if decoding errors result in a `TypeError` being
thrown.

#### Defined in

[globals.d.ts:828](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L828)

___

### ignoreBOM

• `Readonly` **ignoreBOM**: `boolean`

The value will be `true` if the decoding result will include the byte order
mark.

#### Defined in

[globals.d.ts:833](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L833)

## Methods

### decode

▸ **decode**(`input?`): `string`

Decodes the `input` and returns a string. If `options.stream` is `true`, any
incomplete byte sequences occurring at the end of the `input` are buffered
internally and emitted after the next call to `textDecoder.decode()`.

If `textDecoder.fatal` is `true`, decoding errors that occur will result in a`TypeError` being thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input?` | [`TypedArray`](../modules/bun.md#typedarray) \| `ArrayBuffer` | An `ArrayBuffer`, `DataView` or `TypedArray` instance containing the encoded data. |

#### Returns

`string`

#### Defined in

[globals.d.ts:848](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L848)
