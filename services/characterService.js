import httpClient from 'httpClient';

class CharacterService {
  getCharacters() {
    return httpClient.get(`character`);
  }

  getCharacter(id) {
    return httpClient.get(`character/${id}`);
  }
}

export default new CharacterService();
