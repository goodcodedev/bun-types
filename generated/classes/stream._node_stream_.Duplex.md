# Class: Duplex

[stream](../modules/stream.md).["node:stream"](../modules/stream._node_stream_.md).Duplex

Duplex streams are streams that implement both the `Readable` and `Writable` interfaces.

Examples of `Duplex` streams include:

* `TCP sockets`
* `zlib streams`
* `crypto streams`

## Hierarchy

- [`Readable`](stream._stream_.Readable.md)

  ↳ **`Duplex`**

## Implements

- [`Writable`](stream._stream_.Writable.md)

## Table of contents

### Constructors

- [constructor](stream._node_stream_.Duplex.md#constructor)

### Properties

- [allowHalfOpen](stream._node_stream_.Duplex.md#allowhalfopen)
- [destroyed](stream._node_stream_.Duplex.md#destroyed)
- [locked](stream._node_stream_.Duplex.md#locked)
- [readable](stream._node_stream_.Duplex.md#readable)
- [readableAborted](stream._node_stream_.Duplex.md#readableaborted)
- [readableEncoding](stream._node_stream_.Duplex.md#readableencoding)
- [readableEnded](stream._node_stream_.Duplex.md#readableended)
- [readableFlowing](stream._node_stream_.Duplex.md#readableflowing)
- [readableHighWaterMark](stream._node_stream_.Duplex.md#readablehighwatermark)
- [readableLength](stream._node_stream_.Duplex.md#readablelength)
- [readableObjectMode](stream._node_stream_.Duplex.md#readableobjectmode)
- [writable](stream._node_stream_.Duplex.md#writable)
- [writableCorked](stream._node_stream_.Duplex.md#writablecorked)
- [writableEnded](stream._node_stream_.Duplex.md#writableended)
- [writableFinished](stream._node_stream_.Duplex.md#writablefinished)
- [writableHighWaterMark](stream._node_stream_.Duplex.md#writablehighwatermark)
- [writableLength](stream._node_stream_.Duplex.md#writablelength)
- [writableObjectMode](stream._node_stream_.Duplex.md#writableobjectmode)
- [captureRejectionSymbol](stream._node_stream_.Duplex.md#capturerejectionsymbol)
- [captureRejections](stream._node_stream_.Duplex.md#capturerejections)
- [defaultMaxListeners](stream._node_stream_.Duplex.md#defaultmaxlisteners)
- [errorMonitor](stream._node_stream_.Duplex.md#errormonitor)

### Methods

- [[asyncIterator]](stream._node_stream_.Duplex.md#[asynciterator])
- [\_construct](stream._node_stream_.Duplex.md#_construct)
- [\_destroy](stream._node_stream_.Duplex.md#_destroy)
- [\_final](stream._node_stream_.Duplex.md#_final)
- [\_read](stream._node_stream_.Duplex.md#_read)
- [\_write](stream._node_stream_.Duplex.md#_write)
- [\_writev](stream._node_stream_.Duplex.md#_writev)
- [abort](stream._node_stream_.Duplex.md#abort)
- [addListener](stream._node_stream_.Duplex.md#addlistener)
- [cancel](stream._node_stream_.Duplex.md#cancel)
- [close](stream._node_stream_.Duplex.md#close)
- [cork](stream._node_stream_.Duplex.md#cork)
- [destroy](stream._node_stream_.Duplex.md#destroy)
- [emit](stream._node_stream_.Duplex.md#emit)
- [end](stream._node_stream_.Duplex.md#end)
- [eventNames](stream._node_stream_.Duplex.md#eventnames)
- [forEach](stream._node_stream_.Duplex.md#foreach)
- [getMaxListeners](stream._node_stream_.Duplex.md#getmaxlisteners)
- [getReader](stream._node_stream_.Duplex.md#getreader)
- [getWriter](stream._node_stream_.Duplex.md#getwriter)
- [isPaused](stream._node_stream_.Duplex.md#ispaused)
- [listenerCount](stream._node_stream_.Duplex.md#listenercount)
- [listeners](stream._node_stream_.Duplex.md#listeners)
- [off](stream._node_stream_.Duplex.md#off)
- [on](stream._node_stream_.Duplex.md#on)
- [once](stream._node_stream_.Duplex.md#once)
- [pause](stream._node_stream_.Duplex.md#pause)
- [pipe](stream._node_stream_.Duplex.md#pipe)
- [pipeThrough](stream._node_stream_.Duplex.md#pipethrough)
- [pipeTo](stream._node_stream_.Duplex.md#pipeto)
- [prependListener](stream._node_stream_.Duplex.md#prependlistener)
- [prependOnceListener](stream._node_stream_.Duplex.md#prependoncelistener)
- [push](stream._node_stream_.Duplex.md#push)
- [rawListeners](stream._node_stream_.Duplex.md#rawlisteners)
- [read](stream._node_stream_.Duplex.md#read)
- [removeAllListeners](stream._node_stream_.Duplex.md#removealllisteners)
- [removeListener](stream._node_stream_.Duplex.md#removelistener)
- [resume](stream._node_stream_.Duplex.md#resume)
- [setDefaultEncoding](stream._node_stream_.Duplex.md#setdefaultencoding)
- [setEncoding](stream._node_stream_.Duplex.md#setencoding)
- [setMaxListeners](stream._node_stream_.Duplex.md#setmaxlisteners)
- [tee](stream._node_stream_.Duplex.md#tee)
- [uncork](stream._node_stream_.Duplex.md#uncork)
- [unpipe](stream._node_stream_.Duplex.md#unpipe)
- [unshift](stream._node_stream_.Duplex.md#unshift)
- [wrap](stream._node_stream_.Duplex.md#wrap)
- [write](stream._node_stream_.Duplex.md#write)
- [from](stream._node_stream_.Duplex.md#from)
- [getEventListeners](stream._node_stream_.Duplex.md#geteventlisteners)
- [isDisturbed](stream._node_stream_.Duplex.md#isdisturbed)
- [listenerCount](stream._node_stream_.Duplex.md#listenercount-1)
- [on](stream._node_stream_.Duplex.md#on-1)
- [once](stream._node_stream_.Duplex.md#once-1)
- [setMaxListeners](stream._node_stream_.Duplex.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Duplex**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DuplexOptions`](../interfaces/stream._stream_.DuplexOptions.md) |

#### Overrides

[Readable](stream._stream_.Readable.md).[constructor](stream._stream_.Readable.md#constructor)

#### Defined in

[stream.d.ts:864](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L864)

## Properties

### allowHalfOpen

• **allowHalfOpen**: `boolean`

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `false`.

This can be changed manually to change the half-open behavior of an existing`Duplex` stream instance, but must be changed before the `'end'` event is
emitted.

**`Since`**

v0.9.4

#### Defined in

[stream.d.ts:863](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L863)

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

#### Implementation of

[Writable](stream._stream_.Writable.md).[destroyed](stream._stream_.Writable.md#destroyed)

#### Inherited from

[Readable](stream._stream_.Readable.md).[destroyed](stream._stream_.Readable.md#destroyed)

#### Defined in

[stream.d.ts:121](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L121)

___

### locked

• `Readonly` **locked**: `boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[locked](stream._stream_.Writable.md#locked)

#### Inherited from

[Readable](stream._stream_.Readable.md).[locked](stream._stream_.Readable.md#locked)

#### Defined in

[stream.d.ts:50](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L50)

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readable](stream._stream_.Readable.md#readable)

#### Defined in

[stream.d.ts:90](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L90)

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableAborted](stream._stream_.Readable.md#readableaborted)

#### Defined in

[stream.d.ts:85](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L85)

___

### readableEncoding

• `Readonly` **readableEncoding**: [`BufferEncoding`](../modules/bun.md#bufferencoding)

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableEncoding](stream._stream_.Readable.md#readableencoding)

#### Defined in

[stream.d.ts:94](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L94)

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableEnded](stream._stream_.Readable.md#readableended)

#### Defined in

[stream.d.ts:98](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L98)

___

### readableFlowing

• `Readonly` **readableFlowing**: `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableFlowing](stream._stream_.Readable.md#readableflowing)

#### Defined in

[stream.d.ts:103](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L103)

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableHighWaterMark](stream._stream_.Readable.md#readablehighwatermark)

#### Defined in

[stream.d.ts:107](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L107)

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableLength](stream._stream_.Readable.md#readablelength)

#### Defined in

[stream.d.ts:113](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L113)

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

#### Inherited from

[Readable](stream._stream_.Readable.md).[readableObjectMode](stream._stream_.Readable.md#readableobjectmode)

#### Defined in

[stream.d.ts:117](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L117)

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writable](stream._stream_.Writable.md#writable)

#### Defined in

[stream.d.ts:847](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L847)

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writableCorked](stream._stream_.Writable.md#writablecorked)

#### Defined in

[stream.d.ts:853](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L853)

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writableEnded](stream._stream_.Writable.md#writableended)

#### Defined in

[stream.d.ts:848](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L848)

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writableFinished](stream._stream_.Writable.md#writablefinished)

#### Defined in

[stream.d.ts:849](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L849)

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writableHighWaterMark](stream._stream_.Writable.md#writablehighwatermark)

#### Defined in

[stream.d.ts:850](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L850)

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writableLength](stream._stream_.Writable.md#writablelength)

#### Defined in

[stream.d.ts:851](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L851)

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

#### Implementation of

[Writable](stream._stream_.Writable.md).[writableObjectMode](stream._stream_.Writable.md#writableobjectmode)

#### Defined in

[stream.d.ts:852](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L852)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](events._events_.EventEmitter-1.md#capturerejectionsymbol)

#### Implementation of

[Writable](stream._stream_.Writable.md).[captureRejectionSymbol](stream._stream_.Writable.md#capturerejectionsymbol)

#### Inherited from

[Readable](stream._stream_.Readable.md).[captureRejectionSymbol](stream._stream_.Readable.md#capturerejectionsymbol)

#### Defined in

[events.d.ts:624](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L624)

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Implementation of

[Writable](stream._stream_.Writable.md).[captureRejections](stream._stream_.Writable.md#capturerejections)

#### Inherited from

[Readable](stream._stream_.Readable.md).[captureRejections](stream._stream_.Readable.md#capturerejections)

#### Defined in

[events.d.ts:628](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L628)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Implementation of

[Writable](stream._stream_.Writable.md).[defaultMaxListeners](stream._stream_.Writable.md#defaultmaxlisteners)

#### Inherited from

[Readable](stream._stream_.Readable.md).[defaultMaxListeners](stream._stream_.Readable.md#defaultmaxlisteners)

#### Defined in

[events.d.ts:629](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L629)

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](events._events_.EventEmitter-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Implementation of

[Writable](stream._stream_.Writable.md).[errorMonitor](stream._stream_.Writable.md#errormonitor)

#### Inherited from

[Readable](stream._stream_.Readable.md).[errorMonitor](stream._stream_.Readable.md#errormonitor)

#### Defined in

[events.d.ts:623](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L623)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[[asyncIterator]](stream._stream_.Readable.md#[asynciterator])

#### Defined in

[stream.d.ts:491](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L491)

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[_construct](stream._stream_.Writable.md#_construct)

#### Inherited from

[Readable](stream._stream_.Readable.md).[_construct](stream._stream_.Readable.md#_construct)

#### Defined in

[stream.d.ts:123](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L123)

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[_destroy](stream._stream_.Writable.md#_destroy)

#### Overrides

[Readable](stream._stream_.Readable.md).[_destroy](stream._stream_.Readable.md#_destroy)

#### Defined in

[stream.d.ts:913](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L913)

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[_final](stream._stream_.Writable.md#_final)

#### Defined in

[stream.d.ts:917](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L917)

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[Readable](stream._stream_.Readable.md).[_read](stream._stream_.Readable.md#_read)

#### Defined in

[stream.d.ts:124](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L124)

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[_write](stream._stream_.Writable.md#_write)

#### Defined in

[stream.d.ts:901](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L901)

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/bun.md#bufferencoding)  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[_writev](stream._stream_.Writable.md#_writev)

#### Defined in

[stream.d.ts:906](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L906)

___

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Writable](stream._stream_.Writable.md).[abort](stream._stream_.Writable.md#abort)

#### Defined in

[stream.d.ts:865](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L865)

___

### addListener

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:423](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L423)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:424](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L424)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:425](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L425)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:426](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L426)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:427](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L427)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:428](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L428)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[addListener](stream._stream_.Writable.md#addlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:429](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L429)

▸ **addListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

Writable.addListener

#### Inherited from

[Readable](stream._stream_.Readable.md).[addListener](stream._stream_.Readable.md#addlistener)

#### Defined in

[stream.d.ts:430](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L430)

___

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[cancel](stream._stream_.Readable.md#cancel)

#### Defined in

[stream.d.ts:51](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L51)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Writable](stream._stream_.Writable.md).[close](stream._stream_.Writable.md#close)

#### Defined in

[stream.d.ts:866](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L866)

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](stream._node_stream_.Duplex.md#uncork) or [end](stream._node_stream_.Duplex.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[cork](stream._stream_.Writable.md#cork)

#### Defined in

[stream.d.ts:931](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L931)

___

### destroy

▸ **destroy**(`error?`): [`Duplex`](stream._stream_.Duplex.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[destroy](stream._stream_.Writable.md#destroy)

#### Inherited from

[Readable](stream._stream_.Readable.md).[destroy](stream._stream_.Readable.md#destroy)

#### Defined in

[stream.d.ts:411](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L411)

___

### emit

▸ **emit**(`event`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:434](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L434)

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:435](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L435)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:436](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L436)

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:437](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L437)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:438](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L438)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:439](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L439)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[emit](stream._stream_.Writable.md#emit)

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:440](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L440)

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Implementation of

Writable.emit

#### Inherited from

[Readable](stream._stream_.Readable.md).[emit](stream._stream_.Readable.md#emit)

#### Defined in

[stream.d.ts:441](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L441)

___

### end

▸ **end**(`cb?`): [`Duplex`](stream._stream_.Duplex.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](stream._node_stream_.Duplex.md#write) method after calling [end](stream._node_stream_.Duplex.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[end](stream._stream_.Writable.md#end)

#### Defined in

[stream.d.ts:928](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L928)

▸ **end**(`chunk`, `cb?`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[end](stream._stream_.Writable.md#end)

#### Defined in

[stream.d.ts:929](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L929)

▸ **end**(`chunk`, `encoding?`, `cb?`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |
| `cb?` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[end](stream._stream_.Writable.md#end)

#### Defined in

[stream.d.ts:930](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L930)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[Writable](stream._stream_.Writable.md).[eventNames](stream._stream_.Writable.md#eventnames)

#### Inherited from

[Readable](stream._stream_.Readable.md).[eventNames](stream._stream_.Readable.md#eventnames)

#### Defined in

[events.d.ts:376](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L376)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules/globals.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[Readable](stream._stream_.Readable.md).[forEach](stream._stream_.Readable.md#foreach)

#### Defined in

[stream.d.ts:62](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L62)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](stream._node_stream_.Duplex.md#defaultmaxlisteners).

#### Returns

`number`

#### Implementation of

[Writable](stream._stream_.Writable.md).[getMaxListeners](stream._stream_.Writable.md#getmaxlisteners)

#### Inherited from

[Readable](stream._stream_.Readable.md).[getMaxListeners](stream._stream_.Readable.md#getmaxlisteners)

#### Defined in

[events.d.ts:234](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L234)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/globals.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/globals.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[getReader](stream._stream_.Readable.md#getreader)

#### Defined in

[stream.d.ts:52](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L52)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules/globals.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules/globals.md#writablestreamdefaultwriter)<`any`\>

#### Implementation of

[Writable](stream._stream_.Writable.md).[getWriter](stream._stream_.Writable.md#getwriter)

#### Defined in

[stream.d.ts:867](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L867)

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Inherited from

[Readable](stream._stream_.Readable.md).[isPaused](stream._stream_.Readable.md#ispaused)

#### Defined in

[stream.d.ts:279](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L279)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Implementation of

[Writable](stream._stream_.Writable.md).[listenerCount](stream._stream_.Writable.md#listenercount)

#### Inherited from

[Readable](stream._stream_.Readable.md).[listenerCount](stream._stream_.Readable.md#listenercount)

#### Defined in

[events.d.ts:320](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L320)

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Implementation of

[Writable](stream._stream_.Writable.md).[listeners](stream._stream_.Writable.md#listeners)

#### Inherited from

[Readable](stream._stream_.Readable.md).[listeners](stream._stream_.Readable.md#listeners)

#### Defined in

[events.d.ts:246](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L246)

___

### off

▸ **off**(`eventName`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[off](stream._stream_.Writable.md#off)

#### Inherited from

[Readable](stream._stream_.Readable.md).[off](stream._stream_.Readable.md#off)

#### Defined in

[events.d.ts:210](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L210)

___

### on

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:442](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L442)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:443](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L443)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:444](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L444)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:445](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L445)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:446](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L446)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:447](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L447)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[on](stream._stream_.Writable.md#on)

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:448](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L448)

▸ **on**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

Writable.on

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on)

#### Defined in

[stream.d.ts:449](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L449)

___

### once

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:450](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L450)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:451](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L451)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:452](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L452)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:453](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L453)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:454](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L454)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:455](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L455)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[once](stream._stream_.Writable.md#once)

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:456](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L456)

▸ **once**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

Writable.once

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once)

#### Defined in

[stream.d.ts:457](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L457)

___

### pause

▸ **pause**(): [`Duplex`](stream._stream_.Duplex.md)

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Inherited from

[Readable](stream._stream_.Readable.md).[pause](stream._stream_.Readable.md#pause)

#### Defined in

[stream.d.ts:245](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L245)

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](../modules/globals.md#writablestream)<`any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Implementation of

[Writable](stream._stream_.Writable.md).[pipe](stream._stream_.Writable.md#pipe)

#### Inherited from

[Readable](stream._stream_.Readable.md).[pipe](stream._stream_.Readable.md#pipe)

#### Defined in

[stream.d.ts:22](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L22)

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/globals.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](../interfaces/globals.ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](../interfaces/globals.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/globals.md#readablestream)<`T`\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[pipeThrough](stream._stream_.Readable.md#pipethrough)

#### Defined in

[stream.d.ts:53](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L53)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/globals.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](../interfaces/globals.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[pipeTo](stream._stream_.Readable.md#pipeto)

#### Defined in

[stream.d.ts:57](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L57)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:458](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L458)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:459](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L459)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:460](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L460)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:461](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L461)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:462](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L462)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:463](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L463)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependListener](stream._stream_.Writable.md#prependlistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:464](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L464)

▸ **prependListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

Writable.prependListener

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependListener](stream._stream_.Readable.md#prependlistener)

#### Defined in

[stream.d.ts:465](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L465)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:469](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L469)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:470](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L470)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:471](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L471)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:472](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L472)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:473](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L473)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:474](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L474)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[prependOnceListener](stream._stream_.Writable.md#prependoncelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:475](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L475)

▸ **prependOnceListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

Writable.prependOnceListener

#### Inherited from

[Readable](stream._stream_.Readable.md).[prependOnceListener](stream._stream_.Readable.md#prependoncelistener)

#### Defined in

[stream.d.ts:476](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L476)

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | [`BufferEncoding`](../modules/bun.md#bufferencoding) |

#### Returns

`boolean`

#### Inherited from

[Readable](stream._stream_.Readable.md).[push](stream._stream_.Readable.md#push)

#### Defined in

[stream.d.ts:396](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L396)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Implementation of

[Writable](stream._stream_.Writable.md).[rawListeners](stream._stream_.Writable.md#rawlisteners)

#### Inherited from

[Readable](stream._stream_.Readable.md).[rawListeners](stream._stream_.Readable.md#rawlisteners)

#### Defined in

[events.d.ts:275](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L275)

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](stream._node_stream_.Duplex.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

[Readable](stream._stream_.Readable.md).[read](stream._stream_.Readable.md#read)

#### Defined in

[stream.d.ts:200](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L200)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Duplex`](stream._stream_.Duplex.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeAllListeners](stream._stream_.Writable.md#removealllisteners)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeAllListeners](stream._stream_.Readable.md#removealllisteners)

#### Defined in

[events.d.ts:220](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L220)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:480](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L480)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:481](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L481)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:482](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L482)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:483](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L483)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:484](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L484)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:485](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L485)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[removeListener](stream._stream_.Writable.md#removelistener)

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:486](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L486)

▸ **removeListener**(`event`, `listener`): [`Duplex`](stream._stream_.Duplex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

Writable.removeListener

#### Inherited from

[Readable](stream._stream_.Readable.md).[removeListener](stream._stream_.Readable.md#removelistener)

#### Defined in

[stream.d.ts:487](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L487)

___

### resume

▸ **resume**(): [`Duplex`](stream._stream_.Duplex.md)

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Inherited from

[Readable](stream._stream_.Readable.md).[resume](stream._stream_.Readable.md#resume)

#### Defined in

[stream.d.ts:263](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L263)

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`Duplex`](stream._stream_.Duplex.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) | The new default encoding |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[setDefaultEncoding](stream._stream_.Writable.md#setdefaultencoding)

#### Defined in

[stream.d.ts:927](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L927)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`Duplex`](stream._stream_.Duplex.md)

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/bun.md#bufferencoding) | The encoding to use. |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Inherited from

[Readable](stream._stream_.Readable.md).[setEncoding](stream._stream_.Readable.md#setencoding)

#### Defined in

[stream.d.ts:224](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L224)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Duplex`](stream._stream_.Duplex.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Implementation of

[Writable](stream._stream_.Writable.md).[setMaxListeners](stream._stream_.Writable.md#setmaxlisteners)

#### Inherited from

[Readable](stream._stream_.Readable.md).[setMaxListeners](stream._stream_.Readable.md#setmaxlisteners)

#### Defined in

[events.d.ts:229](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L229)

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/globals.md#readablestream)<`any`\>, [`ReadableStream`](../modules/globals.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](../modules/globals.md#readablestream)<`any`\>, [`ReadableStream`](../modules/globals.md#readablestream)<`any`\>]

#### Inherited from

[Readable](stream._stream_.Readable.md).[tee](stream._stream_.Readable.md#tee)

#### Defined in

[stream.d.ts:61](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L61)

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](stream._node_stream_.Duplex.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using`process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

#### Implementation of

[Writable](stream._stream_.Writable.md).[uncork](stream._stream_.Writable.md#uncork)

#### Defined in

[stream.d.ts:932](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L932)

___

### unpipe

▸ **unpipe**(`destination?`): [`Duplex`](stream._stream_.Duplex.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](stream._node_stream_.Duplex.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](../modules/globals.md#writablestream)<`any`\> | Optional specific stream to unpipe |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Inherited from

[Readable](stream._stream_.Readable.md).[unpipe](stream._stream_.Readable.md#unpipe)

#### Defined in

[stream.d.ts:305](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L305)

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](stream._node_stream_.Duplex.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](stream._node_stream_.Duplex.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](stream._node_stream_.Duplex.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | [`BufferEncoding`](../modules/bun.md#bufferencoding) | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Inherited from

[Readable](stream._stream_.Readable.md).[unshift](stream._stream_.Readable.md#unshift)

#### Defined in

[stream.d.ts:370](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L370)

___

### wrap

▸ **wrap**(`stream`): [`Duplex`](stream._stream_.Duplex.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](stream._node_stream_.Duplex.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](../modules/globals.md#readablestream)<`any`\> | An "old style" readable stream |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Inherited from

[Readable](stream._stream_.Readable.md).[wrap](stream._stream_.Readable.md#wrap)

#### Defined in

[stream.d.ts:395](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L395)

___

### write

▸ **write**(`chunk`, `encoding?`, `cb?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](stream._node_stream_.Duplex.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `encoding?` | [`BufferEncoding`](../modules/bun.md#bufferencoding) | Callback for when this chunk of data is flushed. |
| `cb?` | (`error`: `Error`) => `void` | - |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Implementation of

[Writable](stream._stream_.Writable.md).[write](stream._stream_.Writable.md#write)

#### Defined in

[stream.d.ts:918](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L918)

▸ **write**(`chunk`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Implementation of

[Writable](stream._stream_.Writable.md).[write](stream._stream_.Writable.md#write)

#### Defined in

[stream.d.ts:923](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L923)

___

### from

▸ `Static` **from**(`src`): [`Duplex`](stream._stream_.Duplex.md)

A utility method for creating duplex streams.

- `Stream` converts writable stream into writable `Duplex` and readable stream
  to `Duplex`.
- `Blob` converts into readable `Duplex`.
- `string` converts into readable `Duplex`.
- `ArrayBuffer` converts into readable `Duplex`.
- `AsyncIterable` converts into a readable `Duplex`. Cannot yield `null`.
- `AsyncGeneratorFunction` converts into a readable/writable transform
  `Duplex`. Must take a source `AsyncIterable` as first parameter. Cannot yield
  `null`.
- `AsyncFunction` converts into a writable `Duplex`. Must return
  either `null` or `undefined`
- `Object ({ writable, readable })` converts `readable` and
  `writable` into `Stream` and then combines them into `Duplex` where the
  `Duplex` will write to the `writable` and read from the `readable`.
- `Promise` converts into readable `Duplex`. Value `null` is ignored.

**`Since`**

v16.8.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` \| `Object` \| [`Blob`](globals.Blob.md) \| `ArrayBuffer` \| `Promise`<`any`\> \| [`Stream`](stream._stream_.Stream.md) \| `Iterable`<`any`\> \| `AsyncIterable`<`any`\> \| `AsyncGeneratorFunction` |

#### Returns

[`Duplex`](stream._stream_.Duplex.md)

#### Overrides

[Readable](stream._stream_.Readable.md).[from](stream._stream_.Readable.md#from)

#### Defined in

[stream.d.ts:889](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L889)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](events._events_.EventEmitter-1.md) \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Readable](stream._stream_.Readable.md).[getEventListeners](stream._stream_.Readable.md#geteventlisteners)

#### Defined in

[events.d.ts:590](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L590)

___

### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](../modules/globals.md#readablestream)<`any`\> \| [`Readable`](stream._stream_.Readable.md)<`any`\> |

#### Returns

`boolean`

#### Inherited from

[Readable](stream._stream_.Readable.md).[isDisturbed](stream._stream_.Readable.md#isdisturbed)

#### Defined in

[stream.d.ts:80](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/stream.d.ts#L80)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](events._events_.EventEmitter-1.md) | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[Readable](stream._stream_.Readable.md).[listenerCount](stream._stream_.Readable.md#listenercount-1)

#### Defined in

[events.d.ts:560](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L560)

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](events._events_.EventEmitter-1.md) | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Readable](stream._stream_.Readable.md).[on](stream._stream_.Readable.md#on-1)

#### Defined in

[events.d.ts:540](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L540)

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once-1)

#### Defined in

[events.d.ts:473](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L473)

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Readable](stream._stream_.Readable.md).[once](stream._stream_.Readable.md#once-1)

#### Defined in

[events.d.ts:478](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L478)

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | ([`EventEmitter`](events._events_.EventEmitter-1.md) \| `DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[Readable](stream._stream_.Readable.md).[setMaxListeners](stream._stream_.Readable.md#setmaxlisteners-1)

#### Defined in

[events.d.ts:610](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/events.d.ts#L610)