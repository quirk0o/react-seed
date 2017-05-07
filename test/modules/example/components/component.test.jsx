import React from 'react'
import {shallow} from 'enzyme'

import Component from 'modules/example/components/component'

describe('<Component />', function () {
  def('test', () => 'value')

  subject(function () {
    return shallow(<Component test={this.test} />)
  })

  it('renders', function () {
    expect(this.subject).toMatchSnapshot()
  })
})