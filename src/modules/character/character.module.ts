import { Module, Global } from '@nestjs/common';
import { CharacterService } from './character.service';

@Global()
@Module({
  providers: [CharacterService],
  exports: [CharacterService]
})
export class CharacterModule {}
