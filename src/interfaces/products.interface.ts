import { ProductsModel } from '../domain/products';

export interface IProductsRepo {
  getProducts(): Promise<ProductsModel[]>;
}
