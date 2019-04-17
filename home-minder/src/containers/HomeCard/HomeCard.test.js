import React from 'react';
import { shallow } from 'enzyme';
import { HomeCard } from './HomeCard';
import { mockHomeData } from '../../mockData';

import { putUpdatedItem } from '../../thunks/putUpdatedItem';
jest.mock('../../thunks/putUpdatedItem')

describe('HomeCard container', () => {
  describe('HomeCard', () => {
    let wrapper
    const mockItems = mockHomeData
    const mockputUpdatedItem = jest.fn()

    beforeEach(() => {
      wrapper = shallow(<HomeCard items={ mockItems } putUpdatedItem={ mockputUpdatedItem }/>)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it.skip('should have default state', () => {
      expect(wrapper.state('brand')).toEqual("")
      expect(wrapper.state('model')).toEqual("")
    });

    it.skip('should update the state on component did mount', () => {
      expect(wrapper.state('name')).toEqual("")
      wrapper.instance().componentDidMount()
      expect(wrapper.state('name')).toEqual("Refrigerator Water Filter")
    });

    it('should change state of brand when updateValue is invoked', () => {
      const mockBrandEvent = { target: { name: "brand", value: "Alexa" } }
      wrapper.instance().updateValue(mockBrandEvent)

      expect(wrapper.state('brand')).toEqual("Alexa")
    });

    it.skip('should change state of userScheduled when updateCalendar is invoked', () => {
      const mockDate = "Fri Apr 12 2019 00:00:00 GMT-0600 (Mountain Daylight Time)"

      expect(wrapper.state('userScheduled')).toEqual("")
      wrapper.instance().updateCalendar(mockDate)

      expect(wrapper.state('userScheduled')).toEqual("2019-04-12T06:00:00.000Z")
    });

    it('should invoke putUpdatedItem when handleSubmit is invoked', () => {
      wrapper.instance().handleSubmit()

      expect(mockputUpdatedItem).toHaveBeenCalled()
    });

    it.skip('should change the state of toHomepage to true when handleSubmit is invoked', () => {
      wrapper.setState({ toHomepage: false })

      wrapper.instance().handleSubmit()

      expect(wrapper.state('toHomepage')).toEqual(true)
    })
  });

  describe('mapStateToProps', () => {
    
  })
})