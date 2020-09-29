/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { shallow } from 'enzyme';
import SuperHeroCard from '../../components/superhero/SuperHeroCard';

describe('Hero Card', () => {
  const fieldProps = {
    id: 1,
    name: 'super man',
    imageUrl: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/no-portrait.jpg',
  };
  it('should render a <Typography />', () => {
    const wrapper = shallow(<SuperHeroCard {...fieldProps} />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should render <CardMedia />', () => {
    const wrapper = shallow(<SuperHeroCard {...fieldProps} />);
    expect(wrapper.find(CardMedia)).toHaveLength(1);
  });
});
