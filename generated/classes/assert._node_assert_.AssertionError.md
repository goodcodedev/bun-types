# Class: AssertionError

[assert](../modules/assert.md).["node:assert"](../modules/assert._node_assert_.md).AssertionError

Indicates the failure of an assertion. All errors thrown by the `assert` module
will be instances of the `AssertionError` class.

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](assert._node_assert_.AssertionError.md#constructor)

### Properties

- [actual](assert._node_assert_.AssertionError.md#actual)
- [cause](assert._node_assert_.AssertionError.md#cause)
- [code](assert._node_assert_.AssertionError.md#code)
- [expected](assert._node_assert_.AssertionError.md#expected)
- [generatedMessage](assert._node_assert_.AssertionError.md#generatedmessage)
- [message](assert._node_assert_.AssertionError.md#message)
- [name](assert._node_assert_.AssertionError.md#name)
- [operator](assert._node_assert_.AssertionError.md#operator)
- [stack](assert._node_assert_.AssertionError.md#stack)

## Constructors

### constructor

• **new AssertionError**(`options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.actual?` | `unknown` | The `actual` property on the error instance. |
| `options.expected?` | `unknown` | The `expected` property on the error instance. |
| `options.message?` | `string` | If provided, the error message is set to this value. |
| `options.operator?` | `string` | The `operator` property on the error instance. |
| `options.stackStartFn?` | `Function` | If provided, the generated stack trace omits frames before this function. |

#### Overrides

Error.constructor

#### Defined in

[assert.d.ts:23](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/assert.d.ts#L23)

## Properties

### actual

• **actual**: `unknown`

#### Defined in

[assert.d.ts:18](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/assert.d.ts#L18)

___

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

genDoc/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### code

• **code**: ``"ERR_ASSERTION"``

#### Defined in

[assert.d.ts:22](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/assert.d.ts#L22)

___

### expected

• **expected**: `unknown`

#### Defined in

[assert.d.ts:19](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/assert.d.ts#L19)

___

### generatedMessage

• **generatedMessage**: `boolean`

#### Defined in

[assert.d.ts:21](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/assert.d.ts#L21)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:1028

___

### operator

• **operator**: `string`

#### Defined in

[assert.d.ts:20](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/assert.d.ts#L20)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

genDoc/node_modules/typescript/lib/lib.es5.d.ts:1030
