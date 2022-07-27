# Interface: RSAKeyPairOptions<PubF, PrivF\>

[crypto](../modules/crypto.md).["node:crypto"](../modules/crypto._node_crypto_.md).RSAKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |

## Table of contents

### Properties

- [modulusLength](crypto._node_crypto_.RSAKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](crypto._node_crypto_.RSAKeyPairOptions.md#privatekeyencoding)
- [publicExponent](crypto._node_crypto_.RSAKeyPairOptions.md#publicexponent)
- [publicKeyEncoding](crypto._node_crypto_.RSAKeyPairOptions.md#publickeyencoding)

## Properties

### modulusLength

• **modulusLength**: `number`

Key size in bits

#### Defined in

[crypto.d.ts:2539](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2539)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto._crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs1"`` \| ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2549](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2549)

___

### publicExponent

• `Optional` **publicExponent**: `number`

Public exponent

**`Default`**

0x10001

#### Defined in

[crypto.d.ts:2544](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2544)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |

#### Defined in

[crypto.d.ts:2545](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2545)
