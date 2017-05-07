import generateActions from 'helpers/generate-actions'
import source from './source'

const todoActions = generateActions('todos')()

export function fetchTodos() {
  return (dispatch) => {
    dispatch(todoActions.todosFetchRequest())
    source
      .fetch()
      .then(todos => dispatch(todoActions.todosFetchSuccess(todos)))
      .catch(err => dispatch(todoActions.todosFetchFailure(err)))
  }
}
