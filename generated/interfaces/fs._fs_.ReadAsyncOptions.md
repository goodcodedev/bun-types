# Interface: ReadAsyncOptions<TBuffer\>

[fs](../modules/fs.md).["fs"](../modules/fs._fs_.md).ReadAsyncOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

## Hierarchy

- [`ReadSyncOptions`](fs._fs_.ReadSyncOptions.md)

  ↳ **`ReadAsyncOptions`**

## Table of contents

### Properties

- [buffer](fs._fs_.ReadAsyncOptions.md#buffer)
- [length](fs._fs_.ReadAsyncOptions.md#length)
- [offset](fs._fs_.ReadAsyncOptions.md#offset)
- [position](fs._fs_.ReadAsyncOptions.md#position)

## Properties

### buffer

• `Optional` **buffer**: `TBuffer`

#### Defined in

[fs.d.ts:2221](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2221)

___

### length

• `Optional` **length**: `number`

**`Default`**

`length of buffer`

#### Inherited from

[ReadSyncOptions](fs._fs_.ReadSyncOptions.md).[length](fs._fs_.ReadSyncOptions.md#length)

#### Defined in

[fs.d.ts:2213](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2213)

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Inherited from

[ReadSyncOptions](fs._fs_.ReadSyncOptions.md).[offset](fs._fs_.ReadSyncOptions.md#offset)

#### Defined in

[fs.d.ts:2209](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2209)

___

### position

• `Optional` **position**: [`ReadPosition`](../modules/fs._fs_.md#readposition)

**`Default`**

null

#### Inherited from

[ReadSyncOptions](fs._fs_.ReadSyncOptions.md).[position](fs._fs_.ReadSyncOptions.md#position)

#### Defined in

[fs.d.ts:2217](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2217)
