import React from 'react';
import { shallow } from 'enzyme';
import { Hello, mapStateToProps } from '../../containers/Hello';
import App from '../../App';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

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
