export interface Product {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

export interface Category {
  Cateid: string;
  CateName: string;
  Products: Product[];
}
