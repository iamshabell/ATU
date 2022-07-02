import { CelebrityWhereUniqueInput } from "../celebrity/CelebrityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  celebrities?: CelebrityWhereUniqueInput;
  emaill?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  username?: StringFilter;
};
