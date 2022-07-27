# Interface: DSAKeyPairOptions<PubF, PrivF\>

[crypto](../modules/crypto.md).["node:crypto"](../modules/crypto._node_crypto_.md).DSAKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |

## Table of contents

### Properties

- [divisorLength](crypto._node_crypto_.DSAKeyPairOptions.md#divisorlength)
- [modulusLength](crypto._node_crypto_.DSAKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](crypto._node_crypto_.DSAKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto._node_crypto_.DSAKeyPairOptions.md#publickeyencoding)

## Properties

### divisorLength

• **divisorLength**: `number`

Size of q in bits

#### Defined in

[crypto.d.ts:2594](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2594)

___

### modulusLength

• **modulusLength**: `number`

Key size in bits

#### Defined in

[crypto.d.ts:2590](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2590)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto._crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2599](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2599)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2595](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2595)
