import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <NumberInput label="Discount" source="discount" />
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <NumberInput label="ServiceFee" source="serviceFee" />
        <NumberInput label="TotalPrice" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
