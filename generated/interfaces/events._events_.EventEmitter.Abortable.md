# Interface: Abortable

["events"](../modules/events._events_.md).[EventEmitter](../modules/events._events_.EventEmitter.md).Abortable

## Hierarchy

- **`Abortable`**

  ↳ [`StreamOptions`](stream._stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](stream._stream_.FinishedOptions.md)

  ↳ [`StreamOptions`](stream._node_stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](stream._node_stream_.FinishedOptions.md)

## Table of contents

### Properties

- [signal](events._events_.EventEmitter.Abortable.md#signal)

## Properties

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Defined in

[events.d.ts:639](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L639)
