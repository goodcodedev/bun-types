# Interface: OpenDirOptions

[fs](../modules/fs.md).["fs"](../modules/fs._fs_.md).OpenDirOptions

## Table of contents

### Properties

- [bufferSize](fs._fs_.OpenDirOptions.md#buffersize)
- [encoding](fs._fs_.OpenDirOptions.md#encoding)

## Properties

### bufferSize

• `Optional` **bufferSize**: `number`

Number of directory entries that are buffered
internally when reading from the directory. Higher values lead to better
performance but higher memory usage.

**`Default`**

32

#### Defined in

[fs.d.ts:3538](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3538)

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

#### Defined in

[fs.d.ts:3531](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3531)
