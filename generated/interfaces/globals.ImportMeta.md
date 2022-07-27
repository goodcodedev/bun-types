# Interface: ImportMeta

[globals](../modules/globals.md).ImportMeta

The type of `import.meta`.

If you need to declare that a given property exists on `import.meta`,
this type may be augmented via interface merging.

## Table of contents

### Properties

- [dir](globals.ImportMeta.md#dir)
- [file](globals.ImportMeta.md#file)
- [path](globals.ImportMeta.md#path)
- [url](globals.ImportMeta.md#url)

### Methods

- [resolve](globals.ImportMeta.md#resolve)

## Properties

### dir

• **dir**: `string`

Absolute path to the directory containing the source file.

Does not have a trailing slash

#### Defined in

[globals.d.ts:155](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L155)

___

### file

• **file**: `string`

Filename of the source file

#### Defined in

[globals.d.ts:159](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L159)

___

### path

• **path**: `string`

Absolute path to the source file

#### Defined in

[globals.d.ts:149](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L149)

___

### url

• **url**: `string`

`file://` url string for the current module.

**`Example`**

```ts
console.log(import.meta.url);
"file:///Users/me/projects/my-app/src/my-app.ts"
```

#### Defined in

[globals.d.ts:145](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L145)

## Methods

### resolve

▸ **resolve**(`moduleId`): `Promise`<`string`\>

Resolve a module ID the same as if you imported it

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[globals.d.ts:165](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L165)

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[globals.d.ts:172](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L172)
