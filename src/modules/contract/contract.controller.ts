import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { rm } from 'fs/promises';
import { join } from 'path';
import { ContractService } from './contract.service';

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Get(':address')
  async getCharacter(@Res() res: Response, @Param('address') address: string) {
    
    await this.contractService.getCharacter(address);
    const file = createReadStream(join(`output`, `${address}.png`));
    file.pipe(res);

    rm(join(`output`, `${address}.png`));
  }
}
