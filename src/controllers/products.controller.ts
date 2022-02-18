import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

@Controller('products') //Route
export class ProductsController {
  //las rutas no dinamicas van primeras, para que no se confunda con las dinamicas
  @Get()
  getProducts(
    @Query('limit') limit = 100, //si ya le asigno un valor por defecto, no es necesario poner el tipado
    @Query('offset') offset = 0,
    @Query('brand') brand: string, //brand es marca
  ) {
    return {
      message: `product, limit: ${limit}, offset: ${offset}, brand: ${brand}`,
    };
  }
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
  @Get(':productId')
  // @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId') productId: number) {
    return {
      message: `product ${productId}`,
    };
  }
  // @Post()
  // createProduct() {
  //   return {
  //     message: 'Product created',
  //   };
  // }
  @Post()
  create(@Body() payload: any) {
    //en @Body('price') , se puede poner cada atributo, pero no es eficiente en caso de muchos atributos
    return {
      message: 'Product created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
