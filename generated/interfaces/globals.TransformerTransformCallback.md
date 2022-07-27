# Interface: TransformerTransformCallback<I, O\>

[globals](../modules/globals.md).TransformerTransformCallback

## Type parameters

| Name |
| :------ |
| `I` |
| `O` |

## Callable

### TransformerTransformCallback

▸ **TransformerTransformCallback**(`chunk`, `controller`): `void` \| `PromiseLike`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `I` |
| `controller` | [`TransformStreamDefaultController`](../modules/globals.md#transformstreamdefaultcontroller)<`O`\> |

#### Returns

`void` \| `PromiseLike`<`void`\>

#### Defined in

[globals.d.ts:1834](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1834)
