# Interface: AbortSignal

[globals](../modules/globals.md).AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

## Hierarchy

- [`EventTarget`](../modules/globals.md#eventtarget)

  ↳ **`AbortSignal`**

## Table of contents

### Properties

- [aborted](globals.AbortSignal.md#aborted)
- [onabort](globals.AbortSignal.md#onabort)

### Methods

- [addEventListener](globals.AbortSignal.md#addeventlistener)
- [dispatchEvent](globals.AbortSignal.md#dispatchevent)
- [removeEventListener](globals.AbortSignal.md#removeeventlistener)

## Properties

### aborted

• `Readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

#### Defined in

[globals.d.ts:1524](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1524)

___

### onabort

• **onabort**: (`this`: [`AbortSignal`](../modules/globals.md#abortsignal), `ev`: [`Event`](../modules/globals.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbortSignal`](../modules/globals.md#abortsignal) |
| `ev` | [`Event`](../modules/globals.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1525](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1525)

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](../modules/globals.md#abortsignal), `ev`: [`AbortSignalEventMap`](globals.AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](globals.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1526](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1526)

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

[globals.d.ts:1531](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1531)

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
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](../modules/globals.md#abortsignal), `ev`: [`AbortSignalEventMap`](globals.AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](globals.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1536](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1536)

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

[globals.d.ts:1541](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1541)
