# Namespace: "tty"

[tty](tty.md)."tty"

## Table of contents

### Variables

- [ReadStream](tty._tty_.md#readstream)
- [WriteStream](tty._tty_.md#writestream)

### Functions

- [isatty](tty._tty_.md#isatty)

## Variables

### ReadStream

• **ReadStream**: `Function`

#### Defined in

[tty.d.ts:12](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/tty.d.ts#L12)

___

### WriteStream

• **WriteStream**: `Function`

#### Defined in

[tty.d.ts:13](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/tty.d.ts#L13)

## Functions

### isatty

▸ **isatty**(`fd`): `boolean`

The `tty.isatty()` method returns `true` if the given `fd` is associated with
a TTY and `false` if it is not, including whenever `fd` is not a non-negative
integer.

**`Since`**

v0.5.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A numeric file descriptor |

#### Returns

`boolean`

#### Defined in

[tty.d.ts:9](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/tty.d.ts#L9)
