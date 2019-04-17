import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { mockData } from '../../mockData';
import { shallow } from 'enzyme';
import { fetchAllItems } from '../../thunks/fetchAllItems'

describe('App Component', () => {
  describe('App', () => {
    let wrapper
    let mockfetchAllItems

    const mockItems = mockData

    beforeEach(() => {
      mockfetchAllItems = jest.fn().mockImplementation(() => Promise.resolve({results: mockItems}))
      wrapper = shallow(<App fetchAllItems={mockfetchAllItems} />)
    });

    it('should match the snapshot with the data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it("should invoke the function fetchAllItems on componentDidMount", async () => {
      wrapper.instance().componentDidMount()
      expect(mockfetchAllItems).toBeCalled()
    });

    it("should call fetchAllItems with expected url", async () => {
      const mockUrl = 'http://localhost:3001/api/v1/home'
      wrapper.instance().componentDidMount()
      expect(mockfetchAllItems).toHaveBeenCalledWith(mockUrl)
    })
  });

  describe('mapStateToProps', () => {
    it('should return an object with an items array and an error string', () => {
      const mockState = {
        items: mockData,
        error: "",
        loading: false
      }
      const expected = {
        items: mockData,
        error: ""
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it.skip('should call dispatch when using fetchAllItems from MDTP', () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'http://localhost:3001/api/v1/items'
      const actionToDispatch = fetchAllItems(mockUrl)
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.fetchAllItems(mockUrl)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
