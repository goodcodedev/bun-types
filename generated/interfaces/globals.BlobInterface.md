# Interface: BlobInterface

[globals](../modules/globals.md).BlobInterface

## Implemented by

- [`Blob`](../classes/globals.Blob.md)
- [`Request`](../classes/globals.Request.md)
- [`Response`](../classes/globals.Response.md)

## Table of contents

### Methods

- [arrayBuffer](globals.BlobInterface.md#arraybuffer)
- [json](globals.BlobInterface.md#json)
- [text](globals.BlobInterface.md#text)

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[globals.d.ts:246](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L246)

___

### json

▸ **json**<`TJSONReturnType`\>(): `Promise`<`TJSONReturnType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TJSONReturnType` | `unknown` |

#### Returns

`Promise`<`TJSONReturnType`\>

#### Defined in

[globals.d.ts:247](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L247)

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[globals.d.ts:245](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L245)
