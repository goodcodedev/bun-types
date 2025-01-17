# Namespace: "crypto"

[crypto](crypto.md)."crypto"

The `crypto` module provides cryptographic functionality that includes a set of
wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

```js
const { createHmac } = await import('crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/crypto.js)

## Table of contents

### Namespaces

- [constants](crypto._crypto_.constants.md)
- [generateKeyPair](crypto._crypto_.generateKeyPair.md)

### Classes

- [Certificate](../classes/crypto._crypto_.Certificate.md)
- [Cipher](../classes/crypto._crypto_.Cipher.md)
- [Decipher](../classes/crypto._crypto_.Decipher.md)
- [DiffieHellman](../classes/crypto._crypto_.DiffieHellman.md)
- [ECDH](../classes/crypto._crypto_.ECDH.md)
- [Hash](../classes/crypto._crypto_.Hash.md)
- [Hmac](../classes/crypto._crypto_.Hmac.md)
- [KeyObject](../classes/crypto._crypto_.KeyObject.md)
- [Sign](../classes/crypto._crypto_.Sign.md)
- [Verify](../classes/crypto._crypto_.Verify.md)

### Interfaces

- [AsymmetricKeyDetails](../interfaces/crypto._crypto_.AsymmetricKeyDetails.md)
- [BasePrivateKeyEncodingOptions](../interfaces/crypto._crypto_.BasePrivateKeyEncodingOptions.md)
- [CheckPrimeOptions](../interfaces/crypto._crypto_.CheckPrimeOptions.md)
- [CipherCCM](../interfaces/crypto._crypto_.CipherCCM.md)
- [CipherCCMOptions](../interfaces/crypto._crypto_.CipherCCMOptions.md)
- [CipherGCM](../interfaces/crypto._crypto_.CipherGCM.md)
- [CipherGCMOptions](../interfaces/crypto._crypto_.CipherGCMOptions.md)
- [CipherInfo](../interfaces/crypto._crypto_.CipherInfo.md)
- [CipherInfoOptions](../interfaces/crypto._crypto_.CipherInfoOptions.md)
- [CipherOCB](../interfaces/crypto._crypto_.CipherOCB.md)
- [CipherOCBOptions](../interfaces/crypto._crypto_.CipherOCBOptions.md)
- [DSAKeyPairKeyObjectOptions](../interfaces/crypto._crypto_.DSAKeyPairKeyObjectOptions.md)
- [DSAKeyPairOptions](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)
- [DecipherCCM](../interfaces/crypto._crypto_.DecipherCCM.md)
- [DecipherGCM](../interfaces/crypto._crypto_.DecipherGCM.md)
- [DecipherOCB](../interfaces/crypto._crypto_.DecipherOCB.md)
- [ECKeyPairKeyObjectOptions](../interfaces/crypto._crypto_.ECKeyPairKeyObjectOptions.md)
- [ECKeyPairOptions](../interfaces/crypto._crypto_.ECKeyPairOptions.md)
- [ED25519KeyPairKeyObjectOptions](../interfaces/crypto._crypto_.ED25519KeyPairKeyObjectOptions.md)
- [ED25519KeyPairOptions](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)
- [ED448KeyPairKeyObjectOptions](../interfaces/crypto._crypto_.ED448KeyPairKeyObjectOptions.md)
- [ED448KeyPairOptions](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)
- [GeneratePrimeOptions](../interfaces/crypto._crypto_.GeneratePrimeOptions.md)
- [GeneratePrimeOptionsArrayBuffer](../interfaces/crypto._crypto_.GeneratePrimeOptionsArrayBuffer.md)
- [GeneratePrimeOptionsBigInt](../interfaces/crypto._crypto_.GeneratePrimeOptionsBigInt.md)
- [HashOptions](../interfaces/crypto._crypto_.HashOptions.md)
- [JsonWebKey](../interfaces/crypto._crypto_.JsonWebKey.md)
- [JsonWebKeyInput](../interfaces/crypto._crypto_.JsonWebKeyInput.md)
- [JwkKeyExportOptions](../interfaces/crypto._crypto_.JwkKeyExportOptions.md)
- [KeyExportOptions](../interfaces/crypto._crypto_.KeyExportOptions.md)
- [KeyPairKeyObjectResult](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)
- [KeyPairSyncResult](../interfaces/crypto._crypto_.KeyPairSyncResult.md)
- [PrivateKeyInput](../interfaces/crypto._crypto_.PrivateKeyInput.md)
- [PublicKeyInput](../interfaces/crypto._crypto_.PublicKeyInput.md)
- [RSAKeyPairKeyObjectOptions](../interfaces/crypto._crypto_.RSAKeyPairKeyObjectOptions.md)
- [RSAKeyPairOptions](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)
- [RSAPSSKeyPairKeyObjectOptions](../interfaces/crypto._crypto_.RSAPSSKeyPairKeyObjectOptions.md)
- [RSAPSSKeyPairOptions](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)
- [RandomUUIDOptions](../interfaces/crypto._crypto_.RandomUUIDOptions.md)
- [RsaPrivateKey](../interfaces/crypto._crypto_.RsaPrivateKey.md)
- [RsaPublicKey](../interfaces/crypto._crypto_.RsaPublicKey.md)
- [ScryptOptions](../interfaces/crypto._crypto_.ScryptOptions.md)
- [SecureHeapUsage](../interfaces/crypto._crypto_.SecureHeapUsage.md)
- [SignKeyObjectInput](../interfaces/crypto._crypto_.SignKeyObjectInput.md)
- [SignPrivateKeyInput](../interfaces/crypto._crypto_.SignPrivateKeyInput.md)
- [SigningOptions](../interfaces/crypto._crypto_.SigningOptions.md)
- [VerifyKeyObjectInput](../interfaces/crypto._crypto_.VerifyKeyObjectInput.md)
- [VerifyPublicKeyInput](../interfaces/crypto._crypto_.VerifyPublicKeyInput.md)
- [X25519KeyPairKeyObjectOptions](../interfaces/crypto._crypto_.X25519KeyPairKeyObjectOptions.md)
- [X25519KeyPairOptions](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)
- [X448KeyPairKeyObjectOptions](../interfaces/crypto._crypto_.X448KeyPairKeyObjectOptions.md)
- [X448KeyPairOptions](../interfaces/crypto._crypto_.X448KeyPairOptions.md)
- [X509CheckOptions](../interfaces/crypto._crypto_.X509CheckOptions.md)

### Type Aliases

- [BinaryLike](crypto._crypto_.md#binarylike)
- [BinaryToTextEncoding](crypto._crypto_.md#binarytotextencoding)
- [CharacterEncoding](crypto._crypto_.md#characterencoding)
- [CipherCCMTypes](crypto._crypto_.md#cipherccmtypes)
- [CipherGCMTypes](crypto._crypto_.md#ciphergcmtypes)
- [CipherKey](crypto._crypto_.md#cipherkey)
- [CipherMode](crypto._crypto_.md#ciphermode)
- [CipherOCBTypes](crypto._crypto_.md#cipherocbtypes)
- [DSAEncoding](crypto._crypto_.md#dsaencoding)
- [ECDHKeyFormat](crypto._crypto_.md#ecdhkeyformat)
- [Encoding](crypto._crypto_.md#encoding)
- [KeyFormat](crypto._crypto_.md#keyformat)
- [KeyLike](crypto._crypto_.md#keylike)
- [KeyObjectType](crypto._crypto_.md#keyobjecttype)
- [KeyType](crypto._crypto_.md#keytype)
- [LargeNumberLike](crypto._crypto_.md#largenumberlike)
- [LegacyCharacterEncoding](crypto._crypto_.md#legacycharacterencoding)

### Variables

- [DEFAULT\_ENCODING](crypto._crypto_.md#default_encoding)
- [fips](crypto._crypto_.md#fips)

### Functions

- [checkPrime](crypto._crypto_.md#checkprime)
- [checkPrimeSync](crypto._crypto_.md#checkprimesync)
- [createCipher](crypto._crypto_.md#createcipher)
- [createCipheriv](crypto._crypto_.md#createcipheriv)
- [createDecipher](crypto._crypto_.md#createdecipher)
- [createDecipheriv](crypto._crypto_.md#createdecipheriv)
- [createDiffieHellman](crypto._crypto_.md#creatediffiehellman)
- [createECDH](crypto._crypto_.md#createecdh)
- [createHash](crypto._crypto_.md#createhash)
- [createHmac](crypto._crypto_.md#createhmac)
- [createPrivateKey](crypto._crypto_.md#createprivatekey)
- [createPublicKey](crypto._crypto_.md#createpublickey)
- [createSecretKey](crypto._crypto_.md#createsecretkey)
- [createSign](crypto._crypto_.md#createsign)
- [createVerify](crypto._crypto_.md#createverify)
- [diffieHellman](crypto._crypto_.md#diffiehellman)
- [generateKey](crypto._crypto_.md#generatekey)
- [generateKeyPair](crypto._crypto_.md#generatekeypair)
- [generateKeyPairSync](crypto._crypto_.md#generatekeypairsync)
- [generateKeySync](crypto._crypto_.md#generatekeysync)
- [generatePrime](crypto._crypto_.md#generateprime)
- [generatePrimeSync](crypto._crypto_.md#generateprimesync)
- [getCipherInfo](crypto._crypto_.md#getcipherinfo)
- [getCiphers](crypto._crypto_.md#getciphers)
- [getCurves](crypto._crypto_.md#getcurves)
- [getDiffieHellman](crypto._crypto_.md#getdiffiehellman)
- [getFips](crypto._crypto_.md#getfips)
- [getHashes](crypto._crypto_.md#gethashes)
- [hkdf](crypto._crypto_.md#hkdf)
- [hkdfSync](crypto._crypto_.md#hkdfsync)
- [pbkdf2](crypto._crypto_.md#pbkdf2)
- [pbkdf2Sync](crypto._crypto_.md#pbkdf2sync)
- [privateDecrypt](crypto._crypto_.md#privatedecrypt)
- [privateEncrypt](crypto._crypto_.md#privateencrypt)
- [pseudoRandomBytes](crypto._crypto_.md#pseudorandombytes)
- [publicDecrypt](crypto._crypto_.md#publicdecrypt)
- [publicEncrypt](crypto._crypto_.md#publicencrypt)
- [randomBytes](crypto._crypto_.md#randombytes)
- [randomFill](crypto._crypto_.md#randomfill)
- [randomFillSync](crypto._crypto_.md#randomfillsync)
- [randomInt](crypto._crypto_.md#randomint)
- [randomUUID](crypto._crypto_.md#randomuuid)
- [scrypt](crypto._crypto_.md#scrypt)
- [scryptSync](crypto._crypto_.md#scryptsync)
- [secureHeapUsed](crypto._crypto_.md#secureheapused)
- [sign](crypto._crypto_.md#sign)
- [timingSafeEqual](crypto._crypto_.md#timingsafeequal)
- [verify](crypto._crypto_.md#verify)

## Type Aliases

### BinaryLike

Ƭ **BinaryLike**: `string` \| `ArrayBufferView`

#### Defined in

[crypto.d.ts:667](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L667)

___

### BinaryToTextEncoding

Ƭ **BinaryToTextEncoding**: ``"base64"`` \| ``"base64url"`` \| ``"hex"`` \| ``"binary"``

#### Defined in

[crypto.d.ts:277](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L277)

___

### CharacterEncoding

Ƭ **CharacterEncoding**: ``"utf8"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"latin1"``

#### Defined in

[crypto.d.ts:278](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L278)

___

### CipherCCMTypes

Ƭ **CipherCCMTypes**: ``"aes-128-ccm"`` \| ``"aes-192-ccm"`` \| ``"aes-256-ccm"`` \| ``"chacha20-poly1305"``

#### Defined in

[crypto.d.ts:660](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L660)

___

### CipherGCMTypes

Ƭ **CipherGCMTypes**: ``"aes-128-gcm"`` \| ``"aes-192-gcm"`` \| ``"aes-256-gcm"``

#### Defined in

[crypto.d.ts:665](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L665)

___

### CipherKey

Ƭ **CipherKey**: [`BinaryLike`](crypto._crypto_.md#binarylike) \| [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:668](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L668)

___

### CipherMode

Ƭ **CipherMode**: ``"cbc"`` \| ``"ccm"`` \| ``"cfb"`` \| ``"ctr"`` \| ``"ecb"`` \| ``"gcm"`` \| ``"ocb"`` \| ``"ofb"`` \| ``"stream"`` \| ``"wrap"`` \| ``"xts"``

#### Defined in

[crypto.d.ts:3457](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3457)

___

### CipherOCBTypes

Ƭ **CipherOCBTypes**: ``"aes-128-ocb"`` \| ``"aes-192-ocb"`` \| ``"aes-256-ocb"``

#### Defined in

[crypto.d.ts:666](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L666)

___

### DSAEncoding

Ƭ **DSAEncoding**: ``"der"`` \| ``"ieee-p1363"``

#### Defined in

[crypto.d.ts:1353](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1353)

___

### ECDHKeyFormat

Ƭ **ECDHKeyFormat**: ``"compressed"`` \| ``"uncompressed"`` \| ``"hybrid"``

#### Defined in

[crypto.d.ts:284](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L284)

___

### Encoding

Ƭ **Encoding**: [`BinaryToTextEncoding`](crypto._crypto_.md#binarytotextencoding) \| [`CharacterEncoding`](crypto._crypto_.md#characterencoding) \| [`LegacyCharacterEncoding`](crypto._crypto_.md#legacycharacterencoding)

#### Defined in

[crypto.d.ts:280](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L280)

___

### KeyFormat

Ƭ **KeyFormat**: ``"pem"`` \| ``"der"``

#### Defined in

[crypto.d.ts:2471](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2471)

___

### KeyLike

Ƭ **KeyLike**: `string` \| [`Buffer`](buffer._buffer_.md#buffer) \| [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1370](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1370)

___

### KeyObjectType

Ƭ **KeyObjectType**: ``"secret"`` \| ``"public"`` \| ``"private"``

#### Defined in

[crypto.d.ts:496](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L496)

___

### KeyType

Ƭ **KeyType**: ``"rsa"`` \| ``"rsa-pss"`` \| ``"dsa"`` \| ``"ec"`` \| ``"ed25519"`` \| ``"ed448"`` \| ``"x25519"`` \| ``"x448"``

#### Defined in

[crypto.d.ts:2462](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2462)

___

### LargeNumberLike

Ƭ **LargeNumberLike**: `ArrayBufferView` \| `SharedArrayBuffer` \| `ArrayBuffer` \| `bigint`

#### Defined in

[crypto.d.ts:3646](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3646)

___

### LegacyCharacterEncoding

Ƭ **LegacyCharacterEncoding**: ``"ascii"`` \| ``"binary"`` \| ``"ucs2"`` \| ``"ucs-2"``

#### Defined in

[crypto.d.ts:279](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L279)

## Variables

### DEFAULT\_ENCODING

• `Const` **DEFAULT\_ENCODING**: [`BufferEncoding`](bun.md#bufferencoding)

**`Deprecated`**

since v10.0.0

#### Defined in

[crypto.d.ts:2461](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2461)

___

### fips

• `Const` **fips**: `boolean`

**`Deprecated`**

since v10.0.0

#### Defined in

[crypto.d.ts:188](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L188)

## Functions

### checkPrime

▸ **checkPrime**(`value`, `callback`): `void`

Checks the primality of the `candidate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LargeNumberLike`](crypto._crypto_.md#largenumberlike) |
| `callback` | (`err`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3765](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3765)

▸ **checkPrime**(`value`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LargeNumberLike`](crypto._crypto_.md#largenumberlike) |
| `options` | [`CheckPrimeOptions`](../interfaces/crypto._crypto_.CheckPrimeOptions.md) |
| `callback` | (`err`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3769](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3769)

___

### checkPrimeSync

▸ **checkPrimeSync**(`candidate`, `options?`): `boolean`

Checks the primality of the `candidate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `candidate` | [`LargeNumberLike`](crypto._crypto_.md#largenumberlike) | A possible prime encoded as a sequence of big endian octets of arbitrary length. |
| `options?` | [`CheckPrimeOptions`](../interfaces/crypto._crypto_.CheckPrimeOptions.md) | - |

#### Returns

`boolean`

`true` if the candidate is a prime with an error probability less than `0.25 ** options.checks`.

#### Defined in

[crypto.d.ts:3779](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3779)

___

### createCipher

▸ **createCipher**(`algorithm`, `password`, `options`): [`CipherCCM`](../interfaces/crypto._crypto_.CipherCCM.md)

Creates and returns a `Cipher` object that uses the given `algorithm` and`password`.

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to set the length of the authentication
tag that will be returned by `getAuthTag()` and defaults to 16 bytes.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `password` is used to derive the cipher key and initialization vector (IV).
The value must be either a `'latin1'` encoded string, a `Buffer`, a`TypedArray`, or a `DataView`.

The implementation of `crypto.createCipher()` derives keys using the OpenSSL
function [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) with the digest algorithm set to MD5, one
iteration, and no salt. The lack of salt allows dictionary attacks as the same
password always creates the same key. The low iteration count and
non-cryptographically secure hash algorithm allow passwords to be tested very
rapidly.

In line with OpenSSL's recommendation to use a more modern algorithm instead of [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) it is recommended that
developers derive a key and IV on
their own using [scrypt](crypto._crypto_.md#scrypt) and to use [createCipheriv](crypto._crypto_.md#createcipheriv) to create the `Cipher` object. Users should not use ciphers with counter mode
(e.g. CTR, GCM, or CCM) in `crypto.createCipher()`. A warning is emitted when
they are used in order to avoid the risk of IV reuse that causes
vulnerabilities. For the case when IV is reused in GCM, see [Nonce-Disrespecting Adversaries](https://github.com/nonce-disrespect/nonce-disrespect) for details.

**`Deprecated`**

Since v10.0.0 - Use [createCipheriv](crypto._crypto_.md#createcipheriv) instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](crypto._crypto_.md#cipherccmtypes) | - |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](../interfaces/crypto._crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`CipherCCM`](../interfaces/crypto._crypto_.CipherCCM.md)

#### Defined in

[crypto.d.ts:710](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L710)

▸ **createCipher**(`algorithm`, `password`, `options?`): [`CipherGCM`](../interfaces/crypto._crypto_.CipherGCM.md)

**`Deprecated`**

since v10.0.0 use `createCipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](crypto._crypto_.md#ciphergcmtypes) |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](../interfaces/crypto._crypto_.CipherGCMOptions.md) |

#### Returns

[`CipherGCM`](../interfaces/crypto._crypto_.CipherGCM.md)

#### Defined in

[crypto.d.ts:716](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L716)

▸ **createCipher**(`algorithm`, `password`, `options?`): [`Cipher`](../classes/crypto._crypto_.Cipher.md)

**`Deprecated`**

since v10.0.0 use `createCipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](../interfaces/stream._stream_.TransformOptions.md) |

#### Returns

[`Cipher`](../classes/crypto._crypto_.Cipher.md)

#### Defined in

[crypto.d.ts:722](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L722)

___

### createCipheriv

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options`): [`CipherCCM`](../interfaces/crypto._crypto_.CipherCCM.md)

Creates and returns a `Cipher` object, with the given `algorithm`, `key` and
initialization vector (`iv`).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to set the length of the authentication
tag that will be returned by `getAuthTag()` and defaults to 16 bytes.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `key` is the raw key used by the `algorithm` and `iv` is an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector). Both arguments must be `'utf8'` encoded
strings,`Buffers`, `TypedArray`, or `DataView`s. The `key` may optionally be
a `KeyObject` of type `secret`. If the cipher does not need
an initialization vector, `iv` may be `null`.

When passing strings for `key` or `iv`, please consider `caveats when using strings as inputs to cryptographic APIs`.

Initialization vectors should be unpredictable and unique; ideally, they will be
cryptographically random. They do not have to be secret: IVs are typically just
added to ciphertext messages unencrypted. It may sound contradictory that
something has to be unpredictable and unique, but does not have to be secret;
remember that an attacker must not be able to predict ahead of time what a
given IV will be.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](crypto._crypto_.md#cipherccmtypes) | - |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) | - |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](../interfaces/crypto._crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`CipherCCM`](../interfaces/crypto._crypto_.CipherCCM.md)

#### Defined in

[crypto.d.ts:756](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L756)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options`): [`CipherOCB`](../interfaces/crypto._crypto_.CipherOCB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherOCBTypes`](crypto._crypto_.md#cipherocbtypes) |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options` | [`CipherOCBOptions`](../interfaces/crypto._crypto_.CipherOCBOptions.md) |

#### Returns

[`CipherOCB`](../interfaces/crypto._crypto_.CipherOCB.md)

#### Defined in

[crypto.d.ts:762](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L762)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options?`): [`CipherGCM`](../interfaces/crypto._crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](crypto._crypto_.md#ciphergcmtypes) |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](../interfaces/crypto._crypto_.CipherGCMOptions.md) |

#### Returns

[`CipherGCM`](../interfaces/crypto._crypto_.CipherGCM.md)

#### Defined in

[crypto.d.ts:768](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L768)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options?`): [`Cipher`](../classes/crypto._crypto_.Cipher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](../interfaces/stream._stream_.TransformOptions.md) |

#### Returns

[`Cipher`](../classes/crypto._crypto_.Cipher.md)

#### Defined in

[crypto.d.ts:774](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L774)

___

### createDecipher

▸ **createDecipher**(`algorithm`, `password`, `options`): [`DecipherCCM`](../interfaces/crypto._crypto_.DecipherCCM.md)

Creates and returns a `Decipher` object that uses the given `algorithm` and`password` (key).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The implementation of `crypto.createDecipher()` derives keys using the OpenSSL
function [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) with the digest algorithm set to MD5, one
iteration, and no salt. The lack of salt allows dictionary attacks as the same
password always creates the same key. The low iteration count and
non-cryptographically secure hash algorithm allow passwords to be tested very
rapidly.

In line with OpenSSL's recommendation to use a more modern algorithm instead of [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) it is recommended that
developers derive a key and IV on
their own using [scrypt](crypto._crypto_.md#scrypt) and to use [createDecipheriv](crypto._crypto_.md#createdecipheriv) to create the `Decipher` object.

**`Deprecated`**

Since v10.0.0 - Use [createDecipheriv](crypto._crypto_.md#createdecipheriv) instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](crypto._crypto_.md#cipherccmtypes) | - |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](../interfaces/crypto._crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`DecipherCCM`](../interfaces/crypto._crypto_.DecipherCCM.md)

#### Defined in

[crypto.d.ts:998](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L998)

▸ **createDecipher**(`algorithm`, `password`, `options?`): [`DecipherGCM`](../interfaces/crypto._crypto_.DecipherGCM.md)

**`Deprecated`**

since v10.0.0 use `createDecipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](crypto._crypto_.md#ciphergcmtypes) |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](../interfaces/crypto._crypto_.CipherGCMOptions.md) |

#### Returns

[`DecipherGCM`](../interfaces/crypto._crypto_.DecipherGCM.md)

#### Defined in

[crypto.d.ts:1004](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1004)

▸ **createDecipher**(`algorithm`, `password`, `options?`): [`Decipher`](../classes/crypto._crypto_.Decipher.md)

**`Deprecated`**

since v10.0.0 use `createDecipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](../interfaces/stream._stream_.TransformOptions.md) |

#### Returns

[`Decipher`](../classes/crypto._crypto_.Decipher.md)

#### Defined in

[crypto.d.ts:1010](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1010)

___

### createDecipheriv

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options`): [`DecipherCCM`](../interfaces/crypto._crypto_.DecipherCCM.md)

Creates and returns a `Decipher` object that uses the given `algorithm`, `key`and initialization vector (`iv`).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to restrict accepted authentication tags
to those with the specified length.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `key` is the raw key used by the `algorithm` and `iv` is an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector). Both arguments must be `'utf8'` encoded
strings,`Buffers`, `TypedArray`, or `DataView`s. The `key` may optionally be
a `KeyObject` of type `secret`. If the cipher does not need
an initialization vector, `iv` may be `null`.

When passing strings for `key` or `iv`, please consider `caveats when using strings as inputs to cryptographic APIs`.

Initialization vectors should be unpredictable and unique; ideally, they will be
cryptographically random. They do not have to be secret: IVs are typically just
added to ciphertext messages unencrypted. It may sound contradictory that
something has to be unpredictable and unique, but does not have to be secret;
remember that an attacker must not be able to predict ahead of time what a given
IV will be.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](crypto._crypto_.md#cipherccmtypes) | - |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) | - |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](../interfaces/crypto._crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`DecipherCCM`](../interfaces/crypto._crypto_.DecipherCCM.md)

#### Defined in

[crypto.d.ts:1043](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1043)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options`): [`DecipherOCB`](../interfaces/crypto._crypto_.DecipherOCB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherOCBTypes`](crypto._crypto_.md#cipherocbtypes) |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options` | [`CipherOCBOptions`](../interfaces/crypto._crypto_.CipherOCBOptions.md) |

#### Returns

[`DecipherOCB`](../interfaces/crypto._crypto_.DecipherOCB.md)

#### Defined in

[crypto.d.ts:1049](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1049)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options?`): [`DecipherGCM`](../interfaces/crypto._crypto_.DecipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](crypto._crypto_.md#ciphergcmtypes) |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](../interfaces/crypto._crypto_.CipherGCMOptions.md) |

#### Returns

[`DecipherGCM`](../interfaces/crypto._crypto_.DecipherGCM.md)

#### Defined in

[crypto.d.ts:1055](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1055)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options?`): [`Decipher`](../classes/crypto._crypto_.Decipher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `key` | [`CipherKey`](crypto._crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](../interfaces/stream._stream_.TransformOptions.md) |

#### Returns

[`Decipher`](../classes/crypto._crypto_.Decipher.md)

#### Defined in

[crypto.d.ts:1061](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1061)

___

### createDiffieHellman

▸ **createDiffieHellman**(`primeLength`, `generator?`): [`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

Creates a `DiffieHellman` key exchange object using the supplied `prime` and an
optional specific `generator`.

The `generator` argument can be a number, string, or `Buffer`. If`generator` is not specified, the value `2` is used.

If `primeEncoding` is specified, `prime` is expected to be a string; otherwise
a `Buffer`, `TypedArray`, or `DataView` is expected.

If `generatorEncoding` is specified, `generator` is expected to be a string;
otherwise a number, `Buffer`, `TypedArray`, or `DataView` is expected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `primeLength` | `number` |
| `generator?` | `number` \| `ArrayBufferView` |

#### Returns

[`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Defined in

[crypto.d.ts:1550](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1550)

▸ **createDiffieHellman**(`prime`): [`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `ArrayBufferView` |

#### Returns

[`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Defined in

[crypto.d.ts:1554](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1554)

▸ **createDiffieHellman**(`prime`, `primeEncoding`): [`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](crypto._crypto_.md#binarytotextencoding) |

#### Returns

[`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Defined in

[crypto.d.ts:1555](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1555)

▸ **createDiffieHellman**(`prime`, `primeEncoding`, `generator`): [`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](crypto._crypto_.md#binarytotextencoding) |
| `generator` | `number` \| `ArrayBufferView` |

#### Returns

[`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Defined in

[crypto.d.ts:1559](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1559)

▸ **createDiffieHellman**(`prime`, `primeEncoding`, `generator`, `generatorEncoding`): [`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](crypto._crypto_.md#binarytotextencoding) |
| `generator` | `string` |
| `generatorEncoding` | [`BinaryToTextEncoding`](crypto._crypto_.md#binarytotextencoding) |

#### Returns

[`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Defined in

[crypto.d.ts:1564](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1564)

___

### createECDH

▸ **createECDH**(`curveName`): [`ECDH`](../classes/crypto._crypto_.ECDH.md)

Creates an Elliptic Curve Diffie-Hellman (`ECDH`) key exchange object using a
predefined curve specified by the `curveName` string. Use [getCurves](crypto._crypto_.md#getcurves) to obtain a list of available curve names. On recent
OpenSSL releases, `openssl ecparam -list_curves` will also display the name
and description of each available elliptic curve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `curveName` | `string` |

#### Returns

[`ECDH`](../classes/crypto._crypto_.ECDH.md)

#### Defined in

[crypto.d.ts:2440](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2440)

___

### createHash

▸ **createHash**(`algorithm`, `options?`): [`Hash`](../classes/crypto._crypto_.Hash.md)

Creates and returns a `Hash` object that can be used to generate hash digests
using the given `algorithm`. Optional `options` argument controls stream
behavior. For XOF hash functions such as `'shake256'`, the `outputLength` option
can be used to specify the desired output length in bytes.

The `algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
On recent releases of OpenSSL, `openssl list -digest-algorithms` will
display the available digest algorithms.

Example: generating the sha256 sum of a file

```js
import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHash
} = await import('crypto');

const filename = argv[2];

const hash = createHash('sha256');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`HashOptions`](../interfaces/crypto._crypto_.HashOptions.md) | `stream.transform` options |

#### Returns

[`Hash`](../classes/crypto._crypto_.Hash.md)

#### Defined in

[crypto.d.ts:229](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L229)

___

### createHmac

▸ **createHmac**(`algorithm`, `key`, `options?`): [`Hmac`](../classes/crypto._crypto_.Hmac.md)

Creates and returns an `Hmac` object that uses the given `algorithm` and `key`.
Optional `options` argument controls stream behavior.

The `algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
On recent releases of OpenSSL, `openssl list -digest-algorithms` will
display the available digest algorithms.

The `key` is the HMAC key used to generate the cryptographic HMAC hash. If it is
a `KeyObject`, its type must be `secret`.

Example: generating the sha256 HMAC of a file

```js
import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHmac
} = await import('crypto');

const filename = argv[2];

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hmac.update(data);
  else {
    console.log(`${hmac.digest('hex')} ${filename}`);
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `key` | [`BinaryLike`](crypto._crypto_.md#binarylike) \| [`KeyObject`](../classes/crypto._crypto_.KeyObject.md) | - |
| `options?` | [`TransformOptions`](../interfaces/stream._stream_.TransformOptions.md) | `stream.transform` options |

#### Returns

[`Hmac`](../classes/crypto._crypto_.Hmac.md)

#### Defined in

[crypto.d.ts:271](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L271)

___

### createPrivateKey

▸ **createPrivateKey**(`key`): [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

Creates and returns a new key object containing a private key. If `key` is a
string or `Buffer`, `format` is assumed to be `'pem'`; otherwise, `key`must be an object with the properties described above.

If the private key is encrypted, a `passphrase` must be specified. The length
of the passphrase is limited to 1024 bytes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`Buffer`](buffer._buffer_.md#buffer) \| [`PrivateKeyInput`](../interfaces/crypto._crypto_.PrivateKeyInput.md) \| [`JsonWebKeyInput`](../interfaces/crypto._crypto_.JsonWebKeyInput.md) |

#### Returns

[`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1312](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1312)

___

### createPublicKey

▸ **createPublicKey**(`key`): [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

Creates and returns a new key object containing a public key. If `key` is a
string or `Buffer`, `format` is assumed to be `'pem'`; if `key` is a `KeyObject`with type `'private'`, the public key is derived from the given private key;
otherwise, `key` must be an object with the properties described above.

If the format is `'pem'`, the `'key'` may also be an X.509 certificate.

Because public keys can be derived from private keys, a private key may be
passed instead of a public key. In that case, this function behaves as if [createPrivateKey](crypto._crypto_.md#createprivatekey) had been called, except that the type of the
returned `KeyObject` will be `'public'` and that the private key cannot be
extracted from the returned `KeyObject`. Similarly, if a `KeyObject` with type`'private'` is given, a new `KeyObject` with type `'public'` will be returned
and it will be impossible to extract the private key from the returned object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`Buffer`](buffer._buffer_.md#buffer) \| [`KeyObject`](../classes/crypto._crypto_.KeyObject.md) \| [`JsonWebKeyInput`](../interfaces/crypto._crypto_.JsonWebKeyInput.md) \| [`PublicKeyInput`](../interfaces/crypto._crypto_.PublicKeyInput.md) |

#### Returns

[`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1328](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1328)

___

### createSecretKey

▸ **createSecretKey**(`key`): [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

Creates and returns a new key object containing a secret key for symmetric
encryption or `Hmac`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ArrayBufferView` |

#### Returns

[`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1336](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1336)

▸ **createSecretKey**(`key`, `encoding`): [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `encoding` | [`BufferEncoding`](bun.md#bufferencoding) |

#### Returns

[`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1337](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1337)

___

### createSign

▸ **createSign**(`algorithm`, `options?`): [`Sign`](../classes/crypto._crypto_.Sign.md)

Creates and returns a `Sign` object that uses the given `algorithm`. Use [getHashes](crypto._crypto_.md#gethashes) to obtain the names of the available digest algorithms.
Optional `options` argument controls the `stream.Writable` behavior.

In some cases, a `Sign` instance can be created using the name of a signature
algorithm, such as `'RSA-SHA256'`, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as `'ecdsa-with-SHA256'`, so it is best to always use digest
algorithm names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`WritableOptions`](../interfaces/stream._stream_.WritableOptions.md) | `stream.Writable` options |

#### Returns

[`Sign`](../classes/crypto._crypto_.Sign.md)

#### Defined in

[crypto.d.ts:1349](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1349)

___

### createVerify

▸ **createVerify**(`algorithm`, `options?`): [`Verify`](../classes/crypto._crypto_.Verify.md)

Creates and returns a `Verify` object that uses the given algorithm.
Use [getHashes](crypto._crypto_.md#gethashes) to obtain an array of names of the available
signing algorithms. Optional `options` argument controls the`stream.Writable` behavior.

In some cases, a `Verify` instance can be created using the name of a signature
algorithm, such as `'RSA-SHA256'`, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as `'ecdsa-with-SHA256'`, so it is best to always use digest
algorithm names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`WritableOptions`](../interfaces/stream._stream_.WritableOptions.md) | `stream.Writable` options |

#### Returns

[`Verify`](../classes/crypto._crypto_.Verify.md)

#### Defined in

[crypto.d.ts:1477](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1477)

___

### diffieHellman

▸ **diffieHellman**(`options`): [`Buffer`](buffer._buffer_.md#buffer)

Computes the Diffie-Hellman secret based on a `privateKey` and a `publicKey`.
Both keys must have the same `asymmetricKeyType`, which must be one of `'dh'`(for Diffie-Hellman), `'ec'` (for ECDH), `'x448'`, or `'x25519'` (for ECDH-ES).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.privateKey` | [`KeyObject`](../classes/crypto._crypto_.KeyObject.md) |
| `options.publicKey` | [`KeyObject`](../classes/crypto._crypto_.KeyObject.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:3453](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3453)

___

### generateKey

▸ **generateKey**(`type`, `options`, `callback`): `void`

Asynchronously generates a new random secret key of the given `length`. The`type` will determine which validations will be performed on the `length`.

```js
const {
  generateKey
} = await import('crypto');

generateKey('hmac', { length: 64 }, (err, key) => {
  if (err) throw err;
  console.log(key.export().toString('hex'));  // 46e..........620
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"hmac"`` \| ``"aes"`` | The intended use of the generated secret key. Currently accepted values are `'hmac'` and `'aes'`. |
| `options` | `Object` | - |
| `options.length` | `number` | - |
| `callback` | (`err`: `Error`, `key`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` | - |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1275](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1275)

___

### generateKeyPair

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

Generates a new asymmetric key pair of the given `type`. RSA, RSA-PSS, DSA, EC,
Ed25519, Ed448, X25519, X448, and DH are currently supported.

If a `publicKeyEncoding` or `privateKeyEncoding` was specified, this function
behaves as if `keyObject.export()` had been called on its result. Otherwise,
the respective part of the key is returned as a `KeyObject`.

It is recommended to encode public keys as `'spki'` and private keys as`'pkcs8'` with encryption for long-term storage:

```js
const {
  generateKeyPair
} = await import('crypto');

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
}, (err, publicKey, privateKey) => {
  // Handle errors and use the generated key pair.
});
```

On completion, `callback` will be called with `err` set to `undefined` and`publicKey` / `privateKey` representing the generated key pair.

If this method is invoked as its `util.promisify()` ed version, it returns
a `Promise` for an `Object` with `publicKey` and `privateKey` properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"rsa"`` | Must be `'rsa'`, `'rsa-pss'`, `'dsa'`, `'ec'`, `'ed25519'`, `'ed448'`, `'x25519'`, `'x448'`, or `'dh'`. |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> | - |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2909](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2909)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2914](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2914)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2919](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2919)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2924](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2924)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.RSAKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2929](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2929)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2938](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2938)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2943](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2943)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2948](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2948)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2953](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2953)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2958](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2958)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2967](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2967)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2972](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2972)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2977](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2977)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2982](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2982)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.DSAKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2987](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2987)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2996](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2996)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3001](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3001)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3006](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3006)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3011](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3011)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.ECKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3016](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3016)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3025](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3025)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3030](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3030)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3035](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3035)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3040](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3040)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.ED25519KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3045](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3045)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3054](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3054)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3059](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3059)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3064](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3064)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3069](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3069)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.ED448KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3074](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3074)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3083](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3083)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3088](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3088)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3093](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3093)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3098](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3098)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.X25519KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3103](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3103)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3112](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3112)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3117](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3117)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3122](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3122)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](buffer._buffer_.md#buffer), `privateKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3127](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3127)

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.X448KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md), `privateKey`: [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3132](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3132)

___

### generateKeyPairSync

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

Generates a new asymmetric key pair of the given `type`. RSA, RSA-PSS, DSA, EC,
Ed25519, Ed448, X25519, X448, and DH are currently supported.

If a `publicKeyEncoding` or `privateKeyEncoding` was specified, this function
behaves as if `keyObject.export()` had been called on its result. Otherwise,
the respective part of the key is returned as a `KeyObject`.

When encoding public keys, it is recommended to use `'spki'`. When encoding
private keys, it is recommended to use `'pkcs8'` with a strong passphrase,
and to keep the passphrase confidential.

```js
const {
  generateKeyPairSync
} = await import('crypto');

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
});
```

The return value `{ publicKey, privateKey }` represents the generated key pair.
When PEM encoding was selected, the respective key will be a string, otherwise
it will be a buffer containing the data encoded as DER.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"rsa"`` | Must be `'rsa'`, `'rsa-pss'`, `'dsa'`, `'ec'`, `'ed25519'`, `'ed448'`, `'x25519'`, `'x448'`, or `'dh'`. |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> | - |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2711](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2711)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2715](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2715)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2719](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2719)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto._crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2723](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2723)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2727](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2727)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2731](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2731)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2735](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2735)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2739](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2739)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2743](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2743)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2747](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2747)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2751](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2751)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2755](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2755)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2759](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2759)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto._crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2763](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2763)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2767](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2767)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2771](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2771)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2775](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2775)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2779](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2779)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto._crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2783](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2783)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2787](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2787)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2791](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2791)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2795](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2795)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2799](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2799)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto._crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2803](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2803)

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2807](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2807)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2811](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2811)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2815](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2815)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2819](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2819)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto._crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2823](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2823)

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2827](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2827)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2831](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2831)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2835](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2835)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2839](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2839)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto._crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2843](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2843)

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2847](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2847)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Defined in

[crypto.d.ts:2851](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2851)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2855](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2855)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), `string`\>

#### Defined in

[crypto.d.ts:2859](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2859)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto._crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](../interfaces/crypto._crypto_.KeyPairSyncResult.md)<[`Buffer`](buffer._buffer_.md#buffer), [`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[crypto.d.ts:2863](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2863)

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](../interfaces/crypto._crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](../interfaces/crypto._crypto_.KeyPairKeyObjectResult.md)

#### Defined in

[crypto.d.ts:2867](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2867)

___

### generateKeySync

▸ **generateKeySync**(`type`, `options`): [`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

Synchronously generates a new random secret key of the given `length`. The`type` will determine which validations will be performed on the `length`.

```js
const {
  generateKeySync
} = await import('crypto');

const key = generateKeySync('hmac', { length: 64 });
console.log(key.export().toString('hex'));  // e89..........41e
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"hmac"`` \| ``"aes"`` | The intended use of the generated secret key. Currently accepted values are `'hmac'` and `'aes'`. |
| `options` | `Object` | - |
| `options.length` | `number` | - |

#### Returns

[`KeyObject`](../classes/crypto._crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1295](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1295)

___

### generatePrime

▸ **generatePrime**(`size`, `callback`): `void`

Generates a pseudorandom prime of `size` bits.

If `options.safe` is `true`, the prime will be a safe prime -- that is,`(prime - 1) / 2` will also be a prime.

The `options.add` and `options.rem` parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:

* If `options.add` and `options.rem` are both set, the prime will satisfy the
condition that `prime % add = rem`.
* If only `options.add` is set and `options.safe` is not `true`, the prime will
satisfy the condition that `prime % add = 1`.
* If only `options.add` is set and `options.safe` is set to `true`, the prime
will instead satisfy the condition that `prime % add = 3`. This is necessary
because `prime % add = 1` for `options.add > 2` would contradict the condition
enforced by `options.safe`.
* `options.rem` is ignored if `options.add` is not given.

Both `options.add` and `options.rem` must be encoded as big-endian sequences
if given as an `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, `Buffer`, or`DataView`.

By default, the prime is encoded as a big-endian sequence of octets
in an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). If the `bigint` option is `true`, then a
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size (in bits) of the prime to generate. |
| `callback` | (`err`: `Error`, `prime`: `ArrayBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3692](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3692)

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsBigInt`](../interfaces/crypto._crypto_.GeneratePrimeOptionsBigInt.md) |
| `callback` | (`err`: `Error`, `prime`: `bigint`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3696](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3696)

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsArrayBuffer`](../interfaces/crypto._crypto_.GeneratePrimeOptionsArrayBuffer.md) |
| `callback` | (`err`: `Error`, `prime`: `ArrayBuffer`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3701](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3701)

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptions`](../interfaces/crypto._crypto_.GeneratePrimeOptions.md) |
| `callback` | (`err`: `Error`, `prime`: `bigint` \| `ArrayBuffer`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3706](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3706)

___

### generatePrimeSync

▸ **generatePrimeSync**(`size`): `ArrayBuffer`

Generates a pseudorandom prime of `size` bits.

If `options.safe` is `true`, the prime will be a safe prime -- that is,`(prime - 1) / 2` will also be a prime.

The `options.add` and `options.rem` parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:

* If `options.add` and `options.rem` are both set, the prime will satisfy the
condition that `prime % add = rem`.
* If only `options.add` is set and `options.safe` is not `true`, the prime will
satisfy the condition that `prime % add = 1`.
* If only `options.add` is set and `options.safe` is set to `true`, the prime
will instead satisfy the condition that `prime % add = 3`. This is necessary
because `prime % add = 1` for `options.add > 2` would contradict the condition
enforced by `options.safe`.
* `options.rem` is ignored if `options.add` is not given.

Both `options.add` and `options.rem` must be encoded as big-endian sequences
if given as an `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, `Buffer`, or`DataView`.

By default, the prime is encoded as a big-endian sequence of octets
in an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). If the `bigint` option is `true`, then a
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size (in bits) of the prime to generate. |

#### Returns

`ArrayBuffer`

#### Defined in

[crypto.d.ts:3737](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3737)

▸ **generatePrimeSync**(`size`, `options`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsBigInt`](../interfaces/crypto._crypto_.GeneratePrimeOptionsBigInt.md) |

#### Returns

`bigint`

#### Defined in

[crypto.d.ts:3738](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3738)

▸ **generatePrimeSync**(`size`, `options`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsArrayBuffer`](../interfaces/crypto._crypto_.GeneratePrimeOptionsArrayBuffer.md) |

#### Returns

`ArrayBuffer`

#### Defined in

[crypto.d.ts:3742](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3742)

▸ **generatePrimeSync**(`size`, `options`): `ArrayBuffer` \| `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptions`](../interfaces/crypto._crypto_.GeneratePrimeOptions.md) |

#### Returns

`ArrayBuffer` \| `bigint`

#### Defined in

[crypto.d.ts:3746](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3746)

___

### getCipherInfo

▸ **getCipherInfo**(`nameOrNid`, `options?`): [`CipherInfo`](../interfaces/crypto._crypto_.CipherInfo.md) \| `undefined`

Returns information about a given cipher.

Some ciphers accept variable length keys and initialization vectors. By default,
the `crypto.getCipherInfo()` method will return the default values for these
ciphers. To test if a given key length or iv length is acceptable for given
cipher, use the `keyLength` and `ivLength` options. If the given values are
unacceptable, `undefined` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameOrNid` | `string` \| `number` | The name or nid of the cipher to query. |
| `options?` | [`CipherInfoOptions`](../interfaces/crypto._crypto_.CipherInfoOptions.md) | - |

#### Returns

[`CipherInfo`](../interfaces/crypto._crypto_.CipherInfo.md) \| `undefined`

#### Defined in

[crypto.d.ts:3517](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3517)

___

### getCiphers

▸ **getCiphers**(): `string`[]

```js
const {
  getCiphers
} = await import('crypto');

console.log(getCiphers()); // ['aes-128-cbc', 'aes-128-ccm', ...]
```

#### Returns

`string`[]

An array with the names of the supported cipher algorithms.

#### Defined in

[crypto.d.ts:2247](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2247)

___

### getCurves

▸ **getCurves**(): `string`[]

```js
const {
  getCurves
} = await import('crypto');

console.log(getCurves()); // ['Oakley-EC2N-3', 'Oakley-EC2N-4', ...]
```

#### Returns

`string`[]

An array with the names of the supported elliptic curves.

#### Defined in

[crypto.d.ts:2258](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2258)

___

### getDiffieHellman

▸ **getDiffieHellman**(`groupName`): [`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

Creates a predefined `DiffieHellmanGroup` key exchange object. The
supported groups are: `'modp1'`, `'modp2'`, `'modp5'` (defined in [RFC 2412](https://www.rfc-editor.org/rfc/rfc2412.txt), but see `Caveats`) and `'modp14'`, `'modp15'`,`'modp16'`, `'modp17'`,
`'modp18'` (defined in [RFC 3526](https://www.rfc-editor.org/rfc/rfc3526.txt)). The
returned object mimics the interface of objects created by [createDiffieHellman](crypto._crypto_.md#creatediffiehellman), but will not allow changing
the keys (with `diffieHellman.setPublicKey()`, for example). The
advantage of using this method is that the parties do not have to
generate nor exchange a group modulus beforehand, saving both processor
and communication time.

Example (obtaining a shared secret):

```js
const {
  getDiffieHellman
} = await import('crypto');
const alice = getDiffieHellman('modp14');
const bob = getDiffieHellman('modp14');

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// aliceSecret and bobSecret should be the same
console.log(aliceSecret === bobSecret);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | `string` |

#### Returns

[`DiffieHellman`](../classes/crypto._crypto_.DiffieHellman.md)

#### Defined in

[crypto.d.ts:1726](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1726)

___

### getFips

▸ **getFips**(): ``1`` \| ``0``

#### Returns

``1`` \| ``0``

`1` if and only if a FIPS compliant crypto provider is currently in use, `0` otherwise. A future semver-major release may change the return type of this API to a {boolean}.

#### Defined in

[crypto.d.ts:2262](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2262)

___

### getHashes

▸ **getHashes**(): `string`[]

```js
const {
  getHashes
} = await import('crypto');

console.log(getHashes()); // ['DSA', 'DSA-SHA', 'DSA-SHA1', ...]
```

#### Returns

`string`[]

An array of the names of the supported hash algorithms, such as `'RSA-SHA256'`. Hash algorithms are also called "digest" algorithms.

#### Defined in

[crypto.d.ts:2273](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2273)

___

### hkdf

▸ **hkdf**(`digest`, `irm`, `salt`, `info`, `keylen`, `callback`): `void`

HKDF is a simple key derivation function defined in RFC 5869\. The given `ikm`,`salt` and `info` are used with the `digest` to derive a key of `keylen` bytes.

The supplied `callback` function is called with two arguments: `err` and`derivedKey`. If an errors occurs while deriving the key, `err` will be set;
otherwise `err` will be `null`. The successfully generated `derivedKey` will
be passed to the callback as an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). An error will be thrown if any
of the input arguments specify invalid values or types.

```js
import { Buffer } from 'buffer';
const {
  hkdf
} = await import('crypto');

hkdf('sha512', 'key', 'salt', 'info', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | The digest algorithm to use. |
| `irm` | [`BinaryLike`](crypto._crypto_.md#binarylike) \| [`KeyObject`](../classes/crypto._crypto_.KeyObject.md) | - |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) | The salt value. Must be provided but can be zero-length. |
| `info` | [`BinaryLike`](crypto._crypto_.md#binarylike) | Additional info value. Must be provided but can be zero-length, and cannot be more than 1024 bytes. |
| `keylen` | `number` | The length of the key to generate. Must be greater than 0. The maximum allowable value is `255` times the number of bytes produced by the selected digest function (e.g. `sha512` generates 64-byte hashes, making the maximum HKDF output 16320 bytes). |
| `callback` | (`err`: `Error`, `derivedKey`: `ArrayBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3547](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3547)

___

### hkdfSync

▸ **hkdfSync**(`digest`, `ikm`, `salt`, `info`, `keylen`): `ArrayBuffer`

Provides a synchronous HKDF key derivation function as defined in RFC 5869\. The
given `ikm`, `salt` and `info` are used with the `digest` to derive a key of`keylen` bytes.

The successfully generated `derivedKey` will be returned as an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

An error will be thrown if any of the input arguments specify invalid values or
types, or if the derived key cannot be generated.

```js
import { Buffer } from 'buffer';
const {
  hkdfSync
} = await import('crypto');

const derivedKey = hkdfSync('sha512', 'key', 'salt', 'info', 64);
console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | The digest algorithm to use. |
| `ikm` | [`BinaryLike`](crypto._crypto_.md#binarylike) \| [`KeyObject`](../classes/crypto._crypto_.KeyObject.md) | The input keying material. It must be at least one byte in length. |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) | The salt value. Must be provided but can be zero-length. |
| `info` | [`BinaryLike`](crypto._crypto_.md#binarylike) | Additional info value. Must be provided but can be zero-length, and cannot be more than 1024 bytes. |
| `keylen` | `number` | The length of the key to generate. Must be greater than 0. The maximum allowable value is `255` times the number of bytes produced by the selected digest function (e.g. `sha512` generates 64-byte hashes, making the maximum HKDF output 16320 bytes). |

#### Returns

`ArrayBuffer`

#### Defined in

[crypto.d.ts:3580](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3580)

___

### pbkdf2

▸ **pbkdf2**(`password`, `salt`, `iterations`, `keylen`, `digest`, `callback`): `void`

Provides an asynchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by `digest` is
applied to derive a key of the requested byte length (`keylen`) from the`password`, `salt` and `iterations`.

The supplied `callback` function is called with two arguments: `err` and`derivedKey`. If an error occurs while deriving the key, `err` will be set;
otherwise `err` will be `null`. By default, the successfully generated`derivedKey` will be passed to the callback as a `Buffer`. An error will be
thrown if any of the input arguments specify invalid values or types.

If `digest` is `null`, `'sha1'` will be used. This behavior is deprecated,
please specify a `digest` explicitly.

The `iterations` argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

```js
const {
  pbkdf2
} = await import('crypto');

pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
```

The `crypto.DEFAULT_ENCODING` property can be used to change the way the`derivedKey` is passed to the callback. This property, however, has been
deprecated and use should be avoided.

```js
import crypto from 'crypto';
crypto.DEFAULT_ENCODING = 'hex';
crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey);  // '3745e48...aa39b34'
});
```

An array of supported digest functions can be retrieved using [getHashes](crypto._crypto_.md#gethashes).

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `iterations` | `number` |
| `keylen` | `number` |
| `digest` | `string` |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1776](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1776)

___

### pbkdf2Sync

▸ **pbkdf2Sync**(`password`, `salt`, `iterations`, `keylen`, `digest`): [`Buffer`](buffer._buffer_.md#buffer)

Provides a synchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by `digest` is
applied to derive a key of the requested byte length (`keylen`) from the`password`, `salt` and `iterations`.

If an error occurs an `Error` will be thrown, otherwise the derived key will be
returned as a `Buffer`.

If `digest` is `null`, `'sha1'` will be used. This behavior is deprecated,
please specify a `digest` explicitly.

The `iterations` argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

```js
const {
  pbkdf2Sync
} = await import('crypto');

const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
console.log(key.toString('hex'));  // '3745e48...08d59ae'
```

The `crypto.DEFAULT_ENCODING` property may be used to change the way the`derivedKey` is returned. This property, however, is deprecated and use
should be avoided.

```js
import crypto from 'crypto';
crypto.DEFAULT_ENCODING = 'hex';
const key = crypto.pbkdf2Sync('secret', 'salt', 100000, 512, 'sha512');
console.log(key);  // '3745e48...aa39b34'
```

An array of supported digest functions can be retrieved using [getHashes](crypto._crypto_.md#gethashes).

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `iterations` | `number` |
| `keylen` | `number` |
| `digest` | `string` |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1825](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1825)

___

### privateDecrypt

▸ **privateDecrypt**(`privateKey`, `buffer`): [`Buffer`](buffer._buffer_.md#buffer)

Decrypts `buffer` with `privateKey`. `buffer` was previously encrypted using
the corresponding public key, for example using [publicEncrypt](crypto._crypto_.md#publicencrypt).

If `privateKey` is not a `KeyObject`, this function behaves as if`privateKey` had been passed to [createPrivateKey](crypto._crypto_.md#createprivatekey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_OAEP_PADDING`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`RsaPrivateKey`](../interfaces/crypto._crypto_.RsaPrivateKey.md) \| [`KeyLike`](crypto._crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2222](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2222)

___

### privateEncrypt

▸ **privateEncrypt**(`privateKey`, `buffer`): [`Buffer`](buffer._buffer_.md#buffer)

Encrypts `buffer` with `privateKey`. The returned data can be decrypted using
the corresponding public key, for example using [publicDecrypt](crypto._crypto_.md#publicdecrypt).

If `privateKey` is not a `KeyObject`, this function behaves as if`privateKey` had been passed to [createPrivateKey](crypto._crypto_.md#createprivatekey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_PADDING`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`RsaPrivateKey`](../interfaces/crypto._crypto_.RsaPrivateKey.md) \| [`KeyLike`](crypto._crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2233](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2233)

___

### pseudoRandomBytes

▸ **pseudoRandomBytes**(`size`): [`Buffer`](buffer._buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1888](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1888)

▸ **pseudoRandomBytes**(`size`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1889](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1889)

___

### publicDecrypt

▸ **publicDecrypt**(`key`, `buffer`): [`Buffer`](buffer._buffer_.md#buffer)

Decrypts `buffer` with `key`.`buffer` was previously encrypted using
the corresponding private key, for example using [privateEncrypt](crypto._crypto_.md#privateencrypt).

If `key` is not a `KeyObject`, this function behaves as if`key` had been passed to [createPublicKey](crypto._crypto_.md#createpublickey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_PADDING`.

Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RsaPublicKey`](../interfaces/crypto._crypto_.RsaPublicKey.md) \| [`RsaPrivateKey`](../interfaces/crypto._crypto_.RsaPrivateKey.md) \| [`KeyLike`](crypto._crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2211](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2211)

___

### publicEncrypt

▸ **publicEncrypt**(`key`, `buffer`): [`Buffer`](buffer._buffer_.md#buffer)

Encrypts the content of `buffer` with `key` and returns a new `Buffer` with encrypted content. The returned data can be decrypted using
the corresponding private key, for example using [privateDecrypt](crypto._crypto_.md#privatedecrypt).

If `key` is not a `KeyObject`, this function behaves as if`key` had been passed to [createPublicKey](crypto._crypto_.md#createpublickey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_OAEP_PADDING`.

Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RsaPublicKey`](../interfaces/crypto._crypto_.RsaPublicKey.md) \| [`RsaPrivateKey`](../interfaces/crypto._crypto_.RsaPrivateKey.md) \| [`KeyLike`](crypto._crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2197](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2197)

___

### randomBytes

▸ **randomBytes**(`size`): [`Buffer`](buffer._buffer_.md#buffer)

Generates cryptographically strong pseudorandom data. The `size` argument
is a number indicating the number of bytes to generate.

If a `callback` function is provided, the bytes are generated asynchronously
and the `callback` function is invoked with two arguments: `err` and `buf`.
If an error occurs, `err` will be an `Error` object; otherwise it is `null`. The`buf` argument is a `Buffer` containing the generated bytes.

```js
// Asynchronous
const {
  randomBytes
} = await import('crypto');

randomBytes(256, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
```

If the `callback` function is not provided, the random bytes are generated
synchronously and returned as a `Buffer`. An error will be thrown if
there is a problem generating the bytes.

```js
// Synchronous
const {
  randomBytes
} = await import('crypto');

const buf = randomBytes(256);
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);
```

The `crypto.randomBytes()` method will not complete until there is
sufficient entropy available.
This should normally never take longer than a few milliseconds. The only time
when generating the random bytes may conceivably block for a longer period of
time is right after boot, when the whole system is still low on entropy.

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

The asynchronous version of `crypto.randomBytes()` is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large `randomBytes` requests when doing so as part of fulfilling a client
request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The number of bytes to generate. The `size` must not be larger than `2**31 - 1`. |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

if the `callback` function is not provided.

#### Defined in

[crypto.d.ts:1883](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1883)

▸ **randomBytes**(`size`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1884](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1884)

___

### randomFill

▸ **randomFill**<`T`\>(`buffer`, `callback`): `void`

This function is similar to [randomBytes](crypto._crypto_.md#randombytes) but requires the first
argument to be a `Buffer` that will be filled. It also
requires that a callback is passed in.

If the `callback` function is not provided, an error will be thrown.

```js
import { Buffer } from 'buffer';
const { randomFill } = await import('crypto');

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
```

Any `ArrayBuffer`, `TypedArray`, or `DataView` instance may be passed as`buffer`.

While this includes instances of `Float32Array` and `Float64Array`, this
function should not be used to generate random floating-point numbers. The
result may contain `+Infinity`, `-Infinity`, and `NaN`, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.

```js
import { Buffer } from 'buffer';
const { randomFill } = await import('crypto');

const a = new Uint32Array(10);
randomFill(a, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
```

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

The asynchronous version of `crypto.randomFill()` is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large `randomFill` requests when doing so as part of fulfilling a client
request.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` | `function(err, buf) {}`. |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2068](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2068)

▸ **randomFill**<`T`\>(`buffer`, `offset`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `T` |
| `offset` | `number` |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2072](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2072)

▸ **randomFill**<`T`\>(`buffer`, `offset`, `size`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `T` |
| `offset` | `number` |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2077](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2077)

___

### randomFillSync

▸ **randomFillSync**<`T`\>(`buffer`, `offset?`, `size?`): `T`

Synchronous version of [randomFill](crypto._crypto_.md#randomfill).

```js
import { Buffer } from 'buffer';
const { randomFillSync } = await import('crypto');

const buf = Buffer.alloc(10);
console.log(randomFillSync(buf).toString('hex'));

randomFillSync(buf, 5);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
randomFillSync(buf, 5, 5);
console.log(buf.toString('hex'));
```

Any `ArrayBuffer`, `TypedArray` or `DataView` instance may be passed as`buffer`.

```js
import { Buffer } from 'buffer';
const { randomFillSync } = await import('crypto');

const a = new Uint32Array(10);
console.log(Buffer.from(randomFillSync(a).buffer,
                        a.byteOffset, a.byteLength).toString('hex'));

const b = new DataView(new ArrayBuffer(10));
console.log(Buffer.from(randomFillSync(b).buffer,
                        b.byteOffset, b.byteLength).toString('hex'));

const c = new ArrayBuffer(10);
console.log(Buffer.from(randomFillSync(c)).toString('hex'));
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `offset?` | `number` |  |
| `size?` | `number` | - |

#### Returns

`T`

The object passed as `buffer` argument.

#### Defined in

[crypto.d.ts:1989](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1989)

___

### randomInt

▸ **randomInt**(`max`): `number`

Return a random integer `n` such that `min <= n < max`.  This
implementation avoids [modulo bias](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modulo_bias).

The range (`max - min`) must be less than 248. `min` and `max` must
be [safe integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

If the `callback` function is not provided, the random integer is
generated synchronously.

```js
// Asynchronous
const {
  randomInt
} = await import('crypto');

randomInt(3, (err, n) => {
  if (err) throw err;
  console.log(`Random number chosen from (0, 1, 2): ${n}`);
});
```

```js
// Synchronous
const {
  randomInt
} = await import('crypto');

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
```

```js
// With `min` argument
const {
  randomInt
} = await import('crypto');

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `number` | End of random range (exclusive). |

#### Returns

`number`

#### Defined in

[crypto.d.ts:1938](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1938)

▸ **randomInt**(`min`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[crypto.d.ts:1939](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1939)

▸ **randomInt**(`max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |
| `callback` | (`err`: `Error`, `value`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1940](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1940)

▸ **randomInt**(`min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `callback` | (`err`: `Error`, `value`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1944](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L1944)

___

### randomUUID

▸ **randomUUID**(`options?`): `string`

Generates a random [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122.txt) version 4 UUID. The UUID is generated using a
cryptographic pseudorandom number generator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RandomUUIDOptions`](../interfaces/crypto._crypto_.RandomUUIDOptions.md) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:3623](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3623)

___

### scrypt

▸ **scrypt**(`password`, `salt`, `keylen`, `callback`): `void`

Provides an asynchronous [scrypt](https://en.wikipedia.org/wiki/Scrypt) implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

The `callback` function is called with two arguments: `err` and `derivedKey`.`err` is an exception object when key derivation fails, otherwise `err` is`null`. `derivedKey` is passed to the
callback as a `Buffer`.

An exception is thrown when any of the input arguments specify invalid values
or types.

```js
const {
  scrypt
} = await import('crypto');

// Using the factory defaults.
scrypt('password', 'salt', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
// Using a custom N parameter. Must be a power of two.
scrypt('password', 'salt', 64, { N: 1024 }, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...aa39b34'
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `keylen` | `number` |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2125](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2125)

▸ **scrypt**(`password`, `salt`, `keylen`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `keylen` | `number` |
| `options` | [`ScryptOptions`](../interfaces/crypto._crypto_.ScryptOptions.md) |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2131](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2131)

___

### scryptSync

▸ **scryptSync**(`password`, `salt`, `keylen`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Provides a synchronous [scrypt](https://en.wikipedia.org/wiki/Scrypt) implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

An exception is thrown when key derivation fails, otherwise the derived key is
returned as a `Buffer`.

An exception is thrown when any of the input arguments specify invalid values
or types.

```js
const {
  scryptSync
} = await import('crypto');
// Using the factory defaults.

const key1 = scryptSync('password', 'salt', 64);
console.log(key1.toString('hex'));  // '3745e48...08d59ae'
// Using a custom N parameter. Must be a power of two.
const key2 = scryptSync('password', 'salt', 64, { N: 1024 });
console.log(key2.toString('hex'));  // '3745e48...aa39b34'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](crypto._crypto_.md#binarylike) |
| `keylen` | `number` |
| `options?` | [`ScryptOptions`](../interfaces/crypto._crypto_.ScryptOptions.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2167](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2167)

___

### secureHeapUsed

▸ **secureHeapUsed**(): [`SecureHeapUsage`](../interfaces/crypto._crypto_.SecureHeapUsage.md)

#### Returns

[`SecureHeapUsage`](../interfaces/crypto._crypto_.SecureHeapUsage.md)

#### Defined in

[crypto.d.ts:3607](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3607)

___

### sign

▸ **sign**(`algorithm`, `data`, `key`): [`Buffer`](buffer._buffer_.md#buffer)

Calculates and returns the signature for `data` using the given private key and
algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
dependent upon the key type (especially Ed25519 and Ed448).

If `key` is not a `KeyObject`, this function behaves as if `key` had been
passed to [createPrivateKey](crypto._crypto_.md#createprivatekey). If it is an object, the following
additional properties can be passed:

If the `callback` function is provided this function uses libuv's threadpool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](crypto._crypto_.md#keylike) \| [`SignKeyObjectInput`](../interfaces/crypto._crypto_.SignKeyObjectInput.md) \| [`SignPrivateKeyInput`](../interfaces/crypto._crypto_.SignPrivateKeyInput.md) |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[crypto.d.ts:3410](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3410)

▸ **sign**(`algorithm`, `data`, `key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](crypto._crypto_.md#keylike) \| [`SignKeyObjectInput`](../interfaces/crypto._crypto_.SignKeyObjectInput.md) \| [`SignPrivateKeyInput`](../interfaces/crypto._crypto_.SignPrivateKeyInput.md) |
| `callback` | (`error`: `Error`, `data`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3415](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3415)

___

### timingSafeEqual

▸ **timingSafeEqual**(`a`, `b`): `boolean`

This function is based on a constant-time algorithm.
Returns true if `a` is equal to `b`, without leaking timing information that
would allow an attacker to guess one of the values. This is suitable for
comparing HMAC digests or secret values like authentication cookies or [capability urls](https://www.w3.org/TR/capability-urls/).

`a` and `b` must both be `Buffer`s, `TypedArray`s, or `DataView`s, and they
must have the same byte length. An error is thrown if `a` and `b` have
different byte lengths.

If at least one of `a` and `b` is a `TypedArray` with more than one byte per
entry, such as `Uint16Array`, the result will be computed using the platform
byte order.

Use of `crypto.timingSafeEqual` does not guarantee that the _surrounding_ code
is timing-safe. Care should be taken to ensure that the surrounding code does
not introduce timing vulnerabilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `ArrayBufferView` |
| `b` | `ArrayBufferView` |

#### Returns

`boolean`

#### Defined in

[crypto.d.ts:2459](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L2459)

___

### verify

▸ **verify**(`algorithm`, `data`, `key`, `signature`): `boolean`

Verifies the given signature for `data` using the given key and algorithm. If`algorithm` is `null` or `undefined`, then the algorithm is dependent upon the
key type (especially Ed25519 and Ed448).

If `key` is not a `KeyObject`, this function behaves as if `key` had been
passed to [createPublicKey](crypto._crypto_.md#createpublickey). If it is an object, the following
additional properties can be passed:

The `signature` argument is the previously calculated signature for the `data`.

Because public keys can be derived from private keys, a private key or a public
key may be passed for `key`.

If the `callback` function is provided this function uses libuv's threadpool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](crypto._crypto_.md#keylike) \| [`VerifyKeyObjectInput`](../interfaces/crypto._crypto_.VerifyKeyObjectInput.md) \| [`VerifyPublicKeyInput`](../interfaces/crypto._crypto_.VerifyPublicKeyInput.md) |
| `signature` | `ArrayBufferView` |

#### Returns

`boolean`

#### Defined in

[crypto.d.ts:3436](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3436)

▸ **verify**(`algorithm`, `data`, `key`, `signature`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](crypto._crypto_.md#keylike) \| [`VerifyKeyObjectInput`](../interfaces/crypto._crypto_.VerifyKeyObjectInput.md) \| [`VerifyPublicKeyInput`](../interfaces/crypto._crypto_.VerifyPublicKeyInput.md) |
| `signature` | `ArrayBufferView` |
| `callback` | (`error`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:3442](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3442)
