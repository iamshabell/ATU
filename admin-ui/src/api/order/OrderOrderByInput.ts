import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  serviceFee?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
