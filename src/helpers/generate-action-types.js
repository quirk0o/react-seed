import {flow, map, flatMap} from 'lodash/fp'
import {zip, fromPairs, snakeCase} from 'lodash'

export const DEFAULT_TYPES = ['fetch', 'create', 'update', 'delete']
export const DEFAULT_VARIANTS = ['REQUEST', 'SUCCESS', 'FAILURE']

export default (name, variants = DEFAULT_VARIANTS) => (...actionTypes) => {
  const types = actionTypes.length > 0 ? actionTypes : DEFAULT_TYPES

  const actionNames = flow(
    map(type => snakeCase(type).toUpperCase()),
    flatMap(type =>
      variants.map(variant =>
        `${snakeCase(name).toUpperCase()}_${type}_${variant}`
      )
    ))(types)

  return fromPairs(zip(actionNames, actionNames))
}