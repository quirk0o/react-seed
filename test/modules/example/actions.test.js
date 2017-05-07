import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import actionTypes from 'modules/example/action-types'
import * as actions from 'modules/example/actions'

const hostname = process.env.API_URL
const mockStore = configureMockStore([thunk])

function withMockedResponse(url, method) {
  beforeEach(function () {
    nock(hostname).intercept(url, method).reply(this.status, this.response)
  })
}

function dispatchAction() {
  beforeEach(function () {
    return this.store.dispatch(this.action)
  })
}

describe('example actions', function () {
  def('store', () => mockStore())

  afterEach(function () {
    nock.cleanAll()
    this.store.clearActions()
  })

  describe('.fetchTodos', function () {
    def('action', () => actions.fetchTodos())
    def('status', () => 200)
    def('response', () => [{id: 1, title: 'test'}])

    subject(function () {
      return this.store.getActions()
    })

    withMockedResponse('/todos', 'GET')
    dispatchAction()

    def('expectedActions', function () {
      return [
        {
          type: actionTypes.TODOS_FETCH_REQUEST
        },
        {
          type: actionTypes.TODOS_FETCH_SUCCESS,
          payload: this.response
        }
      ]
    })

    it('dispatches success action', function () {
      expect(this.subject).to.deep.equal(this.expectedActions)
    })
  })
})