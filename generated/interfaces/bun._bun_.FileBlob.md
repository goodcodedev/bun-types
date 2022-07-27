# Interface: FileBlob

[bun](../modules/bun.md).["bun"](../modules/bun._bun_.md).FileBlob

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.text()); // '{"hello":"world"}'
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

## Hierarchy

- [`Blob`](../classes/globals.Blob.md)

  ↳ **`FileBlob`**

## Table of contents

### Properties

- [size](bun._bun_.FileBlob.md#size)
- [type](bun._bun_.FileBlob.md#type)

### Methods

- [arrayBuffer](bun._bun_.FileBlob.md#arraybuffer)
- [json](bun._bun_.FileBlob.md#json)
- [slice](bun._bun_.FileBlob.md#slice)
- [stream](bun._bun_.FileBlob.md#stream)
- [text](bun._bun_.FileBlob.md#text)

## Properties

### size

• **size**: `number`

#### Inherited from

[Blob](../classes/globals.Blob.md).[size](../classes/globals.Blob.md#size)

#### Defined in

[globals.d.ts:345](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L345)

___

### type

• **type**: `string`

#### Inherited from

[Blob](../classes/globals.Blob.md).[type](../classes/globals.Blob.md#type)

#### Defined in

[globals.d.ts:344](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L344)

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the data from the blob as an ArrayBuffer.

This copies the data into a new ArrayBuffer.

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

[Blob](../classes/globals.Blob.md).[arrayBuffer](../classes/globals.Blob.md#arraybuffer)

#### Defined in

[globals.d.ts:334](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L334)

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as an ArrayBuffer object

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

[Blob](../classes/globals.Blob.md).[arrayBuffer](../classes/globals.Blob.md#arraybuffer)

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

#### Inherited from

[Blob](../classes/globals.Blob.md).[json](../classes/globals.Blob.md#json)

#### Defined in

[globals.d.ts:342](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L342)

▸ **json**(): `Promise`<`any`\>

Read the contents of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a JSON object

**`Warn`**

in browsers, this function is only available for `Response` and `Request`

#### Returns

`Promise`<`any`\>

#### Inherited from

[Blob](../classes/globals.Blob.md).[json](../classes/globals.Blob.md#json)

#### Defined in

[globals.d.ts:939](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L939)

___

### slice

▸ **slice**(`begin?`, `end?`): [`FileBlob`](bun._bun_.FileBlob.md)

Offset any operation on the file starting at `begin` and ending at `end`. `end` is relative to 0

Similar to [`TypedArray.subarray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray). Does not copy the file, open the file, or modify the file.

If `begin` > 0, Bun.write() will be slower on macOS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | start offset in bytes |
| `end?` | `number` | absolute offset in bytes (relative to 0) |

#### Returns

[`FileBlob`](bun._bun_.FileBlob.md)

#### Overrides

[Blob](../classes/globals.Blob.md).[slice](../classes/globals.Blob.md#slice)

#### Defined in

[bun.d.ts:392](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L392)

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/globals.md#readablestream)<`Uint8Array`\>

Read the data from the blob as a ReadableStream.

#### Returns

[`ReadableStream`](../modules/globals.md#readablestream)<`Uint8Array`\>

#### Inherited from

[Blob](../classes/globals.Blob.md).[stream](../classes/globals.Blob.md#stream)

#### Defined in

[globals.d.ts:327](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L327)

___

### text

▸ **text**(): `Promise`<`string`\>

Read the data from the blob as a string. It will be decoded from UTF-8.

#### Returns

`Promise`<`string`\>

#### Inherited from

[Blob](../classes/globals.Blob.md).[text](../classes/globals.Blob.md#text)

#### Defined in

[globals.d.ts:322](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L322)

▸ **text**(): `Promise`<`string`\>

Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a UTF-8 string

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Blob/text

#### Returns

`Promise`<`string`\>

#### Inherited from

[Blob](../classes/globals.Blob.md).[text](../classes/globals.Blob.md#text)

#### Defined in

[globals.d.ts:944](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L944)
