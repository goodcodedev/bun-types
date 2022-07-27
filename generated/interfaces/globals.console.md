# Interface: console

[globals](../modules/globals.md).console

## Table of contents

### Methods

- [assert](globals.console.md#assert)
- [clear](globals.console.md#clear)
- [count](globals.console.md#count)
- [countReset](globals.console.md#countreset)
- [debug](globals.console.md#debug)
- [dir](globals.console.md#dir)
- [dirxml](globals.console.md#dirxml)
- [error](globals.console.md#error)
- [group](globals.console.md#group)
- [groupCollapsed](globals.console.md#groupcollapsed)
- [groupEnd](globals.console.md#groupend)
- [info](globals.console.md#info)
- [log](globals.console.md#log)
- [table](globals.console.md#table)
- [time](globals.console.md#time)
- [timeEnd](globals.console.md#timeend)
- [timeLog](globals.console.md#timelog)
- [timeStamp](globals.console.md#timestamp)
- [trace](globals.console.md#trace)
- [warn](globals.console.md#warn)

## Methods

### assert

▸ **assert**(`condition?`, ...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition?` | `boolean` |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:68](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L68)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:69](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L69)

___

### count

▸ **count**(`label?`): `void`

Increment a [count](https://www.youtube.com/watch?v=2AoxCkySv34&t=22s)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label?` | `string` | label counter |

#### Returns

`void`

#### Defined in

[globals.d.ts:74](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L74)

___

### countReset

▸ **countReset**(`label?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label?` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:75](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L75)

___

### debug

▸ **debug**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:76](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L76)

___

### dir

▸ **dir**(`item?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item?` | `any` |
| `options?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:77](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L77)

___

### dirxml

▸ **dirxml**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:78](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L78)

___

### error

▸ **error**(...`data`): `void`

Log to stderr in your terminal

Appears in red

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...data` | `any`[] | something to display |

#### Returns

`void`

#### Defined in

[globals.d.ts:86](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L86)

___

### group

▸ **group**(...`data`): `void`

Does nothing currently

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:88](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L88)

___

### groupCollapsed

▸ **groupCollapsed**(...`data`): `void`

Does nothing currently

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:90](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L90)

___

### groupEnd

▸ **groupEnd**(): `void`

Does nothing currently

#### Returns

`void`

#### Defined in

[globals.d.ts:92](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L92)

___

### info

▸ **info**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:93](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L93)

___

### log

▸ **log**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:94](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L94)

___

### table

▸ **table**(`tabularData?`, `properties?`): `void`

Does nothing currently

#### Parameters

| Name | Type |
| :------ | :------ |
| `tabularData?` | `any` |
| `properties?` | `string`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:96](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L96)

___

### time

▸ **time**(`label?`): `void`

Begin a timer to log with [timeEnd](globals.console.md#timeend)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label?` | `string` | The label to use for the timer  ```ts  console.time("how long????"); for (let i = 0; i < 999999; i++) {    // do stuff    let x = i * i; } console.timeEnd("how long????"); ``` |

#### Returns

`void`

#### Defined in

[globals.d.ts:111](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L111)

___

### timeEnd

▸ **timeEnd**(`label?`): `void`

End a timer to log with [time](globals.console.md#time)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label?` | `string` | The label to use for the timer  ```ts  console.time("how long????"); for (let i = 0; i < 999999; i++) {  // do stuff  let x = i * i; } console.timeEnd("how long????"); ``` |

#### Returns

`void`

#### Defined in

[globals.d.ts:126](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L126)

___

### timeLog

▸ **timeLog**(`label?`, ...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label?` | `string` |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:127](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L127)

___

### timeStamp

▸ **timeStamp**(`label?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label?` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:128](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L128)

___

### trace

▸ **trace**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:129](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L129)

___

### warn

▸ **warn**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[globals.d.ts:130](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/globals.d.ts#L130)
