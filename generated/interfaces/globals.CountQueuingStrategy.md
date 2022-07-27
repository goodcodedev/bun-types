# Interface: CountQueuingStrategy

[globals](../modules/globals.md).CountQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](globals.QueuingStrategy.md)

  ↳ **`CountQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](globals.CountQueuingStrategy.md#highwatermark)
- [size](globals.CountQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Overrides

[QueuingStrategy](globals.QueuingStrategy.md).[highWaterMark](globals.QueuingStrategy.md#highwatermark)

#### Defined in

[globals.d.ts:1951](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1951)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](globals.QueuingStrategySize.md)<`any`\>

#### Overrides

[QueuingStrategy](globals.QueuingStrategy.md).[size](globals.QueuingStrategy.md#size)

#### Defined in

[globals.d.ts:1952](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1952)
