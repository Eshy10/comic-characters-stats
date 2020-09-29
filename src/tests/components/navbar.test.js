/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/navbar/Navbar';

describe('Navbar', () => {
  const fieldProps = {
    onChange: jest.fn(),
  };

  it('should render a <Typography /> to display the maximum length of the comment', () => {
    const wrapper = shallow(<Navbar {...fieldProps} />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should render <Inputbase />', () => {
    const wrapper = shallow(<Navbar {...fieldProps} />);
    expect(wrapper.find(InputBase)).toHaveLength(1);
    expect(wrapper.find(InputBase).props().placeholder).toEqual(
      'Search',
    );
  });
});
