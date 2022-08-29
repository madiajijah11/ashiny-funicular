import { ProductUpdateManyWithoutSuppliersInput } from "./ProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string;
  description?: string;
  name?: string;
  phone?: string;
  products?: ProductUpdateManyWithoutSuppliersInput;
};
