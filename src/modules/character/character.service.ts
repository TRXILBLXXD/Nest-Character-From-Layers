import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import sharp from 'sharp';

@Injectable()
export class CharacterService {
  dir = 'output'
    async generateCharacter(name: string, params: number[]) {
        const layers = [
            { input: `images/BG/BG${params[0]}.png` },
            { input: `images/BODY/BODY${params[1]}.png` },
            { input: `images/FACE/FACE${params[2]}.png` },
            { input: `images/CLOTHES/CLOTHES${params[3]}.png` },
          ];
          if (!existsSync(this.dir)) mkdirSync(this.dir, { recursive: true });
          const imgs = await sharp('images/BG/BG0.png')
            .composite(layers)
            .toFile(`output/${name}.png`);
    }
}
