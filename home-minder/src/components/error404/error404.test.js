import React from 'react'
import error404 from './error404';
import { shallow } from 'enzyme'

describe('error404', () => {
  let wrapper

  it('should match the snapshot with data passed in', () => {
    wrapper = shallow(<error404 />)
    expect(wrapper).toMatchSnapshot()
  })
})