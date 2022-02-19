import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class MyParseIntPipe implements PipeTransform {
  //nombre , interfaz
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      // throw new Error('Valor no es un número');
      throw new BadRequestException(`${value} is not a number`);
    }
    return val;
  }
}
