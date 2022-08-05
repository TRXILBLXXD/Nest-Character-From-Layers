import { Module } from '@nestjs/common';
import { CharacterModule } from '../character/character.module';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';

@Module({
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {}
