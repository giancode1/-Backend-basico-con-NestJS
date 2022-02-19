import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
//IsEmail, IsBoolean, IsDate, IsArray, IsOptional, IsEnum, IsDefined

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string; //readonly para que no se pueda modificar, viene de typescript

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  //tambien pueder agregar la longitud
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  // readonly name?: string;
  // readonly description?: string;
  // readonly price?: number;
  // readonly stock?: number;
  // readonly image?: string;
}
