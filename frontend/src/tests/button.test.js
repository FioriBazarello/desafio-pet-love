import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/button';

describe('Testing Button Component', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Button>Clique!</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick on button click', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button onClick={mockFn}>Clique!</Button>);

    wrapper.find('button').simulate('click');
    
    expect(mockFn).toHaveBeenCalled();
  });
});