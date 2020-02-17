import * as uuid from 'uuid/';

import { Injectable } from '@nestjs/common';

import { ICat } from './interfaces/ICat';
import { CreateCatDto } from './dtos/CreateCat';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [];

  create(cat: CreateCatDto): void {
    const createdCat = { ...cat, id: uuid.v4() }
    this.cats.push(createdCat);
  }

  findAll(): ICat[] {
    return this.cats;
  }

  findOne(id): ICat {
    return this.cats.find(cat => cat.id === id);
  }
}
