# Namespace: "test"

[bun-test](bun_test.md)."test"

## Table of contents

### Interfaces

- [Expect](../interfaces/bun_test._test_.Expect.md)

### Functions

- [describe](bun_test._test_.md#describe)
- [expect](bun_test._test_.md#expect)
- [it](bun_test._test_.md#it)
- [test](bun_test._test_.md#test)

## Functions

### describe

▸ **describe**(`label`, `body`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `body` | () => `void` |

#### Returns

`any`

#### Defined in

[bun-test.d.ts:21](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun-test.d.ts#L21)

___

### expect

▸ **expect**(`value`): [`Expect`](../interfaces/bun_test._bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](../interfaces/bun_test._bun_test_.Expect.md)

#### Defined in

[bun-test.d.ts:25](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun-test.d.ts#L25)

___

### it

▸ **it**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

#### Defined in

[bun-test.d.ts:22](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun-test.d.ts#L22)

___

### test

▸ **test**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

#### Defined in

[bun-test.d.ts:23](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/bun-test.d.ts#L23)
