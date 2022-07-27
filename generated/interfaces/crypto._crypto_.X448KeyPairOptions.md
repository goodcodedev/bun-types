# Interface: X448KeyPairOptions<PubF, PrivF\>

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).X448KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](crypto._crypto_.X448KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto._crypto_.X448KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto._crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2660](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2660)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2656](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2656)
