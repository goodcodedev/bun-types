# Interface: Zlib

[zlib](../modules/zlib.md).["zlib"](../modules/zlib._zlib_.md).Zlib

## Hierarchy

- **`Zlib`**

  ↳ [`BrotliCompress`](zlib._zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](zlib._zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](zlib._zlib_.Gzip-1.md)

  ↳ [`Gunzip`](zlib._zlib_.Gunzip-1.md)

  ↳ [`Deflate`](zlib._zlib_.Deflate-1.md)

  ↳ [`Inflate`](zlib._zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](zlib._zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](zlib._zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](zlib._zlib_.Unzip-1.md)

  ↳ [`BrotliCompress`](zlib._node_zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](zlib._node_zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](zlib._node_zlib_.Gzip-1.md)

  ↳ [`Gunzip`](zlib._node_zlib_.Gunzip-1.md)

  ↳ [`Deflate`](zlib._node_zlib_.Deflate-1.md)

  ↳ [`Inflate`](zlib._node_zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](zlib._node_zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](zlib._node_zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](zlib._node_zlib_.Unzip-1.md)

## Table of contents

### Properties

- [bytesRead](zlib._zlib_.Zlib.md#bytesread)
- [bytesWritten](zlib._zlib_.Zlib.md#byteswritten)
- [shell](zlib._zlib_.Zlib.md#shell)

### Methods

- [flush](zlib._zlib_.Zlib.md#flush)

## Properties

### bytesRead

• `Readonly` **bytesRead**: `number`

**`Deprecated`**

Use bytesWritten instead.

#### Defined in

[zlib.d.ts:140](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L140)

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

#### Defined in

[zlib.d.ts:141](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L141)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Defined in

[zlib.d.ts:142](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L142)

## Methods

### flush

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:143](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L143)

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:144](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L144)
