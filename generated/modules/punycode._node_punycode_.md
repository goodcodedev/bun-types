# Namespace: "node:punycode"

[punycode](punycode.md)."node:punycode"

## Table of contents

### Interfaces

- [ucs2](../interfaces/punycode._node_punycode_.ucs2.md)

### Variables

- [ucs2](punycode._node_punycode_.md#ucs2)
- [version](punycode._node_punycode_.md#version)

### Functions

- [decode](punycode._node_punycode_.md#decode)
- [encode](punycode._node_punycode_.md#encode)
- [toASCII](punycode._node_punycode_.md#toascii)
- [toUnicode](punycode._node_punycode_.md#tounicode)

## Variables

### ucs2

• `Const` **ucs2**: [`ucs2`](punycode._punycode_.md#ucs2)

**`Deprecated`**

The version of the punycode module bundled in Node.js is being deprecated.
In a future major version of Node.js this module will be removed.
Users currently depending on the punycode module should switch to using
the userland-provided Punycode.js module instead.

#### Defined in

[punycode.d.ts:83](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L83)

[punycode.d.ts:84](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L84)

___

### version

• `Const` **version**: `string`

**`Deprecated`**

The version of the punycode module bundled in Node.js is being deprecated.
In a future major version of Node.js this module will be removed.
Users currently depending on the punycode module should switch to using
the userland-provided Punycode.js module instead.

#### Defined in

[punycode.d.ts:109](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L109)

## Functions

### decode

▸ **decode**(`string`): `string`

The `punycode.decode()` method converts a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only
characters to the equivalent string of Unicode codepoints.

```js
punycode.decode('maana-pta'); // 'mañana'
punycode.decode('--dqo34k'); // '☃-⌘'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[punycode.d.ts:39](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L39)

___

### encode

▸ **encode**(`string`): `string`

The `punycode.encode()` method converts a string of Unicode codepoints to a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only characters.

```js
punycode.encode('mañana'); // 'maana-pta'
punycode.encode('☃-⌘'); // '--dqo34k'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[punycode.d.ts:48](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L48)

___

### toASCII

▸ **toASCII**(`domain`): `string`

The `punycode.toASCII()` method converts a Unicode string representing an
Internationalized Domain Name to [Punycode](https://tools.ietf.org/html/rfc3492). Only the non-ASCII parts of the
domain name will be converted. Calling `punycode.toASCII()` on a string that
already only contains ASCII characters will have no effect.

```js
// encode domain names
punycode.toASCII('mañana.com');  // 'xn--maana-pta.com'
punycode.toASCII('☃-⌘.com');   // 'xn----dqo34k.com'
punycode.toASCII('example.com'); // 'example.com'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`string`

#### Defined in

[punycode.d.ts:75](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L75)

___

### toUnicode

▸ **toUnicode**(`domain`): `string`

The `punycode.toUnicode()` method converts a string representing a domain name
containing [Punycode](https://tools.ietf.org/html/rfc3492) encoded characters into Unicode. Only the [Punycode](https://tools.ietf.org/html/rfc3492) encoded parts of the domain name are be
converted.

```js
// decode domain names
punycode.toUnicode('xn--maana-pta.com'); // 'mañana.com'
punycode.toUnicode('xn----dqo34k.com');  // '☃-⌘.com'
punycode.toUnicode('example.com');       // 'example.com'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`string`

#### Defined in

[punycode.d.ts:61](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/punycode.d.ts#L61)
