import { ProductsModel } from '../domain/products';
import { IProductsRepo } from '../interfaces/products.interface';
import { ProductsRepo } from '../repositories/products.repo';

export class ProductsService implements IProductsRepo {
  productsRepo = new ProductsRepo();
  async getProducts(): Promise<ProductsModel[]> {
    return await this.productsRepo.getProducts();
  }
}
