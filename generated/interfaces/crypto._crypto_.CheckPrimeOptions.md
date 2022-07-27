# Interface: CheckPrimeOptions

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).CheckPrimeOptions

## Table of contents

### Properties

- [checks](crypto._crypto_.CheckPrimeOptions.md#checks)

## Properties

### checks

• `Optional` **checks**: `number`

The number of Miller-Rabin probabilistic primality iterations to perform.
When the value is 0 (zero), a number of checks is used that yields a false positive rate of at most 2-64 for random input.
Care must be used when selecting a number of checks.
Refer to the OpenSSL documentation for the BN_is_prime_ex function nchecks options for more details.

**`Default`**

0

#### Defined in

[crypto.d.ts:3759](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3759)
