# Interface: MakeDirectoryOptions

[fs](../modules/fs.md).["fs"](../modules/fs._fs_.md).MakeDirectoryOptions

## Table of contents

### Properties

- [mode](fs._fs_.MakeDirectoryOptions.md#mode)
- [recursive](fs._fs_.MakeDirectoryOptions.md#recursive)

## Properties

### mode

• `Optional` **mode**: [`Mode`](../modules/fs._fs_.md#mode)

A file mode. If a string is passed, it is parsed as an octal integer. If not specified

**`Default`**

0o777

#### Defined in

[fs.d.ts:1351](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1351)

___

### recursive

• `Optional` **recursive**: `boolean`

Indicates whether parent folders should be created.
If a folder was created, the path to the first created folder will be returned.

**`Default`**

false

#### Defined in

[fs.d.ts:1346](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1346)
