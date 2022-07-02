import { Celebrity as TCelebrity } from "../api/celebrity/Celebrity";

export const CELEBRITY_TITLE_FIELD = "bio";

export const CelebrityTitle = (record: TCelebrity): string => {
  return record.bio || record.id;
};
