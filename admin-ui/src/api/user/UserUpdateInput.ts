import { CelebrityWhereUniqueInput } from "../celebrity/CelebrityWhereUniqueInput";

export type UserUpdateInput = {
  celebrities?: CelebrityWhereUniqueInput | null;
  emaill?: string | null;
  name?: string | null;
  password?: string;
  phone?: string | null;
  roles?: Array<string>;
  username?: string;
};