import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CELEBRITY_TITLE_FIELD } from "./CelebrityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CelebrityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="accepted" source="accepted" />
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="provision" source="provision" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Service"
          target="CelebrityId"
          label="Services"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="celebrity"
              source="celebrity.id"
              reference="Celebrity"
            >
              <TextField source={CELEBRITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <TextField label="serviceName" source="serviceName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
