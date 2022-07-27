# Interface: ServeOptions

[bun](../modules/bun.md).["bun"](../modules/bun._bun_.md).ServeOptions

## Table of contents

### Properties

- [baseURI](bun._bun_.ServeOptions.md#baseuri)
- [development](bun._bun_.ServeOptions.md#development)
- [error](bun._bun_.ServeOptions.md#error)
- [hostname](bun._bun_.ServeOptions.md#hostname)
- [maxRequestBodySize](bun._bun_.ServeOptions.md#maxrequestbodysize)
- [port](bun._bun_.ServeOptions.md#port)

### Methods

- [fetch](bun._bun_.ServeOptions.md#fetch)

## Properties

### baseURI

• `Optional` **baseURI**: `string`

What URI should be used to make Request.url absolute?

By default, looks at [hostname](bun._bun_.ServeOptions.md#hostname), [port](bun._bun_.ServeOptions.md#port), and whether or not SSL is enabled to generate one

**`Example`**

```js
"http://my-app.com"
```

**`Example`**

```js
"https://wongmjane.com/"
```

This should be the public, absolute URL – include the protocol and [hostname](bun._bun_.ServeOptions.md#hostname). If the port isn't 80 or 443, then include the [port](bun._bun_.ServeOptions.md#port) too.

**`Example`**

```ts
"http://localhost:3000"
```

#### Defined in

[bun.d.ts:696](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L696)

___

### development

• `Optional` **development**: `boolean`

Render contextual errors? This enables bun's error page

**`Default`**

process.env.NODE_ENV !== 'production'

#### Defined in

[bun.d.ts:708](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L708)

___

### error

• `Optional` **error**: (`this`: [`Server`](bun._bun_.Server.md), `request`: [`Errorlike`](bun._bun_.Errorlike.md)) => [`Response`](../classes/globals.Response.md) \| `Promise`<[`Response`](../classes/globals.Response.md)\> \| `Promise`<`undefined`\>

#### Type declaration

▸ (`this`, `request`): [`Response`](../classes/globals.Response.md) \| `Promise`<[`Response`](../classes/globals.Response.md)\> \| `Promise`<`undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Server`](bun._bun_.Server.md) |
| `request` | [`Errorlike`](bun._bun_.Errorlike.md) |

##### Returns

[`Response`](../classes/globals.Response.md) \| `Promise`<[`Response`](../classes/globals.Response.md)\> \| `Promise`<`undefined`\>

#### Defined in

[bun.d.ts:718](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L718)

___

### hostname

• `Optional` **hostname**: `string`

What hostname should the server listen on?

**`Default`**

```js
"0.0.0.0" // listen on all interfaces
```

**`Example`**

```js
"127.0.0.1" // Only listen locally
```

**`Example`**

```js
"remix.run" // Only listen on remix.run
````

note: hostname should not include a {@link port}

#### Defined in

[bun.d.ts:673](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L673)

___

### maxRequestBodySize

• `Optional` **maxRequestBodySize**: `number`

What is the maximum size of a request body? (in bytes)

**`Default`**

1024 * 1024 * 128 // 128MB

#### Defined in

[bun.d.ts:702](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L702)

___

### port

• `Optional` **port**: `string` \| `number`

What port should the server listen on?

**`Default`**

process.env.PORT || "3000"

#### Defined in

[bun.d.ts:653](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L653)

## Methods

### fetch

▸ **fetch**(`this`, `request`): [`Response`](../classes/globals.Response.md) \| `Promise`<[`Response`](../classes/globals.Response.md)\>

Handle HTTP requests

Respond to Request objects with a Response object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Server`](bun._bun_.Server.md) |
| `request` | [`Request`](../classes/globals.Request.md) |

#### Returns

[`Response`](../classes/globals.Response.md) \| `Promise`<[`Response`](../classes/globals.Response.md)\>

#### Defined in

[bun.d.ts:716](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L716)
