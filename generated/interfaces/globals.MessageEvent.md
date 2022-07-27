# Interface: MessageEvent<T\>

[globals](../modules/globals.md).MessageEvent

A message received by a target object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`Event`](../modules/globals.md#event)

  ↳ **`MessageEvent`**

## Table of contents

### Properties

- [AT\_TARGET](globals.MessageEvent.md#at_target)
- [BUBBLING\_PHASE](globals.MessageEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](globals.MessageEvent.md#capturing_phase)
- [NONE](globals.MessageEvent.md#none)
- [bubbles](globals.MessageEvent.md#bubbles)
- [cancelBubble](globals.MessageEvent.md#cancelbubble)
- [cancelable](globals.MessageEvent.md#cancelable)
- [composed](globals.MessageEvent.md#composed)
- [currentTarget](globals.MessageEvent.md#currenttarget)
- [data](globals.MessageEvent.md#data)
- [defaultPrevented](globals.MessageEvent.md#defaultprevented)
- [eventPhase](globals.MessageEvent.md#eventphase)
- [isTrusted](globals.MessageEvent.md#istrusted)
- [lastEventId](globals.MessageEvent.md#lasteventid)
- [origin](globals.MessageEvent.md#origin)
- [returnValue](globals.MessageEvent.md#returnvalue)
- [source](globals.MessageEvent.md#source)
- [srcElement](globals.MessageEvent.md#srcelement)
- [target](globals.MessageEvent.md#target)
- [timeStamp](globals.MessageEvent.md#timestamp)
- [type](globals.MessageEvent.md#type)

### Methods

- [composedPath](globals.MessageEvent.md#composedpath)
- [initEvent](globals.MessageEvent.md#initevent)
- [initMessageEvent](globals.MessageEvent.md#initmessageevent)
- [preventDefault](globals.MessageEvent.md#preventdefault)
- [stopImmediatePropagation](globals.MessageEvent.md#stopimmediatepropagation)
- [stopPropagation](globals.MessageEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

#### Defined in

[globals.d.ts:1269](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1269)

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

#### Defined in

[globals.d.ts:1270](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1270)

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

#### Defined in

[globals.d.ts:1271](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1271)

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

#### Defined in

[globals.d.ts:1272](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1272)

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True
if event goes through its target's ancestors in reverse tree order,
and false otherwise.

#### Inherited from

Event.bubbles

#### Defined in

[globals.d.ts:1183](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1183)

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

#### Defined in

[globals.d.ts:1184](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1184)

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its
return value does not always carry meaning, but true can indicate
that part of the operation during which event was dispatched, can be
canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

#### Defined in

[globals.d.ts:1191](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1191)

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True
if event invokes listeners past a ShadowRoot node that is the root of
its target, and false otherwise.

#### Inherited from

Event.composed

#### Defined in

[globals.d.ts:1197](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1197)

___

### currentTarget

• `Readonly` **currentTarget**: [`EventTarget`](../modules/globals.md#eventtarget)

Returns the object whose event listener's callback is currently
being invoked.

#### Inherited from

Event.currentTarget

#### Defined in

[globals.d.ts:1202](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1202)

___

### data

• `Readonly` **data**: `T`

Returns the data of the message.

#### Defined in

[globals.d.ts:1318](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1318)

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to
indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

#### Defined in

[globals.d.ts:1207](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1207)

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

#### Defined in

[globals.d.ts:1212](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1212)

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false
otherwise.

#### Inherited from

Event.isTrusted

#### Defined in

[globals.d.ts:1217](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1217)

___

### lastEventId

• `Readonly` **lastEventId**: `string`

Returns the last event ID string, for server-sent events.

#### Defined in

[globals.d.ts:1320](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1320)

___

### origin

• `Readonly` **origin**: `string`

Returns the origin of the message, for server-sent events and cross-document messaging.

#### Defined in

[globals.d.ts:1322](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1322)

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

[globals.d.ts:1221](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1221)

___

### source

• `Readonly` **source**: `undefined`

#### Defined in

[globals.d.ts:1323](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1323)

___

### srcElement

• `Readonly` **srcElement**: [`EventTarget`](../modules/globals.md#eventtarget)

**`Deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

[globals.d.ts:1225](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1225)

___

### target

• `Readonly` **target**: [`EventTarget`](../modules/globals.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

#### Defined in

[globals.d.ts:1229](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1229)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured
relative to the time origin.

#### Inherited from

Event.timeStamp

#### Defined in

[globals.d.ts:1234](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1234)

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

#### Defined in

[globals.d.ts:1238](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1238)

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/globals.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/globals.md#eventtarget)[]

#### Inherited from

Event.composedPath

#### Defined in

[globals.d.ts:1245](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1245)

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

#### Defined in

[globals.d.ts:1249](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1249)

___

### initMessageEvent

▸ **initMessageEvent**(`type`, `bubbles?`, `cancelable?`, `data?`, `origin?`, `lastEventId?`, `source?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |
| `data?` | `any` |
| `origin?` | `string` |
| `lastEventId?` | `string` |
| `source?` | ``null`` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1325](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1325)

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

#### Defined in

[globals.d.ts:1256](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1256)

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered
event listeners after the current one finishes running and, when
dispatched in a tree, also prevents event from reaching any other
objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

#### Defined in

[globals.d.ts:1263](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1263)

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

#### Defined in

[globals.d.ts:1268](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1268)
