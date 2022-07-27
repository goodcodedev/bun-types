# Namespace: constants

[fs](fs.md).["node:fs"](fs._node_fs_.md).constants

## Table of contents

### Variables

- [COPYFILE\_EXCL](fs._node_fs_.constants.md#copyfile_excl)
- [COPYFILE\_FICLONE](fs._node_fs_.constants.md#copyfile_ficlone)
- [COPYFILE\_FICLONE\_FORCE](fs._node_fs_.constants.md#copyfile_ficlone_force)
- [F\_OK](fs._node_fs_.constants.md#f_ok)
- [O\_APPEND](fs._node_fs_.constants.md#o_append)
- [O\_CREAT](fs._node_fs_.constants.md#o_creat)
- [O\_DIRECT](fs._node_fs_.constants.md#o_direct)
- [O\_DIRECTORY](fs._node_fs_.constants.md#o_directory)
- [O\_DSYNC](fs._node_fs_.constants.md#o_dsync)
- [O\_EXCL](fs._node_fs_.constants.md#o_excl)
- [O\_NOATIME](fs._node_fs_.constants.md#o_noatime)
- [O\_NOCTTY](fs._node_fs_.constants.md#o_noctty)
- [O\_NOFOLLOW](fs._node_fs_.constants.md#o_nofollow)
- [O\_NONBLOCK](fs._node_fs_.constants.md#o_nonblock)
- [O\_RDONLY](fs._node_fs_.constants.md#o_rdonly)
- [O\_RDWR](fs._node_fs_.constants.md#o_rdwr)
- [O\_SYMLINK](fs._node_fs_.constants.md#o_symlink)
- [O\_SYNC](fs._node_fs_.constants.md#o_sync)
- [O\_TRUNC](fs._node_fs_.constants.md#o_trunc)
- [O\_WRONLY](fs._node_fs_.constants.md#o_wronly)
- [R\_OK](fs._node_fs_.constants.md#r_ok)
- [S\_IFBLK](fs._node_fs_.constants.md#s_ifblk)
- [S\_IFCHR](fs._node_fs_.constants.md#s_ifchr)
- [S\_IFDIR](fs._node_fs_.constants.md#s_ifdir)
- [S\_IFIFO](fs._node_fs_.constants.md#s_ififo)
- [S\_IFLNK](fs._node_fs_.constants.md#s_iflnk)
- [S\_IFMT](fs._node_fs_.constants.md#s_ifmt)
- [S\_IFREG](fs._node_fs_.constants.md#s_ifreg)
- [S\_IFSOCK](fs._node_fs_.constants.md#s_ifsock)
- [S\_IRGRP](fs._node_fs_.constants.md#s_irgrp)
- [S\_IROTH](fs._node_fs_.constants.md#s_iroth)
- [S\_IRUSR](fs._node_fs_.constants.md#s_irusr)
- [S\_IRWXG](fs._node_fs_.constants.md#s_irwxg)
- [S\_IRWXO](fs._node_fs_.constants.md#s_irwxo)
- [S\_IRWXU](fs._node_fs_.constants.md#s_irwxu)
- [S\_IWGRP](fs._node_fs_.constants.md#s_iwgrp)
- [S\_IWOTH](fs._node_fs_.constants.md#s_iwoth)
- [S\_IWUSR](fs._node_fs_.constants.md#s_iwusr)
- [S\_IXGRP](fs._node_fs_.constants.md#s_ixgrp)
- [S\_IXOTH](fs._node_fs_.constants.md#s_ixoth)
- [S\_IXUSR](fs._node_fs_.constants.md#s_ixusr)
- [UV\_FS\_O\_FILEMAP](fs._node_fs_.constants.md#uv_fs_o_filemap)
- [W\_OK](fs._node_fs_.constants.md#w_ok)
- [X\_OK](fs._node_fs_.constants.md#x_ok)

## Variables

### COPYFILE\_EXCL

• **COPYFILE\_EXCL**: `number`

Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.

#### Defined in

[fs.d.ts:2993](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2993)

___

### COPYFILE\_FICLONE

• **COPYFILE\_FICLONE**: `number`

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

#### Defined in

[fs.d.ts:2998](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2998)

___

### COPYFILE\_FICLONE\_FORCE

• **COPYFILE\_FICLONE\_FORCE**: `number`

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

#### Defined in

[fs.d.ts:3003](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3003)

___

### F\_OK

• **F\_OK**: `number`

Constant for fs.access(). File is visible to the calling process.

#### Defined in

[fs.d.ts:2984](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2984)

___

### O\_APPEND

• **O\_APPEND**: `number`

Constant for fs.open(). Flag indicating that data will be appended to the end of the file.

#### Defined in

[fs.d.ts:3024](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3024)

___

### O\_CREAT

• **O\_CREAT**: `number`

Constant for fs.open(). Flag indicating to create the file if it does not already exist.

#### Defined in

[fs.d.ts:3012](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3012)

___

### O\_DIRECT

• **O\_DIRECT**: `number`

Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.

#### Defined in

[fs.d.ts:3043](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3043)

___

### O\_DIRECTORY

• **O\_DIRECTORY**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.

#### Defined in

[fs.d.ts:3026](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3026)

___

### O\_DSYNC

• **O\_DSYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.

#### Defined in

[fs.d.ts:3039](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3039)

___

### O\_EXCL

• **O\_EXCL**: `number`

Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.

#### Defined in

[fs.d.ts:3014](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3014)

___

### O\_NOATIME

• **O\_NOATIME**: `number`

constant for fs.open().
Flag indicating reading accesses to the file system will no longer result in
an update to the atime information associated with the file.
This flag is available on Linux operating systems only.

#### Defined in

[fs.d.ts:3033](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3033)

___

### O\_NOCTTY

• **O\_NOCTTY**: `number`

Constant for fs.open(). Flag indicating that if path identifies a terminal device,
opening the path shall not cause that terminal to become the controlling terminal for the process
(if the process does not already have one).

#### Defined in

[fs.d.ts:3020](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3020)

___

### O\_NOFOLLOW

• **O\_NOFOLLOW**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.

#### Defined in

[fs.d.ts:3035](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3035)

___

### O\_NONBLOCK

• **O\_NONBLOCK**: `number`

Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.

#### Defined in

[fs.d.ts:3045](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3045)

___

### O\_RDONLY

• **O\_RDONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for read-only access.

#### Defined in

[fs.d.ts:3006](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3006)

___

### O\_RDWR

• **O\_RDWR**: `number`

Constant for fs.open(). Flag indicating to open a file for read-write access.

#### Defined in

[fs.d.ts:3010](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3010)

___

### O\_SYMLINK

• **O\_SYMLINK**: `number`

Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.

#### Defined in

[fs.d.ts:3041](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3041)

___

### O\_SYNC

• **O\_SYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.

#### Defined in

[fs.d.ts:3037](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3037)

___

### O\_TRUNC

• **O\_TRUNC**: `number`

Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.

#### Defined in

[fs.d.ts:3022](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3022)

___

### O\_WRONLY

• **O\_WRONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for write-only access.

#### Defined in

[fs.d.ts:3008](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3008)

___

### R\_OK

• **R\_OK**: `number`

Constant for fs.access(). File can be read by the calling process.

#### Defined in

[fs.d.ts:2986](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2986)

___

### S\_IFBLK

• **S\_IFBLK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.

#### Defined in

[fs.d.ts:3056](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3056)

___

### S\_IFCHR

• **S\_IFCHR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.

#### Defined in

[fs.d.ts:3054](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3054)

___

### S\_IFDIR

• **S\_IFDIR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.

#### Defined in

[fs.d.ts:3052](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3052)

___

### S\_IFIFO

• **S\_IFIFO**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.

#### Defined in

[fs.d.ts:3058](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3058)

___

### S\_IFLNK

• **S\_IFLNK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.

#### Defined in

[fs.d.ts:3060](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3060)

___

### S\_IFMT

• **S\_IFMT**: `number`

Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.

#### Defined in

[fs.d.ts:3048](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3048)

___

### S\_IFREG

• **S\_IFREG**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.

#### Defined in

[fs.d.ts:3050](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3050)

___

### S\_IFSOCK

• **S\_IFSOCK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.

#### Defined in

[fs.d.ts:3062](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3062)

___

### S\_IRGRP

• **S\_IRGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.

#### Defined in

[fs.d.ts:3075](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3075)

___

### S\_IROTH

• **S\_IROTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.

#### Defined in

[fs.d.ts:3083](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3083)

___

### S\_IRUSR

• **S\_IRUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.

#### Defined in

[fs.d.ts:3067](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3067)

___

### S\_IRWXG

• **S\_IRWXG**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.

#### Defined in

[fs.d.ts:3073](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3073)

___

### S\_IRWXO

• **S\_IRWXO**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.

#### Defined in

[fs.d.ts:3081](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3081)

___

### S\_IRWXU

• **S\_IRWXU**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.

#### Defined in

[fs.d.ts:3065](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3065)

___

### S\_IWGRP

• **S\_IWGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.

#### Defined in

[fs.d.ts:3077](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3077)

___

### S\_IWOTH

• **S\_IWOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.

#### Defined in

[fs.d.ts:3085](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3085)

___

### S\_IWUSR

• **S\_IWUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.

#### Defined in

[fs.d.ts:3069](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3069)

___

### S\_IXGRP

• **S\_IXGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.

#### Defined in

[fs.d.ts:3079](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3079)

___

### S\_IXOTH

• **S\_IXOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.

#### Defined in

[fs.d.ts:3087](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3087)

___

### S\_IXUSR

• **S\_IXUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.

#### Defined in

[fs.d.ts:3071](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3071)

___

### UV\_FS\_O\_FILEMAP

• **UV\_FS\_O\_FILEMAP**: `number`

When set, a memory file mapping is used to access the file. This flag
is available on Windows operating systems only. On other operating systems,
this flag is ignored.

#### Defined in

[fs.d.ts:3093](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L3093)

___

### W\_OK

• **W\_OK**: `number`

Constant for fs.access(). File can be written by the calling process.

#### Defined in

[fs.d.ts:2988](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2988)

___

### X\_OK

• **X\_OK**: `number`

Constant for fs.access(). File can be executed by the calling process.

#### Defined in

[fs.d.ts:2990](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/fs.d.ts#L2990)
