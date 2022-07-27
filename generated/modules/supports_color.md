# Module: supports-color

## Table of contents

### References

- [default](supports_color.md#default)

### Interfaces

- [ColorSupport](../interfaces/supports_color.ColorSupport.md)
- [Options](../interfaces/supports_color.Options.md)

### Type Aliases

- [ColorInfo](supports_color.md#colorinfo)
- [ColorSupportLevel](supports_color.md#colorsupportlevel)

### Variables

- [stderr](supports_color.md#stderr)
- [stdout](supports_color.md#stdout)
- [supportsColor](supports_color.md#supportscolor)

## References

### default

Renames and re-exports [supportsColor](supports_color.md#supportscolor)

## Type Aliases

### ColorInfo

Ƭ **ColorInfo**: [`ColorSupport`](../interfaces/supports_color.ColorSupport.md) \| ``false``

#### Defined in

[supports-color.d.ts:44](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/supports-color.d.ts#L44)

___

### ColorSupportLevel

Ƭ **ColorSupportLevel**: ``0`` \| ``1`` \| ``2`` \| ``3``

Levels:
- `0` - All colors disabled.
- `1` - Basic 16 colors support.
- `2` - ANSI 256 colors support.
- `3` - Truecolor 16 million colors support.

#### Defined in

[supports-color.d.ts:17](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/supports-color.d.ts#L17)

## Variables

### stderr

• `Const` **stderr**: [`ColorInfo`](supports_color.md#colorinfo)

#### Defined in

[supports-color.d.ts:52](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/supports-color.d.ts#L52)

___

### stdout

• `Const` **stdout**: [`ColorInfo`](supports_color.md#colorinfo)

#### Defined in

[supports-color.d.ts:51](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/supports-color.d.ts#L51)

___

### supportsColor

• `Const` **supportsColor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stderr` | [`ColorInfo`](supports_color.md#colorinfo) |
| `stdout` | [`ColorInfo`](supports_color.md#colorinfo) |

#### Defined in

[supports-color.d.ts:46](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/supports-color.d.ts#L46)
