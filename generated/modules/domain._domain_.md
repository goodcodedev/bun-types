# Namespace: "domain"

[domain](domain.md)."domain"

**This module is pending deprecation.** Once a replacement API has been
finalized, this module will be fully deprecated. Most developers should
**not** have cause to use this module. Users who absolutely must have
the functionality that domains provide may rely on it for the time being
but should expect to have to migrate to a different solution
in the future.

Domains provide a way to handle multiple different IO operations as a
single group. If any of the event emitters or callbacks registered to a
domain emit an `'error'` event, or throw an error, then the domain object
will be notified, rather than losing the context of the error in the`process.on('uncaughtException')` handler, or causing the program to
exit immediately with an error code.

**`Deprecated`**

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/domain.js)

## Table of contents

### Classes

- [Domain](../classes/domain._domain_.Domain.md)

### Functions

- [create](domain._domain_.md#create)

## Functions

### create

▸ **create**(): [`Domain`](../classes/domain._domain_.Domain.md)

#### Returns

[`Domain`](../classes/domain._domain_.Domain.md)

#### Defined in

[domain.d.ts:166](https://github.com/goodcodedev/bun-types/blob/8bd1b3a/domain.d.ts#L166)
