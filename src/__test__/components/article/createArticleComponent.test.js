import React from 'react';
import { shallow } from 'enzyme';
import CreateArticle from '../../../components/createArticle';

const props = {
  title: '',
  description: '',
  body: '',
};
it('should match snapshot', () => {
  const wrapper = shallow(
    <CreateArticle
      {...props}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
