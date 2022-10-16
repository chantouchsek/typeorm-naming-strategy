# Typeorm naming strategy

[![ci](https://github.com/chantouchsek/typeorm-naming-strategy/actions/workflows/test.yml/badge.svg)](https://github.com/chantouchsek/typeorm-naming-strategy/actions/workflows/test.yml)
[![Latest Version on NPM](https://img.shields.io/npm/v/typeorm-naming-strategy.svg?style=flat-square)](https://npmjs.com/package/typeorm-naming-strategy)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/typeorm-naming-strategy.svg?style=flat-square)](https://npmjs.com/package/typeorm-naming-strategy)
[![npm](https://img.shields.io/npm/dm/typeorm-naming-strategy.svg?style=flat-square)](https://npmjs.com/package/typeorm-naming-strategy)

This package provides a few (one, at the moment) useful custom naming strategies. It alliterates the name of columns, relations, and other fields in the database.

For example, using the snake strategy, if you have a model like this:

```typescript
class User {
  @Column()
  createdAt;
}
```

In the DB the `createdAt` field will be `created_at`

## Naming strategies available

- Snake

## Installation

It's available as an [npm package](https://www.npmjs.com/package/typeorm-naming-strategy)

```sh
npm install typeorm-naming-strategy --save
```

Or using yarn

```sh
yarn add typeorm-naming-strategy
```

## Usage

```ts
import { createConnection } from 'typeorm';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategy';
import SnakeNamingStrategy from 'typeorm-naming-strategy';

await createConnection({
  //...
  namingStrategy: new SnakeNamingStrategy(), // Here you'r using the strategy!
});
```

Alternatively you can use it in combination with a `ormconfig.js`

```js
// Use require instead of import
// const SnakeNamingStrategy = require("typeorm-naming-strategy").SnakeNamingStrategy
const SnakeNamingStrategy = require("typeorm-naming-strategy")

module.exports = {
  //...
  namingStrategy: new SnakeNamingStrategy(),
}
```

Or you can use it in combination with a `ormconfig.ts`

```ts
import SnakeNamingStrategy from 'typeorm-naming-strategy';

module.exports = {
  //...
  namingStrategy: new SnakeNamingStrategy(),
}
```

Use with NestJs configuration

```ts
import { registerAs } from '@nestjs/config'
import type { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { SnakeNamingStrategy } from 'typeorm-naming-strategy'

export default registerAs('database', (): MysqlConnectionOptions => ({
    //...
    namingStrategy: new SnakeNamingStrategy(),
    //...
  })
)
```

