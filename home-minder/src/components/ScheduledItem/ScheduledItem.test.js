import React from 'react'
import ScheduledItem from './ScheduledItem';
import { shallow } from 'enzyme'

describe('ScheduledItem', () => {
  let wrapper
  const item = {
    id: 1,
    name: "Refrigerator Water Filter",
    room: "Kitchen",
    userScheduled: "2019-04-11T06:00:00.000Z"
  }

  it('should match the snapshot with data passed in', () => {
    wrapper = shallow(<ScheduledItem {...item} />)
    expect(wrapper).toMatchSnapshot()
  })
})