# Module: jsc

## Table of contents

### Functions

- [callerSourceOrigin](jsc.md#callersourceorigin)
- [describe](jsc.md#describe)
- [describeArray](jsc.md#describearray)
- [drainMicrotasks](jsc.md#drainmicrotasks)
- [edenGC](jsc.md#edengc)
- [fullGC](jsc.md#fullgc)
- [gcAndSweep](jsc.md#gcandsweep)
- [getProtectedObjects](jsc.md#getprotectedobjects)
- [getRandomSeed](jsc.md#getrandomseed)
- [heapSize](jsc.md#heapsize)
- [heapStats](jsc.md#heapstats)
- [isRope](jsc.md#isrope)
- [memoryUsage](jsc.md#memoryusage)
- [noFTL](jsc.md#noftl)
- [noOSRExitFuzzing](jsc.md#noosrexitfuzzing)
- [numberOfDFGCompiles](jsc.md#numberofdfgcompiles)
- [optimizeNextInvocation](jsc.md#optimizenextinvocation)
- [releaseWeakRefs](jsc.md#releaseweakrefs)
- [reoptimizationRetryCount](jsc.md#reoptimizationretrycount)
- [setRandomSeed](jsc.md#setrandomseed)
- [startRemoteDebugger](jsc.md#startremotedebugger)
- [totalCompileTime](jsc.md#totalcompiletime)

## Functions

### callerSourceOrigin

▸ **callerSourceOrigin**(): `string`

#### Returns

`string`

#### Defined in

[jsc.d.ts:29](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L29)

___

### describe

▸ **describe**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[jsc.d.ts:2](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L2)

___

### describeArray

▸ **describeArray**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any`[] |

#### Returns

`string`

#### Defined in

[jsc.d.ts:3](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L3)

___

### drainMicrotasks

▸ **drainMicrotasks**(): `void`

#### Returns

`void`

#### Defined in

[jsc.d.ts:37](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L37)

___

### edenGC

▸ **edenGC**(): `void`

#### Returns

`void`

#### Defined in

[jsc.d.ts:6](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L6)

___

### fullGC

▸ **fullGC**(): `void`

#### Returns

`void`

#### Defined in

[jsc.d.ts:5](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L5)

___

### gcAndSweep

▸ **gcAndSweep**(): `void`

#### Returns

`void`

#### Defined in

[jsc.d.ts:4](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L4)

___

### getProtectedObjects

▸ **getProtectedObjects**(): `any`[]

This returns objects which native code has explicitly protected from being
garbage collected

By calling this function you create another reference to the object, which
will further prevent it from being garbage collected

This function is mostly a debugging tool for bun itself.

Warning: not all objects returned are supposed to be observable from JavaScript

#### Returns

`any`[]

#### Defined in

[jsc.d.ts:50](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L50)

___

### getRandomSeed

▸ **getRandomSeed**(): `number`

#### Returns

`number`

#### Defined in

[jsc.d.ts:26](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L26)

___

### heapSize

▸ **heapSize**(): `number`

#### Returns

`number`

#### Defined in

[jsc.d.ts:7](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L7)

___

### heapStats

▸ **heapStats**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `extraMemorySize` | `number` |
| `globalObjectCount` | `number` |
| `heapCapacity` | `number` |
| `heapSize` | `number` |
| `objectCount` | `number` |
| `objectTypeCounts` | `Record`<`string`, `number`\> |
| `protectedGlobalObjectCount` | `number` |
| `protectedObjectCount` | `number` |
| `protectedObjectTypeCounts` | `Record`<`string`, `number`\> |

#### Defined in

[jsc.d.ts:8](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L8)

___

### isRope

▸ **isRope**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

[jsc.d.ts:28](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L28)

___

### memoryUsage

▸ **memoryUsage**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `current` | `number` |
| `currentCommit` | `number` |
| `pageFaults` | `number` |
| `peak` | `number` |
| `peakCommit` | `number` |

#### Defined in

[jsc.d.ts:19](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L19)

___

### noFTL

▸ **noFTL**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

#### Defined in

[jsc.d.ts:30](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L30)

___

### noOSRExitFuzzing

▸ **noOSRExitFuzzing**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

#### Defined in

[jsc.d.ts:31](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L31)

___

### numberOfDFGCompiles

▸ **numberOfDFGCompiles**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

#### Defined in

[jsc.d.ts:33](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L33)

___

### optimizeNextInvocation

▸ **optimizeNextInvocation**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

#### Defined in

[jsc.d.ts:32](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L32)

___

### releaseWeakRefs

▸ **releaseWeakRefs**(): `void`

#### Returns

`void`

#### Defined in

[jsc.d.ts:34](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L34)

___

### reoptimizationRetryCount

▸ **reoptimizationRetryCount**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

#### Defined in

[jsc.d.ts:36](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L36)

___

### setRandomSeed

▸ **setRandomSeed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[jsc.d.ts:27](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L27)

___

### startRemoteDebugger

▸ **startRemoteDebugger**(`host?`, `port?`): `void`

Start a remote debugging socket server on the given port.

This exposes JavaScriptCore's built-in debugging server.

This is untested. May not be supported yet on macOS

#### Parameters

| Name | Type |
| :------ | :------ |
| `host?` | `string` |
| `port?` | `number` |

#### Returns

`void`

#### Defined in

[jsc.d.ts:59](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L59)

___

### totalCompileTime

▸ **totalCompileTime**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

#### Defined in

[jsc.d.ts:35](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/jsc.d.ts#L35)
