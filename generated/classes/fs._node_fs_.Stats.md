# Class: Stats

[fs](../modules/fs.md).["node:fs"](../modules/fs._node_fs_.md).Stats

A `fs.Stats` object provides information about a file.

Objects returned from [stat](../modules/fs._node_fs_.md#stat), [lstat](../modules/fs._node_fs_.md#lstat) and [fstat](../modules/fs._node_fs_.md#fstat) and
their synchronous counterparts are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`, and the object will contain additional
nanosecond-precision properties suffixed with `Ns`.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

`bigint` version:

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

**`Since`**

v0.0.67

## Hierarchy

- [`StatsBase`](../interfaces/fs._fs_.StatsBase.md)<`number`\>

  ↳ **`Stats`**

## Table of contents

### Constructors

- [constructor](fs._node_fs_.Stats.md#constructor)

### Properties

- [atime](fs._node_fs_.Stats.md#atime)
- [atimeMs](fs._node_fs_.Stats.md#atimems)
- [birthtime](fs._node_fs_.Stats.md#birthtime)
- [birthtimeMs](fs._node_fs_.Stats.md#birthtimems)
- [blksize](fs._node_fs_.Stats.md#blksize)
- [blocks](fs._node_fs_.Stats.md#blocks)
- [ctime](fs._node_fs_.Stats.md#ctime)
- [ctimeMs](fs._node_fs_.Stats.md#ctimems)
- [dev](fs._node_fs_.Stats.md#dev)
- [gid](fs._node_fs_.Stats.md#gid)
- [ino](fs._node_fs_.Stats.md#ino)
- [mode](fs._node_fs_.Stats.md#mode)
- [mtime](fs._node_fs_.Stats.md#mtime)
- [mtimeMs](fs._node_fs_.Stats.md#mtimems)
- [nlink](fs._node_fs_.Stats.md#nlink)
- [rdev](fs._node_fs_.Stats.md#rdev)
- [size](fs._node_fs_.Stats.md#size)
- [uid](fs._node_fs_.Stats.md#uid)

### Methods

- [isBlockDevice](fs._node_fs_.Stats.md#isblockdevice)
- [isCharacterDevice](fs._node_fs_.Stats.md#ischaracterdevice)
- [isDirectory](fs._node_fs_.Stats.md#isdirectory)
- [isFIFO](fs._node_fs_.Stats.md#isfifo)
- [isFile](fs._node_fs_.Stats.md#isfile)
- [isSocket](fs._node_fs_.Stats.md#issocket)
- [isSymbolicLink](fs._node_fs_.Stats.md#issymboliclink)

## Constructors

### constructor

• **new Stats**()

#### Inherited from

StatsBase<number\>.constructor

## Properties

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[atime](../interfaces/fs._fs_.StatsBase.md#atime)

#### Defined in

[fs.d.ts:47](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L47)

___

### atimeMs

• **atimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[atimeMs](../interfaces/fs._fs_.StatsBase.md#atimems)

#### Defined in

[fs.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L43)

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[birthtime](../interfaces/fs._fs_.StatsBase.md#birthtime)

#### Defined in

[fs.d.ts:50](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L50)

___

### birthtimeMs

• **birthtimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[birthtimeMs](../interfaces/fs._fs_.StatsBase.md#birthtimems)

#### Defined in

[fs.d.ts:46](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L46)

___

### blksize

• **blksize**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[blksize](../interfaces/fs._fs_.StatsBase.md#blksize)

#### Defined in

[fs.d.ts:41](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L41)

___

### blocks

• **blocks**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[blocks](../interfaces/fs._fs_.StatsBase.md#blocks)

#### Defined in

[fs.d.ts:42](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L42)

___

### ctime

• **ctime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[ctime](../interfaces/fs._fs_.StatsBase.md#ctime)

#### Defined in

[fs.d.ts:49](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L49)

___

### ctimeMs

• **ctimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[ctimeMs](../interfaces/fs._fs_.StatsBase.md#ctimems)

#### Defined in

[fs.d.ts:45](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L45)

___

### dev

• **dev**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[dev](../interfaces/fs._fs_.StatsBase.md#dev)

#### Defined in

[fs.d.ts:33](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L33)

___

### gid

• **gid**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[gid](../interfaces/fs._fs_.StatsBase.md#gid)

#### Defined in

[fs.d.ts:38](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L38)

___

### ino

• **ino**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[ino](../interfaces/fs._fs_.StatsBase.md#ino)

#### Defined in

[fs.d.ts:34](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L34)

___

### mode

• **mode**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[mode](../interfaces/fs._fs_.StatsBase.md#mode)

#### Defined in

[fs.d.ts:35](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L35)

___

### mtime

• **mtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[mtime](../interfaces/fs._fs_.StatsBase.md#mtime)

#### Defined in

[fs.d.ts:48](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L48)

___

### mtimeMs

• **mtimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[mtimeMs](../interfaces/fs._fs_.StatsBase.md#mtimems)

#### Defined in

[fs.d.ts:44](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L44)

___

### nlink

• **nlink**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[nlink](../interfaces/fs._fs_.StatsBase.md#nlink)

#### Defined in

[fs.d.ts:36](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L36)

___

### rdev

• **rdev**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[rdev](../interfaces/fs._fs_.StatsBase.md#rdev)

#### Defined in

[fs.d.ts:39](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L39)

___

### size

• **size**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[size](../interfaces/fs._fs_.StatsBase.md#size)

#### Defined in

[fs.d.ts:40](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L40)

___

### uid

• **uid**: `number`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[uid](../interfaces/fs._fs_.StatsBase.md#uid)

#### Defined in

[fs.d.ts:37](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L37)

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isBlockDevice](../interfaces/fs._fs_.StatsBase.md#isblockdevice)

#### Defined in

[fs.d.ts:28](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L28)

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isCharacterDevice](../interfaces/fs._fs_.StatsBase.md#ischaracterdevice)

#### Defined in

[fs.d.ts:29](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L29)

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isDirectory](../interfaces/fs._fs_.StatsBase.md#isdirectory)

#### Defined in

[fs.d.ts:27](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L27)

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isFIFO](../interfaces/fs._fs_.StatsBase.md#isfifo)

#### Defined in

[fs.d.ts:31](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L31)

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isFile](../interfaces/fs._fs_.StatsBase.md#isfile)

#### Defined in

[fs.d.ts:26](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L26)

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isSocket](../interfaces/fs._fs_.StatsBase.md#issocket)

#### Defined in

[fs.d.ts:32](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L32)

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs._fs_.StatsBase.md).[isSymbolicLink](../interfaces/fs._fs_.StatsBase.md#issymboliclink)

#### Defined in

[fs.d.ts:30](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L30)
