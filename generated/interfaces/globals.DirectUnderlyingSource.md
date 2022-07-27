# Interface: DirectUnderlyingSource<R\>

[globals](../modules/globals.md).DirectUnderlyingSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [cancel](globals.DirectUnderlyingSource.md#cancel)
- [pull](globals.DirectUnderlyingSource.md#pull)
- [type](globals.DirectUnderlyingSource.md#type)

## Properties

### cancel

• `Optional` **cancel**: [`UnderlyingSourceCancelCallback`](globals.UnderlyingSourceCancelCallback.md)

#### Defined in

[globals.d.ts:1879](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1879)

___

### pull

• **pull**: (`controller`: [`ReadableStreamDirectController`](globals.ReadableStreamDirectController.md)) => `void` \| `PromiseLike`<`void`\>

#### Type declaration

▸ (`controller`): `void` \| `PromiseLike`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | [`ReadableStreamDirectController`](globals.ReadableStreamDirectController.md) |

##### Returns

`void` \| `PromiseLike`<`void`\>

#### Defined in

[globals.d.ts:1880](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1880)

___

### type

• **type**: ``"direct"``

#### Defined in

[globals.d.ts:1883](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1883)
