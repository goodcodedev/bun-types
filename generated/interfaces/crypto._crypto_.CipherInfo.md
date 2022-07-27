# Interface: CipherInfo

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).CipherInfo

## Table of contents

### Properties

- [blockSize](crypto._crypto_.CipherInfo.md#blocksize)
- [ivLength](crypto._crypto_.CipherInfo.md#ivlength)
- [keyLength](crypto._crypto_.CipherInfo.md#keylength)
- [mode](crypto._crypto_.CipherInfo.md#mode)
- [name](crypto._crypto_.CipherInfo.md#name)
- [nid](crypto._crypto_.CipherInfo.md#nid)

## Properties

### blockSize

• `Optional` **blockSize**: `number`

The block size of the cipher in bytes.
This property is omitted when mode is 'stream'.

#### Defined in

[crypto.d.ts:3492](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3492)

___

### ivLength

• `Optional` **ivLength**: `number`

The expected or default initialization vector length in bytes.
This property is omitted if the cipher does not use an initialization vector.

#### Defined in

[crypto.d.ts:3497](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3497)

___

### keyLength

• **keyLength**: `number`

The expected or default key length in bytes.

#### Defined in

[crypto.d.ts:3501](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3501)

___

### mode

• **mode**: [`CipherMode`](../modules/crypto._crypto_.md#ciphermode)

The cipher mode.

#### Defined in

[crypto.d.ts:3505](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3505)

___

### name

• **name**: `string`

The name of the cipher.

#### Defined in

[crypto.d.ts:3483](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3483)

___

### nid

• **nid**: `number`

The nid of the cipher.

#### Defined in

[crypto.d.ts:3487](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3487)
