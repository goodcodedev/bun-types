# Namespace: "os"

[os](os.md)."os"

The `os` module provides operating system-related utility methods and
properties. It can be accessed using:

```js
const os = require('os');
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/os.js)

## Table of contents

### Namespaces

- [constants](os._os_.constants.md)

### Interfaces

- [CpuInfo](../interfaces/os._os_.CpuInfo.md)
- [NetworkInterfaceBase](../interfaces/os._os_.NetworkInterfaceBase.md)
- [NetworkInterfaceInfoIPv4](../interfaces/os._os_.NetworkInterfaceInfoIPv4.md)
- [NetworkInterfaceInfoIPv6](../interfaces/os._os_.NetworkInterfaceInfoIPv6.md)
- [UserInfo](../interfaces/os._os_.UserInfo.md)

### Type Aliases

- [NetworkInterfaceInfo](os._os_.md#networkinterfaceinfo)
- [SignalConstants](os._os_.md#signalconstants)

### Variables

- [EOL](os._os_.md#eol)
- [devNull](os._os_.md#devnull)

### Functions

- [arch](os._os_.md#arch)
- [cpus](os._os_.md#cpus)
- [endianness](os._os_.md#endianness)
- [freemem](os._os_.md#freemem)
- [getPriority](os._os_.md#getpriority)
- [homedir](os._os_.md#homedir)
- [hostname](os._os_.md#hostname)
- [loadavg](os._os_.md#loadavg)
- [networkInterfaces](os._os_.md#networkinterfaces)
- [platform](os._os_.md#platform)
- [release](os._os_.md#release)
- [setPriority](os._os_.md#setpriority)
- [tmpdir](os._os_.md#tmpdir)
- [totalmem](os._os_.md#totalmem)
- [type](os._os_.md#type)
- [uptime](os._os_.md#uptime)
- [userInfo](os._os_.md#userinfo)
- [version](os._os_.md#version)

## Type Aliases

### NetworkInterfaceInfo

Ƭ **NetworkInterfaceInfo**: [`NetworkInterfaceInfoIPv4`](../interfaces/os._os_.NetworkInterfaceInfoIPv4.md) \| [`NetworkInterfaceInfoIPv6`](../interfaces/os._os_.NetworkInterfaceInfoIPv6.md)

#### Defined in

[os.d.ts:43](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L43)

___

### SignalConstants

Ƭ **SignalConstants**: { [key in Signals]: number }

#### Defined in

[os.d.ts:222](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L222)

## Variables

### EOL

• `Const` **EOL**: `string`

#### Defined in

[os.d.ts:378](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L378)

___

### devNull

• `Const` **devNull**: `string`

#### Defined in

[os.d.ts:377](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L377)

## Functions

### arch

▸ **arch**(): `string`

Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'mips'`,`'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, and `'x64'`.

The return value is equivalent to `process.arch`.

#### Returns

`string`

#### Defined in

[os.d.ts:385](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L385)

___

### cpus

▸ **cpus**(): [`CpuInfo`](../interfaces/os._os_.CpuInfo.md)[]

Returns an array of objects containing information about each logical CPU core.

The properties included on each object include:

```js
[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20
    }
  },
]
```

`nice` values are POSIX-only. On Windows, the `nice` values of all processors
are always 0.

#### Returns

[`CpuInfo`](../interfaces/os._os_.CpuInfo.md)[]

#### Defined in

[os.d.ts:129](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L129)

___

### endianness

▸ **endianness**(): ``"BE"`` \| ``"LE"``

Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.

Possible values are `'BE'` for big endian and `'LE'` for little endian.

#### Returns

``"BE"`` \| ``"LE"``

#### Defined in

[os.d.ts:412](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L412)

___

### freemem

▸ **freemem**(): `number`

Returns the amount of free system memory in bytes as an integer.

#### Returns

`number`

#### Defined in

[os.d.ts:67](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L67)

___

### getPriority

▸ **getPriority**(`pid?`): `number`

Returns the scheduling priority for the process specified by `pid`. If `pid` is
not provided or is `0`, the priority of the current process is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pid?` | `number` | The process ID to retrieve scheduling priority for. |

#### Returns

`number`

#### Defined in

[os.d.ts:418](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L418)

___

### homedir

▸ **homedir**(): `string`

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

#### Returns

`string`

#### Defined in

[os.d.ts:207](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L207)

___

### hostname

▸ **hostname**(): `string`

Returns the host name of the operating system as a string.

#### Returns

`string`

#### Defined in

[os.d.ts:49](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L49)

___

### loadavg

▸ **loadavg**(): `number`[]

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.

The load average is a Unix-specific concept. On Windows, the return value is
always `[0, 0, 0]`.

#### Returns

`number`[]

#### Defined in

[os.d.ts:59](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L59)

___

### networkInterfaces

▸ **networkInterfaces**(): [`Dict`](../interfaces/globals.Dict.md)<[`NetworkInterfaceInfo`](os._os_.md#networkinterfaceinfo)[]\>

Returns an object containing network interfaces that have been assigned a
network address.

Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

```js
{
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128'
    }
  ],
  eth0: [
    {
      address: '192.168.1.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '01:02:03:0a:0b:0c',
      internal: false,
      cidr: '192.168.1.108/24'
    },
    {
      address: 'fe80::a00:27ff:fe4e:66a1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '01:02:03:0a:0b:0c',
      scopeid: 1,
      internal: false,
      cidr: 'fe80::a00:27ff:fe4e:66a1/64'
    }
  ]
}
```

#### Returns

[`Dict`](../interfaces/globals.Dict.md)<[`NetworkInterfaceInfo`](os._os_.md#networkinterfaceinfo)[]\>

#### Defined in

[os.d.ts:197](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L197)

___

### platform

▸ **platform**(): [`Platform`](globals.md#platform)

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are `'aix'`, `'darwin'`, `'freebsd'`,`'linux'`,`'openbsd'`, `'sunos'`, and `'win32'`.

The return value is equivalent to `process.platform`.

#### Returns

[`Platform`](globals.md#platform)

#### Defined in

[os.d.ts:400](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L400)

___

### release

▸ **release**(): `string`

Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `GetVersionExW()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

#### Defined in

[os.d.ts:144](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L144)

___

### setPriority

▸ **setPriority**(`priority`): `void`

Attempts to set the scheduling priority for the process specified by `pid`. If`pid` is not provided or is `0`, the process ID of the current process is used.

The `priority` input must be an integer between `-20` (high priority) and `19`(low priority). Due to differences between Unix priority levels and Windows
priority classes, `priority` is mapped to one of six priority constants in`os.constants.priority`. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set `priority` to one of the priority constants.

On Windows, setting priority to `PRIORITY_HIGHEST` requires elevated user
privileges. Otherwise the set priority will be silently reduced to`PRIORITY_HIGH`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The scheduling priority to assign to the process. |

#### Returns

`void`

#### Defined in

[os.d.ts:432](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L432)

▸ **setPriority**(`pid`, `priority`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |
| `priority` | `number` |

#### Returns

`void`

#### Defined in

[os.d.ts:433](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L433)

___

### tmpdir

▸ **tmpdir**(): `string`

Returns the operating system's default directory for temporary files as a
string.

#### Returns

`string`

#### Defined in

[os.d.ts:405](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L405)

___

### totalmem

▸ **totalmem**(): `number`

Returns the total amount of system memory in bytes as an integer.

#### Returns

`number`

#### Defined in

[os.d.ts:71](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L71)

___

### type

▸ **type**(): `string`

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

#### Returns

`string`

#### Defined in

[os.d.ts:137](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L137)

___

### uptime

▸ **uptime**(): `number`

Returns the system uptime in number of seconds.

#### Returns

`number`

#### Defined in

[os.d.ts:63](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L63)

___

### userInfo

▸ **userInfo**(`options`): [`UserInfo`](../interfaces/os._os_.UserInfo.md)<[`Buffer`](buffer._buffer_.md#buffer)\>

Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the `username`, `uid`, `gid`, `shell`, and `homedir`. On Windows, the `uid` and`gid` fields are `-1`, and `shell` is `null`.

The value of `homedir` returned by `os.userInfo()` is provided by the operating
system. This differs from the result of `os.homedir()`, which queries
environment variables for the home directory before falling back to the
operating system response.

Throws a `SystemError` if a user has no `username` or `homedir`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encoding` | ``"buffer"`` |

#### Returns

[`UserInfo`](../interfaces/os._os_.UserInfo.md)<[`Buffer`](buffer._buffer_.md#buffer)\>

#### Defined in

[os.d.ts:220](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L220)

▸ **userInfo**(`options?`): [`UserInfo`](../interfaces/os._os_.UserInfo.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.encoding` | [`BufferEncoding`](bun.md#bufferencoding) |

#### Returns

[`UserInfo`](../interfaces/os._os_.UserInfo.md)<`string`\>

#### Defined in

[os.d.ts:221](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L221)

___

### version

▸ **version**(): `string`

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

#### Defined in

[os.d.ts:392](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/os.d.ts#L392)
