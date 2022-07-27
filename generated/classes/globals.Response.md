# Class: Response

[globals](../modules/globals.md).Response

Represents an HTTP [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

Use it to get the body of the response, the status code, and other information.

**`Example`**

```ts
const response: Response = await fetch("https://remix.run");
await response.text();
```

**`Example`**

```ts
const response: Response = await fetch("https://remix.run");
await Bun.write("remix.html", response);
```

## Implements

- [`BlobInterface`](../interfaces/globals.BlobInterface.md)

## Table of contents

### Constructors

- [constructor](globals.Response.md#constructor)

### Properties

- [bodyUsed](globals.Response.md#bodyused)
- [headers](globals.Response.md#headers)
- [ok](globals.Response.md#ok)
- [redirected](globals.Response.md#redirected)
- [status](globals.Response.md#status)
- [statusText](globals.Response.md#statustext)
- [type](globals.Response.md#type)
- [url](globals.Response.md#url)

### Methods

- [arrayBuffer](globals.Response.md#arraybuffer)
- [blob](globals.Response.md#blob)
- [clone](globals.Response.md#clone)
- [json](globals.Response.md#json)
- [text](globals.Response.md#text)
- [error](globals.Response.md#error)
- [json](globals.Response.md#json-1)
- [redirect](globals.Response.md#redirect)

## Constructors

### constructor

• **new Response**(`body`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`BlobPart`](../modules/globals.md#blobpart) \| [`BlobPart`](../modules/globals.md#blobpart)[] |
| `options?` | [`ResponseInit`](../interfaces/globals.ResponseInit.md) |

#### Defined in

[globals.d.ts:374](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L374)

## Properties

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

Has the body of the response already been consumed?

#### Defined in

[globals.d.ts:439](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L439)

___

### headers

• `Readonly` **headers**: [`Headers`](../modules/globals.md#headers)

HTTP [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) sent with the response.

**`Example`**

```ts
const {headers} = await fetch("https://remix.run");
headers.get("Content-Type");
headers.get("Content-Length");
headers.get("Set-Cookie");
```

#### Defined in

[globals.d.ts:434](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L434)

___

### ok

• `Readonly` **ok**: `boolean`

#### Defined in

[globals.d.ts:472](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L472)

___

### redirected

• `Readonly` **redirected**: `boolean`

#### Defined in

[globals.d.ts:473](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L473)

___

### status

• `Readonly` **status**: `number`

HTTP status code

**`Example`**

```ts
200

0 for network errors
```

#### Defined in

[globals.d.ts:482](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L482)

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

[globals.d.ts:483](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L483)

___

### type

• `Readonly` **type**: [`ResponseType`](../modules/globals.md#responsetype)

#### Defined in

[globals.d.ts:484](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L484)

___

### url

• `Readonly` **url**: `string`

HTTP url as a string

#### Defined in

[globals.d.ts:486](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L486)

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the data from the Response as a string. It will be decoded from UTF-8.

When the body is valid latin1, this operation is zero copy.

#### Returns

`Promise`<`ArrayBuffer`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[arrayBuffer](../interfaces/globals.BlobInterface.md#arraybuffer)

#### Defined in

[globals.d.ts:453](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L453)

___

### blob

▸ **blob**(): `Promise`<[`Blob`](globals.Blob.md)\>

Read the data from the Response as a Blob.

This allows you to reuse the underlying data.

#### Returns

`Promise`<[`Blob`](globals.Blob.md)\>

Promise<Blob> - The body of the response as a [Blob](globals.Blob.md).

#### Defined in

[globals.d.ts:470](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L470)

___

### clone

▸ **clone**(): [`Response`](globals.Response.md)

Copy the Response object into a new Response, including the body

#### Returns

[`Response`](globals.Response.md)

#### Defined in

[globals.d.ts:489](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L489)

___

### json

▸ **json**<`TJSONReturnType`\>(): `Promise`<`TJSONReturnType`\>

Read the data from the Response as a JSON object.

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

[globals.d.ts:461](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L461)

___

### text

▸ **text**(): `Promise`<`string`\>

Read the data from the Response as a string. It will be decoded from UTF-8.

When the body is valid latin1, this operation is zero copy.

#### Returns

`Promise`<`string`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[text](../interfaces/globals.BlobInterface.md#text)

#### Defined in

[globals.d.ts:446](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L446)

___

### error

▸ `Static` **error**(): [`Response`](globals.Response.md)

Create a new [Response](globals.Response.md) that has a network error

#### Returns

[`Response`](globals.Response.md)

#### Defined in

[globals.d.ts:421](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L421)

___

### json

▸ `Static` **json**(`body?`, `options?`): [`Response`](globals.Response.md)

Create a new [Response](globals.Response.md) with a JSON body

**`Example`**

```ts
const response = Response.json({hi: "there"});
console.assert(
  await response.text(),
  `{"hi":"there"}`
);
```
-------

This is syntactic sugar for:
```js
 new Response(JSON.stringify(body), {headers: { "Content-Type": "application/json" }})
```

**`Link`**

https://github.com/whatwg/fetch/issues/1389

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | `any` | The body of the response |
| `options?` | `number` \| [`ResponseInit`](../interfaces/globals.ResponseInit.md) | options to pass to the response |

#### Returns

[`Response`](globals.Response.md)

#### Defined in

[globals.d.ts:399](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L399)

___

### redirect

▸ `Static` **redirect**(`url`, `status?`): [`Response`](globals.Response.md)

Create a new [Response](globals.Response.md) that redirects to url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the URL to redirect to |
| `status?` | `number` | the HTTP status code to use for the redirect |

#### Returns

[`Response`](globals.Response.md)

#### Defined in

[globals.d.ts:407](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L407)

▸ `Static` **redirect**(`url`, `options?`): [`Response`](globals.Response.md)

Create a new [Response](globals.Response.md) that redirects to url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the URL to redirect to |
| `options?` | [`ResponseInit`](../interfaces/globals.ResponseInit.md) | options to pass to the response |

#### Returns

[`Response`](globals.Response.md)

#### Defined in

[globals.d.ts:416](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L416)
