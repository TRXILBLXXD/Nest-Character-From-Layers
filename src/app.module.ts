import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './modules/character/character.module';
import { ContractModule } from './modules/contract/contract.module';
import { RandomModule } from './modules/random/random.module';

@Module({
  imports: [CharacterModule, ContractModule, RandomModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
