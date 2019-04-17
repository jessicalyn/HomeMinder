import React from 'react'
import AuditCard from './AuditCard';
import { shallow } from 'enzyme'

describe('AuditCard', () => {
  let wrapper
  const item = {
    id: 1,
    name: "Refrigerator Water Filter",
    room: "Kitchen"
  }

  it('should match the snapshot with data passed in', () => {
    wrapper = shallow(<AuditCard {...item} />)
    expect(wrapper).toMatchSnapshot()
  })
})