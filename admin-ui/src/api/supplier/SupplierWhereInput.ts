import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SupplierWhereInput = {
  address?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringFilter;
  products?: ProductListRelationFilter;
};
