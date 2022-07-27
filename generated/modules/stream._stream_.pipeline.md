# Namespace: pipeline

[stream](stream.md).["stream"](stream._stream_.md).pipeline

## Table of contents

### Functions

- [\_\_promisify\_\_](stream._stream_.pipeline.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**<`A`, `B`\>(`source`, `destination`, `options?`): [`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Defined in

[stream.d.ts:1383](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1383)

▸ **__promisify__**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options?`): [`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Defined in

[stream.d.ts:1391](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1391)

▸ **__promisify__**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options?`): [`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Defined in

[stream.d.ts:1401](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1401)

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options?`): [`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Defined in

[stream.d.ts:1413](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1413)

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options?`): [`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](stream._stream_.md#pipelinepromise)<`B`\>

#### Defined in

[stream.d.ts:1427](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1427)

▸ **__promisify__**(`streams`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](globals.md#readablestream)<`any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md))[] |
| `options?` | [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[stream.d.ts:1443](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1443)

▸ **__promisify__**(`stream1`, `stream2`, ...`streams`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](globals.md#readablestream)<`any`\> |
| `stream2` | [`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) \| [`PipelineOptions`](../interfaces/stream._stream_.PipelineOptions.md))[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[stream.d.ts:1449](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1449)
