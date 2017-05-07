import {flow, map, mapKeys} from 'lodash/fp'
import {camelCase, fromPairs} from 'lodash'
import generateActionTypes from './generate-action-types'

const createAction = (type, payloadCreator = x => x) => (...args) => ({
  type,
  payload: payloadCreator(...args)
})

export default (name, variants) => (...actionTypes) => {
  const types = generateActionTypes(name, variants)(...actionTypes)

  return flow(
    map(type =>
      [type, createAction(type)]
    ),
    fromPairs,
    mapKeys(camelCase)
  )(types)
}