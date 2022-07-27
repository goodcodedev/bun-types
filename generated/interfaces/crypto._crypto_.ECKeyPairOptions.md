# Interface: ECKeyPairOptions<PubF, PrivF\>

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).ECKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto._crypto_.md#keyformat) |

## Table of contents

### Properties

- [namedCurve](crypto._crypto_.ECKeyPairOptions.md#namedcurve)
- [privateKeyEncoding](crypto._crypto_.ECKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto._crypto_.ECKeyPairOptions.md#publickeyencoding)

## Properties

### namedCurve

• **namedCurve**: `string`

Name of the curve to use.

#### Defined in

[crypto.d.ts:2607](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2607)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto._crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"`` \| ``"sec1"``  }

#### Defined in

[crypto.d.ts:2612](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2612)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |

#### Defined in

[crypto.d.ts:2608](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2608)
