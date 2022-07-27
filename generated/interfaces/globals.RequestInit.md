# Interface: RequestInit

[globals](../modules/globals.md).RequestInit

## Table of contents

### Properties

- [body](globals.RequestInit.md#body)
- [cache](globals.RequestInit.md#cache)
- [credentials](globals.RequestInit.md#credentials)
- [headers](globals.RequestInit.md#headers)
- [integrity](globals.RequestInit.md#integrity)
- [keepalive](globals.RequestInit.md#keepalive)
- [method](globals.RequestInit.md#method)
- [mode](globals.RequestInit.md#mode)
- [redirect](globals.RequestInit.md#redirect)
- [referrer](globals.RequestInit.md#referrer)
- [referrerPolicy](globals.RequestInit.md#referrerpolicy)
- [signal](globals.RequestInit.md#signal)
- [window](globals.RequestInit.md#window)

## Properties

### body

• `Optional` **body**: [`BodyInit`](../modules/globals.md#bodyinit)

A BodyInit object or null to set request's body.

#### Defined in

[globals.d.ts:547](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L547)

___

### cache

• `Optional` **cache**: [`RequestCache`](../modules/globals.md#requestcache)

A string indicating how the request will interact with the browser's cache to set request's cache.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:553](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L553)

___

### credentials

• `Optional` **credentials**: [`RequestCredentials`](../modules/globals.md#requestcredentials)

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Defined in

[globals.d.ts:557](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L557)

___

### headers

• `Optional` **headers**: [`HeadersInit`](../modules/globals.md#headersinit)

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Defined in

[globals.d.ts:561](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L561)

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:567](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L567)

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:573](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L573)

___

### method

• `Optional` **method**: `string`

A string to set request's method.

#### Defined in

[globals.d.ts:577](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L577)

___

### mode

• `Optional` **mode**: [`RequestMode`](../modules/globals.md#requestmode)

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Defined in

[globals.d.ts:581](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L581)

___

### redirect

• `Optional` **redirect**: [`RequestRedirect`](../modules/globals.md#requestredirect)

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Defined in

[globals.d.ts:585](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L585)

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Defined in

[globals.d.ts:589](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L589)

___

### referrerPolicy

• `Optional` **referrerPolicy**: [`ReferrerPolicy`](../modules/globals.md#referrerpolicy)

A referrer policy to set request's referrerPolicy.

#### Defined in

[globals.d.ts:593](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L593)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

An AbortSignal to set request's signal.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:599](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L599)

___

### window

• `Optional` **window**: `any`

Can only be null. Used to disassociate request from any Window.

This does nothing in Bun

#### Defined in

[globals.d.ts:605](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L605)
