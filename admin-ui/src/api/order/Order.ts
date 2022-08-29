import { Product } from "../product/Product";

export type Order = {
  address: string;
  createdAt: Date;
  date: Date;
  id: string;
  name: string;
  phone: string;
  product?: Array<Product>;
  quantity: number;
  updatedAt: Date;
};
