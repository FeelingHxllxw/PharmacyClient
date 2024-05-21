import Modal from "antd/es/modal/Modal";
import { CustomerRequest } from "../services/customers";
import Input from "antd/es/input/Input";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  mode: Mode;
  values: Customer;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: CustomerRequest) => void;
  handleUpdate: (id: string, request: CustomerRequest) => void;
}

export enum Mode {
  Create,
  Update,
}

export const CreateUpdateCustomer = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [last_name, setLast_name] = useState<string>("");
  const [first_name, setFirst_name] = useState<string>("");
  const [middle_name, setMiddle_name] = useState<string>("");
  const [addres, setAddres] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    setLast_name(values.last_Name);
    setFirst_name(values.first_Name);
    setMiddle_name(values.middle_Name);
    setAddres(values.addres);
    setCity(values.city);
    setPhone(values.phone);
  }, [values]);

  const handleOnOk = async () => {
    const customerRequest = {
      last_name,
      first_name,
      middle_name,
      addres,
      city,
      phone,
    };
    mode == Mode.Create
      ? handleCreate(customerRequest)
      : handleUpdate(values.id, customerRequest);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLast_name(event.target.value);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirst_name(event.target.value);
  };

  const handleMiddleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMiddle_name(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddres(event.target.value);
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <Modal
      title={
        mode === Mode.Create ? "Добавить клиента" : "Редактировать клиента"
      }
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Отмена"}
    >
      <div className="card_model">
        <p>Фамилия</p>
        <Input
          value={last_name}
          onChange={handleLastNameChange}
          placeholder="Фамилия"
        ></Input>
        <p>Имя</p>
        <Input
          value={first_name}
          onChange={handleFirstNameChange}
          placeholder="Имя"
        ></Input>
        <p>Отчество</p>
        <Input
          value={middle_name}
          onChange={handleMiddleNameChange}
          placeholder="Отчество"
        ></Input>
        <p>Адрес</p>
        <Input
          value={addres}
          onChange={handleAddressChange}
          placeholder="Адрес"
        ></Input>
        <p>Город</p>
        <Input
          value={city}
          onChange={handleCityChange}
          placeholder="Город"
        ></Input>
        <p>Телефон</p>
        <Input
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Телефон"
        ></Input>
      </div>
    </Modal>
  );
};
