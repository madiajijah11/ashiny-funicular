import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  address: string;
  date: Date;
  name: string;
  phone: string;
  product?: ProductCreateNestedManyWithoutOrdersInput;
  quantity: number;
};
