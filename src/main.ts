import type { NamingStrategyInterface } from 'typeorm'
import { DefaultNamingStrategy } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'

export class SnakeNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  tableName(className: string, customName?: string) {
    return customName || snakeCase(className)
  }

  columnName(
    propertyName: string,
    customName: string | undefined,
    embeddedPrefixes: string[],
  ) {
    return (
      snakeCase(embeddedPrefixes.concat('').join('_'))
      + (customName || snakeCase(propertyName))
    )
  }

  relationName(propertyName: string) {
    return snakeCase(propertyName)
  }

  joinColumnName(relationName: string, referencedColumnName: string) {
    return snakeCase(`${relationName}_${referencedColumnName}`)
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
  ) {
    return snakeCase(
      `${firstTableName
      }_${
        firstPropertyName.replace(/\./g, '_')
      }_${
        secondTableName}`,
    )
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string,
  ) {
    return snakeCase(
      `${tableName}_${columnName || propertyName}`,
    )
  }

  classTableInheritanceParentColumnName(
    parentTableName: string,
    parentTableIdPropertyName: string,
  ) {
    return snakeCase(`${parentTableName}_${parentTableIdPropertyName}`)
  }

  eagerJoinRelationAlias(alias: string, propertyPath: string) {
    return `${alias}_${propertyPath.replace('.', '_')}`
  }
}

export default SnakeNamingStrategy
