import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CelebrityTitle } from "../celebrity/CelebrityTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="celebrity.id"
          reference="Celebrity"
          label="celebrity"
        >
          <SelectInput optionText={CelebrityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="serviceName" source="serviceName" />
      </SimpleForm>
    </Edit>
  );
};
