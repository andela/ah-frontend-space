import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../../../components/common/TextArea';

function renderTextArea(args) {
  const defaultProps = {
    id: '',
    name: 'description',
    className: '',
    rows: '8',
    value: '',
    onChange: jest.fn(),
    placeholder: 'Description goes here',
  };

  const props = { ...defaultProps, ...args };
  return shallow(<TextArea {...props} />);
}

describe('TextArea', () => {
  const wrapper = renderTextArea();

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
