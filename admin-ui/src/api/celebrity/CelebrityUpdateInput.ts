import { ServiceUpdateManyWithoutCelebritiesInput } from "./ServiceUpdateManyWithoutCelebritiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CelebrityUpdateInput = {
  accepted?: boolean | null;
  bio?: string | null;
  provision?: string | null;
  services?: ServiceUpdateManyWithoutCelebritiesInput;
  user?: UserWhereUniqueInput;
};
