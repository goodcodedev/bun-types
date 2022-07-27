# Interface: Process

[globals](../modules/globals.md).Process

## Table of contents

### Properties

- [arch](globals.Process.md#arch)
- [argv](globals.Process.md#argv)
- [env](globals.Process.md#env)
- [isBun](globals.Process.md#isbun)
- [pid](globals.Process.md#pid)
- [platform](globals.Process.md#platform)
- [ppid](globals.Process.md#ppid)
- [version](globals.Process.md#version)
- [versions](globals.Process.md#versions)

### Methods

- [chdir](globals.Process.md#chdir)
- [cwd](globals.Process.md#cwd)
- [exit](globals.Process.md#exit)
- [getgid](globals.Process.md#getgid)
- [getuid](globals.Process.md#getuid)
- [nextTick](globals.Process.md#nexttick)
- [setgid](globals.Process.md#setgid)
- [setuid](globals.Process.md#setuid)

## Properties

### arch

• **arch**: [`Architecture`](../modules/globals.md#architecture)

#### Defined in

[globals.d.ts:212](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L212)

___

### argv

• **argv**: `string`[]

#### Defined in

[globals.d.ts:214](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L214)

___

### env

• **env**: `Record`<`string`, `string`\> & { `NODE_ENV`: `string`  }

#### Defined in

[globals.d.ts:216](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L216)

___

### isBun

• **isBun**: ``1``

Whether you are using Bun

#### Defined in

[globals.d.ts:221](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L221)

___

### pid

• **pid**: `number`

#### Defined in

[globals.d.ts:211](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L211)

___

### platform

• **platform**: [`Platform`](../modules/globals.md#platform)

#### Defined in

[globals.d.ts:213](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L213)

___

### ppid

• **ppid**: `number`

#### Defined in

[globals.d.ts:210](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L210)

___

### version

• **version**: `string`

The current version of Bun

#### Defined in

[globals.d.ts:200](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L200)

___

### versions

• **versions**: `Record`<`string`, `string`\>

#### Defined in

[globals.d.ts:209](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L209)

## Methods

### chdir

▸ **chdir**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:224](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L224)

___

### cwd

▸ **cwd**(): `string`

#### Returns

`string`

#### Defined in

[globals.d.ts:225](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L225)

___

### exit

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

#### Defined in

[globals.d.ts:226](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L226)

___

### getgid

▸ **getgid**(): `number`

#### Returns

`number`

#### Defined in

[globals.d.ts:227](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L227)

___

### getuid

▸ **getuid**(): `number`

#### Returns

`number`

#### Defined in

[globals.d.ts:229](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L229)

___

### nextTick

▸ **nextTick**(`callback`, ...`args`): `void`

Run a function on the next tick of the event loop

This is the same as [queueMicrotask](../modules/globals.md#queuemicrotask)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`args`: `any`) => `any` | The function to run |
| `...args` | `any` | - |

#### Returns

`void`

#### Defined in

[globals.d.ts:208](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L208)

___

### setgid

▸ **setgid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[globals.d.ts:228](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L228)

___

### setuid

▸ **setuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[globals.d.ts:230](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L230)
