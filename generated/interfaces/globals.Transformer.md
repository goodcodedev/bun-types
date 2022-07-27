# Interface: Transformer<I, O\>

[globals](../modules/globals.md).Transformer

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

## Table of contents

### Properties

- [flush](globals.Transformer.md#flush)
- [readableType](globals.Transformer.md#readabletype)
- [start](globals.Transformer.md#start)
- [transform](globals.Transformer.md#transform)
- [writableType](globals.Transformer.md#writabletype)

## Properties

### flush

• `Optional` **flush**: [`TransformerFlushCallback`](globals.TransformerFlushCallback.md)<`O`\>

#### Defined in

[globals.d.ts:1965](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1965)

___

### readableType

• `Optional` **readableType**: `undefined`

#### Defined in

[globals.d.ts:1966](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1966)

___

### start

• `Optional` **start**: [`TransformerStartCallback`](globals.TransformerStartCallback.md)<`O`\>

#### Defined in

[globals.d.ts:1967](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1967)

___

### transform

• `Optional` **transform**: [`TransformerTransformCallback`](globals.TransformerTransformCallback.md)<`I`, `O`\>

#### Defined in

[globals.d.ts:1968](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1968)

___

### writableType

• `Optional` **writableType**: `undefined`

#### Defined in

[globals.d.ts:1969](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1969)
