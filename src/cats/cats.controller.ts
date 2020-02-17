import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';

import { CreateCatDto } from './dtos/CreateCat';
import { ICat } from './interfaces/ICat';

import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats.';
  }

  @Get(':id')
  findOne(@Param('id') id): ICat {
    return this.catsService.findOne(id);
  }

  @Post()
  @HttpCode(204)
  create(@Body() catToCreate: CreateCatDto): void {
    return this.catsService.create(catToCreate);
  }
}
