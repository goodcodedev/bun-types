# Interface: ReadableWritablePair<R, W\>

[globals](../modules/globals.md).ReadableWritablePair

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `W` | `any` |

## Table of contents

### Properties

- [readable](globals.ReadableWritablePair.md#readable)
- [writable](globals.ReadableWritablePair.md#writable)

## Properties

### readable

• **readable**: [`ReadableStream`](../modules/globals.md#readablestream)<`R`\>

#### Defined in

[globals.d.ts:1772](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1772)

___

### writable

• **writable**: [`WritableStream`](../modules/globals.md#writablestream)<`W`\>

Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.

Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.

#### Defined in

[globals.d.ts:1778](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1778)
