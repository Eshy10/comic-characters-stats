import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import SuperHeroList from '../components/superHeroList/SuperHeroList';
import { getChracters, filterCharacter } from '../redux/actions/index';
import HeroCharacter from '../api/fetchCharacterApi';

const HomePage = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector(state => state.heroes);
  const filterCharacters = useSelector(state => state.filter);

  useEffect(() => {
    const heroCharacter = () => {
      HeroCharacter.getAllCharacter().then(data => {
        dispatch(getChracters(data));
      });
    };
    heroCharacter();
  }, [dispatch]);

  let filteredHeroes = [];
  if (!allCharacters) {
    return null;
  }
  filteredHeroes = allCharacters.filter(data => data.name.toLowerCase()
    .includes(filterCharacters.toLowerCase()));

  return (
    <div>
      <Navbar handleChange={e => dispatch(filterCharacter(e.target.value))} />
      <SuperHeroList data={filteredHeroes} />
    </div>
  );
};

export default HomePage;
