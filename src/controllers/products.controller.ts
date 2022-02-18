import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Patch,
  Delete,
  // HttpStatus,
  // HttpCode,
  // Res,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '@nestjs/common';

@Controller('products') //Route
export class ProductsController {
  //private para dejar esta inyeccion como atributo de la misma clase
  constructor(private ProductsService: ProductsService){}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `product, limit: ${limit}, offset: ${offset}, brand: ${brand}`,
    // };
    return this.ProductsService.findAll();
  }

  @Get(':productId')
  // @HttpCode(HttpStatus.OK)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.ProductsService.findOne(productId);
  }
  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Product created',
    //   payload,
    // };
    return this.ProductsService.create(payload);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.ProductsService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   id,
    // };
    return this.ProductsService.delete(+id);
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
}
