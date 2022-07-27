# Interface: ReadWriteStream

[globals](../modules/globals.md).ReadWriteStream

## Hierarchy

- [`ReadableStream`](../modules/globals.md#readablestream)

- [`WritableStream`](../modules/globals.md#writablestream)

  ↳ **`ReadWriteStream`**

## Table of contents

### Properties

- [locked](globals.ReadWriteStream.md#locked)

### Methods

- [abort](globals.ReadWriteStream.md#abort)
- [cancel](globals.ReadWriteStream.md#cancel)
- [close](globals.ReadWriteStream.md#close)
- [forEach](globals.ReadWriteStream.md#foreach)
- [getReader](globals.ReadWriteStream.md#getreader)
- [getWriter](globals.ReadWriteStream.md#getwriter)
- [pipeThrough](globals.ReadWriteStream.md#pipethrough)
- [pipeTo](globals.ReadWriteStream.md#pipeto)
- [tee](globals.ReadWriteStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Inherited from

ReadableStream.locked

#### Defined in

[globals.d.ts:1674](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1674)

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.abort

#### Defined in

[globals.d.ts:1784](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1784)

___

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.cancel

#### Defined in

[globals.d.ts:1675](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1675)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

#### Defined in

[globals.d.ts:1785](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1785)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules/globals.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

#### Defined in

[globals.d.ts:1686](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1686)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/globals.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/globals.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

#### Defined in

[globals.d.ts:1676](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1676)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules/globals.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules/globals.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

#### Defined in

[globals.d.ts:1786](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1786)

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/globals.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](globals.ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](globals.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/globals.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

#### Defined in

[globals.d.ts:1677](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1677)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/globals.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](globals.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

#### Defined in

[globals.d.ts:1681](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1681)

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/globals.md#readablestream)<`any`\>, [`ReadableStream`](../modules/globals.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](../modules/globals.md#readablestream)<`any`\>, [`ReadableStream`](../modules/globals.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

#### Defined in

[globals.d.ts:1685](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1685)
