import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/card';

describe('Testing Card Component', () => {
  it('should be defined', () => {
    expect(Card).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Card>Conteúdo do Card</Card>);

    expect(wrapper).toMatchSnapshot();
  });
});