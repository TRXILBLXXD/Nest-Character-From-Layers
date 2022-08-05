import { Controller, Get, Res } from '@nestjs/common';
import { RandomService } from './random.service';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import { rm } from 'fs/promises';

@Controller('random')
export class RandomController {
  constructor(private randomService: RandomService) {}

  @Get()
  async getRandomCharacter(@Res() res: Response) {
    const filename = await this.randomService.getRandomCharacter();
    const file = createReadStream(join(`output`, `${filename}.png`));
    file.pipe(res);

    rm(join(`output`, `${filename}.png`));
  }
}
