import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import ContractJSON from 'abi/contract.json';
import { CharacterService } from '../character/character.service';

@Injectable()
export class ContractService {
  constructor(private characterServcie: CharacterService) {}
  private provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC);
  private contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ContractJSON.abi, this.provider);

  async getCharacter(address: string) {
    if (!ethers.utils.isAddress(address)) throw new BadRequestException(HttpStatus.BAD_REQUEST, "Is not address");
    const data = await this.contract.getCharacter(address);
    await this.characterServcie.generateCharacter(address, data);
  }
}
