# Interface: RmOptions

[fs](../modules/fs.md).["fs"](../modules/fs._fs_.md).RmOptions

## Table of contents

### Properties

- [force](fs._fs_.RmOptions.md#force)
- [maxRetries](fs._fs_.RmOptions.md#maxretries)
- [recursive](fs._fs_.RmOptions.md#recursive)
- [retryDelay](fs._fs_.RmOptions.md#retrydelay)

## Properties

### force

• `Optional` **force**: `boolean`

When `true`, exceptions will be ignored if `path` does not exist.

**`Default`**

false

#### Defined in

[fs.d.ts:1317](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1317)

___

### maxRetries

• `Optional` **maxRetries**: `number`

If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
`EPERM` error is encountered, Node.js will retry the operation with a linear
backoff wait of `retryDelay` ms longer on each try. This option represents the
number of retries. This option is ignored if the `recursive` option is not
`true`.

**`Default`**

0

#### Defined in

[fs.d.ts:1326](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1326)

___

### recursive

• `Optional` **recursive**: `boolean`

If `true`, perform a recursive directory removal. In
recursive mode, operations are retried on failure.

**`Default`**

false

#### Defined in

[fs.d.ts:1332](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1332)

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100

#### Defined in

[fs.d.ts:1338](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1338)
