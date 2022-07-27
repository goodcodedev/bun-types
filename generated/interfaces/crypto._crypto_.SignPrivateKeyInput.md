# Interface: SignPrivateKeyInput

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).SignPrivateKeyInput

## Hierarchy

- [`PrivateKeyInput`](crypto._crypto_.PrivateKeyInput.md)

- [`SigningOptions`](crypto._crypto_.SigningOptions.md)

  ↳ **`SignPrivateKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](crypto._crypto_.SignPrivateKeyInput.md#dsaencoding)
- [format](crypto._crypto_.SignPrivateKeyInput.md#format)
- [key](crypto._crypto_.SignPrivateKeyInput.md#key)
- [padding](crypto._crypto_.SignPrivateKeyInput.md#padding)
- [passphrase](crypto._crypto_.SignPrivateKeyInput.md#passphrase)
- [saltLength](crypto._crypto_.SignPrivateKeyInput.md#saltlength)
- [type](crypto._crypto_.SignPrivateKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](../modules/crypto._crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](crypto._crypto_.SigningOptions.md).[dsaEncoding](crypto._crypto_.SigningOptions.md#dsaencoding)

#### Defined in

[crypto.d.ts:1360](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1360)

___

### format

• `Optional` **format**: [`KeyFormat`](../modules/crypto._crypto_.md#keyformat)

#### Inherited from

[PrivateKeyInput](crypto._crypto_.PrivateKeyInput.md).[format](crypto._crypto_.PrivateKeyInput.md#format)

#### Defined in

[crypto.d.ts:1251](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1251)

___

### key

• **key**: `string` \| [`Buffer`](../modules/buffer._buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](crypto._crypto_.PrivateKeyInput.md).[key](crypto._crypto_.PrivateKeyInput.md#key)

#### Defined in

[crypto.d.ts:1250](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1250)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](crypto._crypto_.SigningOptions.md).[padding](crypto._crypto_.SigningOptions.md#padding)

#### Defined in

[crypto.d.ts:1358](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1358)

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](../modules/buffer._buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](crypto._crypto_.PrivateKeyInput.md).[passphrase](crypto._crypto_.PrivateKeyInput.md#passphrase)

#### Defined in

[crypto.d.ts:1253](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1253)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](crypto._crypto_.SigningOptions.md).[saltLength](crypto._crypto_.SigningOptions.md#saltlength)

#### Defined in

[crypto.d.ts:1359](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1359)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``

#### Inherited from

[PrivateKeyInput](crypto._crypto_.PrivateKeyInput.md).[type](crypto._crypto_.PrivateKeyInput.md#type)

#### Defined in

[crypto.d.ts:1252](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1252)
