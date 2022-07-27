# Namespace: "zlib"

[zlib](zlib.md)."zlib"

The `zlib` module provides compression functionality implemented using Gzip,
Deflate/Inflate, and Brotli.

To access it:

```js
const zlib = require('zlib');
```

Compression and decompression are built around the Node.js `Streams API`.

Compressing or decompressing a stream (such as a file) can be accomplished by
piping the source stream through a `zlib` `Transform` stream into a destination
stream:

```js
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
  createReadStream,
  createWriteStream
} = require('fs');

const gzip = createGzip();
const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});

// Or, Promisified

const { promisify } = require('util');
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip('input.txt', 'input.txt.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
```

It is also possible to compress or decompress data in a single step:

```js
const { deflate, unzip } = require('zlib');

const input = '.................................';
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString());
});

// Or, Promisified

const { promisify } = require('util');
const do_unzip = promisify(unzip);

do_unzip(buffer)
  .then((buf) => console.log(buf.toString()))
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/zlib.js)

## Table of contents

### Namespaces

- [brotliCompress](zlib._zlib_.brotliCompress.md)
- [brotliDecompress](zlib._zlib_.brotliDecompress.md)
- [constants](zlib._zlib_.constants.md)
- [deflate](zlib._zlib_.deflate.md)
- [deflateRaw](zlib._zlib_.deflateRaw.md)
- [gunzip](zlib._zlib_.gunzip.md)
- [gzip](zlib._zlib_.gzip.md)
- [inflate](zlib._zlib_.inflate.md)
- [inflateRaw](zlib._zlib_.inflateRaw.md)
- [unzip](zlib._zlib_.unzip.md)

### Interfaces

- [BrotliCompress](../interfaces/zlib._zlib_.BrotliCompress-1.md)
- [BrotliDecompress](../interfaces/zlib._zlib_.BrotliDecompress-1.md)
- [BrotliOptions](../interfaces/zlib._zlib_.BrotliOptions.md)
- [Deflate](../interfaces/zlib._zlib_.Deflate-1.md)
- [DeflateRaw](../interfaces/zlib._zlib_.DeflateRaw-1.md)
- [Gunzip](../interfaces/zlib._zlib_.Gunzip-1.md)
- [Gzip](../interfaces/zlib._zlib_.Gzip-1.md)
- [Inflate](../interfaces/zlib._zlib_.Inflate-1.md)
- [InflateRaw](../interfaces/zlib._zlib_.InflateRaw-1.md)
- [Unzip](../interfaces/zlib._zlib_.Unzip-1.md)
- [Zlib](../interfaces/zlib._zlib_.Zlib.md)
- [ZlibOptions](../interfaces/zlib._zlib_.ZlibOptions.md)
- [ZlibParams](../interfaces/zlib._zlib_.ZlibParams.md)
- [ZlibReset](../interfaces/zlib._zlib_.ZlibReset.md)

### Type Aliases

- [CompressCallback](zlib._zlib_.md#compresscallback)
- [InputType](zlib._zlib_.md#inputtype)

### Variables

- [Z\_ASCII](zlib._zlib_.md#z_ascii)
- [Z\_BEST\_COMPRESSION](zlib._zlib_.md#z_best_compression)
- [Z\_BEST\_SPEED](zlib._zlib_.md#z_best_speed)
- [Z\_BINARY](zlib._zlib_.md#z_binary)
- [Z\_BLOCK](zlib._zlib_.md#z_block)
- [Z\_BUF\_ERROR](zlib._zlib_.md#z_buf_error)
- [Z\_DATA\_ERROR](zlib._zlib_.md#z_data_error)
- [Z\_DEFAULT\_COMPRESSION](zlib._zlib_.md#z_default_compression)
- [Z\_DEFAULT\_STRATEGY](zlib._zlib_.md#z_default_strategy)
- [Z\_DEFLATED](zlib._zlib_.md#z_deflated)
- [Z\_ERRNO](zlib._zlib_.md#z_errno)
- [Z\_FILTERED](zlib._zlib_.md#z_filtered)
- [Z\_FINISH](zlib._zlib_.md#z_finish)
- [Z\_FIXED](zlib._zlib_.md#z_fixed)
- [Z\_FULL\_FLUSH](zlib._zlib_.md#z_full_flush)
- [Z\_HUFFMAN\_ONLY](zlib._zlib_.md#z_huffman_only)
- [Z\_MEM\_ERROR](zlib._zlib_.md#z_mem_error)
- [Z\_NEED\_DICT](zlib._zlib_.md#z_need_dict)
- [Z\_NO\_COMPRESSION](zlib._zlib_.md#z_no_compression)
- [Z\_NO\_FLUSH](zlib._zlib_.md#z_no_flush)
- [Z\_OK](zlib._zlib_.md#z_ok)
- [Z\_PARTIAL\_FLUSH](zlib._zlib_.md#z_partial_flush)
- [Z\_RLE](zlib._zlib_.md#z_rle)
- [Z\_STREAM\_END](zlib._zlib_.md#z_stream_end)
- [Z\_STREAM\_ERROR](zlib._zlib_.md#z_stream_error)
- [Z\_SYNC\_FLUSH](zlib._zlib_.md#z_sync_flush)
- [Z\_TEXT](zlib._zlib_.md#z_text)
- [Z\_TREES](zlib._zlib_.md#z_trees)
- [Z\_UNKNOWN](zlib._zlib_.md#z_unknown)
- [Z\_VERSION\_ERROR](zlib._zlib_.md#z_version_error)

### Functions

- [brotliCompress](zlib._zlib_.md#brotlicompress)
- [brotliCompressSync](zlib._zlib_.md#brotlicompresssync)
- [brotliDecompress](zlib._zlib_.md#brotlidecompress)
- [brotliDecompressSync](zlib._zlib_.md#brotlidecompresssync)
- [createBrotliCompress](zlib._zlib_.md#createbrotlicompress)
- [createBrotliDecompress](zlib._zlib_.md#createbrotlidecompress)
- [createDeflate](zlib._zlib_.md#createdeflate)
- [createDeflateRaw](zlib._zlib_.md#createdeflateraw)
- [createGunzip](zlib._zlib_.md#creategunzip)
- [createGzip](zlib._zlib_.md#creategzip)
- [createInflate](zlib._zlib_.md#createinflate)
- [createInflateRaw](zlib._zlib_.md#createinflateraw)
- [createUnzip](zlib._zlib_.md#createunzip)
- [deflate](zlib._zlib_.md#deflate)
- [deflateRaw](zlib._zlib_.md#deflateraw)
- [deflateRawSync](zlib._zlib_.md#deflaterawsync)
- [deflateSync](zlib._zlib_.md#deflatesync)
- [gunzip](zlib._zlib_.md#gunzip)
- [gunzipSync](zlib._zlib_.md#gunzipsync)
- [gzip](zlib._zlib_.md#gzip)
- [gzipSync](zlib._zlib_.md#gzipsync)
- [inflate](zlib._zlib_.md#inflate)
- [inflateRaw](zlib._zlib_.md#inflateraw)
- [inflateRawSync](zlib._zlib_.md#inflaterawsync)
- [inflateSync](zlib._zlib_.md#inflatesync)
- [unzip](zlib._zlib_.md#unzip)
- [unzipSync](zlib._zlib_.md#unzipsync)

## Type Aliases

### CompressCallback

Ƭ **CompressCallback**: (`error`: `Error` \| ``null``, `result`: [`Buffer`](buffer._buffer_.md#buffer)) => `void`

#### Type declaration

▸ (`error`, `result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` \| ``null`` |
| `result` | [`Buffer`](buffer._buffer_.md#buffer) |

##### Returns

`void`

#### Defined in

[zlib.d.ts:205](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L205)

___

### InputType

Ƭ **InputType**: `string` \| `ArrayBuffer` \| `ArrayBufferView`

#### Defined in

[zlib.d.ts:204](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L204)

## Variables

### Z\_ASCII

• `Const` **Z\_ASCII**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:546](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L546)

___

### Z\_BEST\_COMPRESSION

• `Const` **Z\_BEST\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_BEST_COMPRESSION`

#### Defined in

[zlib.d.ts:527](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L527)

___

### Z\_BEST\_SPEED

• `Const` **Z\_BEST\_SPEED**: `number`

**`Deprecated`**

Use `constants.Z_BEST_SPEED`

#### Defined in

[zlib.d.ts:525](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L525)

___

### Z\_BINARY

• `Const` **Z\_BINARY**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:542](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L542)

___

### Z\_BLOCK

• `Const` **Z\_BLOCK**: `number`

**`Deprecated`**

Use `constants.Z_BLOCK`

#### Defined in

[zlib.d.ts:498](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L498)

___

### Z\_BUF\_ERROR

• `Const` **Z\_BUF\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_BUF_ERROR`

#### Defined in

[zlib.d.ts:518](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L518)

___

### Z\_DATA\_ERROR

• `Const` **Z\_DATA\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_DATA_ERROR`

#### Defined in

[zlib.d.ts:514](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L514)

___

### Z\_DEFAULT\_COMPRESSION

• `Const` **Z\_DEFAULT\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_DEFAULT_COMPRESSION`

#### Defined in

[zlib.d.ts:529](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L529)

___

### Z\_DEFAULT\_STRATEGY

• `Const` **Z\_DEFAULT\_STRATEGY**: `number`

**`Deprecated`**

Use `constants.Z_DEFAULT_STRATEGY`

#### Defined in

[zlib.d.ts:540](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L540)

___

### Z\_DEFLATED

• `Const` **Z\_DEFLATED**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:550](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L550)

___

### Z\_ERRNO

• `Const` **Z\_ERRNO**: `number`

**`Deprecated`**

Use `constants.Z_ERRNO`

#### Defined in

[zlib.d.ts:510](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L510)

___

### Z\_FILTERED

• `Const` **Z\_FILTERED**: `number`

**`Deprecated`**

Use `constants.Z_FILTERED`

#### Defined in

[zlib.d.ts:532](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L532)

___

### Z\_FINISH

• `Const` **Z\_FINISH**: `number`

**`Deprecated`**

Use `constants.Z_FINISH`

#### Defined in

[zlib.d.ts:496](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L496)

___

### Z\_FIXED

• `Const` **Z\_FIXED**: `number`

**`Deprecated`**

Use `constants.Z_FIXED`

#### Defined in

[zlib.d.ts:538](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L538)

___

### Z\_FULL\_FLUSH

• `Const` **Z\_FULL\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_FULL_FLUSH`

#### Defined in

[zlib.d.ts:494](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L494)

___

### Z\_HUFFMAN\_ONLY

• `Const` **Z\_HUFFMAN\_ONLY**: `number`

**`Deprecated`**

Use `constants.Z_HUFFMAN_ONLY`

#### Defined in

[zlib.d.ts:534](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L534)

___

### Z\_MEM\_ERROR

• `Const` **Z\_MEM\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_MEM_ERROR`

#### Defined in

[zlib.d.ts:516](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L516)

___

### Z\_NEED\_DICT

• `Const` **Z\_NEED\_DICT**: `number`

**`Deprecated`**

Use `constants.Z_NEED_DICT`

#### Defined in

[zlib.d.ts:508](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L508)

___

### Z\_NO\_COMPRESSION

• `Const` **Z\_NO\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_NO_COMPRESSION`

#### Defined in

[zlib.d.ts:523](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L523)

___

### Z\_NO\_FLUSH

• `Const` **Z\_NO\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_NO_FLUSH`

#### Defined in

[zlib.d.ts:488](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L488)

___

### Z\_OK

• `Const` **Z\_OK**: `number`

**`Deprecated`**

Use `constants.Z_OK`

#### Defined in

[zlib.d.ts:504](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L504)

___

### Z\_PARTIAL\_FLUSH

• `Const` **Z\_PARTIAL\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_PARTIAL_FLUSH`

#### Defined in

[zlib.d.ts:490](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L490)

___

### Z\_RLE

• `Const` **Z\_RLE**: `number`

**`Deprecated`**

Use `constants.Z_RLE`

#### Defined in

[zlib.d.ts:536](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L536)

___

### Z\_STREAM\_END

• `Const` **Z\_STREAM\_END**: `number`

**`Deprecated`**

Use `constants.Z_STREAM_END`

#### Defined in

[zlib.d.ts:506](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L506)

___

### Z\_STREAM\_ERROR

• `Const` **Z\_STREAM\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_STREAM_ERROR`

#### Defined in

[zlib.d.ts:512](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L512)

___

### Z\_SYNC\_FLUSH

• `Const` **Z\_SYNC\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_SYNC_FLUSH`

#### Defined in

[zlib.d.ts:492](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L492)

___

### Z\_TEXT

• `Const` **Z\_TEXT**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:544](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L544)

___

### Z\_TREES

• `Const` **Z\_TREES**: `number`

**`Deprecated`**

Use `constants.Z_TREES`

#### Defined in

[zlib.d.ts:500](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L500)

___

### Z\_UNKNOWN

• `Const` **Z\_UNKNOWN**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:548](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L548)

___

### Z\_VERSION\_ERROR

• `Const` **Z\_VERSION\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_VERSION_ERROR`

#### Defined in

[zlib.d.ts:520](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L520)

## Functions

### brotliCompress

▸ **brotliCompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](../interfaces/zlib._zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:208](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L208)

▸ **brotliCompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:213](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L213)

___

### brotliCompressSync

▸ **brotliCompressSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Compress a chunk of data with `BrotliCompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](../interfaces/zlib._zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:223](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L223)

___

### brotliDecompress

▸ **brotliDecompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](../interfaces/zlib._zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:226](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L226)

▸ **brotliDecompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:231](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L231)

___

### brotliDecompressSync

▸ **brotliDecompressSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Decompress a chunk of data with `BrotliDecompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](../interfaces/zlib._zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:241](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L241)

___

### createBrotliCompress

▸ **createBrotliCompress**(`options?`): [`BrotliCompress`](../interfaces/zlib._zlib_.BrotliCompress-1.md)

Creates and returns a new `BrotliCompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](../interfaces/zlib._zlib_.BrotliOptions.md) |

#### Returns

[`BrotliCompress`](../interfaces/zlib._zlib_.BrotliCompress-1.md)

#### Defined in

[zlib.d.ts:164](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L164)

___

### createBrotliDecompress

▸ **createBrotliDecompress**(`options?`): [`BrotliDecompress`](../interfaces/zlib._zlib_.BrotliDecompress-1.md)

Creates and returns a new `BrotliDecompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](../interfaces/zlib._zlib_.BrotliOptions.md) |

#### Returns

[`BrotliDecompress`](../interfaces/zlib._zlib_.BrotliDecompress-1.md)

#### Defined in

[zlib.d.ts:168](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L168)

___

### createDeflate

▸ **createDeflate**(`options?`): [`Deflate`](../interfaces/zlib._zlib_.Deflate-1.md)

Creates and returns a new `Deflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Deflate`](../interfaces/zlib._zlib_.Deflate-1.md)

#### Defined in

[zlib.d.ts:181](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L181)

___

### createDeflateRaw

▸ **createDeflateRaw**(`options?`): [`DeflateRaw`](../interfaces/zlib._zlib_.DeflateRaw-1.md)

Creates and returns a new `DeflateRaw` object.

An upgrade of zlib from 1.2.8 to 1.2.11 changed behavior when `windowBits`is set to 8 for raw deflate streams. zlib would automatically set `windowBits`to 9 if was initially set to 8\. Newer
versions of zlib will throw an exception,
so Node.js restored the original behavior of upgrading a value of 8 to 9,
since passing `windowBits = 9` to zlib actually results in a compressed stream
that effectively uses an 8-bit window only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`DeflateRaw`](../interfaces/zlib._zlib_.DeflateRaw-1.md)

#### Defined in

[zlib.d.ts:195](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L195)

___

### createGunzip

▸ **createGunzip**(`options?`): [`Gunzip`](../interfaces/zlib._zlib_.Gunzip-1.md)

Creates and returns a new `Gunzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Gunzip`](../interfaces/zlib._zlib_.Gunzip-1.md)

#### Defined in

[zlib.d.ts:177](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L177)

___

### createGzip

▸ **createGzip**(`options?`): [`Gzip`](../interfaces/zlib._zlib_.Gzip-1.md)

Creates and returns a new `Gzip` object.
See `example`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Gzip`](../interfaces/zlib._zlib_.Gzip-1.md)

#### Defined in

[zlib.d.ts:173](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L173)

___

### createInflate

▸ **createInflate**(`options?`): [`Inflate`](../interfaces/zlib._zlib_.Inflate-1.md)

Creates and returns a new `Inflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Inflate`](../interfaces/zlib._zlib_.Inflate-1.md)

#### Defined in

[zlib.d.ts:185](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L185)

___

### createInflateRaw

▸ **createInflateRaw**(`options?`): [`InflateRaw`](../interfaces/zlib._zlib_.InflateRaw-1.md)

Creates and returns a new `InflateRaw` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`InflateRaw`](../interfaces/zlib._zlib_.InflateRaw-1.md)

#### Defined in

[zlib.d.ts:199](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L199)

___

### createUnzip

▸ **createUnzip**(`options?`): [`Unzip`](../interfaces/zlib._zlib_.Unzip-1.md)

Creates and returns a new `Unzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Unzip`](../interfaces/zlib._zlib_.Unzip-1.md)

#### Defined in

[zlib.d.ts:203](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L203)

___

### deflate

▸ **deflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:247](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L247)

▸ **deflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:248](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L248)

___

### deflateRaw

▸ **deflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:265](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L265)

▸ **deflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:266](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L266)

___

### deflateRawSync

▸ **deflateRawSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Compress a chunk of data with `DeflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:280](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L280)

___

### deflateSync

▸ **deflateSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Compress a chunk of data with `Deflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:262](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L262)

___

### gunzip

▸ **gunzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:301](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L301)

▸ **gunzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:302](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L302)

___

### gunzipSync

▸ **gunzipSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Decompress a chunk of data with `Gunzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:316](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L316)

___

### gzip

▸ **gzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:283](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L283)

▸ **gzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:284](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L284)

___

### gzipSync

▸ **gzipSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Compress a chunk of data with `Gzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:298](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L298)

___

### inflate

▸ **inflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:319](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L319)

▸ **inflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:320](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L320)

___

### inflateRaw

▸ **inflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:337](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L337)

▸ **inflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:338](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L338)

___

### inflateRawSync

▸ **inflateRawSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Decompress a chunk of data with `InflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:352](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L352)

___

### inflateSync

▸ **inflateSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Decompress a chunk of data with `Inflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:334](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L334)

___

### unzip

▸ **unzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:355](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L355)

▸ **unzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib._zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:356](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L356)

___

### unzipSync

▸ **unzipSync**(`buf`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Decompress a chunk of data with `Unzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib._zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib._zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[zlib.d.ts:370](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L370)
