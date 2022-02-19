export class CreateProductDto {
  readonly name: string; //readonly para que no se pueda modificar, viene de typescript
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
