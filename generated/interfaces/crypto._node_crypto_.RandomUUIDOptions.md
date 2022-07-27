# Interface: RandomUUIDOptions

[crypto](../modules/crypto.md).["node:crypto"](../modules/crypto._node_crypto_.md).RandomUUIDOptions

## Table of contents

### Properties

- [disableEntropyCache](crypto._node_crypto_.RandomUUIDOptions.md#disableentropycache)

## Properties

### disableEntropyCache

• `Optional` **disableEntropyCache**: `boolean`

By default, to improve performance,
Node.js will pre-emptively generate and persistently cache enough
random data to generate up to 128 random UUIDs. To generate a UUID
without using the cache, set `disableEntropyCache` to `true`.

**`Default`**

`false`

#### Defined in

[crypto.d.ts:3617](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3617)
