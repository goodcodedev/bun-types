# Interface: AbortController

[globals](../modules/globals.md).AbortController

A controller object that allows you to abort one or more DOM requests as and when desired.

## Table of contents

### Properties

- [signal](globals.AbortController.md#signal)

### Methods

- [abort](globals.AbortController.md#abort)

## Properties

### signal

• `Readonly` **signal**: [`AbortSignal`](../modules/globals.md#abortsignal)

Returns the AbortSignal object associated with this object.

#### Defined in

[globals.d.ts:1117](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1117)

## Methods

### abort

▸ **abort**(): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

#### Returns

`void`

#### Defined in

[globals.d.ts:1121](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1121)
