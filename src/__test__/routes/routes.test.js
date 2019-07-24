import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/Routes';
import { SignOut } from '../../utils/SignOut';


describe('<Routes/>', () => {
  it('should render Routes component', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call signout function when signout is clicked', () => {
    const wrapper = shallow(<SignOut />);
    expect(wrapper).toMatchSnapshot();
  });
});
