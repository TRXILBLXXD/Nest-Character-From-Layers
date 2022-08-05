import { Module } from '@nestjs/common';
import { CharacterModule } from '../character/character.module';
import { RandomController } from './random.controller';
import { RandomService } from './random.service';

@Module({
  controllers: [RandomController],
  providers: [RandomService]
})
export class RandomModule {}
