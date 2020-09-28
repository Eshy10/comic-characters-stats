import axios from 'axios';

const HeroCharacter = (() => {
  const getAllCharacter = () => {
    const promise = axios.get(
      'https://akabab.github.io/superhero-api/api/all.json',
    );
    const promiseData = promise.then(res => res.data);
    promise.catch(error => { throw (error); });
    return promiseData;
  };
  const getCharacterId = id => {
    const promise = axios.get(
      `https://akabab.github.io/superhero-api/api/id/${id}.json`,
    );
    const promiseData = promise.then(res => res.data);
    promise.catch(error => { throw (error); });
    return promiseData;
  };
  return { getAllCharacter, getCharacterId };
})();

export default HeroCharacter;
