# Interface: VerifyPublicKeyInput

[crypto](../modules/crypto.md).["node:crypto"](../modules/crypto._node_crypto_.md).VerifyPublicKeyInput

## Hierarchy

- [`PublicKeyInput`](crypto._crypto_.PublicKeyInput.md)

- [`SigningOptions`](crypto._crypto_.SigningOptions.md)

  ↳ **`VerifyPublicKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](crypto._node_crypto_.VerifyPublicKeyInput.md#dsaencoding)
- [format](crypto._node_crypto_.VerifyPublicKeyInput.md#format)
- [key](crypto._node_crypto_.VerifyPublicKeyInput.md#key)
- [padding](crypto._node_crypto_.VerifyPublicKeyInput.md#padding)
- [saltLength](crypto._node_crypto_.VerifyPublicKeyInput.md#saltlength)
- [type](crypto._node_crypto_.VerifyPublicKeyInput.md#type)

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

[PublicKeyInput](crypto._crypto_.PublicKeyInput.md).[format](crypto._crypto_.PublicKeyInput.md#format)

#### Defined in

[crypto.d.ts:1257](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1257)

___

### key

• **key**: `string` \| [`Buffer`](../modules/buffer._buffer_.md#buffer)

#### Inherited from

[PublicKeyInput](crypto._crypto_.PublicKeyInput.md).[key](crypto._crypto_.PublicKeyInput.md#key)

#### Defined in

[crypto.d.ts:1256](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1256)

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

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](crypto._crypto_.SigningOptions.md).[saltLength](crypto._crypto_.SigningOptions.md#saltlength)

#### Defined in

[crypto.d.ts:1359](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1359)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"spki"``

#### Inherited from

[PublicKeyInput](crypto._crypto_.PublicKeyInput.md).[type](crypto._crypto_.PublicKeyInput.md#type)

#### Defined in

[crypto.d.ts:1258](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1258)
