import reducer from 'modules/example/reducer'

import generateActions from 'helpers/generate-actions'

const todosActions = generateActions('todos')()

describe('example reducer', () => {
  subject(function () {
    return reducer(undefined, this.action)
  })

  context('TODOS_FETCH_SUCCESS', function () {
    def('payload', () => [{id: 1, title: 'test'}])
    def('action', function () {
      return todosActions.todosFetchSuccess(this.payload)
    })

    it('sets user data', function () {
      const expectedState = [{id: 1, title: 'test'}]

      expect(this.subject).to.deep.equal(expectedState)
    })
  })
})