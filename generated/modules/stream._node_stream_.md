# Namespace: "node:stream"

[stream](stream.md)."node:stream"

## Table of contents

### Namespaces

- [finished](stream._node_stream_.finished.md)
- [pipeline](stream._node_stream_.pipeline.md)

### Classes

- [Duplex](../classes/stream._node_stream_.Duplex.md)
- [PassThrough](../classes/stream._node_stream_.PassThrough.md)
- [Readable](../classes/stream._node_stream_.Readable.md)
- [Stream](../classes/stream._node_stream_.Stream.md)
- [Transform](../classes/stream._node_stream_.Transform.md)
- [Writable](../classes/stream._node_stream_.Writable.md)

### Interfaces

- [DuplexOptions](../interfaces/stream._node_stream_.DuplexOptions.md)
- [FinishedOptions](../interfaces/stream._node_stream_.FinishedOptions.md)
- [Pipe](../interfaces/stream._node_stream_.Pipe.md)
- [PipelineOptions](../interfaces/stream._node_stream_.PipelineOptions.md)
- [ReadableOptions](../interfaces/stream._node_stream_.ReadableOptions.md)
- [StreamOptions](../interfaces/stream._node_stream_.StreamOptions.md)
- [TransformOptions](../interfaces/stream._node_stream_.TransformOptions.md)
- [WritableOptions](../interfaces/stream._node_stream_.WritableOptions.md)

### Type Aliases

- [PipelineCallback](stream._node_stream_.md#pipelinecallback)
- [PipelineDestination](stream._node_stream_.md#pipelinedestination)
- [PipelineDestinationIterableFunction](stream._node_stream_.md#pipelinedestinationiterablefunction)
- [PipelineDestinationPromiseFunction](stream._node_stream_.md#pipelinedestinationpromisefunction)
- [PipelinePromise](stream._node_stream_.md#pipelinepromise)
- [PipelineSource](stream._node_stream_.md#pipelinesource)
- [PipelineSourceFunction](stream._node_stream_.md#pipelinesourcefunction)
- [PipelineTransform](stream._node_stream_.md#pipelinetransform)
- [PipelineTransformSource](stream._node_stream_.md#pipelinetransformsource)
- [TransformCallback](stream._node_stream_.md#transformcallback)

### Functions

- [addAbortSignal](stream._node_stream_.md#addabortsignal)
- [finished](stream._node_stream_.md#finished)
- [isErrored](stream._node_stream_.md#iserrored)
- [isReadable](stream._node_stream_.md#isreadable)
- [pipeline](stream._node_stream_.md#pipeline)

## Type Aliases

### PipelineCallback

Ƭ **PipelineCallback**<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, infer P\> ? (`err`: [`ErrnoException`](../interfaces/globals.ErrnoException.md) \| ``null``, `value`: `P`) => `void` : (`err`: [`ErrnoException`](../interfaces/globals.ErrnoException.md) \| ``null``) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](stream._stream_.md#pipelinedestination)<`any`, `any`\> |

#### Defined in

[stream.d.ts:1150](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1150)

___

### PipelineDestination

Ƭ **PipelineDestination**<`S`, `P`\>: `S` extends [`PipelineTransformSource`](stream._stream_.md#pipelinetransformsource)<infer ST\> ? [`WritableStream`](globals.md#writablestream) \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`ST`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`ST`, `P`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](stream._stream_.md#pipelinetransformsource)<`any`\> |
| `P` | `P` |

#### Defined in

[stream.d.ts:1141](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1141)

___

### PipelineDestinationIterableFunction

Ƭ **PipelineDestinationIterableFunction**<`T`\>: (`source`: `AsyncIterable`<`T`\>) => `AsyncIterable`<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`source`): `AsyncIterable`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `AsyncIterable`<`T`\> |

##### Returns

`AsyncIterable`<`any`\>

#### Defined in

[stream.d.ts:1135](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1135)

___

### PipelineDestinationPromiseFunction

Ƭ **PipelineDestinationPromiseFunction**<`T`, `P`\>: (`source`: `AsyncIterable`<`T`\>) => `Promise`<`P`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Type declaration

▸ (`source`): `Promise`<`P`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `AsyncIterable`<`T`\> |

##### Returns

`Promise`<`P`\>

#### Defined in

[stream.d.ts:1138](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1138)

___

### PipelinePromise

Ƭ **PipelinePromise**<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, infer P\> ? `Promise`<`P`\> : `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](stream._stream_.md#pipelinedestination)<`any`, `any`\> |

#### Defined in

[stream.d.ts:1154](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1154)

___

### PipelineSource

Ƭ **PipelineSource**<`T`\>: `Iterable`<`T`\> \| `AsyncIterable`<`T`\> \| [`ReadableStream`](globals.md#readablestream) \| [`PipelineSourceFunction`](stream._stream_.md#pipelinesourcefunction)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[stream.d.ts:1118](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1118)

___

### PipelineSourceFunction

Ƭ **PipelineSourceFunction**<`T`\>: () => `Iterable`<`T`\> \| `AsyncIterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `Iterable`<`T`\> \| `AsyncIterable`<`T`\>

##### Returns

`Iterable`<`T`\> \| `AsyncIterable`<`T`\>

#### Defined in

[stream.d.ts:1117](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1117)

___

### PipelineTransform

Ƭ **PipelineTransform**<`S`, `U`\>: [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) \| (`source`: `S` extends (...`args`: `any`[]) => `Iterable`<infer ST\> \| `AsyncIterable`<infer ST\> ? `AsyncIterable`<`ST`\> : `S`) => `AsyncIterable`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](stream._stream_.md#pipelinetransformsource)<`any`\> |
| `U` | `U` |

#### Defined in

[stream.d.ts:1123](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1123)

___

### PipelineTransformSource

Ƭ **PipelineTransformSource**<`T`\>: [`PipelineSource`](stream._stream_.md#pipelinesource)<`T`\> \| [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`any`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[stream.d.ts:1132](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1132)

___

### TransformCallback

Ƭ **TransformCallback**: (`error?`: `Error` \| ``null``, `data?`: `any`) => `void`

#### Type declaration

▸ (`error?`, `data?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` \| ``null`` |
| `data?` | `any` |

##### Returns

`void`

#### Defined in

[stream.d.ts:934](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L934)

## Functions

### addAbortSignal

▸ **addAbortSignal**<`T`\>(`signal`, `stream`): `T`

Attaches an AbortSignal to a readable or writeable stream. This lets code
control stream destruction using an `AbortController`.

Calling `abort` on the `AbortController` corresponding to the passed`AbortSignal` will behave the same way as calling `.destroy(new AbortError())`on the stream.

```js
const fs = require('fs');

const controller = new AbortController();
const read = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json'))
);
// Later, abort the operation closing the stream
controller.abort();
```

Or using an `AbortSignal` with a readable stream as an async iterable:

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000); // set a timeout
const stream = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json'))
);
(async () => {
  try {
    for await (const chunk of stream) {
      await process(chunk);
    }
  } catch (e) {
    if (e.name === 'AbortError') {
      // The operation was cancelled
    } else {
      throw e;
    }
  }
})();
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/stream._stream_.Stream.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal` | [`AbortSignal`](globals.md#abortsignal) | A signal representing possible cancellation |
| `stream` | `T` | a stream to attach a signal to |

#### Returns

`T`

#### Defined in

[stream.d.ts:1038](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1038)

___

### finished

▸ **finished**(`stream`, `options`, `callback`): () => `void`

A function to get notified when a stream is no longer readable, writable
or has experienced an error or a premature close event.

```js
const { finished } = require('stream');

const rs = fs.createReadStream('archive.tar');

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed.', err);
  } else {
    console.log('Stream is done reading.');
  }
});

rs.resume(); // Drain the stream.
```

Especially useful in error handling scenarios where a stream is destroyed
prematurely (like an aborted HTTP request), and will not emit `'end'`or `'finish'`.

The `finished` API provides promise version:

```js
const { finished } = require('stream/promises');

const rs = fs.createReadStream('archive.tar');

async function run() {
  await finished(rs);
  console.log('Stream is done reading.');
}

run().catch(console.error);
rs.resume(); // Drain the stream.
```

`stream.finished()` leaves dangling event listeners (in particular`'error'`, `'end'`, `'finish'` and `'close'`) after `callback` has been
invoked. The reason for this is so that unexpected `'error'` events (due to
incorrect stream implementations) do not cause unexpected crashes.
If this is unwanted behavior then the returned cleanup function needs to be
invoked in the callback:

```js
const cleanup = finished(rs, (err) => {
  cleanup();
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) | A readable and/or writable stream. |
| `options` | [`FinishedOptions`](../interfaces/stream._stream_.FinishedOptions.md) | - |
| `callback` | (`err?`: [`ErrnoException`](../interfaces/globals.ErrnoException.md)) => `void` | A callback function that takes an optional error argument. |

#### Returns

`fn`

A cleanup function which removes all registered listeners.

▸ (): `void`

##### Returns

`void`

#### Defined in

[stream.d.ts:1102](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1102)

▸ **finished**(`stream`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) |
| `callback` | (`err?`: [`ErrnoException`](../interfaces/globals.ErrnoException.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[stream.d.ts:1107](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1107)

___

### isErrored

▸ **isErrored**(`stream`): `boolean`

Returns whether the stream has encountered an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`Readable`](../classes/stream._stream_.Readable.md)<`any`\> \| [`Writable`](../classes/stream._stream_.Writable.md)<`any`\> |

#### Returns

`boolean`

#### Defined in

[stream.d.ts:1465](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1465)

___

### isReadable

▸ **isReadable**(`stream`): `boolean`

Returns whether the stream is readable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](globals.md#readablestream)<`any`\> \| [`Readable`](../classes/stream._stream_.Readable.md)<`any`\> |

#### Returns

`boolean`

#### Defined in

[stream.d.ts:1472](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1472)

___

### pipeline

▸ **pipeline**<`A`, `B`\>(`source`, `destination`, `callback?`): `B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
```

The `pipeline` API provides a promise version, which can also
receive an options argument as the last parameter with a`signal` `AbortSignal` property. When the signal is aborted,`destroy` will be called on the underlying pipeline, with
an`AbortError`.

```js
const { pipeline } = require('stream/promises');

async function run() {
  await pipeline(
    fs.createReadStream('archive.tar'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

To use an `AbortSignal`, pass it inside an options object,
as the last argument:

```js
const { pipeline } = require('stream/promises');

async function run() {
  const ac = new AbortController();
  const signal = ac.signal;

  setTimeout(() => ac.abort(), 1);
  await pipeline(
    fs.createReadStream('archive.tar'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz'),
    { signal },
  );
}

run().catch(console.error); // AbortError
```

The `pipeline` API also supports async generators:

```js
const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    fs.createReadStream('lowercase.txt'),
    async function* (source, { signal }) {
      source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
      for await (const chunk of source) {
        yield await processChunk(chunk, { signal });
      }
    },
    fs.createWriteStream('uppercase.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

Remember to handle the `signal` argument passed into the async generator.
Especially in the case where the async generator is the source for the
pipeline (i.e. first argument) or the pipeline will never complete.

```js
const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    async function* ({ signal }) {
      await someLongRunningfn({ signal });
      yield 'asd';
    },
    fs.createWriteStream('uppercase.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
const fs = require('fs');
const http = require('http');
const { pipeline } = require('stream');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `A` | - |
| `destination` | `B` | - |
| `callback?` | [`PipelineCallback`](stream._stream_.md#pipelinecallback)<`B`\> | Called when the pipeline is fully done. |

#### Returns

`B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1309](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1309)

▸ **pipeline**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `callback?`): `B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](stream._stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1317](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1317)

▸ **pipeline**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `callback?`): `B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](stream._stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1327](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1327)

▸ **pipeline**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `callback?`): `B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](stream._stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1339](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1339)

▸ **pipeline**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `callback?`): `B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](stream._stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](stream._stream_.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](stream._stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](stream._stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](stream._stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](globals.md#writablestream) ? `B` : [`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1353](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1353)

▸ **pipeline**(`streams`, `callback?`): [`WritableStream`](globals.md#writablestream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](globals.md#readablestream)<`any`\> \| [`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md))[] |
| `callback?` | (`err`: [`ErrnoException`](../interfaces/globals.ErrnoException.md)) => `void` |

#### Returns

[`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1369](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1369)

▸ **pipeline**(`stream1`, `stream2`, ...`streams`): [`WritableStream`](globals.md#writablestream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](globals.md#readablestream)<`any`\> |
| `stream2` | [`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](globals.md#writablestream)<`any`\> \| [`ReadWriteStream`](../interfaces/globals.ReadWriteStream.md) \| (`err`: [`ErrnoException`](../interfaces/globals.ErrnoException.md)) => `void`)[] |

#### Returns

[`WritableStream`](globals.md#writablestream)

#### Defined in

[stream.d.ts:1373](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L1373)
