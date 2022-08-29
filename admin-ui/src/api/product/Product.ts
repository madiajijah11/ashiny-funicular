import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  brand: string;
  category?: Category;
  createdAt: Date;
  id: string;
  name: string;
  orders?: Array<Order>;
  price: number;
  stock: string;
  supplier?: Supplier;
  updatedAt: Date;
};
