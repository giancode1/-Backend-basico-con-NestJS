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
  ParseIntPipe
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { MyParseIntPipe } from '../common/parse-int.pipe';

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
    return this.ProductsService.findAll();
  }

  @Get(':productId')
  // @HttpCode(HttpStatus.OK)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.ProductsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.ProductsService.create(payload);
  }

  @Patch(':id')
  update(@Param('id', MyParseIntPipe) id: number, @Body() payload: any) {
    return this.ProductsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MyParseIntPipe) id: number) {
    return this.ProductsService.delete(id);
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
}
