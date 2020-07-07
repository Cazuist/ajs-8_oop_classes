import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
  }
}
