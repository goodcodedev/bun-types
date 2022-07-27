# Interface: RSAPSSKeyPairOptions<PubF, PrivF\>

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).RSAPSSKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |

## Table of contents

### Properties

- [hashAlgorithm](crypto._crypto_.RSAPSSKeyPairOptions.md#hashalgorithm)
- [mgf1HashAlgorithm](crypto._crypto_.RSAPSSKeyPairOptions.md#mgf1hashalgorithm)
- [modulusLength](crypto._crypto_.RSAPSSKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](crypto._crypto_.RSAPSSKeyPairOptions.md#privatekeyencoding)
- [publicExponent](crypto._crypto_.RSAPSSKeyPairOptions.md#publicexponent)
- [publicKeyEncoding](crypto._crypto_.RSAPSSKeyPairOptions.md#publickeyencoding)
- [saltLength](crypto._crypto_.RSAPSSKeyPairOptions.md#saltlength)

## Properties

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest

#### Defined in

[crypto.d.ts:2569](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2569)

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1

#### Defined in

[crypto.d.ts:2573](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2573)

___

### modulusLength

• **modulusLength**: `number`

Key size in bits

#### Defined in

[crypto.d.ts:2560](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2560)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto._crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2582](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2582)

___

### publicExponent

• `Optional` **publicExponent**: `number`

Public exponent

**`Default`**

0x10001

#### Defined in

[crypto.d.ts:2565](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2565)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2578](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2578)

___

### saltLength

• `Optional` **saltLength**: `string`

Minimal salt length in bytes

#### Defined in

[crypto.d.ts:2577](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2577)
