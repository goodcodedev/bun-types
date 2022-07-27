# Class: Blob

[globals](../modules/globals.md).Blob

## Hierarchy

- **`Blob`**

  ↳ [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

## Implements

- [`BlobInterface`](../interfaces/globals.BlobInterface.md)

## Table of contents

### Constructors

- [constructor](globals.Blob.md#constructor)

### Properties

- [size](globals.Blob.md#size)
- [type](globals.Blob.md#type)

### Methods

- [arrayBuffer](globals.Blob.md#arraybuffer)
- [json](globals.Blob.md#json)
- [slice](globals.Blob.md#slice)
- [stream](globals.Blob.md#stream)
- [text](globals.Blob.md#text)

## Constructors

### constructor

• **new Blob**(`parts?`, `options?`)

Create a new [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parts?` | [`Blob`](globals.Blob.md) \| [`BlobPart`](../modules/globals.md#blobpart)[] |
| `options?` | [`BlobPropertyBag`](../interfaces/globals.BlobPropertyBag.md) |

#### Defined in

[globals.d.ts:307](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L307)

## Properties

### size

• **size**: `number`

#### Defined in

[globals.d.ts:345](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L345)

___

### type

• **type**: `string`

#### Defined in

[globals.d.ts:344](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L344)

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the data from the blob as an ArrayBuffer.

This copies the data into a new ArrayBuffer.

#### Returns

`Promise`<`ArrayBuffer`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[arrayBuffer](../interfaces/globals.BlobInterface.md#arraybuffer)

#### Defined in

[globals.d.ts:334](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L334)

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as an ArrayBuffer object

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer

#### Returns

`Promise`<`ArrayBuffer`\>

#### Implementation of

BlobInterface.arrayBuffer

#### Defined in

[globals.d.ts:949](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L949)

___

### json

▸ **json**<`TJSONReturnType`\>(): `Promise`<`TJSONReturnType`\>

Read the data from the blob as a JSON object.

This first decodes the data from UTF-8, then parses it as JSON.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TJSONReturnType` | `unknown` |

#### Returns

`Promise`<`TJSONReturnType`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[json](../interfaces/globals.BlobInterface.md#json)

#### Defined in

[globals.d.ts:342](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L342)

▸ **json**(): `Promise`<`any`\>

Read the contents of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a JSON object

**`Warn`**

in browsers, this function is only available for `Response` and `Request`

#### Returns

`Promise`<`any`\>

#### Implementation of

BlobInterface.json

#### Defined in

[globals.d.ts:939](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L939)

___

### slice

▸ **slice**(`begin?`, `end?`): [`Blob`](globals.Blob.md)

Create a new view **without 🚫 copying** the underlying data.

Similar to [`TypedArray.subarray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | The index that sets the beginning of the view. |
| `end?` | `number` | The index that sets the end of the view. |

#### Returns

[`Blob`](globals.Blob.md)

#### Defined in

[globals.d.ts:317](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L317)

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/globals.md#readablestream)<`Uint8Array`\>

Read the data from the blob as a ReadableStream.

#### Returns

[`ReadableStream`](../modules/globals.md#readablestream)<`Uint8Array`\>

#### Defined in

[globals.d.ts:327](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L327)

___

### text

▸ **text**(): `Promise`<`string`\>

Read the data from the blob as a string. It will be decoded from UTF-8.

#### Returns

`Promise`<`string`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[text](../interfaces/globals.BlobInterface.md#text)

#### Defined in

[globals.d.ts:322](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L322)

▸ **text**(): `Promise`<`string`\>

Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a UTF-8 string

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Blob/text

#### Returns

`Promise`<`string`\>

#### Implementation of

BlobInterface.text

#### Defined in

[globals.d.ts:944](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L944)
