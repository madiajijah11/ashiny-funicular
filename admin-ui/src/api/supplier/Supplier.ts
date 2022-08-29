import { Product } from "../product/Product";

export type Supplier = {
  address: string;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  phone: string;
  products?: Array<Product>;
  updatedAt: Date;
};
