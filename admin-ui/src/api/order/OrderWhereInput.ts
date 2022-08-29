import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type OrderWhereInput = {
  address?: StringFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringFilter;
  product?: ProductListRelationFilter;
  quantity?: IntFilter;
};
