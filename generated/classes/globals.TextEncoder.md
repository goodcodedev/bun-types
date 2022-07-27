# Class: TextEncoder

[globals](../modules/globals.md).TextEncoder

An implementation of the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/) `TextEncoder` API. All
instances of `TextEncoder` only support UTF-8 encoding.

```js
const encoder = new TextEncoder();
const uint8array = encoder.encode('this is some data');
```

## Table of contents

### Constructors

- [constructor](globals.TextEncoder.md#constructor)

### Properties

- [encoding](globals.TextEncoder.md#encoding)

### Methods

- [encode](globals.TextEncoder.md#encode)
- [encodeInto](globals.TextEncoder.md#encodeinto)

## Constructors

### constructor

• **new TextEncoder**(`encoding?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | ``"utf-8"`` |

#### Defined in

[globals.d.ts:786](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L786)

## Properties

### encoding

• `Readonly` **encoding**: ``"utf-8"``

The encoding supported by the `TextEncoder` instance. Always set to `'utf-8'`.

#### Defined in

[globals.d.ts:784](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L784)

## Methods

### encode

▸ **encode**(`input?`): `Uint8Array`

UTF-8 encodes the `input` string and returns a `Uint8Array` containing the
encoded bytes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[globals.d.ts:793](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L793)

___

### encodeInto

▸ **encodeInto**(`src?`, `dest?`): [`EncodeIntoResult`](../interfaces/globals.EncodeIntoResult.md)

UTF-8 encodes the `src` string to the `dest` Uint8Array and returns an object
containing the read Unicode code units and written UTF-8 bytes.

```js
const encoder = new TextEncoder();
const src = 'this is some data';
const dest = new Uint8Array(10);
const { read, written } = encoder.encodeInto(src, dest);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src?` | `string` | The text to encode. |
| `dest?` | [`TypedArray`](../modules/bun.md#typedarray) | The array to hold the encode result. |

#### Returns

[`EncodeIntoResult`](../interfaces/globals.EncodeIntoResult.md)

#### Defined in

[globals.d.ts:807](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L807)
