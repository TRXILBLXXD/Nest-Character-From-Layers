import { Injectable } from '@nestjs/common';
import { CharacterService } from './modules/character/character.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
