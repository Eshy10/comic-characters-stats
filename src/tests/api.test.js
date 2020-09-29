import HeroCharacter from '../api/fetchCharacterApi';

describe('async operation on api calls', () => {
  it('should be defined', () => {
    expect(HeroCharacter.getAllCharacter()).toBeDefined();
  });

  it('should fetch all data', async () => {
    const data = await HeroCharacter.getAllCharacter();
    expect(data).toBeTruthy();
  });

  it('should fetch data, using promises', () => {
    expect.assertions(1);
    return HeroCharacter.getAllCharacter().then(data => {
      expect(data).toBeTruthy();
    });
  });
});
