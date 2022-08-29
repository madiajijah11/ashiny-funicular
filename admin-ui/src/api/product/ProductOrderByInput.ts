import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
