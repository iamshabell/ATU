import { ServiceCreateNestedManyWithoutCelebritiesInput } from "./ServiceCreateNestedManyWithoutCelebritiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CelebrityCreateInput = {
  accepted?: boolean | null;
  bio?: string | null;
  provision?: string | null;
  services?: ServiceCreateNestedManyWithoutCelebritiesInput;
  user?: UserWhereUniqueInput;
};
