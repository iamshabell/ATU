import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
