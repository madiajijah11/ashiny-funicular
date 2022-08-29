import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address: string;
  description: string;
  name: string;
  phone: string;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
};
