import { CelebrityWhereInput } from "./CelebrityWhereInput";
import { CelebrityOrderByInput } from "./CelebrityOrderByInput";

export type CelebrityFindManyArgs = {
  where?: CelebrityWhereInput;
  orderBy?: Array<CelebrityOrderByInput>;
  skip?: number;
  take?: number;
};
