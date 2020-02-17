import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';

import { CreateCatDto } from './dtos/CreateCat';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats.';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This actions retrieves cat #${id}`;
  }

  @Post()
  @HttpCode(204)
  create(@Body() catToCreate: CreateCatDto): string {
    console.log(catToCreate);

    return 'This action add a new cat';
  }
}
