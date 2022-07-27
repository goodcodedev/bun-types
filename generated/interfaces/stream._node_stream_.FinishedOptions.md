# Interface: FinishedOptions

[stream](../modules/stream.md).["node:stream"](../modules/stream._node_stream_.md).FinishedOptions

## Hierarchy

- [`Abortable`](events._events_.EventEmitter.Abortable.md)

  ↳ **`FinishedOptions`**

## Table of contents

### Properties

- [error](stream._node_stream_.FinishedOptions.md#error)
- [readable](stream._node_stream_.FinishedOptions.md#readable)
- [signal](stream._node_stream_.FinishedOptions.md#signal)
- [writable](stream._node_stream_.FinishedOptions.md#writable)

## Properties

### error

• `Optional` **error**: `boolean`

#### Defined in

[stream.d.ts:1043](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1043)

___

### readable

• `Optional` **readable**: `boolean`

#### Defined in

[stream.d.ts:1044](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1044)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](events._events_.EventEmitter.Abortable.md).[signal](events._events_.EventEmitter.Abortable.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L639)

___

### writable

• `Optional` **writable**: `boolean`

#### Defined in

[stream.d.ts:1045](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1045)
