# Interface: TranspilerOptions

[bun](../modules/bun.md).["bun"](../modules/bun._bun_.md).TranspilerOptions

## Table of contents

### Properties

- [allowBunRuntime](bun._bun_.TranspilerOptions.md#allowbunruntime)
- [autoImportJSX](bun._bun_.TranspilerOptions.md#autoimportjsx)
- [define](bun._bun_.TranspilerOptions.md#define)
- [exports](bun._bun_.TranspilerOptions.md#exports)
- [jsxOptimizationInline](bun._bun_.TranspilerOptions.md#jsxoptimizationinline)
- [loader](bun._bun_.TranspilerOptions.md#loader)
- [macros](bun._bun_.TranspilerOptions.md#macros)
- [platform](bun._bun_.TranspilerOptions.md#platform)
- [treeShaking](bun._bun_.TranspilerOptions.md#treeshaking)
- [trimUnusedImports](bun._bun_.TranspilerOptions.md#trimunusedimports)
- [tsconfig](bun._bun_.TranspilerOptions.md#tsconfig)

## Properties

### allowBunRuntime

• `Optional` **allowBunRuntime**: `boolean`

#### Defined in

[bun.d.ts:533](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L533)

___

### autoImportJSX

• `Optional` **autoImportJSX**: `boolean`

#### Defined in

[bun.d.ts:532](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L532)

___

### define

• `Optional` **define**: `Record`<`string`, `string`\>

Replace key with value. Value must be a JSON string.

**`Example`**

```
 { "process.env.NODE_ENV": "\"production\"" }
```

#### Defined in

[bun.d.ts:477](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L477)

___

### exports

• `Optional` **exports**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `eliminate?` | `string`[] |
| `replace?` | `Record`<`string`, `string`\> |

#### Defined in

[bun.d.ts:534](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L534)

___

### jsxOptimizationInline

• `Optional` **jsxOptimizationInline**: `boolean`

#### Defined in

[bun.d.ts:540](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L540)

___

### loader

• `Optional` **loader**: [`JavaScriptLoader`](../modules/bun._bun_.md#javascriptloader)

What is the default loader used for this transpiler?

#### Defined in

[bun.d.ts:480](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L480)

___

### macros

• `Optional` **macros**: [`MacroMap`](../modules/bun._bun_.md#macromap)

Replace an import statement with a macro.

   This will remove the import statement from the final output
   and replace any function calls or template strings with the result returned by the macro

**`Example`**

```json
   {
       "react-relay": {
           "graphql": "bun-macro-relay"
       }
   }
   ```

   Code that calls `graphql` will be replaced with the result of the macro.

   ```js
   import {graphql} from "react-relay";

   // Input:
   const query = graphql`
       query {
           ... on User {
               id
           }
       }
   }`;
   ```

   Will be replaced with:

   ```js
   import UserQuery from "./UserQuery.graphql";
   const query = UserQuery;
   ```

#### Defined in

[bun.d.ts:530](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L530)

___

### platform

• `Optional` **platform**: [`Platform`](../modules/bun._bun_.md#platform)

**`Example`**

```ts
"browser"
```

#### Defined in

[bun.d.ts:484](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L484)

___

### treeShaking

• `Optional` **treeShaking**: `boolean`

#### Defined in

[bun.d.ts:538](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L538)

___

### trimUnusedImports

• `Optional` **trimUnusedImports**: `boolean`

#### Defined in

[bun.d.ts:539](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L539)

___

### tsconfig

• `Optional` **tsconfig**: `string`

TSConfig.json file as stringified JSON or an object
 Use this to set a custom JSX factory, fragment, or import source
 For example, if you want to use Preact instead of React. Or if you want to use Emotion.

#### Defined in

[bun.d.ts:491](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L491)
