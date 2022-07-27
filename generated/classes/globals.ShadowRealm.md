# Class: ShadowRealm

[globals](../modules/globals.md).ShadowRealm

ShadowRealms are a distinct global environment, with its own global object
containing its own intrinsics and built-ins (standard objects that are not
bound to global variables, like the initial value of Object.prototype).

**`Example`**

```js
const red = new ShadowRealm();

// realms can import modules that will execute within it's own environment.
// When the module is resolved, it captured the binding value, or creates a new
// wrapped function that is connected to the callable binding.
const redAdd = await red.importValue('./inside-code.js', 'add');

// redAdd is a wrapped function exotic object that chains it's call to the
// respective imported binding.
let result = redAdd(2, 3);

console.assert(result === 5); // yields true

// The evaluate method can provide quick code evaluation within the constructed
// shadowRealm without requiring any module loading, while it still requires CSP
// relaxing.
globalThis.someValue = 1;
red.evaluate('globalThis.someValue = 2'); // Affects only the ShadowRealm's global
console.assert(globalThis.someValue === 1);

// The wrapped functions can also wrap other functions the other way around.
const setUniqueValue =
await red.importValue('./inside-code.js', 'setUniqueValue');

// setUniqueValue = (cb) => (cb(globalThis.someValue) * 2);

result = setUniqueValue((x) => x ** 3);

console.assert(result === 16); // yields true
```

## Table of contents

### Constructors

- [constructor](globals.ShadowRealm.md#constructor)

### Methods

- [evaluate](globals.ShadowRealm.md#evaluate)
- [importValue](globals.ShadowRealm.md#importvalue)

## Constructors

### constructor

• **new ShadowRealm**()

Creates a new [ShadowRealm](https://github.com/tc39/proposal-shadowrealm/blob/main/explainer.md#introduction)

**`Example`**

```js
const red = new ShadowRealm();

// realms can import modules that will execute within it's own environment.
// When the module is resolved, it captured the binding value, or creates a new
// wrapped function that is connected to the callable binding.
const redAdd = await red.importValue('./inside-code.js', 'add');

// redAdd is a wrapped function exotic object that chains it's call to the
// respective imported binding.
let result = redAdd(2, 3);

console.assert(result === 5); // yields true

// The evaluate method can provide quick code evaluation within the constructed
// shadowRealm without requiring any module loading, while it still requires CSP
// relaxing.
globalThis.someValue = 1;
red.evaluate('globalThis.someValue = 2'); // Affects only the ShadowRealm's global
console.assert(globalThis.someValue === 1);

// The wrapped functions can also wrap other functions the other way around.
const setUniqueValue =
await red.importValue('./inside-code.js', 'setUniqueValue');

// setUniqueValue = (cb) => (cb(globalThis.someValue) * 2);

result = setUniqueValue((x) => x ** 3);

console.assert(result === 16); // yields true
```

#### Defined in

[globals.d.ts:929](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L929)

## Methods

### evaluate

▸ **evaluate**(`sourceText`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceText` | `string` |

#### Returns

`any`

#### Defined in

[globals.d.ts:931](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L931)

___

### importValue

▸ **importValue**(`specifier`, `bindingName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `specifier` | `string` |
| `bindingName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[globals.d.ts:930](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L930)
