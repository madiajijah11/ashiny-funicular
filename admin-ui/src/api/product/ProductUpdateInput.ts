import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductUpdateInput = {
  brand?: string;
  category?: CategoryWhereUniqueInput;
  name?: string;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number;
  stock?: string;
  supplier?: SupplierWhereUniqueInput;
};
