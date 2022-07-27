# Class: SHA512\_256

[bun](../modules/bun.md).["bun"](../modules/bun._bun_.md).SHA512_256

See also [sha](../modules/bun._bun_.md#sha)

## Hierarchy

- [`CryptoHashInterface`](bun._bun_.CryptoHashInterface.md)<[`SHA512_256`](bun._bun_.SHA512_256.md)\>

  ↳ **`SHA512_256`**

## Table of contents

### Constructors

- [constructor](bun._bun_.SHA512_256.md#constructor)

### Properties

- [byteLength](bun._bun_.SHA512_256.md#bytelength)

### Methods

- [digest](bun._bun_.SHA512_256.md#digest)
- [update](bun._bun_.SHA512_256.md#update)
- [hash](bun._bun_.SHA512_256.md#hash)

## Constructors

### constructor

• **new SHA512_256**()

#### Overrides

[CryptoHashInterface](bun._bun_.CryptoHashInterface.md).[constructor](bun._bun_.CryptoHashInterface.md#constructor)

#### Defined in

[bun.d.ts:1194](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1194)

## Properties

### byteLength

▪ `Static` `Readonly` **byteLength**: ``32``

The number of bytes the hash will produce

#### Defined in

[bun.d.ts:1199](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1199)

## Methods

### digest

▸ **digest**(`encoding`): `string`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`DigestEncoding`](../modules/bun._bun_.md#digestencoding) | `DigestEncoding` to return the hash in. If none is provided, it will return a `Uint8Array`. |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](bun._bun_.CryptoHashInterface.md).[digest](bun._bun_.CryptoHashInterface.md#digest)

#### Defined in

[bun.d.ts:1061](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1061)

▸ **digest**(`hashInto?`): [`TypedArray`](../modules/bun.md#typedarray)

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashInto?` | [`TypedArray`](../modules/bun.md#typedarray) | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

[`TypedArray`](../modules/bun.md#typedarray)

#### Inherited from

[CryptoHashInterface](bun._bun_.CryptoHashInterface.md).[digest](bun._bun_.CryptoHashInterface.md#digest)

#### Defined in

[bun.d.ts:1068](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1068)

___

### update

▸ **update**(`data`): [`SHA512_256`](bun._bun_.SHA512_256.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`StringOrBuffer`](../modules/bun.md#stringorbuffer) |

#### Returns

[`SHA512_256`](bun._bun_.SHA512_256.md)

#### Inherited from

[CryptoHashInterface](bun._bun_.CryptoHashInterface.md).[update](bun._bun_.CryptoHashInterface.md#update)

#### Defined in

[bun.d.ts:1054](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1054)

___

### hash

▸ `Static` **hash**(`input`, `hashInto?`): [`TypedArray`](../modules/bun.md#typedarray)

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`StringOrBuffer`](../modules/bun.md#stringorbuffer) | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `hashInto?` | [`TypedArray`](../modules/bun.md#typedarray) | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

[`TypedArray`](../modules/bun.md#typedarray)

#### Inherited from

[CryptoHashInterface](bun._bun_.CryptoHashInterface.md).[hash](bun._bun_.CryptoHashInterface.md#hash)

#### Defined in

[bun.d.ts:1077](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1077)

▸ `Static` **hash**(`input`, `encoding`): `string`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`StringOrBuffer`](../modules/bun.md#stringorbuffer) | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `encoding` | [`DigestEncoding`](../modules/bun._bun_.md#digestencoding) | `DigestEncoding` to return the hash in |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](bun._bun_.CryptoHashInterface.md).[hash](bun._bun_.CryptoHashInterface.md#hash)

#### Defined in

[bun.d.ts:1086](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1086)
