# Interface: HTMLRewriterDocumentContentHandlers

[html-rewriter](../modules/html_rewriter.md).[HTMLRewriterTypes](../modules/html_rewriter.HTMLRewriterTypes.md).HTMLRewriterDocumentContentHandlers

## Table of contents

### Methods

- [comments](html_rewriter.HTMLRewriterTypes.HTMLRewriterDocumentContentHandlers.md#comments)
- [doctype](html_rewriter.HTMLRewriterTypes.HTMLRewriterDocumentContentHandlers.md#doctype)
- [end](html_rewriter.HTMLRewriterTypes.HTMLRewriterDocumentContentHandlers.md#end)
- [text](html_rewriter.HTMLRewriterTypes.HTMLRewriterDocumentContentHandlers.md#text)

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

[html-rewriter.d.ts:10](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L10)

___

### doctype

▸ `Optional` **doctype**(`doctype`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doctype` | [`Doctype`](html_rewriter.HTMLRewriterTypes.Doctype.md) |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[html-rewriter.d.ts:9](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L9)

___

### end

▸ `Optional` **end**(`end`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `end` | [`DocumentEnd`](html_rewriter.HTMLRewriterTypes.DocumentEnd.md) |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[html-rewriter.d.ts:12](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L12)

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

[html-rewriter.d.ts:11](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L11)
