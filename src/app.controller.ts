import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola GC!';
  }
  @Get('nuevo')
  newEndpoint() {
    return 'soy nuevo';
  }
  @Get('/ruta/') // vale con o sin /, en express daria problemas
  hello() {
    return 'rutaa';
  }
  //las rutas no dinamicas van primeras, para que no se confunda con las dinamicas
  @Get('/products/filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  // @Get('/products/:id')
  // getProduct(@Param() params: any) {
  //   return `product ${params.id}`;
  // }
  //si ya sabemos lo que va a recibir el parametro, podemos hacerlo de la siguiente manera
  @Get('/products/:productId')
  getProduct(@Param('productId') productId: number) {
    return `product ${productId}`;
  }

  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `product, limit: ${limit}, offset: ${offset}`;
  // }
  //con un mejor control:
  @Get('products')
  getProducts(
    @Query('limit') limit = 100, //si ya le asigno un valor por defecto, no es necesario poner el tipado
    @Query('offset') offset = 0,
    @Query('brand') brand: string, //brand es marca
  ) {
    return `product, limit: ${limit}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: number,
  ) {
    return `Category: ${categoryId}, Product: ${productId}`;
  }
}
