import { ProductsModel } from '../domain/products';
import { ProductsRepo } from '../repositories/products.repo';

export class ProductsService {
  static async getProducts(): Promise<ProductsModel[]> {
    const productsRepo = new ProductsRepo();
    return await productsRepo.getProducts();
  }
}
