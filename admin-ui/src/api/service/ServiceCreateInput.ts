import { CelebrityWhereUniqueInput } from "../celebrity/CelebrityWhereUniqueInput";
import { OrderCreateNestedManyWithoutServicesInput } from "./OrderCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  celebrity?: CelebrityWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutServicesInput;
  price?: number | null;
  serviceName?: string | null;
};
