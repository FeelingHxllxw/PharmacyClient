import Modal from "antd/es/modal/Modal";
import { MedRequest } from "../services/meds";
import Input from "antd/es/input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { getAllCustomers } from "../services/customers";

interface Props {
  mode: Mode;
  values: Med;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: MedRequest) => void;
  handleUpdate: (code: string, request: MedRequest) => void;
}

export enum Mode {
  Create,
  Update,
}

export const CreateUpdateMed = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [name, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(1);

  useEffect(() => {
    setTitle(values.name);
    setType(values.type);
    setCategory(values.category);
    setPrice(values.price);
  }, [values]);

  const handleOnOk = async () => {
    const medRequest = { name, type, category, price };
    mode == Mode.Create
      ? handleCreate(medRequest)
      : handleUpdate(values.code, medRequest);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };
  return (
    <Modal
      title={
        mode === Mode.Create ? "Добавить лекарство" : "Редактировать лекарство"
      }
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Отмена"}
    >
      <div className="card_model">
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder="Название"
        ></Input>
        <Input
          value={type}
          onChange={handleTypeChange}
          placeholder="Тип"
        ></Input>
        <Input
          value={category}
          onChange={handleCategoryChange}
          placeholder="Категория"
        ></Input>
        <Input
          value={price}
          onChange={handlePriceChange}
          placeholder="Цена"
        ></Input>
      </div>
    </Modal>
  );
};
