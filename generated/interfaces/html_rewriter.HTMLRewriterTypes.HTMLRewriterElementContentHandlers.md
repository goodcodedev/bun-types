# Interface: HTMLRewriterElementContentHandlers

[html-rewriter](../modules/html_rewriter.md).[HTMLRewriterTypes](../modules/html_rewriter.HTMLRewriterTypes.md).HTMLRewriterElementContentHandlers

## Table of contents

### Methods

- [comments](html_rewriter.HTMLRewriterTypes.HTMLRewriterElementContentHandlers.md#comments)
- [element](html_rewriter.HTMLRewriterTypes.HTMLRewriterElementContentHandlers.md#element)
- [text](html_rewriter.HTMLRewriterTypes.HTMLRewriterElementContentHandlers.md#text)

## Methods

### comments

▸ `Optional` **comments**(`comment`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | [`Comment`](html_rewriter.HTMLRewriterTypes.Comment.md) |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[html-rewriter.d.ts:4](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L4)

___

### element

▸ `Optional` **element**(`element`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](html_rewriter.HTMLRewriterTypes.Element.md) |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[html-rewriter.d.ts:3](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L3)

___

### text

▸ `Optional` **text**(`text`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`Text`](html_rewriter.HTMLRewriterTypes.Text.md) |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[html-rewriter.d.ts:5](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L5)
