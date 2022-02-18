import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: number,
  ) {
    return {
      message: `Category: ${categoryId}, Product: ${productId}`,
    };
  }
}
