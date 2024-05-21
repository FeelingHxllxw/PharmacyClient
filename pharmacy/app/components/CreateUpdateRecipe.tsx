import Modal from "antd/es/modal/Modal";
import { RecipeRequest } from "../services/recipes";
import Input from "antd/es/input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "DD/MM/YYYY";

interface Props {
  mode: Mode;
  values: Recipe;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: RecipeRequest) => void;
  handleUpdate: (id: string, request: RecipeRequest) => void;
  customersArr: Customer[];
}

export enum Mode {
  Create,
  Update,
}

export const setCustomerOptions = (customers: Customer[]) => {
  let customerOptions: { label: string; value: string }[] = [];
  customers.map((customer: Customer) =>
    customerOptions.push({
      value: customer.id,
      label: `${customer.last_Name} ${customer.first_Name} ${customer.middle_Name}`,
    })
  );
  return customerOptions;
};

export const CreateUpdateRecipe = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
  customersArr,
}: Props) => {
  const [customer_id, setCustomer_id] = useState<string>(values.customer_Id);
  const [customer_name, setCustomer_Name] = useState<string>(values.name);
  const [issueDate, setIssueDate] = useState<Dayjs | null>(
    values.issueDate ? dayjs(values.issueDate) : null
  );
  const [doctor, setDoctor] = useState<string>(values.doctor);
  const [diagnosis, setDiagnosis] = useState<string>(values.diagnosis);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setCustomer_id(values.customer_Id);
    setCustomer_Name(values.name);
    setIssueDate(values.issueDate ? dayjs(values.issueDate) : null);
    setDoctor(values.doctor);
    setDiagnosis(values.diagnosis);
    setCustomers(customersArr);
  }, [values, customersArr]);

  const handleOnOk = async () => {
    const recipeRequest = {
      customer_id,
      customer_name,
      issueDate: issueDate?.toDate() || new Date(),
      doctor,
      diagnosis,
    };
    mode == Mode.Create
      ? handleCreate(recipeRequest)
      : handleUpdate(values.id, recipeRequest);
  };
  const handleIssueDateChange = (date: Dayjs | null) => {
    setIssueDate(date);
  };
  const handleDoctorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDoctor(event.target.value);
  };

  const handleDiagnosisChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDiagnosis(event.target.value);
  };
  return (
    <Modal
      title={mode === Mode.Create ? "Добавить рецепт" : "Редактировать рецепт"}
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Отмена"}
    >
      <div className="card_model">
        <p>Клиент</p>
        <Select
          value={customer_id}
          style={{ margin: "1vh" }}
          onChange={(
            value: string,
            option: { label: string; value: string }
          ) => {
            setCustomer_id(value);
            setCustomer_Name(option.label);
          }}
          options={setCustomerOptions(customers)}
        />
        <label>Дата выдачи</label>
        <DatePicker
          value={issueDate}
          format={dateFormat}
          onChange={handleIssueDateChange}
        />
        <p>Врач</p>
        <Input
          value={doctor}
          onChange={handleDoctorChange}
          placeholder="Врач"
        ></Input>
        <p>Диагноз</p>
        <Input
          value={diagnosis}
          onChange={handleDiagnosisChange}
          placeholder="Диагноз"
        ></Input>
      </div>
    </Modal>
  );
};
