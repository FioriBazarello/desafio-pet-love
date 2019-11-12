import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Testing App Component', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});