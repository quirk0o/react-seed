import generateActionTypes from 'helpers/generate-action-types'

export default {
  ...generateActionTypes('todos')(),
  CUSTOM_ACTION: 'CUSTOM_ACTION'
}