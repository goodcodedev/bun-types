# Interface: QueuingStrategyInit

[globals](../modules/globals.md).QueuingStrategyInit

## Table of contents

### Properties

- [highWaterMark](globals.QueuingStrategyInit.md#highwatermark)

## Properties

### highWaterMark

• **highWaterMark**: `number`

Creates a new ByteLengthQueuingStrategy with the provided high water mark.

Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.

#### Defined in

[globals.d.ts:1711](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1711)
