# Interface: Server

[bun](../modules/bun.md).["bun"](../modules/bun._bun_.md).Server

HTTP & HTTPS Server

To start the server, see [serve](../modules/bun._bun_.md#serve-1)

Often, you don't need to interact with this object directly. It exists to help you with the following tasks:
- Stop the server
- How many requests are currently being handled?

For performance, Bun pre-allocates most of the data for 2048 concurrent requests.
That means starting a new server allocates about 500 KB of memory. Try to
avoid starting and stopping the server often (unless it's a new instance of bun).

Powered by a fork of [uWebSockets](https://github.com/uNetworking/uWebSockets). Thank you @alexhultman.

## Table of contents

### Properties

- [development](bun._bun_.Server.md#development)
- [hostname](bun._bun_.Server.md#hostname)
- [pendingRequests](bun._bun_.Server.md#pendingrequests)
- [port](bun._bun_.Server.md#port)

### Methods

- [stop](bun._bun_.Server.md#stop)

## Properties

### development

• `Readonly` **development**: `boolean`

#### Defined in

[bun.d.ts:799](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L799)

___

### hostname

• `Readonly` **hostname**: `string`

#### Defined in

[bun.d.ts:798](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L798)

___

### pendingRequests

• `Readonly` **pendingRequests**: `number`

How many requests are in-flight right now?

#### Defined in

[bun.d.ts:796](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L796)

___

### port

• `Readonly` **port**: `number`

#### Defined in

[bun.d.ts:797](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L797)

## Methods

### stop

▸ **stop**(): `void`

Stop listening to prevent new connections from being accepted.

It does not close existing connections.

It may take a second or two to actually stop.

#### Returns

`void`

#### Defined in

[bun.d.ts:791](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L791)
