# Interface: FFIFunction

[ffi](../modules/ffi.md).FFIFunction

## Table of contents

### Properties

- [args](ffi.FFIFunction.md#args)
- [ptr](ffi.FFIFunction.md#ptr)
- [returns](ffi.FFIFunction.md#returns)

## Properties

### args

• `Optional` **args**: [`FFITypeOrString`](../modules/ffi.md#ffitypeorstring)[]

Arguments to a FFI function (C ABI)

Defaults to an empty array, which means no arguments.

To pass a pointer, use "ptr" or "pointer" as the type name. To get a pointer, see [ptr](../modules/ffi.md#ptr).

**`Example`**

From JavaScript:
```js
const lib = dlopen('add', {
   // FFIType can be used or you can pass string labels.
   args: [FFIType.i32, "i32"],
   returns: "i32",
});
lib.symbols.add(1, 2)
```
In C:
```c
int add(int a, int b) {
  return a + b;
}
```

#### Defined in

[ffi.d.ts:403](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/ffi.d.ts#L403)

___

### ptr

• `Optional` **ptr**: `number` \| `bigint`

Function pointer to the native function

If provided, instead of using dlsym() to lookup the function, Bun will use this instead.
This pointer should not be null (0).

This is useful if the library has already been loaded
or if the module is also using Node-API.

#### Defined in

[ffi.d.ts:440](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/ffi.d.ts#L440)

___

### returns

• `Optional` **returns**: [`FFITypeOrString`](../modules/ffi.md#ffitypeorstring)

Return type to a FFI function (C ABI)

Defaults to [void](../enums/ffi.FFIType.md#void)

To pass a pointer, use "ptr" or "pointer" as the type name. To get a pointer, see [ptr](../modules/ffi.md#ptr).

**`Example`**

From JavaScript:
```js
const lib = dlopen('z', {
   version: {
     returns: "ptr",
  }
});
console.log(new CString(lib.symbols.version()));
```
In C:
```c
char* version()
{
 return "1.0.0";
}
```

#### Defined in

[ffi.d.ts:429](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/ffi.d.ts#L429)
