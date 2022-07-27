# Interface: MMapOptions

[bun](../modules/bun.md).["bun"](../modules/bun._bun_.md).MMapOptions

## Table of contents

### Properties

- [shared](bun._bun_.MMapOptions.md#shared)
- [sync](bun._bun_.MMapOptions.md#sync)

## Properties

### shared

• `Optional` **shared**: `boolean`

Allow other processes to see results instantly?
This enables MAP_SHARED. If false, it enables MAP_PRIVATE.

**`Default`**

true

#### Defined in

[bun.d.ts:900](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L900)

___

### sync

• `Optional` **sync**: `boolean`

Sets MAP_SYNC flag on Linux. Ignored on macOS due to lack of support.

#### Defined in

[bun.d.ts:894](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L894)
