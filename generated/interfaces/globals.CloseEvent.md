# Interface: CloseEvent

[globals](../modules/globals.md).CloseEvent

A CloseEvent is sent to clients using WebSockets when the connection is closed. This is delivered to the listener indicated by the WebSocket object's onclose attribute.

## Hierarchy

- [`Event`](../modules/globals.md#event)

  ↳ **`CloseEvent`**

## Table of contents

### Properties

- [AT\_TARGET](globals.CloseEvent.md#at_target)
- [BUBBLING\_PHASE](globals.CloseEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](globals.CloseEvent.md#capturing_phase)
- [NONE](globals.CloseEvent.md#none)
- [bubbles](globals.CloseEvent.md#bubbles)
- [cancelBubble](globals.CloseEvent.md#cancelbubble)
- [cancelable](globals.CloseEvent.md#cancelable)
- [code](globals.CloseEvent.md#code)
- [composed](globals.CloseEvent.md#composed)
- [currentTarget](globals.CloseEvent.md#currenttarget)
- [defaultPrevented](globals.CloseEvent.md#defaultprevented)
- [eventPhase](globals.CloseEvent.md#eventphase)
- [isTrusted](globals.CloseEvent.md#istrusted)
- [reason](globals.CloseEvent.md#reason)
- [returnValue](globals.CloseEvent.md#returnvalue)
- [srcElement](globals.CloseEvent.md#srcelement)
- [target](globals.CloseEvent.md#target)
- [timeStamp](globals.CloseEvent.md#timestamp)
- [type](globals.CloseEvent.md#type)
- [wasClean](globals.CloseEvent.md#wasclean)

### Methods

- [composedPath](globals.CloseEvent.md#composedpath)
- [initEvent](globals.CloseEvent.md#initevent)
- [preventDefault](globals.CloseEvent.md#preventdefault)
- [stopImmediatePropagation](globals.CloseEvent.md#stopimmediatepropagation)
- [stopPropagation](globals.CloseEvent.md#stoppropagation)

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

### code

• `Readonly` **code**: `number`

Returns the WebSocket connection close code provided by the server.

#### Defined in

[globals.d.ts:1303](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1303)

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

### reason

• `Readonly` **reason**: `string`

Returns the WebSocket connection close reason provided by the server.

#### Defined in

[globals.d.ts:1305](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1305)

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

[globals.d.ts:1221](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1221)

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

___

### wasClean

• `Readonly` **wasClean**: `boolean`

Returns true if the connection closed cleanly; false otherwise.

#### Defined in

[globals.d.ts:1307](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1307)

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