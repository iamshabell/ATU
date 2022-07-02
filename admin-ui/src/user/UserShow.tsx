import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CELEBRITY_TITLE_FIELD } from "../celebrity/CelebrityTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Celebrities"
          source="celebrity.id"
          reference="Celebrity"
        >
          <TextField source={CELEBRITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Emaill" source="emaill" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
