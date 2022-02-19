import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 2;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 100,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    //error first
    if (!product) {
      // return null;
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    //payload.name = 'asd'; //no puedo modificar el nombre //ayuda a no cometer errores en el desarrollo
    const newProduct = {
      id: this.counterId++,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      Object.assign(product, payload);
      return product;
    }
    return null;
  }

  delete(id: number) {
    const product = this.findOne(id);
    this.products = this.products.filter((p) => p.id !== id);
    return product;
  }
}
