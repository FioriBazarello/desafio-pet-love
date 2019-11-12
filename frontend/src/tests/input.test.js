import React from 'react';
import { mount } from 'enzyme';

import Input from '../components/input';

describe('Testing Input Component', () => {
  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = mount(<Input />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a value', () => {
    const wrapper = mount(<Input value='1234' onChange={() => {}} />);

    expect(wrapper.find('input').getElement().props.value).toEqual('1234');
  });

  it('should render error message', () => {
    const wrapper = mount(<Input error='Valor inválido' />);

    expect(wrapper.find('.input').hasClass('input--state-error')).toEqual(true);
    expect(wrapper.find('p').contains('Valor inválido')).toEqual(true);
  });

  it('should call onChange on value change', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Input onChange={mockFn} />);

    wrapper.find('input').simulate('change', { target: { value: 'abc' } });
    
    expect(mockFn).toHaveBeenCalled();
  });
});