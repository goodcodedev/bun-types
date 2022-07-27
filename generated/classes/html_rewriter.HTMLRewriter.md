# Class: HTMLRewriter

[html-rewriter](../modules/html_rewriter.md).HTMLRewriter

[HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter?bun) is a fast API for transforming HTML.

Bun leverages a native implementation powered by [lol-html](https://github.com/cloudflare/lol-html).

HTMLRewriter can be used to transform HTML in a variety of ways, including:
* Rewriting URLs
* Adding meta tags
* Removing elements
* Adding elements to the head

**`Example`**

```ts
const rewriter = new HTMLRewriter().on('a[href]', {
  element(element: Element) {
    // Rewrite all the URLs to this youtube video
    element.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
});
rewriter.transform(await fetch("https://remix.run"));
```

## Table of contents

### Constructors

- [constructor](html_rewriter.HTMLRewriter.md#constructor)

### Methods

- [on](html_rewriter.HTMLRewriter.md#on)
- [onDocument](html_rewriter.HTMLRewriter.md#ondocument)
- [transform](html_rewriter.HTMLRewriter.md#transform)

## Constructors

### constructor

• **new HTMLRewriter**()

#### Defined in

[html-rewriter.d.ts:100](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L100)

## Methods

### on

▸ **on**(`selector`, `handlers`): [`HTMLRewriter`](html_rewriter.HTMLRewriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `handlers` | [`HTMLRewriterElementContentHandlers`](../interfaces/html_rewriter.HTMLRewriterTypes.HTMLRewriterElementContentHandlers.md) |

#### Returns

[`HTMLRewriter`](html_rewriter.HTMLRewriter.md)

#### Defined in

[html-rewriter.d.ts:101](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L101)

___

### onDocument

▸ **onDocument**(`handlers`): [`HTMLRewriter`](html_rewriter.HTMLRewriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | [`HTMLRewriterDocumentContentHandlers`](../interfaces/html_rewriter.HTMLRewriterTypes.HTMLRewriterDocumentContentHandlers.md) |

#### Returns

[`HTMLRewriter`](html_rewriter.HTMLRewriter.md)

#### Defined in

[html-rewriter.d.ts:105](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L105)

___

### transform

▸ **transform**(`input`): [`Response`](globals.Response.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Response`](globals.Response.md) | The HTML to transform |

#### Returns

[`Response`](globals.Response.md)

A new Response with the transformed HTML

#### Defined in

[html-rewriter.d.ts:112](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/html-rewriter.d.ts#L112)
