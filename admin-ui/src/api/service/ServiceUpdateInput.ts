import { CelebrityWhereUniqueInput } from "../celebrity/CelebrityWhereUniqueInput";
import { OrderUpdateManyWithoutServicesInput } from "./OrderUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  celebrity?: CelebrityWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutServicesInput;
  price?: number | null;
  serviceName?: string | null;
};
