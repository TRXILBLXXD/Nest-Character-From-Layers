import { Injectable } from '@nestjs/common';
import { CharacterService } from '../character/character.service';

@Injectable()
export class RandomService {
  constructor(private characterService: CharacterService) {}

  async getRandomCharacter() {
    const layers = this.randomLayers();
    await this.characterService.generateCharacter(layers.name, layers.numbers);
    return layers.name;
  }

  private randomLayers() {
    const first = Math.floor(Math.random() * 10);
    const second = Math.floor(Math.random() * 21);
    const third = Math.floor(Math.random() * 51);
    const fourth = Math.floor(Math.random() * 34);
    const time = Date.now();
    return { name: time.toString(), numbers: [first, second, third, fourth] };
  }
}
