import React from 'react';
import { shallow } from 'enzyme';
import { Hello, mapStateToProps } from '../../containers/Hello';

describe('hello', () => {
  it('should match snapshot', () => {
    const props = {
      FirstAction: jest.fn(),
    };
    const wrapper = shallow(<Hello {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const state = {
      index: {
        index: {
          message: 'hey',
        },
      },
    };
    expect(mapStateToProps(state)).toEqual({
      index: {
        index: {
          message: 'hey',
        },
      },
    });
  });
});
