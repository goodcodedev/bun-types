# Interface: CopyOptions

[fs](../modules/fs.md).["fs"](../modules/fs._fs_.md).CopyOptions

## Table of contents

### Properties

- [dereference](fs._fs_.CopyOptions.md#dereference)
- [errorOnExist](fs._fs_.CopyOptions.md#erroronexist)
- [force](fs._fs_.CopyOptions.md#force)
- [preserveTimestamps](fs._fs_.CopyOptions.md#preservetimestamps)
- [recursive](fs._fs_.CopyOptions.md#recursive)

### Methods

- [filter](fs._fs_.CopyOptions.md#filter)

## Properties

### dereference

• `Optional` **dereference**: `boolean`

Dereference symlinks

**`Default`**

false

#### Defined in

[fs.d.ts:3561](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3561)

___

### errorOnExist

• `Optional` **errorOnExist**: `boolean`

When `force` is `false`, and the destination
exists, throw an error.

**`Default`**

false

#### Defined in

[fs.d.ts:3567](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3567)

___

### force

• `Optional` **force**: `boolean`

Overwrite existing file or directory. _The copy
operation will ignore errors if you set this to false and the destination
exists. Use the `errorOnExist` option to change this behavior.

**`Default`**

true

#### Defined in

[fs.d.ts:3579](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3579)

___

### preserveTimestamps

• `Optional` **preserveTimestamps**: `boolean`

When `true` timestamps from `src` will
be preserved.

**`Default`**

false

#### Defined in

[fs.d.ts:3585](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3585)

___

### recursive

• `Optional` **recursive**: `boolean`

Copy directories recursively.

**`Default`**

false

#### Defined in

[fs.d.ts:3590](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3590)

## Methods

### filter

▸ `Optional` **filter**(`source`, `destination`): `boolean`

function to filter copied files/directories. Return
`true` to copy the item, `false` to ignore it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`boolean`

#### Defined in

[fs.d.ts:3572](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3572)
