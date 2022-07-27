# Interface: SecureHeapUsage

[crypto](../modules/crypto.md).["crypto"](../modules/crypto._crypto_.md).SecureHeapUsage

## Table of contents

### Properties

- [min](crypto._crypto_.SecureHeapUsage.md#min)
- [total](crypto._crypto_.SecureHeapUsage.md#total)
- [used](crypto._crypto_.SecureHeapUsage.md#used)
- [utilization](crypto._crypto_.SecureHeapUsage.md#utilization)

## Properties

### min

• **min**: `number`

The minimum allocation from the secure heap as specified using the `--secure-heap-min` command-line flag.

#### Defined in

[crypto.d.ts:3595](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3595)

___

### total

• **total**: `number`

The total allocated secure heap size as specified using the `--secure-heap=n` command-line flag.

#### Defined in

[crypto.d.ts:3591](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3591)

___

### used

• **used**: `number`

The total number of bytes currently allocated from the secure heap.

#### Defined in

[crypto.d.ts:3599](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3599)

___

### utilization

• **utilization**: `number`

The calculated ratio of `used` to `total` allocated bytes.

#### Defined in

[crypto.d.ts:3603](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/crypto.d.ts#L3603)
