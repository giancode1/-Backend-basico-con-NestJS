import { Controller, Get } from '@nestjs/common';
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
}
