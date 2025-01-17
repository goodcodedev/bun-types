# Class: Certificate

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).Certificate

SPKAC is a Certificate Signing Request mechanism originally implemented by
Netscape and was specified formally as part of [HTML5's `keygen` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen).

`<keygen>` is deprecated since [HTML 5.2](https://www.w3.org/TR/html52/changes.html#features-removed) and new projects
should not use this element anymore.

The `crypto` module provides the `Certificate` class for working with SPKAC
data. The most common usage is handling output generated by the HTML5`<keygen>` element. Node.js uses [OpenSSL's SPKAC
implementation](https://www.openssl.org/docs/man1.1.0/apps/openssl-spkac.html) internally.

## Table of contents

### Constructors

- [constructor](crypto._crypto_.Certificate.md#constructor)

### Methods

- [exportChallenge](crypto._crypto_.Certificate.md#exportchallenge)
- [exportPublicKey](crypto._crypto_.Certificate.md#exportpublickey)
- [verifySpkac](crypto._crypto_.Certificate.md#verifyspkac)
- [exportChallenge](crypto._crypto_.Certificate.md#exportchallenge-1)
- [exportPublicKey](crypto._crypto_.Certificate.md#exportpublickey-1)
- [verifySpkac](crypto._crypto_.Certificate.md#verifyspkac-1)

## Constructors

### constructor

• **new Certificate**()

## Methods

### exportChallenge

▸ **exportChallenge**(`spkac`): [`Buffer`](../modules/buffer._buffer_.md#buffer)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `spkac` | [`BinaryLike`](../modules/crypto._crypto_.md#binarylike) |

#### Returns

[`Buffer`](../modules/buffer._buffer_.md#buffer)

The challenge component of the `spkac` data structure,
which includes a public key and a challenge.

#### Defined in

[crypto.d.ts:75](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L75)

___

### exportPublicKey

▸ **exportPublicKey**(`spkac`, `encoding?`): [`Buffer`](../modules/buffer._buffer_.md#buffer)

**`Deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spkac` | [`BinaryLike`](../modules/crypto._crypto_.md#binarylike) |  |
| `encoding?` | `string` | The encoding of the spkac string. |

#### Returns

[`Buffer`](../modules/buffer._buffer_.md#buffer)

The public key component of the `spkac` data structure,
which includes a public key and a challenge.

#### Defined in

[crypto.d.ts:83](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L83)

___

### verifySpkac

▸ **verifySpkac**(`spkac`): `boolean`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `spkac` | `ArrayBufferView` |

#### Returns

`boolean`

`true` if the given `spkac` data structure is valid,
`false` otherwise.

#### Defined in

[crypto.d.ts:90](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L90)

___

### exportChallenge

▸ `Static` **exportChallenge**(`spkac`): [`Buffer`](../modules/buffer._buffer_.md#buffer)

```js
const { Certificate } = await import('crypto');
const spkac = getSpkacSomehow();
const challenge = Certificate.exportChallenge(spkac);
console.log(challenge.toString('utf8'));
// Prints: the challenge as a UTF8 string
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `spkac` | [`BinaryLike`](../modules/crypto._crypto_.md#binarylike) |

#### Returns

[`Buffer`](../modules/buffer._buffer_.md#buffer)

The challenge component of the `spkac` data structure, which includes a public key and a challenge.

#### Defined in

[crypto.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L43)

___

### exportPublicKey

▸ `Static` **exportPublicKey**(`spkac`, `encoding?`): [`Buffer`](../modules/buffer._buffer_.md#buffer)

```js
const { Certificate } = await import('crypto');
const spkac = getSpkacSomehow();
const publicKey = Certificate.exportPublicKey(spkac);
console.log(publicKey);
// Prints: the public key as <Buffer ...>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spkac` | [`BinaryLike`](../modules/crypto._crypto_.md#binarylike) | - |
| `encoding?` | `string` | The `encoding` of the `spkac` string. |

#### Returns

[`Buffer`](../modules/buffer._buffer_.md#buffer)

The public key component of the `spkac` data structure, which includes a public key and a challenge.

#### Defined in

[crypto.d.ts:55](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L55)

___

### verifySpkac

▸ `Static` **verifySpkac**(`spkac`): `boolean`

```js
import { Buffer } from 'buffer';
const { Certificate } = await import('crypto');

const spkac = getSpkacSomehow();
console.log(Certificate.verifySpkac(Buffer.from(spkac)));
// Prints: true or false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `spkac` | `ArrayBufferView` |

#### Returns

`boolean`

`true` if the given `spkac` data structure is valid, `false` otherwise.

#### Defined in

[crypto.d.ts:68](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L68)
