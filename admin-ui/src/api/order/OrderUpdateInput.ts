import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  address?: string;
  date?: Date;
  name?: string;
  phone?: string;
  product?: ProductUpdateManyWithoutOrdersInput;
  quantity?: number;
};
