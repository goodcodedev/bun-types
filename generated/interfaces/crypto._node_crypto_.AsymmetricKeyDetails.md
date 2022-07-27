# Interface: AsymmetricKeyDetails

[crypto](../modules/crypto.md).["node:crypto"](../modules/crypto._node_crypto_.md).AsymmetricKeyDetails

## Table of contents

### Properties

- [divisorLength](crypto._node_crypto_.AsymmetricKeyDetails.md#divisorlength)
- [hashAlgorithm](crypto._node_crypto_.AsymmetricKeyDetails.md#hashalgorithm)
- [mgf1HashAlgorithm](crypto._node_crypto_.AsymmetricKeyDetails.md#mgf1hashalgorithm)
- [modulusLength](crypto._node_crypto_.AsymmetricKeyDetails.md#moduluslength)
- [namedCurve](crypto._node_crypto_.AsymmetricKeyDetails.md#namedcurve)
- [publicExponent](crypto._node_crypto_.AsymmetricKeyDetails.md#publicexponent)
- [saltLength](crypto._node_crypto_.AsymmetricKeyDetails.md#saltlength)

## Properties

### divisorLength

• `Optional` **divisorLength**: `number`

Size of q in bits (DSA).

#### Defined in

[crypto.d.ts:546](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L546)

___

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest (RSA-PSS).

#### Defined in

[crypto.d.ts:534](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L534)

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1 (RSA-PSS).

#### Defined in

[crypto.d.ts:538](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L538)

___

### modulusLength

• `Optional` **modulusLength**: `number`

Key size in bits (RSA, DSA).

#### Defined in

[crypto.d.ts:526](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L526)

___

### namedCurve

• `Optional` **namedCurve**: `string`

Name of the curve (EC).

#### Defined in

[crypto.d.ts:550](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L550)

___

### publicExponent

• `Optional` **publicExponent**: `bigint`

Public exponent (RSA).

#### Defined in

[crypto.d.ts:530](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L530)

___

### saltLength

• `Optional` **saltLength**: `number`

Minimal salt length in bytes (RSA-PSS).

#### Defined in

[crypto.d.ts:542](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L542)
