# Namespace: "bun"

[bun](bun.md)."bun"

Bun.js runtime APIs

**`Example`**

```js
import {file} from 'bun';

// Log the file to the console
const input = await file('/path/to/file.txt').text();
console.log(input);
```

This module aliases `globalThis.Bun`.

## Table of contents

### Classes

- [ArrayBufferSink](../classes/bun._bun_.ArrayBufferSink.md)
- [CryptoHashInterface](../classes/bun._bun_.CryptoHashInterface.md)
- [MD4](../classes/bun._bun_.MD4.md)
- [MD5](../classes/bun._bun_.MD5.md)
- [SHA1](../classes/bun._bun_.SHA1.md)
- [SHA224](../classes/bun._bun_.SHA224.md)
- [SHA256](../classes/bun._bun_.SHA256.md)
- [SHA384](../classes/bun._bun_.SHA384.md)
- [SHA512](../classes/bun._bun_.SHA512.md)
- [SHA512\_256](../classes/bun._bun_.SHA512_256.md)
- [Transpiler](../classes/bun._bun_.Transpiler.md)

### Interfaces

- [EditorOptions](../interfaces/bun._bun_.EditorOptions.md)
- [Errorlike](../interfaces/bun._bun_.Errorlike.md)
- [FileBlob](../interfaces/bun._bun_.FileBlob.md)
- [Hash](../interfaces/bun._bun_.Hash.md)
- [HeapSnapshot](../interfaces/bun._bun_.HeapSnapshot.md)
- [Import](../interfaces/bun._bun_.Import.md)
- [MMapOptions](../interfaces/bun._bun_.MMapOptions.md)
- [SSLAdvancedOptions](../interfaces/bun._bun_.SSLAdvancedOptions.md)
- [SSLOptions](../interfaces/bun._bun_.SSLOptions.md)
- [ServeOptions](../interfaces/bun._bun_.ServeOptions.md)
- [Server](../interfaces/bun._bun_.Server.md)
- [SystemError](../interfaces/bun._bun_.SystemError.md)
- [TranspilerOptions](../interfaces/bun._bun_.TranspilerOptions.md)
- [unsafe](../interfaces/bun._bun_.unsafe.md)

### Type Aliases

- [DigestEncoding](bun._bun_.md#digestencoding)
- [JavaScriptLoader](bun._bun_.md#javascriptloader)
- [MacroMap](bun._bun_.md#macromap)
- [Platform](bun._bun_.md#platform)
- [SSLServeOptions](bun._bun_.md#sslserveoptions)
- [Serve](bun._bun_.md#serve)

### Variables

- [enableANSIColors](bun._bun_.md#enableansicolors)
- [main](bun._bun_.md#main)
- [stderr](bun._bun_.md#stderr)
- [stdin](bun._bun_.md#stdin)
- [stdout](bun._bun_.md#stdout)
- [unsafe](bun._bun_.md#unsafe)

### Functions

- [allocUnsafe](bun._bun_.md#allocunsafe)
- [concatArrayBuffers](bun._bun_.md#concatarraybuffers)
- [escapeHTML](bun._bun_.md#escapehtml)
- [file](bun._bun_.md#file)
- [fileURLToPath](bun._bun_.md#fileurltopath)
- [gc](bun._bun_.md#gc)
- [generateHeapSnapshot](bun._bun_.md#generateheapsnapshot)
- [hash](bun._bun_.md#hash)
- [inspect](bun._bun_.md#inspect)
- [mmap](bun._bun_.md#mmap)
- [nanoseconds](bun._bun_.md#nanoseconds)
- [openInEditor](bun._bun_.md#openineditor)
- [pathToFileURL](bun._bun_.md#pathtofileurl)
- [readableStreamToArray](bun._bun_.md#readablestreamtoarray)
- [readableStreamToArrayBuffer](bun._bun_.md#readablestreamtoarraybuffer)
- [readableStreamToBlob](bun._bun_.md#readablestreamtoblob)
- [readableStreamToJSON](bun._bun_.md#readablestreamtojson)
- [readableStreamToText](bun._bun_.md#readablestreamtotext)
- [resolve](bun._bun_.md#resolve)
- [resolveSync](bun._bun_.md#resolvesync)
- [serve](bun._bun_.md#serve-1)
- [sha](bun._bun_.md#sha)
- [shrink](bun._bun_.md#shrink)
- [write](bun._bun_.md#write)

## Type Aliases

### DigestEncoding

Ƭ **DigestEncoding**: ``"hex"`` \| ``"base64"``

#### Defined in

[bun.d.ts:961](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L961)

___

### JavaScriptLoader

Ƭ **JavaScriptLoader**: ``"jsx"`` \| ``"js"`` \| ``"ts"`` \| ``"tsx"``

#### Defined in

[bun.d.ts:467](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L467)

___

### MacroMap

Ƭ **MacroMap**: `Record`<`string`, `Record`<`string`, `string`\>\>

This lets you use macros as regular imports

**`Example`**

```
  {
    "react-relay": {
      "graphql": "bun-macro-relay/bun-macro-relay.tsx"
    }
  }
 ```

#### Defined in

[bun.d.ts:406](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L406)

___

### Platform

Ƭ **Platform**: ``"bun"`` \| ``"browser"`` \| ``"node"`` \| ``"neutral"``

#### Defined in

[bun.d.ts:452](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L452)

___

### SSLServeOptions

Ƭ **SSLServeOptions**: [`ServeOptions`](../interfaces/bun._bun_.ServeOptions.md) & [`SSLOptions`](../interfaces/bun._bun_.SSLOptions.md) & [`SSLAdvancedOptions`](../interfaces/bun._bun_.SSLAdvancedOptions.md) & { `serverNames`: `Record`<`string`, [`SSLOptions`](../interfaces/bun._bun_.SSLOptions.md) & [`SSLAdvancedOptions`](../interfaces/bun._bun_.SSLAdvancedOptions.md)\>  }

#### Defined in

[bun.d.ts:757](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L757)

___

### Serve

Ƭ **Serve**: [`SSLServeOptions`](bun._bun_.md#sslserveoptions) \| [`ServeOptions`](../interfaces/bun._bun_.ServeOptions.md)

#### Defined in

[bun.d.ts:802](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L802)

## Variables

### enableANSIColors

• `Const` **enableANSIColors**: `boolean`

Are ANSI colors enabled for stdin and stdout?

Used for console.log

#### Defined in

[bun.d.ts:968](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L968)

___

### main

• `Const` **main**: `string`

What script launched bun?

Absolute file path

**`Example`**

```ts
"/never-gonna-give-you-up.js"
```

#### Defined in

[bun.d.ts:977](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L977)

___

### stderr

• `Const` **stderr**: [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

Write to stderr

#### Defined in

[bun.d.ts:926](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L926)

___

### stdin

• `Const` **stdin**: [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

Read from stdin

This is read-only

#### Defined in

[bun.d.ts:932](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L932)

___

### stdout

• `Const` **stdout**: [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

Write to stdout

#### Defined in

[bun.d.ts:924](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L924)

___

### unsafe

• **unsafe**: [`unsafe`](bun._bun_.md#unsafe)

#### Defined in

[bun.d.ts:934](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L934)

[bun.d.ts:959](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L959)

## Functions

### allocUnsafe

▸ **allocUnsafe**(`size`): `Uint8Array`

Allocate a new [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) without zeroing the bytes.

This can be 3.5x faster than `new Uint8Array(size)`, but if you send uninitialized memory to your users (even unintentionally), it can potentially leak anything recently in memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[bun.d.ts:879](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L879)

___

### concatArrayBuffers

▸ **concatArrayBuffers**(`buffers`): `ArrayBuffer`

Concatenate an array of typed arrays into a single `ArrayBuffer`. This is a fast path.

You can do this manually if you'd like, but this function will generally
be a little faster.

If you want a `Uint8Array` instead, consider `Buffer.concat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | (`ArrayBufferLike` \| `ArrayBufferView`)[] | An array of typed arrays to concatenate. |

#### Returns

`ArrayBuffer`

An `ArrayBuffer` with the data from all the buffers.

Here is similar code to do it manually, except about 30% slower:
```js
  var chunks = [...];
  var size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  var buffer = new ArrayBuffer(size);
  var view = new Uint8Array(buffer);
  var offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
```

This function is faster because it uses uninitialized memory when copying. Since the entire
length of the buffer is known, it is safe to use uninitialized memory.

#### Defined in

[bun.d.ts:216](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L216)

___

### escapeHTML

▸ **escapeHTML**(`input`): `string`

Escape the following characters in a string:

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. On an M1X, it processes 480 MB/s -
20 GB/s, depending on how much data is being escaped and whether there is non-ascii
text.

Non-string types will be converted to a string before escaping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` \| `boolean` \| `object` |

#### Returns

`string`

#### Defined in

[bun.d.ts:291](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L291)

___

### file

▸ **file**(`path`, `options?`): [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.json()); // { hello: "world" }
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file (lazily loaded) |
| `options?` | [`BlobPropertyBag`](../interfaces/globals.BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

#### Defined in

[bun.d.ts:830](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L830)

▸ **file**(`path`, `options?`): [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

`Blob` that leverages the fastest system calls available to operate on files.

This Blob is lazy. It won't do any work until you read from it. Errors propagate as promise rejections.

`Blob.size` will not be valid until the contents of the file are read at least once.
`Blob.type` will have a default set based on the file extension

**`Example`**

```js
const file = Bun.file(new TextEncoder.encode("./hello.json"));
console.log(file.type); // "application/json"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Uint8Array` \| `ArrayBufferLike` | The path to the file as a byte buffer (the buffer is copied) |
| `options?` | [`BlobPropertyBag`](../interfaces/globals.BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

#### Defined in

[bun.d.ts:849](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L849)

▸ **file**(`fileDescriptor`, `options?`): [`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.

**`Example`**

```js
const file = Bun.file(fd);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileDescriptor` | `number` | The file descriptor of the file |
| `options?` | [`BlobPropertyBag`](../interfaces/globals.BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](../interfaces/bun._bun_.FileBlob.md)

#### Defined in

[bun.d.ts:869](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L869)

___

### fileURLToPath

▸ **fileURLToPath**(`url`): `string`

Convert a URL to a filesystem path.

**`Throws`**

If the URL is not a URL.

**`Example`**

```js
const path = Bun.fileURLToPath(new URL("file:///foo/bar.txt"));
console.log(path); // "/foo/bar.txt"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | [`URL`](globals.md#url) | The URL to convert. |

#### Returns

`string`

A filesystem path.

#### Defined in

[bun.d.ts:321](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L321)

___

### gc

▸ **gc**(`force`): `void`

Manually trigger the garbage collector

This does two things:
1. It tells JavaScriptCore to run the garbage collector
2. It tells [mimalloc](https://github.com/microsoft/mimalloc) to clean up fragmented memory. Mimalloc manages the heap not used in JavaScriptCore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | `boolean` | Synchronously run the garbage collector |

#### Returns

`void`

#### Defined in

[bun.d.ts:988](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L988)

___

### generateHeapSnapshot

▸ **generateHeapSnapshot**(): [`HeapSnapshot`](../interfaces/bun._bun_.HeapSnapshot.md)

Generate a heap snapshot for seeing where the heap is being used

#### Returns

[`HeapSnapshot`](../interfaces/bun._bun_.HeapSnapshot.md)

#### Defined in

[bun.d.ts:1025](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1025)

___

### hash

▸ **hash**(`data`, `seed?`): `number` \| `bigint`

Hash a string or array buffer using Wyhash

This is not a cryptographic hash function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `ArrayBuffer` \| `ArrayBufferView` | The data to hash. |
| `seed?` | `number` | The seed to use. |

#### Returns

`number` \| `bigint`

#### Defined in

[bun.d.ts:415](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L415)

___

### inspect

▸ **inspect**(...`args`): `string`

Pretty-print an object the same as console.log to a `string`

Supports JSX

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

#### Defined in

[bun.d.ts:888](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L888)

___

### mmap

▸ **mmap**(`path`, `opts?`): `Uint8Array`

Open a file as a live-updating `Uint8Array` without copying memory
- Writing to the array writes to the file.
- Reading from the array reads from the file.

This uses the [`mmap()`](https://man7.org/linux/man-pages/man2/mmap.2.html) syscall under the hood.

---

This API inherently has some rough edges:
- It does not support empty files. It will throw a `SystemError` with `EINVAL`
- Usage on shared/networked filesystems is discouraged. It will be very slow.
- If you delete or truncate the file, that will crash bun. This is called a segmentation fault.

---

To close the file, set the array to `null` and it will be garbage collected eventually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](bun.md#pathlike) |
| `opts?` | [`MMapOptions`](../interfaces/bun._bun_.MMapOptions.md) |

#### Returns

`Uint8Array`

#### Defined in

[bun.d.ts:921](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L921)

___

### nanoseconds

▸ **nanoseconds**(): `number`

Nanoseconds since Bun.js was started as an integer.

This uses a high-resolution monotonic system timer.

After 14 weeks of consecutive uptime, this function
wraps

#### Returns

`number`

#### Defined in

[bun.d.ts:1020](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1020)

___

### openInEditor

▸ **openInEditor**(`path`, `options?`): `void`

Open a file in your local editor. Auto-detects via `$VISUAL` || `$EDITOR`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to open |
| `options?` | [`EditorOptions`](../interfaces/bun._bun_.EditorOptions.md) | - |

#### Returns

`void`

#### Defined in

[bun.d.ts:1037](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1037)

___

### pathToFileURL

▸ **pathToFileURL**(`path`): [`URL`](globals.md#url)

Convert a filesystem path to a file:// URL.

**`Example`**

```js
const url = Bun.pathToFileURL("/foo/bar.txt");
console.log(url.href); // "file:///foo/bar.txt"
```

Internally, this function uses WebKit's URL API to
convert the path to a file:// URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

[`URL`](globals.md#url)

A URL with the file:// scheme.

#### Defined in

[bun.d.ts:308](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L308)

___

### readableStreamToArray

▸ **readableStreamToArray**<`T`\>(`stream`): `Promise`<`T`[]\> \| `T`[]

Consume all data from a ReadableStream until it closes or errors.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> | The stream to consume |

#### Returns

`Promise`<`T`[]\> \| `T`[]

A promise that resolves with the chunks as an array

#### Defined in

[bun.d.ts:272](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L272)

___

### readableStreamToArrayBuffer

▸ **readableStreamToArrayBuffer**(`stream`): `Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

Consume all data from a ReadableStream until it closes or errors.

Concatenate the chunks into a single ArrayBuffer.

Each chunk must be a TypedArray or an ArrayBuffer. If you need to support
chunks of different types, consider [readableStreamToBlob](bun._bun_.md#readablestreamtoblob)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

A promise that resolves with the concatenated chunks or the concatenated chunks as an `ArrayBuffer`.

#### Defined in

[bun.d.ts:231](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L231)

___

### readableStreamToBlob

▸ **readableStreamToBlob**(`stream`): `Promise`<[`Blob`](../classes/globals.Blob.md)\>

Consume all data from a ReadableStream until it closes or errors.

Concatenate the chunks into a single Blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<[`Blob`](../classes/globals.Blob.md)\>

A promise that resolves with the concatenated chunks as a Blob.

#### Defined in

[bun.d.ts:243](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L243)

___

### readableStreamToJSON

▸ **readableStreamToJSON**(`stream`): `Promise`<`any`\>

Consume all data from a ReadableStream until it closes or errors.

Concatenate the chunks into a single string and parse as JSON. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](bun._bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`any`\>

A promise that resolves with the concatenated chunks as a String.

#### Defined in

[bun.d.ts:263](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L263)

___

### readableStreamToText

▸ **readableStreamToText**(`stream`): `Promise`<`string`\>

Consume all data from a ReadableStream until it closes or errors.

Concatenate the chunks into a single string. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](bun._bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`string`\>

A promise that resolves with the concatenated chunks as a String.

#### Defined in

[bun.d.ts:253](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L253)

___

### resolve

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

For now, use the sync version. There is zero performance benefit to using this async version. It exists for future-proofing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[bun.d.ts:77](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L77)

___

### resolveSync

▸ **resolveSync**(`moduleId`, `parent`): `string`

Synchronously resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`string`

#### Defined in

[bun.d.ts:67](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L67)

___

### serve

▸ **serve**(`options`): [`Server`](../interfaces/bun._bun_.Server.md)

Start a fast HTTP server.

**`Example`**

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response("Hello World!");
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```
-----

**`Example`**

Send a file

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(Bun.file("./package.json"));
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Serve`](bun._bun_.md#serve) | Server options (port defaults to $PORT \|\| 8080)  ----- |

#### Returns

[`Server`](../interfaces/bun._bun_.Server.md)

#### Defined in

[bun.d.ts:59](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L59)

___

### sha

▸ **sha**(`input`, `hashInto?`): `Uint8Array`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`StringOrBuffer`](bun.md#stringorbuffer) | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `hashInto?` | `Uint8Array` | optional `Uint8Array` to write the hash to. 32 bytes minimum.  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`Uint8Array`

#### Defined in

[bun.d.ts:1107](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1107)

▸ **sha**(`input`, `encoding`): `string`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`StringOrBuffer`](bun.md#stringorbuffer) | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `encoding` | [`DigestEncoding`](bun._bun_.md#digestencoding) | `DigestEncoding` to return the hash in  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`string`

#### Defined in

[bun.d.ts:1127](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1127)

___

### shrink

▸ **shrink**(): `void`

The next time JavaScriptCore is idle, clear unused memory and attempt to reduce the heap size.

#### Returns

`void`

#### Defined in

[bun.d.ts:1030](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L1030)

___

### write

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](../interfaces/bun._bun_.FileBlob.md) \| [`PathLike`](bun.md#pathlike) | The file or file path to write to |
| `input` | `string` \| [`Blob`](../classes/globals.Blob.md) \| [`TypedArray`](bun.md#typedarray) \| [`BlobPart`](globals.md#blobpart)[] | The data to copy into `destination`. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:90](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L90)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](../interfaces/bun._bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`Response`](../classes/globals.Response.md) | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:106](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L106)

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | [`PathLike`](bun.md#pathlike) | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`Response`](../classes/globals.Response.md) | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:123](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L123)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](../interfaces/bun._bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](../interfaces/bun._bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:148](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L148)

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | [`PathLike`](bun.md#pathlike) | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](../interfaces/bun._bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:173](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun.d.ts#L173)
