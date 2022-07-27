# Class: Request

[globals](../modules/globals.md).Request

[`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) represents an HTTP request.

**`Example`**

```ts
const request = new Request("https://remix.run/");
await fetch(request);
```

**`Example`**

```ts
const request = new Request("https://remix.run/");
await fetch(request);
```

## Implements

- [`BlobInterface`](../interfaces/globals.BlobInterface.md)

## Table of contents

### Constructors

- [constructor](globals.Request.md#constructor)

### Properties

- [cache](globals.Request.md#cache)
- [credentials](globals.Request.md#credentials)
- [destination](globals.Request.md#destination)
- [headers](globals.Request.md#headers)
- [integrity](globals.Request.md#integrity)
- [keepalive](globals.Request.md#keepalive)
- [method](globals.Request.md#method)
- [mode](globals.Request.md#mode)
- [redirect](globals.Request.md#redirect)
- [referrer](globals.Request.md#referrer)
- [referrerPolicy](globals.Request.md#referrerpolicy)
- [signal](globals.Request.md#signal)
- [url](globals.Request.md#url)

### Methods

- [arrayBuffer](globals.Request.md#arraybuffer)
- [blob](globals.Request.md#blob)
- [clone](globals.Request.md#clone)
- [json](globals.Request.md#json)
- [text](globals.Request.md#text)

## Constructors

### constructor

• **new Request**(`requestInfo`, `requestInit?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestInfo` | [`RequestInfo`](../modules/globals.md#requestinfo) |
| `requestInit?` | [`RequestInit`](../interfaces/globals.RequestInit.md) |

#### Defined in

[globals.d.ts:624](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L624)

## Properties

### cache

• `Readonly` **cache**: [`RequestCache`](../modules/globals.md#requestcache)

Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.

#### Defined in

[globals.d.ts:681](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L681)

___

### credentials

• `Readonly` **credentials**: [`RequestCredentials`](../modules/globals.md#requestcredentials)

Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.

#### Defined in

[globals.d.ts:685](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L685)

___

### destination

• `Readonly` **destination**: [`RequestDestination`](../modules/globals.md#requestdestination)

Returns the kind of resource requested by request, e.g., "document" or "script".

In Bun, this always returns "navigate".

#### Defined in

[globals.d.ts:691](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L691)

___

### headers

• **headers**: [`Headers`](../modules/globals.md#headers)

Read or write the HTTP headers for this request.

**`Example`**

```ts
const request = new Request("https://remix.run/");
request.headers.set("Content-Type", "application/json");
request.headers.set("Accept", "application/json");
await fetch(request);
```

#### Defined in

[globals.d.ts:637](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L637)

___

### integrity

• `Readonly` **integrity**: `string`

Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]

This does nothing in Bun right now.

#### Defined in

[globals.d.ts:697](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L697)

___

### keepalive

• `Readonly` **keepalive**: `boolean`

Returns a boolean indicating whether or not request can outlive the global in which it was created.

In Bun, this always returns false.

#### Defined in

[globals.d.ts:703](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L703)

___

### method

• `Readonly` **method**: `string`

Returns request's HTTP method, which is "GET" by default.

#### Defined in

[globals.d.ts:707](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L707)

___

### mode

• `Readonly` **mode**: [`RequestMode`](../modules/globals.md#requestmode)

Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.

#### Defined in

[globals.d.ts:711](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L711)

___

### redirect

• `Readonly` **redirect**: [`RequestRedirect`](../modules/globals.md#requestredirect)

Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.

#### Defined in

[globals.d.ts:715](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L715)

___

### referrer

• `Readonly` **referrer**: `string`

Returns the referrer of request. Its value can be a same-origin URL
if explicitly set in init, the empty string to indicate no referrer,
and "about:client" when defaulting to the global's default. This is
used during fetching to determine the value of the `Referer` header
of the request being made.

#### Defined in

[globals.d.ts:723](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L723)

___

### referrerPolicy

• `Readonly` **referrerPolicy**: [`ReferrerPolicy`](../modules/globals.md#referrerpolicy)

Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.

#### Defined in

[globals.d.ts:727](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L727)

___

### signal

• `Readonly` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.

Note: this is **not implemented yet**. The cake is a lie.

#### Defined in

[globals.d.ts:733](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L733)

___

### url

• `Readonly` **url**: `string`

The URL (as a string) corresponding to the HTTP request

**`Example`**

```ts
const request = new Request("https://remix.run/");
request.url; // "https://remix.run/"
```

#### Defined in

[globals.d.ts:647](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L647)

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as an ArrayBuffer.

#### Returns

`Promise`<`ArrayBuffer`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[arrayBuffer](../interfaces/globals.BlobInterface.md#arraybuffer)

#### Defined in

[globals.d.ts:660](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L660)

___

### blob

▸ **blob**(): `Promise`<[`Blob`](globals.Blob.md)\>

Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as a `Blob`.

This allows you to reuse the underlying data.

#### Returns

`Promise`<[`Blob`](globals.Blob.md)\>

#### Defined in

[globals.d.ts:676](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L676)

___

### clone

▸ **clone**(): [`Request`](globals.Request.md)

Copy the Request object into a new Request, including the body

#### Returns

[`Request`](globals.Request.md)

#### Defined in

[globals.d.ts:736](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L736)

___

### json

▸ **json**<`TJSONReturnType`\>(): `Promise`<`TJSONReturnType`\>

Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as a JSON object.

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

[globals.d.ts:668](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L668)

___

### text

▸ **text**(): `Promise`<`string`\>

Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as a string. It will be decoded from UTF-8.

When the body is valid latin1, this operation is zero copy.

#### Returns

`Promise`<`string`\>

#### Implementation of

[BlobInterface](../interfaces/globals.BlobInterface.md).[text](../interfaces/globals.BlobInterface.md#text)

#### Defined in

[globals.d.ts:654](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L654)
