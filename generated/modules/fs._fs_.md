# Namespace: "fs"

[fs](fs.md)."fs"

The `fs` module enables interacting with the file system in a
way modeled on standard POSIX functions.

```js
import * as fs from 'fs';
```

All file system operations have synchronous and callback
forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

## Table of contents

### Namespaces

- [constants](fs._fs_.constants.md)
- [realpathSync](fs._fs_.realpathSync.md)

### Classes

- [Dirent](../classes/fs._fs_.Dirent.md)
- [Stats](../classes/fs._fs_.Stats.md)

### Interfaces

- [Abortable](../interfaces/fs._fs_.Abortable.md)
- [BigIntOptions](../interfaces/fs._fs_.BigIntOptions.md)
- [BigIntStats](../interfaces/fs._fs_.BigIntStats.md)
- [CopyOptions](../interfaces/fs._fs_.CopyOptions.md)
- [MakeDirectoryOptions](../interfaces/fs._fs_.MakeDirectoryOptions.md)
- [ObjectEncodingOptions](../interfaces/fs._fs_.ObjectEncodingOptions.md)
- [OpenDirOptions](../interfaces/fs._fs_.OpenDirOptions.md)
- [ReadAsyncOptions](../interfaces/fs._fs_.ReadAsyncOptions.md)
- [ReadSyncOptions](../interfaces/fs._fs_.ReadSyncOptions.md)
- [ReadVResult](../interfaces/fs._fs_.ReadVResult.md)
- [RmDirOptions](../interfaces/fs._fs_.RmDirOptions.md)
- [RmOptions](../interfaces/fs._fs_.RmOptions.md)
- [StatOptions](../interfaces/fs._fs_.StatOptions.md)
- [StatSyncFn](../interfaces/fs._fs_.StatSyncFn.md)
- [StatSyncOptions](../interfaces/fs._fs_.StatSyncOptions.md)
- [StatsBase](../interfaces/fs._fs_.StatsBase.md)
- [WriteVResult](../interfaces/fs._fs_.WriteVResult.md)

### Type Aliases

- [EncodingOption](fs._fs_.md#encodingoption)
- [Mode](fs._fs_.md#mode)
- [OpenMode](fs._fs_.md#openmode)
- [ReadPosition](fs._fs_.md#readposition)
- [WriteFileOptions](fs._fs_.md#writefileoptions)

### Functions

- [access](fs._fs_.md#access)
- [accessSync](fs._fs_.md#accesssync)
- [appendFile](fs._fs_.md#appendfile)
- [appendFileSync](fs._fs_.md#appendfilesync)
- [chmod](fs._fs_.md#chmod)
- [chmodSync](fs._fs_.md#chmodsync)
- [chown](fs._fs_.md#chown)
- [chownSync](fs._fs_.md#chownsync)
- [close](fs._fs_.md#close)
- [closeSync](fs._fs_.md#closesync)
- [copyFile](fs._fs_.md#copyfile)
- [copyFileSync](fs._fs_.md#copyfilesync)
- [exists](fs._fs_.md#exists)
- [existsSync](fs._fs_.md#existssync)
- [fchmod](fs._fs_.md#fchmod)
- [fchmodSync](fs._fs_.md#fchmodsync)
- [fchown](fs._fs_.md#fchown)
- [fchownSync](fs._fs_.md#fchownsync)
- [fdatasync](fs._fs_.md#fdatasync)
- [fdatasyncSync](fs._fs_.md#fdatasyncsync)
- [fstat](fs._fs_.md#fstat)
- [fstatSync](fs._fs_.md#fstatsync)
- [fsync](fs._fs_.md#fsync)
- [fsyncSync](fs._fs_.md#fsyncsync)
- [ftruncate](fs._fs_.md#ftruncate)
- [ftruncateSync](fs._fs_.md#ftruncatesync)
- [futimes](fs._fs_.md#futimes)
- [futimesSync](fs._fs_.md#futimessync)
- [lchmod](fs._fs_.md#lchmod)
- [lchmodSync](fs._fs_.md#lchmodsync)
- [lchown](fs._fs_.md#lchown)
- [lchownSync](fs._fs_.md#lchownsync)
- [link](fs._fs_.md#link)
- [linkSync](fs._fs_.md#linksync)
- [lstat](fs._fs_.md#lstat)
- [lstatSync](fs._fs_.md#lstatsync)
- [lutimes](fs._fs_.md#lutimes)
- [lutimesSync](fs._fs_.md#lutimessync)
- [mkdir](fs._fs_.md#mkdir)
- [mkdirSync](fs._fs_.md#mkdirsync)
- [mkdtemp](fs._fs_.md#mkdtemp)
- [mkdtempSync](fs._fs_.md#mkdtempsync)
- [open](fs._fs_.md#open)
- [openSync](fs._fs_.md#opensync)
- [read](fs._fs_.md#read)
- [readFile](fs._fs_.md#readfile)
- [readFileSync](fs._fs_.md#readfilesync)
- [readSync](fs._fs_.md#readsync)
- [readdir](fs._fs_.md#readdir)
- [readdirSync](fs._fs_.md#readdirsync)
- [readlink](fs._fs_.md#readlink)
- [readlinkSync](fs._fs_.md#readlinksync)
- [readv](fs._fs_.md#readv)
- [readvSync](fs._fs_.md#readvsync)
- [realpath](fs._fs_.md#realpath)
- [realpathSync](fs._fs_.md#realpathsync)
- [rename](fs._fs_.md#rename)
- [renameSync](fs._fs_.md#renamesync)
- [rmdir](fs._fs_.md#rmdir)
- [rmdirSync](fs._fs_.md#rmdirsync)
- [stat](fs._fs_.md#stat)
- [statSync](fs._fs_.md#statsync)
- [symlink](fs._fs_.md#symlink)
- [symlinkSync](fs._fs_.md#symlinksync)
- [truncate](fs._fs_.md#truncate)
- [truncateSync](fs._fs_.md#truncatesync)
- [unlink](fs._fs_.md#unlink)
- [unlinkSync](fs._fs_.md#unlinksync)
- [utimes](fs._fs_.md#utimes)
- [utimesSync](fs._fs_.md#utimessync)
- [write](fs._fs_.md#write)
- [writeFile](fs._fs_.md#writefile)
- [writeFileSync](fs._fs_.md#writefilesync)
- [writeSync](fs._fs_.md#writesync)
- [writev](fs._fs_.md#writev)
- [writevSync](fs._fs_.md#writevsync)

## Type Aliases

### EncodingOption

Ƭ **EncodingOption**: [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) \| [`BufferEncoding`](bun.md#bufferencoding) \| `undefined` \| ``null``

#### Defined in

[fs.d.ts:18](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L18)

___

### Mode

Ƭ **Mode**: `number` \| `string`

#### Defined in

[fs.d.ts:24](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L24)

___

### OpenMode

Ƭ **OpenMode**: `number` \| `string`

#### Defined in

[fs.d.ts:23](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L23)

___

### ReadPosition

Ƭ **ReadPosition**: `number` \| `bigint`

#### Defined in

[fs.d.ts:2204](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2204)

___

### WriteFileOptions

Ƭ **WriteFileOptions**: [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & [`Abortable`](../interfaces/fs._fs_.Abortable.md) & { `flag?`: `string` ; `mode?`: [`Mode`](fs._fs_.md#mode)  } \| [`BufferEncoding`](bun.md#bufferencoding) \| ``null``

#### Defined in

[fs.d.ts:2570](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2570)

## Functions

### access

▸ **access**(`path`, `mode?`, `callback`): `void`

Tests a user's permissions for the file or directory specified by `path`.
The `mode` argument is an optional integer that specifies the accessibility
checks to be performed. Check `File access constants` for possible values
of `mode`. It is possible to create a mask consisting of the bitwise OR of
two or more values (e.g. `fs.constants.W_OK | fs.constants.R_OK`).

The final argument, `callback`, is a callback function that is invoked with
a possible error argument. If any of the accessibility checks fail, the error
argument will be an `Error` object. The following examples check if`package.json` exists, and if it is readable or writable.

```js
import { access, constants } from 'fs';

const file = 'package.json';

// Check if the file exists in the current directory.
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file exists in the current directory, and if it is writable.
access(file, constants.F_OK | constants.W_OK, (err) => {
  if (err) {
    console.error(
      `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
  } else {
    console.log(`${file} exists, and it is writable`);
  }
});
```

Do not use `fs.access()` to check for the accessibility of a file before calling`fs.open()`, `fs.readFile()` or `fs.writeFile()`. Doing
so introduces a race condition, since other processes may change the file's
state between the two calls. Instead, user code should open/read/write the
file directly and handle the error raised if the file is not accessible.

**write (NOT RECOMMENDED)**

```js
import { access, open, close } from 'fs';

access('myfile', (err) => {
  if (!err) {
    console.error('myfile already exists');
    return;
  }

  open('myfile', 'wx', (err, fd) => {
    if (err) throw err;

    try {
      writeMyData(fd);
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
});
```

**write (RECOMMENDED)**

```js
import { open, close } from 'fs';

open('myfile', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }

    throw err;
  }

  try {
    writeMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});
```

**read (NOT RECOMMENDED)**

```js
import { access, open, close } from 'fs';
access('myfile', (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  open('myfile', 'r', (err, fd) => {
    if (err) throw err;

    try {
      readMyData(fd);
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
});
```

**read (RECOMMENDED)**

```js
import { open, close } from 'fs';

open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  try {
    readMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});
```

The "not recommended" examples above check for accessibility and then use the
file; the "recommended" examples are better because they use the file directly
and handle the error, if any.

In general, check for the accessibility of a file only if the file will not be
used directly, for example when its accessibility is a signal from another
process.

On Windows, access-control policies (ACLs) on a directory may limit access to
a file or directory. The `fs.access()` function, however, does not check the
ACL and therefore may report that a path is accessible even if the ACL restricts
the user from reading or writing to it.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `mode?` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:3260](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3260)

▸ **access**(`path`, `callback`): `void`

Asynchronously tests a user's permissions for the file specified by path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:3269](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3269)

___

### accessSync

▸ **accessSync**(`path`, `mode?`): `void`

Synchronously tests a user's permissions for the file or directory specified
by `path`. The `mode` argument is an optional integer that specifies the
accessibility checks to be performed. Check `File access constants` for
possible values of `mode`. It is possible to create a mask consisting of
the bitwise OR of two or more values
(e.g. `fs.constants.W_OK | fs.constants.R_OK`).

If any of the accessibility checks fail, an `Error` will be thrown. Otherwise,
the method will return `undefined`.

```js
import { accessSync, constants } from 'fs';

try {
  accessSync('etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can read/write');
} catch (err) {
  console.error('no access!');
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `mode?` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:3302](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3302)

___

### appendFile

▸ **appendFile**(`path`, `data`, `options`, `callback`): `void`

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

The `mode` option only affects the newly created file. See [open](fs._fs_.md#open) for more details.

```js
import { appendFile } from 'fs';

appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

If `options` is a string, then it specifies the encoding:

```js
import { appendFile } from 'fs';

appendFile('message.txt', 'data to append', 'utf8', callback);
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js
import { open, close, appendFile } from 'fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('message.txt', 'a', (err, fd) => {
  if (err) throw err;

  try {
    appendFile(fd, 'data to append', 'utf8', (err) => {
      closeFd(fd);
      if (err) throw err;
    });
  } catch (err) {
    closeFd(fd);
    throw err;
  }
});
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | filename or file descriptor |
| `data` | `string` \| `Uint8Array` | - |
| `options` | [`WriteFileOptions`](fs._fs_.md#writefileoptions) | - |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2745](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2745)

▸ **appendFile**(`file`, `data`, `callback`): `void`

Asynchronously append data to a file, creating the file if it does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2757](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2757)

___

### appendFileSync

▸ **appendFileSync**(`path`, `data`, `options?`): `void`

Synchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

The `mode` option only affects the newly created file. See [open](fs._fs_.md#open) for more details.

```js
import { appendFileSync } from 'fs';

try {
  appendFileSync('message.txt', 'data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  // Handle the error
}
```

If `options` is a string, then it specifies the encoding:

```js
import { appendFileSync } from 'fs';

appendFileSync('message.txt', 'data to append', 'utf8');
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js
import { openSync, closeSync, appendFileSync } from 'fs';

let fd;

try {
  fd = openSync('message.txt', 'a');
  appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
  // Handle the error
} finally {
  if (fd !== undefined)
    closeSync(fd);
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | filename or file descriptor |
| `data` | `string` \| `Uint8Array` | - |
| `options?` | [`WriteFileOptions`](fs._fs_.md#writefileoptions) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2828](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2828)

___

### chmod

▸ **chmod**(`path`, `mode`, `callback`): `void`

Asynchronously changes the permissions of a file. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html) documentation for more detail.

```js
import { chmod } from 'fs';

chmod('my_file.txt', 0o775, (err) => {
  if (err) throw err;
  console.log('The permissions for file "my_file.txt" have been changed!');
});
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `mode` | [`Mode`](fs._fs_.md#mode) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:474](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L474)

___

### chmodSync

▸ **chmodSync**(`path`, `mode`): `void`

For detailed information, see the documentation of the asynchronous version of
this API: [chmod](fs._fs_.md#chmod).

See the POSIX [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `mode` | [`Mode`](fs._fs_.md#mode) |

#### Returns

`void`

#### Defined in

[fs.d.ts:490](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L490)

___

### chown

▸ **chown**(`path`, `uid`, `gid`, `callback`): `void`

Asynchronously changes owner and group of a file. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:336](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L336)

___

### chownSync

▸ **chownSync**(`path`, `uid`, `gid`): `void`

Synchronously changes owner and group of a file. Returns `undefined`.
This is the synchronous version of [chown](fs._fs_.md#chown).

See the POSIX [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:360](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L360)

___

### close

▸ **close**(`fd`, `callback?`): `void`

Closes the file descriptor. No arguments other than a possible exception are
given to the completion callback.

Calling `fs.close()` on any file descriptor (`fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback?` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1861](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1861)

___

### closeSync

▸ **closeSync**(`fd`): `void`

Closes the file descriptor. Returns `undefined`.

Calling `fs.closeSync()` on any file descriptor (`fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:1878](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1878)

___

### copyFile

▸ **copyFile**(`src`, `dest`, `callback`): `void`

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists. No arguments other than a possible exception are given to the
callback function. Node.js makes no guarantees about the atomicity of the copy
operation. If an error occurs after the destination file has been opened for
writing, Node.js will attempt to remove the destination.

`mode` is an optional integer that specifies the behavior
of the copy operation. It is possible to create a mask consisting of the bitwise
OR of two or more values (e.g.`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`).

* `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already
exists.
* `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a
copy-on-write reflink. If the platform does not support copy-on-write, then a
fallback copy mechanism is used.
* `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
create a copy-on-write reflink. If the platform does not support
copy-on-write, then the operation will fail.

```js
import { copyFile, constants } from 'fs';

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
copyFile('source.txt', 'destination.txt', callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL, callback);
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](bun.md#pathlike) | source filename to copy |
| `dest` | [`PathLike`](bun.md#pathlike) | destination filename of the copy operation |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:3364](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3364)

▸ **copyFile**(`src`, `dest`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`PathLike`](bun.md#pathlike) |
| `dest` | [`PathLike`](bun.md#pathlike) |
| `mode` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:3369](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3369)

___

### copyFileSync

▸ **copyFileSync**(`src`, `dest`, `mode?`): `void`

Synchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists. Returns `undefined`. Node.js makes no guarantees about the
atomicity of the copy operation. If an error occurs after the destination file
has been opened for writing, Node.js will attempt to remove the destination.

`mode` is an optional integer that specifies the behavior
of the copy operation. It is possible to create a mask consisting of the bitwise
OR of two or more values (e.g.`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`).

* `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already
exists.
* `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a
copy-on-write reflink. If the platform does not support copy-on-write, then a
fallback copy mechanism is used.
* `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
create a copy-on-write reflink. If the platform does not support
copy-on-write, then the operation will fail.

```js
import { copyFileSync, constants } from 'fs';

// destination.txt will be created or overwritten by default.
copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
copyFileSync('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](bun.md#pathlike) | source filename to copy |
| `dest` | [`PathLike`](bun.md#pathlike) | destination filename of the copy operation |
| `mode?` | `number` | modifiers for copy operation. |

#### Returns

`void`

#### Defined in

[fs.d.ts:3416](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3416)

___

### exists

▸ **exists**(`path`, `callback`): `void`

Test whether or not the given path exists by checking with the file system.
Then call the `callback` argument with either true or false:

```js
import { exists } from 'fs';

exists('/etc/passwd', (e) => {
  console.log(e ? 'it exists' : 'no passwd!');
});
```

**The parameters for this callback are not consistent with other Node.js**
**callbacks.** Normally, the first parameter to a Node.js callback is an `err`parameter, optionally followed by other parameters. The `fs.exists()` callback
has only one boolean parameter. This is one reason `fs.access()` is recommended
instead of `fs.exists()`.

Using `fs.exists()` to check for the existence of a file before calling`fs.open()`, `fs.readFile()` or `fs.writeFile()` is not recommended. Doing
so introduces a race condition, since other processes may change the file's
state between the two calls. Instead, user code should open/read/write the
file directly and handle the error raised if the file does not exist.

**write (NOT RECOMMENDED)**

```js
import { exists, open, close } from 'fs';

exists('myfile', (e) => {
  if (e) {
    console.error('myfile already exists');
  } else {
    open('myfile', 'wx', (err, fd) => {
      if (err) throw err;

      try {
        writeMyData(fd);
      } finally {
        close(fd, (err) => {
          if (err) throw err;
        });
      }
    });
  }
});
```

**write (RECOMMENDED)**

```js
import { open, close } from 'fs';
open('myfile', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }

    throw err;
  }

  try {
    writeMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});
```

**read (NOT RECOMMENDED)**

```js
import { open, close, exists } from 'fs';

exists('myfile', (e) => {
  if (e) {
    open('myfile', 'r', (err, fd) => {
      if (err) throw err;

      try {
        readMyData(fd);
      } finally {
        close(fd, (err) => {
          if (err) throw err;
        });
      }
    });
  } else {
    console.error('myfile does not exist');
  }
});
```

**read (RECOMMENDED)**

```js
import { open, close } from 'fs';

open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  try {
    readMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});
```

The "not recommended" examples above check for existence and then use the
file; the "recommended" examples are better because they use the file directly
and handle the error, if any.

In general, check for the existence of a file only if the file won’t be
used directly, for example when its existence is a signal from another
process.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `callback` | (`exists`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:2962](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2962)

___

### existsSync

▸ **existsSync**(`path`): `boolean`

Returns `true` if the path exists, `false` otherwise.

For detailed information, see the documentation of the asynchronous version of
this API: [exists](fs._fs_.md#exists).

`fs.exists()` is deprecated, but `fs.existsSync()` is not. The `callback`parameter to `fs.exists()` accepts parameters that are inconsistent with other
Node.js callbacks. `fs.existsSync()` does not use a callback.

```js
import { existsSync } from 'fs';

if (existsSync('/etc/passwd'))
  console.log('The path exists.');
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |

#### Returns

`boolean`

#### Defined in

[fs.d.ts:2980](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2980)

___

### fchmod

▸ **fchmod**(`fd`, `mode`, `callback`): `void`

Sets the permissions on the file. No arguments other than a possible exception
are given to the completion callback.

See the POSIX [`fchmod(2)`](http://man7.org/linux/man-pages/man2/fchmod.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `mode` | [`Mode`](fs._fs_.md#mode) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:498](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L498)

___

### fchmodSync

▸ **fchmodSync**(`fd`, `mode`): `void`

Sets the permissions on the file. Returns `undefined`.

See the POSIX [`fchmod(2)`](http://man7.org/linux/man-pages/man2/fchmod.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `mode` | [`Mode`](fs._fs_.md#mode) |

#### Returns

`void`

#### Defined in

[fs.d.ts:513](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L513)

___

### fchown

▸ **fchown**(`fd`, `uid`, `gid`, `callback`): `void`

Sets the owner of the file. No arguments other than a possible exception are
given to the completion callback.

See the POSIX [`fchown(2)`](http://man7.org/linux/man-pages/man2/fchown.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:368](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L368)

___

### fchownSync

▸ **fchownSync**(`fd`, `uid`, `gid`): `void`

Sets the owner of the file. Returns `undefined`.

See the POSIX [`fchown(2)`](http://man7.org/linux/man-pages/man2/fchown.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | - |
| `uid` | `number` | The file's new owner's user id. |
| `gid` | `number` | The file's new group's group id. |

#### Returns

`void`

#### Defined in

[fs.d.ts:389](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L389)

___

### fdatasync

▸ **fdatasync**(`fd`, `callback`): `void`

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX [`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details. No arguments other
than a possible
exception are given to the completion callback.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:3311](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3311)

___

### fdatasyncSync

▸ **fdatasyncSync**(`fd`): `void`

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX [`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details. Returns `undefined`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:3324](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3324)

___

### fstat

▸ **fstat**(`fd`, `callback`): `void`

Invokes the callback with the `fs.Stats` for the file descriptor.

See the POSIX [`fstat(2)`](http://man7.org/linux/man-pages/man2/fstat.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:726](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L726)

▸ **fstat**(`fd`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint?`: ``false``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:730](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L730)

▸ **fstat**(`fd`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint`: ``true``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:739](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L739)

▸ **fstat**(`fd`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:746](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L746)

___

### fstatSync

▸ **fstatSync**(`fd`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Retrieves the `fs.Stats` for the file descriptor.

See the POSIX [`fstat(2)`](http://man7.org/linux/man-pages/man2/fstat.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options?` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:779](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L779)

▸ **fstatSync**(`fd`, `options`): [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:785](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L785)

▸ **fstatSync**(`fd`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options?` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:791](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L791)

___

### fsync

▸ **fsync**(`fd`, `callback`): `void`

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail. No arguments other
than a possible exception are given to the completion callback.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:2009](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2009)

___

### fsyncSync

▸ **fsyncSync**(`fd`): `void`

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail. Returns `undefined`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:2023](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2023)

___

### ftruncate

▸ **ftruncate**(`fd`, `len?`, `callback`): `void`

Truncates the file descriptor. No arguments other than a possible exception are
given to the completion callback.

See the POSIX [`ftruncate(2)`](http://man7.org/linux/man-pages/man2/ftruncate.2.html) documentation for more detail.

If the file referred to by the file descriptor was larger than `len` bytes, only
the first `len` bytes will be retained in the file.

For example, the following program retains only the first four bytes of the
file:

```js
import { open, close, ftruncate } from 'fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('temp.txt', 'r+', (err, fd) => {
  if (err) throw err;

  try {
    ftruncate(fd, 4, (err) => {
      closeFd(fd);
      if (err) throw err;
    });
  } catch (err) {
    closeFd(fd);
    if (err) throw err;
  }
});
```

If the file previously was shorter than `len` bytes, it is extended, and the
extended part is filled with null bytes (`'\0'`):

If `len` is negative then `0` will be used.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `len?` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:302](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L302)

▸ **ftruncate**(`fd`, `callback`): `void`

Asynchronous ftruncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:311](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L311)

___

### ftruncateSync

▸ **ftruncateSync**(`fd`, `len?`): `void`

Truncates the file descriptor. Returns `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [ftruncate](fs._fs_.md#ftruncate).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `len?` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:328](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L328)

___

### futimes

▸ **futimes**(`fd`, `atime`, `mtime`, `callback`): `void`

Change the file system timestamps of the object referenced by the supplied file
descriptor. See [utimes](fs._fs_.md#utimes).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | [`TimeLike`](bun.md#timelike) |
| `mtime` | [`TimeLike`](bun.md#timelike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1978](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1978)

___

### futimesSync

▸ **futimesSync**(`fd`, `atime`, `mtime`): `void`

Synchronous version of [futimes](fs._fs_.md#futimes). Returns `undefined`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | [`TimeLike`](bun.md#timelike) |
| `mtime` | [`TimeLike`](bun.md#timelike) |

#### Returns

`void`

#### Defined in

[fs.d.ts:2001](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2001)

___

### lchmod

▸ **lchmod**(`path`, `mode`, `callback`): `void`

Changes the permissions on a symbolic link. No arguments other than a possible
exception are given to the completion callback.

This method is only implemented on macOS.

See the POSIX [`lchmod(2)`](https://www.freebsd.org/cgi/man.cgi?query=lchmod&sektion=2) documentation for more detail.

**`Deprecated`**

Since v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `mode` | [`Mode`](fs._fs_.md#mode) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:523](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L523)

___

### lchmodSync

▸ **lchmodSync**(`path`, `mode`): `void`

Changes the permissions on a symbolic link. Returns `undefined`.

This method is only implemented on macOS.

See the POSIX [`lchmod(2)`](https://www.freebsd.org/cgi/man.cgi?query=lchmod&sektion=2) documentation for more detail.

**`Deprecated`**

Since v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `mode` | [`Mode`](fs._fs_.md#mode) |

#### Returns

`void`

#### Defined in

[fs.d.ts:541](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L541)

___

### lchown

▸ **lchown**(`path`, `uid`, `gid`, `callback`): `void`

Set the owner of the symbolic link. No arguments other than a possible
exception are given to the completion callback.

See the POSIX [`lchown(2)`](http://man7.org/linux/man-pages/man2/lchown.2.html) documentation for more detail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:396](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L396)

___

### lchownSync

▸ **lchownSync**(`path`, `uid`, `gid`): `void`

Set the owner for the path. Returns `undefined`.

See the POSIX [`lchown(2)`](http://man7.org/linux/man-pages/man2/lchown.2.html) documentation for more details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | - |
| `uid` | `number` | The file's new owner's user id. |
| `gid` | `number` | The file's new group's group id. |

#### Returns

`void`

#### Defined in

[fs.d.ts:420](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L420)

___

### link

▸ **link**(`existingPath`, `newPath`, `callback`): `void`

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. No arguments other than
a possible
exception are given to the completion callback.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](bun.md#pathlike) |
| `newPath` | [`PathLike`](bun.md#pathlike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:858](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L858)

___

### linkSync

▸ **linkSync**(`existingPath`, `newPath`): `void`

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. Returns `undefined`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](bun.md#pathlike) |
| `newPath` | [`PathLike`](bun.md#pathlike) |

#### Returns

`void`

#### Defined in

[fs.d.ts:878](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L878)

___

### lstat

▸ **lstat**(`path`, `callback`): `void`

Retrieves the `fs.Stats` for the symbolic link referred to by the path.
The callback gets two arguments `(err, stats)` where `stats` is a `fs.Stats` object. `lstat()` is identical to `stat()`, except that if `path` is a symbolic
link, then the link itself is stat-ed, not the file that it refers to.

See the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) documentation for more details.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:800](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L800)

▸ **lstat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint?`: ``false``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:804](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L804)

▸ **lstat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint`: ``true``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:813](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L813)

▸ **lstat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:820](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L820)

___

### lstatSync

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `undefined` | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:674](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L674)

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:675](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L675)

▸ **lstatSync**(`path`, `options`): [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } | - |

#### Returns

[`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:682](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L682)

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:690](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L690)

▸ **lstatSync**(`path`, `options`): [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint`: ``true``  } | - |

#### Returns

[`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:697](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L697)

▸ **lstatSync**(`path`, `options`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:703](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L703)

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:710](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L710)

___

### lutimes

▸ **lutimes**(`path`, `atime`, `mtime`, `callback`): `void`

Changes the access and modification times of a file in the same way as [utimes](fs._fs_.md#utimes), with the difference that if the path refers to a symbolic
link, then the link is not dereferenced: instead, the timestamps of the
symbolic link itself are changed.

No arguments other than a possible exception are given to the completion
callback.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `atime` | [`TimeLike`](bun.md#timelike) |
| `mtime` | [`TimeLike`](bun.md#timelike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:430](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L430)

___

### lutimesSync

▸ **lutimesSync**(`path`, `atime`, `mtime`): `void`

Change the file system timestamps of the symbolic link referenced by `path`.
Returns `undefined`, or throws an exception when parameters are incorrect or
the operation fails. This is the synchronous version of [lutimes](fs._fs_.md#lutimes).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `atime` | [`TimeLike`](bun.md#timelike) |
| `mtime` | [`TimeLike`](bun.md#timelike) |

#### Returns

`void`

#### Defined in

[fs.d.ts:457](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L457)

___

### mkdir

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronously creates a directory.

The callback is given a possible exception and, if `recursive` is `true`, the
first directory path created, `(err[, path])`.`path` can still be `undefined` when `recursive` is `true`, if no directory was
created.

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`property indicating whether parent directories should be created. Calling`fs.mkdir()` when `path` is a directory that
exists results in an error only
when `recursive` is false.

```js
import { mkdir } from 'fs';

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});
```

On Windows, using `fs.mkdir()` on the root directory even with recursion will
result in an error:

```js
import { mkdir } from 'fs';

mkdir('/', { recursive: true }, (err) => {
  // => [Error: EPERM: operation not permitted, mkdir 'C:\']
});
```

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs._fs_.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `path?`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:1388](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1388)

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`Mode`](fs._fs_.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs._fs_.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1401](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1401)

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`Mode`](fs._fs_.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs._fs_.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `path?`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1418](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1418)

▸ **mkdir**(`path`, `callback`): `void`

Asynchronous mkdir(2) - create a directory with a mode of `0o777`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1428](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1428)

___

### mkdirSync

▸ **mkdirSync**(`path`, `options`): `string` \| `undefined`

Synchronously creates a directory. Returns `undefined`, or if `recursive` is`true`, the first directory path created.
This is the synchronous version of [mkdir](fs._fs_.md#mkdir).

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs._fs_.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |

#### Returns

`string` \| `undefined`

#### Defined in

[fs.d.ts:1475](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1475)

▸ **mkdirSync**(`path`, `options?`): `void`

Synchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](fs._fs_.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs._fs_.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`void`

#### Defined in

[fs.d.ts:1487](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1487)

▸ **mkdirSync**(`path`, `options?`): `string` \| `undefined`

Synchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](fs._fs_.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs._fs_.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`string` \| `undefined`

#### Defined in

[fs.d.ts:1502](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1502)

___

### mkdtemp

▸ **mkdtemp**(`prefix`, `options`, `callback`): `void`

Creates a unique temporary directory.

Generates six random characters to be appended behind a required`prefix` to create a unique temporary directory. Due to platform
inconsistencies, avoid trailing `X` characters in `prefix`. Some platforms,
notably the BSDs, can return more than six random characters, and replace
trailing `X` characters in `prefix` with random characters.

The created directory path is passed as a string to the callback's second
parameter.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js
import { mkdtemp } from 'fs';

mkdtemp(path.join(os.tmpdir(), 'foo-'), (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
});
```

The `fs.mkdtemp()` method will append the six randomly selected characters
directly to the `prefix` string. For instance, given a directory `/tmp`, if the
intention is to create a temporary directory _within_`/tmp`, the `prefix`must end with a trailing platform-specific path separator
(`require('path').sep`).

```js
import { tmpdir } from 'os';
import { mkdtemp } from 'fs';

// The parent directory for the new temporary directory
const tmpDir = tmpdir();

// This method is *INCORRECT*:
mkdtemp(tmpDir, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Will print something similar to `/tmpabc123`.
  // A new temporary directory is created at the file system root
  // rather than *within* the /tmp directory.
});

// This method is *CORRECT*:
import { sep } from 'path';
mkdtemp(`${tmpDir}${sep}`, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Will print something similar to `/tmp/abc123`.
  // A new temporary directory is created within
  // the /tmp directory.
});
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options` | [`EncodingOption`](fs._fs_.md#encodingoption) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `folder`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:1563](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1563)

▸ **mkdtemp**(`prefix`, `options`, `callback`): `void`

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `folder`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1573](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1573)

▸ **mkdtemp**(`prefix`, `options`, `callback`): `void`

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`EncodingOption`](fs._fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `folder`: `string` \| [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1587](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1587)

▸ **mkdtemp**(`prefix`, `callback`): `void`

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `folder`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:1598](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1598)

___

### mkdtempSync

▸ **mkdtempSync**(`prefix`, `options?`): `string`

Returns the created directory path.

For detailed information, see the documentation of the asynchronous version of
this API: [mkdtemp](fs._fs_.md#mkdtemp).

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options?` | [`EncodingOption`](fs._fs_.md#encodingoption) |

#### Returns

`string`

#### Defined in

[fs.d.ts:1641](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1641)

▸ **mkdtempSync**(`prefix`, `options`): [`Buffer`](buffer._buffer_.md#buffer)

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](../interfaces/bun.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:1647](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1647)

▸ **mkdtempSync**(`prefix`, `options?`): `string` \| [`Buffer`](buffer._buffer_.md#buffer)

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`EncodingOption`](fs._fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| [`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:1653](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1653)

___

### open

▸ **open**(`path`, `flags?`, `mode?`, `callback`): `void`

Asynchronous file open. See the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more details.

`mode` sets the file mode (permission and sticky bits), but only if the file was
created. On Windows, only the write permission can be manipulated; see [chmod](fs._fs_.md#chmod).

The callback gets two arguments `(err, fd)`.

Some characters (`< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by [this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

Functions based on `fs.open()` exhibit this behavior as well:`fs.writeFile()`, `fs.readFile()`, etc.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | - |
| `flags?` | [`OpenMode`](fs._fs_.md#openmode) | See `support of file system `flags``. |
| `mode?` | [`Mode`](fs._fs_.md#mode) |  |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `fd`: `number`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1896](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1896)

▸ **open**(`path`, `flags`, `callback`): `void`

Asynchronous open(2) - open and possibly create a file. If the file is created, its mode will be `0o666`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `flags` | [`OpenMode`](fs._fs_.md#openmode) | - |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `fd`: `number`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1906](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1906)

___

### openSync

▸ **openSync**(`path`, `flags?`, `mode?`): `number`

Returns an integer representing the file descriptor.

For detailed information, see the documentation of the asynchronous version of
this API: [open](fs._fs_.md#open).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `flags?` | [`OpenMode`](fs._fs_.md#openmode) |
| `mode?` | [`Mode`](fs._fs_.md#mode) |

#### Returns

`number`

#### Defined in

[fs.d.ts:1932](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1932)

___

### read

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

Read data from the file specified by `fd`.

The callback is given the three arguments, `(err, bytesRead, buffer)`.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

If this method is invoked as its `util.promisify()` ed version, it returns
a promise for an `Object` with `bytesRead` and `buffer` properties.

**`Since`**

v0.0.67

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | - |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset` | `number` | The position in `buffer` to write the data to. |
| `length` | `number` | The number of bytes to read. |
| `position` | [`ReadPosition`](fs._fs_.md#readposition) | Specifies where to begin reading from in the file. If `position` is `null` or `-1 `, data will be read from the current file position, and the file position will be updated. If `position` is an integer, the file position will be unchanged. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesRead`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2240](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2240)

▸ **read**<`TBuffer`\>(`fd`, `options`, `callback`): `void`

Similar to the above `fs.read` function, this version takes an optional `options` object.
If not otherwise specified in an `options` object,
`buffer` defaults to `Buffer.alloc(16384)`,
`offset` defaults to `0`,
`length` defaults to `buffer.byteLength`, `- offset` as of Node 17.6.0
`position` defaults to `null`

**`Since`**

v0.0.67

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`ReadAsyncOptions`](../interfaces/fs._fs_.ReadAsyncOptions.md)<`TBuffer`\> |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesRead`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:2261](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2261)

▸ **read**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesRead`: `number`, `buffer`: `ArrayBufferView`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:2270](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2270)

___

### readFile

▸ **readFile**(`path`, `options`, `callback`): `void`

Asynchronously reads the entire contents of a file.

```js
import { readFile } from 'fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

The callback is passed two arguments `(err, data)`, where `data` is the
contents of the file.

If no encoding is specified, then the raw buffer is returned.

If `options` is a string, then it specifies the encoding:

```js
import { readFile } from 'fs';

readFile('/etc/passwd', 'utf8', callback);
```

When the path is a directory, the behavior of `fs.readFile()` and [readFileSync](fs._fs_.md#readfilesync) is platform-specific. On macOS, Linux, and Windows, an
error will be returned. On FreeBSD, a representation of the directory's contents
will be returned.

```js
import { readFile } from 'fs';

// macOS, Linux, and Windows
readFile('<directory>', (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
});

//  FreeBSD
readFile('<directory>', (err, data) => {
  // => null, <data>
});
```

It is possible to abort an ongoing request using an `AbortSignal`. If a
request is aborted the callback is called with an `AbortError`:

```js
import { readFile } from 'fs';

const controller = new AbortController();
const signal = controller.signal;
readFile(fileInfo[0].name, { signal }, (err, buf) => {
  // ...
});
// When you want to abort the request
controller.abort();
```

The `fs.readFile()` function buffers the entire file. To minimize memory costs,
when possible prefer streaming via `fs.createReadStream()`.

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | filename or file descriptor |
| `options` | { `encoding?`: ``null`` ; `flag?`: `string`  } & [`Abortable`](../interfaces/fs._fs_.Abortable.md) | - |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `data`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2402](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2402)

▸ **readFile**(`path`, `options`, `callback`): `void`

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | [`BufferEncoding`](bun.md#bufferencoding) \| { `encoding`: [`BufferEncoding`](bun.md#bufferencoding) ; `flag?`: `string`  } & [`Abortable`](../interfaces/fs._fs_.Abortable.md) | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `data`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2420](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2420)

▸ **readFile**(`path`, `options`, `callback`): `void`

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | [`BufferEncoding`](bun.md#bufferencoding) \| [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & { `flag?`: `string`  } & [`Abortable`](../interfaces/fs._fs_.Abortable.md) | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `data`: `string` \| [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2437](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2437)

▸ **readFile**(`path`, `callback`): `void`

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `data`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2453](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2453)

___

### readFileSync

▸ **readFileSync**(`path`, `options?`): [`Buffer`](buffer._buffer_.md#buffer)

Returns the contents of the `path`.

For detailed information, see the documentation of the asynchronous version of
this API: [readFile](fs._fs_.md#readfile).

If the `encoding` option is specified then this function returns a
string. Otherwise it returns a buffer.

Similar to [readFile](fs._fs_.md#readfile), when the path is a directory, the behavior of`fs.readFileSync()` is platform-specific.

```js
import { readFileSync } from 'fs';

// macOS, Linux, and Windows
readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
readFileSync('<directory>'); // => <data>
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | filename or file descriptor |
| `options?` | `Object` | - |
| `options.encoding?` | ``null`` | - |
| `options.flag?` | `string` | - |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:2531](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2531)

▸ **readFileSync**(`path`, `options`): `string`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | [`BufferEncoding`](bun.md#bufferencoding) \| { `encoding`: [`BufferEncoding`](bun.md#bufferencoding) ; `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string`

#### Defined in

[fs.d.ts:2545](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2545)

▸ **readFileSync**(`path`, `options?`): `string` \| [`Buffer`](buffer._buffer_.md#buffer)

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | [`BufferEncoding`](bun.md#bufferencoding) \| [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & { `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string` \| [`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:2561](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2561)

___

### readSync

▸ **readSync**(`fd`, `buffer`, `offset`, `length`, `position`): `number`

Returns the number of `bytesRead`.

For detailed information, see the documentation of the asynchronous version of
this API: [read](fs._fs_.md#read).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `ArrayBufferView` |
| `offset` | `number` |
| `length` | `number` |
| `position` | [`ReadPosition`](fs._fs_.md#readposition) |

#### Returns

`number`

#### Defined in

[fs.d.ts:2320](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2320)

▸ **readSync**(`fd`, `buffer`, `opts?`): `number`

Similar to the above `fs.readSync` function, this version takes an optional `options` object.
If no `options` object is specified, it will default with the above values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `ArrayBufferView` |
| `opts?` | [`ReadSyncOptions`](../interfaces/fs._fs_.ReadSyncOptions.md) |

#### Returns

`number`

#### Defined in

[fs.d.ts:2331](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2331)

___

### readdir

▸ **readdir**(`path`, `options`, `callback`): `void`

Reads the contents of a directory. The callback gets two arguments `(err, files)`where `files` is an array of the names of the files in the directory excluding`'.'` and `'..'`.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames passed to the callback. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the `files` array will contain `fs.Dirent` objects.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`BufferEncoding`](bun.md#bufferencoding) \| { `encoding`: [`BufferEncoding`](bun.md#bufferencoding) ; `withFileTypes?`: ``false``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `files`: `string`[]) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:1670](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1670)

▸ **readdir**(`path`, `options`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `files`: [`Buffer`](buffer._buffer_.md#buffer)[]) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1687](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1687)

▸ **readdir**(`path`, `options`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncoding`](bun.md#bufferencoding) \| [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `files`: `string`[] \| [`Buffer`](buffer._buffer_.md#buffer)[]) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1702](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1702)

▸ **readdir**(`path`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `files`: `string`[]) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1717](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1717)

▸ **readdir**(`path`, `options`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `files`: [`Dirent`](../classes/fs._fs_.Dirent.md)[]) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1726](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1726)

___

### readdirSync

▸ **readdirSync**(`path`, `options?`): `string`[]

Reads the contents of the directory.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames returned. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options?` | [`BufferEncoding`](bun.md#bufferencoding) \| { `encoding`: [`BufferEncoding`](bun.md#bufferencoding) ; `withFileTypes?`: ``false``  } |

#### Returns

`string`[]

#### Defined in

[fs.d.ts:1802](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1802)

▸ **readdirSync**(`path`, `options`): [`Buffer`](buffer._buffer_.md#buffer)[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)[]

#### Defined in

[fs.d.ts:1817](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1817)

▸ **readdirSync**(`path`, `options?`): `string`[] \| [`Buffer`](buffer._buffer_.md#buffer)[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BufferEncoding`](bun.md#bufferencoding) \| [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`[] \| [`Buffer`](buffer._buffer_.md#buffer)[]

#### Defined in

[fs.d.ts:1831](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1831)

▸ **readdirSync**(`path`, `options`): [`Dirent`](../classes/fs._fs_.Dirent.md)[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](../interfaces/fs._fs_.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

[`Dirent`](../classes/fs._fs_.Dirent.md)[]

#### Defined in

[fs.d.ts:1845](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1845)

___

### readlink

▸ **readlink**(`path`, `options`, `callback`): `void`

Reads the contents of the symbolic link referred to by `path`. The callback gets
two arguments `(err, linkString)`.

See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path passed to the callback. If the `encoding` is set to `'buffer'`,
the link path returned will be passed as a `Buffer` object.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`EncodingOption`](fs._fs_.md#encodingoption) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `linkString`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:965](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L965)

▸ **readlink**(`path`, `options`, `callback`): `void`

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../interfaces/bun.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `linkString`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:976](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L976)

▸ **readlink**(`path`, `options`, `callback`): `void`

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`EncodingOption`](fs._fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `linkString`: `string` \| [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:987](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L987)

▸ **readlink**(`path`, `callback`): `void`

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `linkString`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:998](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L998)

___

### readlinkSync

▸ **readlinkSync**(`path`, `options?`): `string`

Returns the symbolic link's string value.

See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `'buffer'`,
the link path returned will be passed as a `Buffer` object.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options?` | [`EncodingOption`](fs._fs_.md#encodingoption) |

#### Returns

`string`

#### Defined in

[fs.d.ts:1042](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1042)

▸ **readlinkSync**(`path`, `options`): [`Buffer`](buffer._buffer_.md#buffer)

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../interfaces/bun.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:1048](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1048)

▸ **readlinkSync**(`path`, `options?`): `string` \| [`Buffer`](buffer._buffer_.md#buffer)

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](fs._fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| [`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:1054](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1054)

___

### readv

▸ **readv**(`fd`, `buffers`, `cb`): `void`

Read from a file specified by `fd` and write to an array of `ArrayBufferView`s
using `readv()`.

`position` is the offset from the beginning of the file from where data
should be read. If `typeof position !== 'number'`, the data will be read
from the current position.

The callback will be given three arguments: `err`, `bytesRead`, and`buffers`. `bytesRead` is how many bytes were read from the file.

If this method is invoked as its `util.promisify()` ed version, it returns
a promise for an `Object` with `bytesRead` and `buffers` properties.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `cb` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesRead`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:3489](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3489)

▸ **readv**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position` | `number` |
| `cb` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesRead`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:3498](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3498)

___

### readvSync

▸ **readvSync**(`fd`, `buffers`, `position?`): `number`

For detailed information, see the documentation of the asynchronous version of
this API: [readv](fs._fs_.md#readv).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`number`

The number of bytes read.

#### Defined in

[fs.d.ts:3525](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3525)

___

### realpath

▸ **realpath**(`path`, `options`, `callback`): `void`

Asynchronously computes the canonical pathname by resolving `.`, `..` and
symbolic links.

A canonical pathname is not necessarily unique. Hard links and bind mounts can
expose a file system entity through many pathnames.

This function behaves like [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html), with some exceptions:

1. No case conversion is performed on case-insensitive file systems.
2. The maximum number of symbolic links is platform-independent and generally
(much) higher than what the native [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html) implementation supports.

The `callback` gets two arguments `(err, resolvedPath)`. May use `process.cwd`to resolve relative paths.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path passed to the callback. If the `encoding` is set to `'buffer'`,
the path returned will be passed as a `Buffer` object.

If `path` resolves to a socket or a pipe, the function will return a system
dependent name for that object.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`EncodingOption`](fs._fs_.md#encodingoption) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `resolvedPath`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:1084](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1084)

▸ **realpath**(`path`, `options`, `callback`): `void`

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../interfaces/bun.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `resolvedPath`: [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1095](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1095)

▸ **realpath**(`path`, `options`, `callback`): `void`

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`EncodingOption`](fs._fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `resolvedPath`: `string` \| [`Buffer`](buffer._buffer_.md#buffer)) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1106](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1106)

▸ **realpath**(`path`, `callback`): `void`

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `resolvedPath`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:1117](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1117)

___

### realpathSync

▸ **realpathSync**(`path`, `options?`): `string`

Returns the resolved pathname.

For detailed information, see the documentation of the asynchronous version of
this API: [realpath](fs._fs_.md#realpath).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options?` | [`EncodingOption`](fs._fs_.md#encodingoption) |

#### Returns

`string`

#### Defined in

[fs.d.ts:1196](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1196)

▸ **realpathSync**(`path`, `options`): [`Buffer`](buffer._buffer_.md#buffer)

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../interfaces/bun.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

[`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:1202](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1202)

▸ **realpathSync**(`path`, `options?`): `string` \| [`Buffer`](buffer._buffer_.md#buffer)

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](fs._fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| [`Buffer`](buffer._buffer_.md#buffer)

#### Defined in

[fs.d.ts:1208](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1208)

___

### rename

▸ **rename**(`oldPath`, `newPath`, `callback`): `void`

Asynchronously rename file at `oldPath` to the pathname provided
as `newPath`. In the case that `newPath` already exists, it will
be overwritten. If there is a directory at `newPath`, an error will
be raised instead. No arguments other than a possible exception are
given to the completion callback.

See also: [`rename(2)`](http://man7.org/linux/man-pages/man2/rename.2.html).

```js
import { rename } from 'fs';

rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | [`PathLike`](bun.md#pathlike) |
| `newPath` | [`PathLike`](bun.md#pathlike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:188](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L188)

___

### renameSync

▸ **renameSync**(`oldPath`, `newPath`): `void`

Renames the file from `oldPath` to `newPath`. Returns `undefined`.

See the POSIX [`rename(2)`](http://man7.org/linux/man-pages/man2/rename.2.html) documentation for more details.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | [`PathLike`](bun.md#pathlike) |
| `newPath` | [`PathLike`](bun.md#pathlike) |

#### Returns

`void`

#### Defined in

[fs.d.ts:209](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L209)

___

### rmdir

▸ **rmdir**(`path`, `callback`): `void`

Asynchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). No arguments other than a possible exception are given
to the completion callback.

Using `fs.rmdir()` on a file (not a directory) results in an `ENOENT` error on
Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use rm with options `{ recursive: true, force: true }`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1286](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1286)

▸ **rmdir**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`RmDirOptions`](../interfaces/fs._fs_.RmDirOptions.md) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1287](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1287)

___

### rmdirSync

▸ **rmdirSync**(`path`, `options?`): `void`

Synchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). Returns `undefined`.

Using `fs.rmdirSync()` on a file (not a directory) results in an `ENOENT` error
on Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use rmSync with options `{ recursive: true, force: true }`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options?` | [`RmDirOptions`](../interfaces/fs._fs_.RmDirOptions.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1311](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1311)

___

### stat

▸ **stat**(`path`, `callback`): `void`

Asynchronous [`stat(2)`](http://man7.org/linux/man-pages/man2/stat.2.html). The callback gets two arguments `(err, stats)` where`stats` is an `fs.Stats` object.

In case of an error, the `err.code` will be one of `Common System Errors`.

Using `fs.stat()` to check for the existence of a file before calling`fs.open()`, `fs.readFile()` or `fs.writeFile()` is not recommended.
Instead, user code should open/read/write the file directly and handle the
error raised if the file is not available.

To check if a file exists without manipulating it afterwards, [access](fs._fs_.md#access) is recommended.

For example, given the following directory structure:

```text
- txtDir
-- file.txt
- app.js
```

The next program will check for the stats of the given paths:

```js
import { stat } from 'fs';

const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  stat(pathsToCheck[i], (err, stats) => {
    console.log(stats.isDirectory());
    console.log(stats);
  });
}
```

The resulting output will resemble:

```console
true
Stats {
  dev: 16777220,
  mode: 16877,
  nlink: 3,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214262,
  size: 96,
  blocks: 0,
  atimeMs: 1561174653071.963,
  mtimeMs: 1561174614583.3518,
  ctimeMs: 1561174626623.5366,
  birthtimeMs: 1561174126937.2893,
  atime: 2019-06-22T03:37:33.072Z,
  mtime: 2019-06-22T03:36:54.583Z,
  ctime: 2019-06-22T03:37:06.624Z,
  birthtime: 2019-06-22T03:28:46.937Z
}
false
Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214074,
  size: 8,
  blocks: 8,
  atimeMs: 1561174616618.8555,
  mtimeMs: 1561174614584,
  ctimeMs: 1561174614583.8145,
  birthtimeMs: 1561174007710.7478,
  atime: 2019-06-22T03:36:56.619Z,
  mtime: 2019-06-22T03:36:54.584Z,
  ctime: 2019-06-22T03:36:54.584Z,
  birthtime: 2019-06-22T03:26:47.711Z
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:624](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L624)

▸ **stat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint?`: ``false``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:628](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L628)

▸ **stat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) & { `bigint`: ``true``  } |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:637](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L637)

▸ **stat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs._fs_.StatOptions.md) |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `stats`: [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:644](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L644)

___

### statSync

▸ **statSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `undefined` | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:674](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L674)

▸ **statSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:675](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L675)

▸ **statSync**(`path`, `options`): [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } | - |

#### Returns

[`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:682](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L682)

▸ **statSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md)

#### Defined in

[fs.d.ts:690](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L690)

▸ **statSync**(`path`, `options`): [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint`: ``true``  } | - |

#### Returns

[`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:697](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L697)

▸ **statSync**(`path`, `options`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:703](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L703)

▸ **statSync**(`path`, `options?`): [`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs._fs_.StatSyncOptions.md) | - |

#### Returns

[`Stats`](../classes/fs._fs_.Stats.md) \| [`BigIntStats`](../interfaces/fs._fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:710](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L710)

___

### symlink

▸ **symlink**(`target`, `path`, `type`, `callback`): `void`

Creates the link called `path` pointing to `target`. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`symlink(2)`](http://man7.org/linux/man-pages/man2/symlink.2.html) documentation for more details.

The `type` argument is only available on Windows and ignored on other platforms.
It can be set to `'dir'`, `'file'`, or `'junction'`. If the `type` argument is
not set, Node.js will autodetect `target` type and use `'file'` or `'dir'`. If
the `target` does not exist, `'file'` will be used. Windows junction points
require the destination path to be absolute. When using `'junction'`, the`target` argument will automatically be normalized to absolute path.

Relative targets are relative to the link’s parent directory.

```js
import { symlink } from 'fs';

symlink('./mew', './example/mewtwo', callback);
```

The above example creates a symbolic link `mewtwo` in the `example` which points
to `mew` in the same directory:

```bash
$ tree example/
example/
├── mew
└── mewtwo -> ./mew
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](bun.md#pathlike) |
| `path` | [`PathLike`](bun.md#pathlike) |
| `type` | ``"symlink"`` \| ``"junction"`` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:910](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L910)

▸ **symlink**(`target`, `path`, `callback`): `void`

Asynchronous symlink(2) - Create a new symbolic link to an existing file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`PathLike`](bun.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
| `path` | [`PathLike`](bun.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:921](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L921)

___

### symlinkSync

▸ **symlinkSync**(`target`, `path`, `type?`): `void`

Returns `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [symlink](fs._fs_.md#symlink).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](bun.md#pathlike) |
| `path` | [`PathLike`](bun.md#pathlike) |
| `type?` | ``"symlink"`` \| ``"junction"`` |

#### Returns

`void`

#### Defined in

[fs.d.ts:948](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L948)

___

### truncate

▸ **truncate**(`path`, `len?`, `callback`): `void`

Truncates the file. No arguments other than a possible exception are
given to the completion callback. A file descriptor can also be passed as the
first argument. In this case, `fs.ftruncate()` is called.

```js
import { truncate } from 'fs';
// Assuming that 'path/file.txt' is a regular file.
truncate('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was truncated');
});
```

Passing a file descriptor is deprecated and may result in an error being thrown
in the future.

See the POSIX [`truncate(2)`](http://man7.org/linux/man-pages/man2/truncate.2.html) documentation for more details.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `len?` | `number` |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:231](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L231)

▸ **truncate**(`path`, `callback`): `void`

Asynchronous truncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:240](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L240)

___

### truncateSync

▸ **truncateSync**(`path`, `len?`): `void`

Truncates the file. Returns `undefined`. A file descriptor can also be
passed as the first argument. In this case, `fs.ftruncateSync()` is called.

Passing a file descriptor is deprecated and may result in an error being thrown
in the future.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `len?` | `number` |

#### Returns

`void`

#### Defined in

[fs.d.ts:258](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L258)

___

### unlink

▸ **unlink**(`path`, `callback`): `void`

Asynchronously removes a file or symbolic link. No arguments other than a
possible exception are given to the completion callback.

```js
import { unlink } from 'fs';
// Assuming that 'path/file.txt' is a regular file.
unlink('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was deleted');
});
```

`fs.unlink()` will not work on a directory, empty or otherwise. To remove a
directory, use [rmdir](fs._fs_.md#rmdir).

See the POSIX [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html) documentation for more details.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1236](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1236)

___

### unlinkSync

▸ **unlinkSync**(`path`): `void`

Synchronous [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html). Returns `undefined`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1248](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1248)

___

### utimes

▸ **utimes**(`path`, `atime`, `mtime`, `callback`): `void`

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

* Values can be either numbers representing Unix epoch time in seconds,`Date`s, or a numeric string like `'123456789.0'`.
* If the value can not be converted to a number, or is `NaN`, `Infinity` or`-Infinity`, an `Error` will be thrown.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `atime` | [`TimeLike`](bun.md#timelike) |
| `mtime` | [`TimeLike`](bun.md#timelike) |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1946](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1946)

___

### utimesSync

▸ **utimesSync**(`path`, `atime`, `mtime`): `void`

Returns `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [utimes](fs._fs_.md#utimes).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `atime` | [`TimeLike`](bun.md#timelike) |
| `mtime` | [`TimeLike`](bun.md#timelike) |

#### Returns

`void`

#### Defined in

[fs.d.ts:1972](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L1972)

___

### write

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

Write `buffer` to the file specified by `fd`. If `buffer` is a normal object, it
must have an own `toString` function property.

`offset` determines the part of the buffer to be written, and `length` is
an integer specifying the number of bytes to write.

`position` refers to the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'`, the data will be written
at the current position. See [`pwrite(2)`](http://man7.org/linux/man-pages/man2/pwrite.2.html).

The callback will be given three arguments `(err, bytesWritten, buffer)` where`bytesWritten` specifies how many _bytes_ were written from `buffer`.

If this method is invoked as its `util.promisify()` ed version, it returns
a promise for an `Object` with `bytesWritten` and `buffer` properties.

It is unsafe to use `fs.write()` multiple times on the same file without waiting
for the callback.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

**`Since`**

v0.0.67

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `position` | `number` |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:2048](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2048)

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `callback`): `void`

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | - |
| `offset` | `number` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `length` | `number` | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2066](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2066)

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `callback`): `void`

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | - |
| `offset` | `number` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2082](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2082)

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `callback`): `void`

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | - |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2096](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2096)

▸ **write**(`fd`, `string`, `position`, `encoding`, `callback`): `void`

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding` | [`BufferEncoding`](bun.md#bufferencoding) | The expected string encoding. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `str`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2112](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2112)

▸ **write**(`fd`, `string`, `position`, `callback`): `void`

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `str`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2125](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2125)

▸ **write**(`fd`, `string`, `callback`): `void`

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `callback` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `written`: `number`, `str`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2136](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2136)

___

### writeFile

▸ **writeFile**(`file`, `data`, `options`, `callback`): `void`

When `file` is a filename, asynchronously writes data to the file, replacing the
file if it already exists. `data` can be a string or a buffer.

When `file` is a file descriptor, the behavior is similar to calling`fs.write()` directly (which is recommended). See the notes below on using
a file descriptor.

The `encoding` option is ignored if `data` is a buffer.

The `mode` option only affects the newly created file. See [open](fs._fs_.md#open) for more details.

If `data` is a plain object, it must have an own (not inherited) `toString`function property.

```js
import { writeFile } from 'fs';
import { Buffer } from 'buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```

If `options` is a string, then it specifies the encoding:

```js
import { writeFile } from 'fs';

writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
```

It is unsafe to use `fs.writeFile()` multiple times on the same file without
waiting for the callback.

Similarly to `fs.readFile` \- `fs.writeFile` is a convenience method that
performs multiple `write` calls internally to write the buffer passed to it.

It is possible to use an `AbortSignal` to cancel an `fs.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js
import { writeFile } from 'fs';
import { Buffer } from 'buffer';

const controller = new AbortController();
const { signal } = controller;
const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, { signal }, (err) => {
  // When a request is aborted - the callback is called with an AbortError
});
// When the request should be aborted
controller.abort();
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | filename or file descriptor |
| `data` | `string` \| `ArrayBufferView` | - |
| `options` | [`WriteFileOptions`](fs._fs_.md#writefileoptions) | - |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2639](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2639)

▸ **writeFile**(`path`, `data`, `callback`): `void`

Asynchronously writes data to a file, replacing the file if it already exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `ArrayBufferView` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `callback` | [`VoidFunction`](../interfaces/bun.VoidFunction.md) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2651](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2651)

___

### writeFileSync

▸ **writeFileSync**(`file`, `data`, `options?`): `void`

Returns `undefined`.

If `data` is a plain object, it must have an own (not inherited) `toString`function property.

The `mode` option only affects the newly created file. See [open](fs._fs_.md#open) for more details.

For detailed information, see the documentation of the asynchronous version of
this API: [writeFile](fs._fs_.md#writefile).

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](bun.md#pathorfiledescriptor) | filename or file descriptor |
| `data` | `string` \| `ArrayBufferView` | - |
| `options?` | [`WriteFileOptions`](fs._fs_.md#writefileoptions) | - |

#### Returns

`void`

#### Defined in

[fs.d.ts:2687](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2687)

___

### writeSync

▸ **writeSync**(`fd`, `buffer`, `offset?`, `length?`, `position?`): `number`

If `buffer` is a plain object, it must have an own (not inherited) `toString`function property.

For detailed information, see the documentation of the asynchronous version of
this API: [write](fs._fs_.md#write).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `ArrayBufferView` |
| `offset?` | `number` |
| `length?` | `number` |
| `position?` | `number` |

#### Returns

`number`

The number of bytes written.

#### Defined in

[fs.d.ts:2184](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2184)

▸ **writeSync**(`fd`, `string`, `position?`, `encoding?`): `number`

Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position?` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | [`BufferEncoding`](bun.md#bufferencoding) | The expected string encoding. |

#### Returns

`number`

#### Defined in

[fs.d.ts:2198](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2198)

___

### writev

▸ **writev**(`fd`, `buffers`, `cb`): `void`

Write an array of `ArrayBufferView`s to the file specified by `fd` using`writev()`.

`position` is the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'`, the data will be written
at the current position.

The callback will be given three arguments: `err`, `bytesWritten`, and`buffers`. `bytesWritten` is how many bytes were written from `buffers`.

If this method is `util.promisify()` ed, it returns a promise for an`Object` with `bytesWritten` and `buffers` properties.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `cb` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesWritten`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:3434](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3434)

▸ **writev**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position` | `number` |
| `cb` | (`err`: [`SystemError`](../interfaces/bun._bun_.SystemError.md), `bytesWritten`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

[fs.d.ts:3443](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3443)

___

### writevSync

▸ **writevSync**(`fd`, `buffers`, `position?`): `number`

For detailed information, see the documentation of the asynchronous version of
this API: [writev](fs._fs_.md#writev).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`number`

The number of bytes written.

#### Defined in

[fs.d.ts:3470](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3470)
