# Interface: Zlib

[zlib](../modules/zlib.md).["node:zlib"](../modules/zlib._node_zlib_.md).Zlib

## Table of contents

### Properties

- [bytesRead](zlib._node_zlib_.Zlib.md#bytesread)
- [bytesWritten](zlib._node_zlib_.Zlib.md#byteswritten)
- [shell](zlib._node_zlib_.Zlib.md#shell)

### Methods

- [flush](zlib._node_zlib_.Zlib.md#flush)

## Properties

### bytesRead

• `Readonly` **bytesRead**: `number`

**`Deprecated`**

Use bytesWritten instead.

#### Defined in

[zlib.d.ts:140](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L140)

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

#### Defined in

[zlib.d.ts:141](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L141)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Defined in

[zlib.d.ts:142](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L142)

## Methods

### flush

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:143](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L143)

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:144](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/zlib.d.ts#L144)
