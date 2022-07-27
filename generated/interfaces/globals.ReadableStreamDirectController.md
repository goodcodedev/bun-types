# Interface: ReadableStreamDirectController

[globals](../modules/globals.md).ReadableStreamDirectController

## Table of contents

### Methods

- [close](globals.ReadableStreamDirectController.md#close)
- [end](globals.ReadableStreamDirectController.md#end)
- [flush](globals.ReadableStreamDirectController.md#flush)
- [start](globals.ReadableStreamDirectController.md#start)
- [write](globals.ReadableStreamDirectController.md#write)

## Methods

### close

▸ **close**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1733](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1733)

___

### end

▸ **end**(): `number` \| `Promise`<`number`\>

#### Returns

`number` \| `Promise`<`number`\>

#### Defined in

[globals.d.ts:1735](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1735)

___

### flush

▸ **flush**(): `number` \| `Promise`<`number`\>

#### Returns

`number` \| `Promise`<`number`\>

#### Defined in

[globals.d.ts:1736](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1736)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1737](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1737)

___

### write

▸ **write**(`data`): `number` \| `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `ArrayBuffer` \| `ArrayBufferView` |

#### Returns

`number` \| `Promise`<`number`\>

#### Defined in

[globals.d.ts:1734](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L1734)
