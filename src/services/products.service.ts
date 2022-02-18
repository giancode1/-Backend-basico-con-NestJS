import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

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
    // console.log("me llego el id: ", id, typeof id);
    return this.products.find((product) => product.id === id);
  }

  create(payload: any) {
    const newProduct = {
      id: this.counterId++,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    // console.log("me llego el id: ", id, typeof id);
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
