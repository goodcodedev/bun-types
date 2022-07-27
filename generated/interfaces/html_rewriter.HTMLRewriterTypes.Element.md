# Interface: Element

[html-rewriter](../modules/html_rewriter.md).[HTMLRewriterTypes](../modules/html_rewriter.HTMLRewriterTypes.md).Element

## Table of contents

### Properties

- [attributes](html_rewriter.HTMLRewriterTypes.Element.md#attributes)
- [namespaceURI](html_rewriter.HTMLRewriterTypes.Element.md#namespaceuri)
- [removed](html_rewriter.HTMLRewriterTypes.Element.md#removed)
- [tagName](html_rewriter.HTMLRewriterTypes.Element.md#tagname)

### Methods

- [after](html_rewriter.HTMLRewriterTypes.Element.md#after)
- [append](html_rewriter.HTMLRewriterTypes.Element.md#append)
- [before](html_rewriter.HTMLRewriterTypes.Element.md#before)
- [getAttribute](html_rewriter.HTMLRewriterTypes.Element.md#getattribute)
- [hasAttribute](html_rewriter.HTMLRewriterTypes.Element.md#hasattribute)
- [onEndTag](html_rewriter.HTMLRewriterTypes.Element.md#onendtag)
- [prepend](html_rewriter.HTMLRewriterTypes.Element.md#prepend)
- [remove](html_rewriter.HTMLRewriterTypes.Element.md#remove)
- [removeAndKeepContent](html_rewriter.HTMLRewriterTypes.Element.md#removeandkeepcontent)
- [removeAttribute](html_rewriter.HTMLRewriterTypes.Element.md#removeattribute)
- [replace](html_rewriter.HTMLRewriterTypes.Element.md#replace)
- [setAttribute](html_rewriter.HTMLRewriterTypes.Element.md#setattribute)
- [setInnerContent](html_rewriter.HTMLRewriterTypes.Element.md#setinnercontent)

## Properties

### attributes

• `Readonly` **attributes**: `IterableIterator`<`string`[]\>

#### Defined in

[html-rewriter.d.ts:51](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L51)

___

### namespaceURI

• `Readonly` **namespaceURI**: `string`

#### Defined in

[html-rewriter.d.ts:53](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L53)

___

### removed

• `Readonly` **removed**: `boolean`

#### Defined in

[html-rewriter.d.ts:52](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L52)

___

### tagName

• **tagName**: `string`

#### Defined in

[html-rewriter.d.ts:50](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L50)

## Methods

### after

▸ **after**(`content`, `options?`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](html_rewriter.HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:59](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L59)

___

### append

▸ **append**(`content`, `options?`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](html_rewriter.HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:61](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L61)

___

### before

▸ **before**(`content`, `options?`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](html_rewriter.HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:58](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L58)

___

### getAttribute

▸ **getAttribute**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[html-rewriter.d.ts:54](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L54)

___

### hasAttribute

▸ **hasAttribute**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[html-rewriter.d.ts:55](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L55)

___

### onEndTag

▸ **onEndTag**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`tag`: [`EndTag`](html_rewriter.HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[html-rewriter.d.ts:66](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L66)

___

### prepend

▸ **prepend**(`content`, `options?`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](html_rewriter.HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:60](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L60)

___

### remove

▸ **remove**(): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:63](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L63)

___

### removeAndKeepContent

▸ **removeAndKeepContent**(): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:64](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L64)

___

### removeAttribute

▸ **removeAttribute**(`name`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:57](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L57)

___

### replace

▸ **replace**(`content`, `options?`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](html_rewriter.HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:62](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L62)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:56](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L56)

___

### setInnerContent

▸ **setInnerContent**(`content`, `options?`): [`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](html_rewriter.HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](html_rewriter.HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:65](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L65)
