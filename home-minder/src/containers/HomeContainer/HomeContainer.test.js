import React from 'react';
import { HomeContainer, mapStateToProps } from './HomeContainer';
import { shallow } from 'enzyme';
import { mockHomeData } from '../../mockData'

describe('HomeContainer container', () => {
  describe('HomeContainer', () => {
    let wrapper
    const mockItems = mockHomeData

    beforeEach(() => {
      wrapper = shallow(<HomeContainer items={ mockItems }/>)
    });

    it('should match the snapshot with the data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with an items array', () => {
      const mockState = {
        items: mockHomeData,
        error: "",
        loading: false
      }
      const expected = {
        items: mockHomeData
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  });

})