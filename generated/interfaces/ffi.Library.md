# Interface: Library

[ffi](../modules/ffi.md).Library

## Table of contents

### Properties

- [symbols](ffi.Library.md#symbols)

### Methods

- [close](ffi.Library.md#close)

## Properties

### symbols

• **symbols**: `Record`<`string`, `CallableFunction` & { `native`: `CallableFunction`  }\>

#### Defined in

[ffi.d.ts:454](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/ffi.d.ts#L454)

## Methods

### close

▸ **close**(): `void`

`dlclose` the library, unloading the symbols and freeing allocated memory.

Once called, the library is no longer usable.

Calling a function from a library that has been closed is undefined behavior.

#### Returns

`void`

#### Defined in

[ffi.d.ts:471](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/ffi.d.ts#L471)
