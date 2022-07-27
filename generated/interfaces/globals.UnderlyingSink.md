# Interface: UnderlyingSink<W\>

[globals](../modules/globals.md).UnderlyingSink

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [abort](globals.UnderlyingSink.md#abort)
- [close](globals.UnderlyingSink.md#close)
- [start](globals.UnderlyingSink.md#start)
- [type](globals.UnderlyingSink.md#type)
- [write](globals.UnderlyingSink.md#write)

## Properties

### abort

• `Optional` **abort**: [`UnderlyingSinkAbortCallback`](globals.UnderlyingSinkAbortCallback.md)

#### Defined in

[globals.d.ts:1864](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1864)

___

### close

• `Optional` **close**: [`UnderlyingSinkCloseCallback`](globals.UnderlyingSinkCloseCallback.md)

#### Defined in

[globals.d.ts:1865](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1865)

___

### start

• `Optional` **start**: [`UnderlyingSinkStartCallback`](globals.UnderlyingSinkStartCallback.md)

#### Defined in

[globals.d.ts:1866](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1866)

___

### type

• `Optional` **type**: ``"default"`` \| ``"bytes"``

#### Defined in

[globals.d.ts:1867](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1867)

___

### write

• `Optional` **write**: [`UnderlyingSinkWriteCallback`](globals.UnderlyingSinkWriteCallback.md)<`W`\>

#### Defined in

[globals.d.ts:1868](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1868)
