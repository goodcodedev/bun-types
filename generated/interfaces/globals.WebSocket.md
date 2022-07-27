# Interface: WebSocket

[globals](../modules/globals.md).WebSocket

Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

## Hierarchy

- [`EventTarget`](../modules/globals.md#eventtarget)

  ↳ **`WebSocket`**

## Table of contents

### Properties

- [CLOSED](globals.WebSocket.md#closed)
- [CLOSING](globals.WebSocket.md#closing)
- [CONNECTING](globals.WebSocket.md#connecting)
- [OPEN](globals.WebSocket.md#open)
- [binaryType](globals.WebSocket.md#binarytype)
- [bufferedAmount](globals.WebSocket.md#bufferedamount)
- [extensions](globals.WebSocket.md#extensions)
- [onclose](globals.WebSocket.md#onclose)
- [onerror](globals.WebSocket.md#onerror)
- [onmessage](globals.WebSocket.md#onmessage)
- [onopen](globals.WebSocket.md#onopen)
- [protocol](globals.WebSocket.md#protocol)
- [readyState](globals.WebSocket.md#readystate)
- [url](globals.WebSocket.md#url)

### Methods

- [addEventListener](globals.WebSocket.md#addeventlistener)
- [close](globals.WebSocket.md#close)
- [dispatchEvent](globals.WebSocket.md#dispatchevent)
- [removeEventListener](globals.WebSocket.md#removeeventlistener)
- [send](globals.WebSocket.md#send)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

#### Defined in

[globals.d.ts:1381](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1381)

___

### CLOSING

• `Readonly` **CLOSING**: `number`

#### Defined in

[globals.d.ts:1382](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1382)

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

#### Defined in

[globals.d.ts:1383](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1383)

___

### OPEN

• `Readonly` **OPEN**: `number`

#### Defined in

[globals.d.ts:1384](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1384)

___

### binaryType

• **binaryType**: [`BinaryType`](../modules/globals.md#binarytype)

Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:

Can be set, to change how binary data is returned. The default is "blob".

#### Defined in

[globals.d.ts:1358](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1358)

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.

If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)

#### Defined in

[globals.d.ts:1364](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1364)

___

### extensions

• `Readonly` **extensions**: `string`

Returns the extensions selected by the server, if any.

#### Defined in

[globals.d.ts:1366](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1366)

___

### onclose

• **onclose**: (`this`: [`WebSocket`](../modules/globals.md#websocket), `ev`: [`CloseEvent`](../modules/globals.md#closeevent)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules/globals.md#websocket) |
| `ev` | [`CloseEvent`](../modules/globals.md#closeevent) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1367](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1367)

___

### onerror

• **onerror**: (`this`: [`WebSocket`](../modules/globals.md#websocket), `ev`: [`Event`](../modules/globals.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules/globals.md#websocket) |
| `ev` | [`Event`](../modules/globals.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1368](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1368)

___

### onmessage

• **onmessage**: (`this`: [`WebSocket`](../modules/globals.md#websocket), `ev`: [`MessageEvent`](../modules/globals.md#messageevent)<`any`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules/globals.md#websocket) |
| `ev` | [`MessageEvent`](../modules/globals.md#messageevent)<`any`\> |

##### Returns

`any`

#### Defined in

[globals.d.ts:1369](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1369)

___

### onopen

• **onopen**: (`this`: [`WebSocket`](../modules/globals.md#websocket), `ev`: [`Event`](../modules/globals.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules/globals.md#websocket) |
| `ev` | [`Event`](../modules/globals.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1370](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1370)

___

### protocol

• `Readonly` **protocol**: `string`

Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.

#### Defined in

[globals.d.ts:1372](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1372)

___

### readyState

• `Readonly` **readyState**: `number`

Returns the state of the WebSocket object's connection. It can have the values described below.

#### Defined in

[globals.d.ts:1374](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1374)

___

### url

• `Readonly` **url**: `string`

Returns the URL that was used to establish the WebSocket connection.

#### Defined in

[globals.d.ts:1376](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1376)

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](globals.WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules/globals.md#websocket), `ev`: [`WebSocketEventMap`](globals.WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](globals.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1385](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1385)

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/globals.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](globals.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1390](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1390)

___

### close

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1378](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1378)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/globals.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

[globals.d.ts:1162](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1162)

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](globals.WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules/globals.md#websocket), `ev`: [`WebSocketEventMap`](globals.WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](globals.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1395](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1395)

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/globals.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](globals.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1400](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1400)

___

### send

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| [`Blob`](../classes/globals.Blob.md) \| `ArrayBufferLike` \| `ArrayBufferView` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1380](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1380)
