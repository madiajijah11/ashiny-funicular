import { StringFilter } from "../../util/StringFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductWhereInput = {
  brand?: StringFilter;
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  price?: FloatFilter;
  stock?: StringFilter;
  supplier?: SupplierWhereUniqueInput;
};
