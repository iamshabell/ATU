import { Celebrity } from "../celebrity/Celebrity";

export type User = {
  celebrities?: Celebrity | null;
  createdAt: Date;
  emaill: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
