import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CelebrityWhereInput = {
  accepted?: BooleanNullableFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  provision?: StringNullableFilter;
  services?: ServiceListRelationFilter;
  user?: UserWhereUniqueInput;
};
