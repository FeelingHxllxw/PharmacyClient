import Modal from "antd/es/modal/Modal";
import { WorkerRequest } from "../services/workers";
import Input from "antd/es/input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "DD/MM/YYYY";

interface Props {
  mode: Mode;
  values: Worker;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: WorkerRequest) => void;
  handleUpdate: (id: string, request: WorkerRequest) => void;
}

export enum Mode {
  Create,
  Update,
}

export const CreateUpdateWorker = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [last_name, setLast_name] = useState<string>(values.last_Name);
  const [first_name, setFirst_name] = useState<string>(values.first_Name);
  const [middle_name, setMiddle_name] = useState<string>(values.middle_Name);
  const [employment_date, setEmpDate] = useState<Dayjs | null>(
    values.employment_Date ? dayjs(values.employment_Date) : null
  );
  const [birth_date, setBDate] = useState<Dayjs | null>(
    values.birth_Date ? dayjs(values.birth_Date) : null
  );
  const [education, setEducation] = useState<string>(values.education);

  useEffect(() => {
    setLast_name(values.last_Name);
    setFirst_name(values.first_Name);
    setMiddle_name(values.middle_Name);
    setEmpDate(values.employment_Date ? dayjs(values.employment_Date) : null);
    setBDate(values.birth_Date ? dayjs(values.birth_Date) : null);
    setEducation(values.education);
  }, [values]);

  const handleOnOk = async () => {
    const workerRequest = {
      last_name,
      first_name,
      middle_name,
      employment_Date: employment_date?.toDate() || new Date(),
      birth_Date: birth_date?.toDate() || new Date(),
      education,
    };
    mode == Mode.Create
      ? handleCreate(workerRequest)
      : handleUpdate(values.id, workerRequest);
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

  const handleEmpDateChange = (date: Dayjs | null) => {
    setEmpDate(date);
  };

  const handleBirthDateChange = (date: Dayjs | null) => {
    setBDate(date);
  };

  const handleEducationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };

  return (
    <Modal
      title={
        mode === Mode.Create
          ? "Добавить фармацевта"
          : "Редактировать фармацевта"
      }
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Отмена"}
    >
      <div className="card_model">
        <Input
          value={last_name}
          onChange={handleLastNameChange}
          placeholder="Фамилия"
        ></Input>
        <Input
          value={first_name}
          onChange={handleFirstNameChange}
          placeholder="Имя"
        ></Input>
        <Input
          value={middle_name}
          onChange={handleMiddleNameChange}
          placeholder="Отчество"
        ></Input>
        <label>Дата приема на работу</label>
        <DatePicker
          value={employment_date}
          format={dateFormat}
          onChange={handleEmpDateChange}
        />
        <label>Дата рождения</label>
        <DatePicker
          value={birth_date}
          format={dateFormat}
          onChange={handleBirthDateChange}
        />
        <Input
          value={education}
          onChange={handleEducationChange}
          placeholder="Образование"
        ></Input>
      </div>
    </Modal>
  );
};
