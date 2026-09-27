import { Product } from './product.model';

export interface Category {
  Cateid: string;
  CateName: string;
  Products: Product[];
}
