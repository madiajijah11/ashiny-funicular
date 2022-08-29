import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductCreateInput = {
  brand: string;
  category: CategoryWhereUniqueInput;
  name: string;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price: number;
  stock: string;
  supplier: SupplierWhereUniqueInput;
};
