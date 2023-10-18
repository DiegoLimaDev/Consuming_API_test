import axios from 'axios';
import { ProductsModel } from '../domain/products';
import { IProductsRepo } from '../interfaces/products.interface';

export class ProductsRepo implements IProductsRepo {
  url = 'https://fakestoreapi.com/products';
  getProducts(): Promise<ProductsModel[]> {
    const data = axios.get(this.url).then((res) => res.data);
    return data;
  }
}
