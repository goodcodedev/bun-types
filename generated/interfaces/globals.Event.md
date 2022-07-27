# Interface: Event

[globals](../modules/globals.md).Event

An event which takes place in the DOM.

## Table of contents

### Properties

- [AT\_TARGET](globals.Event.md#at_target)
- [BUBBLING\_PHASE](globals.Event.md#bubbling_phase)
- [CAPTURING\_PHASE](globals.Event.md#capturing_phase)
- [NONE](globals.Event.md#none)
- [bubbles](globals.Event.md#bubbles)
- [cancelBubble](globals.Event.md#cancelbubble)
- [cancelable](globals.Event.md#cancelable)
- [composed](globals.Event.md#composed)
- [currentTarget](globals.Event.md#currenttarget)
- [defaultPrevented](globals.Event.md#defaultprevented)
- [eventPhase](globals.Event.md#eventphase)
- [isTrusted](globals.Event.md#istrusted)
- [returnValue](globals.Event.md#returnvalue)
- [srcElement](globals.Event.md#srcelement)
- [target](globals.Event.md#target)
- [timeStamp](globals.Event.md#timestamp)
- [type](globals.Event.md#type)

### Methods

- [composedPath](globals.Event.md#composedpath)
- [initEvent](globals.Event.md#initevent)
- [preventDefault](globals.Event.md#preventdefault)
- [stopImmediatePropagation](globals.Event.md#stopimmediatepropagation)
- [stopPropagation](globals.Event.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Defined in

[globals.d.ts:1269](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1269)

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Defined in

[globals.d.ts:1270](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1270)

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Defined in

[globals.d.ts:1271](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1271)

___

### NONE

• `Readonly` **NONE**: `number`

#### Defined in

[globals.d.ts:1272](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1272)

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True
if event goes through its target's ancestors in reverse tree order,
and false otherwise.

#### Defined in

[globals.d.ts:1183](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1183)

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Defined in

[globals.d.ts:1184](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1184)

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its
return value does not always carry meaning, but true can indicate
that part of the operation during which event was dispatched, can be
canceled by invoking the preventDefault() method.

#### Defined in

[globals.d.ts:1191](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1191)

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True
if event invokes listeners past a ShadowRoot node that is the root of
its target, and false otherwise.

#### Defined in

[globals.d.ts:1197](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1197)

___

### currentTarget

• `Readonly` **currentTarget**: [`EventTarget`](../modules/globals.md#eventtarget)

Returns the object whose event listener's callback is currently
being invoked.

#### Defined in

[globals.d.ts:1202](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1202)

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to
indicate cancelation, and false otherwise.

#### Defined in

[globals.d.ts:1207](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1207)

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
AT_TARGET, and BUBBLING_PHASE.

#### Defined in

[globals.d.ts:1212](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1212)

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false
otherwise.

#### Defined in

[globals.d.ts:1217](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1217)

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Defined in

[globals.d.ts:1221](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1221)

___

### srcElement

• `Readonly` **srcElement**: [`EventTarget`](../modules/globals.md#eventtarget)

**`Deprecated`**

#### Defined in

[globals.d.ts:1225](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1225)

___

### target

• `Readonly` **target**: [`EventTarget`](../modules/globals.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Defined in

[globals.d.ts:1229](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1229)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured
relative to the time origin.

#### Defined in

[globals.d.ts:1234](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1234)

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

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

#### Defined in

[globals.d.ts:1263](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1263)

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

#### Defined in

[globals.d.ts:1268](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1268)
