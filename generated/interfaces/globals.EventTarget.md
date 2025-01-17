# Interface: EventTarget

[globals](../modules/globals.md).EventTarget

EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them.

## Table of contents

### Methods

- [addEventListener](globals.EventTarget.md#addeventlistener)
- [dispatchEvent](globals.EventTarget.md#dispatchevent)
- [removeEventListener](globals.EventTarget.md#removeeventlistener)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is
type. The callback argument sets the callback that will be invoked
when the event is dispatched.

The options argument sets listener-specific options. For
compatibility this can be a boolean, in which case the method behaves
exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being
invoked when the event's eventPhase attribute value is
BUBBLING_PHASE. When false (or not present), callback will not be
invoked when event's eventPhase attribute value is CAPTURING_PHASE.
Either way,callback will be invoked if event's eventPhase attribute
value is AT_TARGET.

When set to true, options's passive indicates that the callback will
not cancel the event by invoking preventDefault(). This is used to
enable performance optimizations described in § 2.8 Observing event
listeners.

When set to true, options's once indicates that the callback will
only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event
listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is
not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | [`EventListenerOrEventListenerObject`](../modules/globals.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](globals.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

[globals.d.ts:1156](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1156)

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

#### Defined in

[globals.d.ts:1162](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1162)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | [`EventListenerOrEventListenerObject`](../modules/globals.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](globals.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

[globals.d.ts:1164](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1164)
