import { Service } from "../service/Service";
import { User } from "../user/User";

export type Celebrity = {
  accepted: boolean | null;
  bio: string | null;
  createdAt: Date;
  id: string;
  provision: string | null;
  services?: Array<Service>;
  updatedAt: Date;
  user?: User;
};
