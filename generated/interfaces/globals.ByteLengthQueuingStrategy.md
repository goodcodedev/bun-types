# Interface: ByteLengthQueuingStrategy

[globals](../modules/globals.md).ByteLengthQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](globals.QueuingStrategy.md)<`ArrayBufferView`\>

  ↳ **`ByteLengthQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](globals.ByteLengthQueuingStrategy.md#highwatermark)
- [size](globals.ByteLengthQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Overrides

[QueuingStrategy](globals.QueuingStrategy.md).[highWaterMark](globals.QueuingStrategy.md#highwatermark)

#### Defined in

[globals.d.ts:1716](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1716)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](globals.QueuingStrategySize.md)<`ArrayBufferView`\>

#### Overrides

[QueuingStrategy](globals.QueuingStrategy.md).[size](globals.QueuingStrategy.md#size)

#### Defined in

[globals.d.ts:1717](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1717)
