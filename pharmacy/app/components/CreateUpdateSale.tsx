import Modal from "antd/es/modal/Modal";
import { SaleRequest } from "../services/sales";
import Input from "antd/es/input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "DD/MM/YYYY";

interface Props {
  mode: Mode;
  values: Sale;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: SaleRequest) => void;
  handleUpdate: (id: string, request: SaleRequest) => void;
  medArr: Med[];
  recipeArr: Recipe[];
  workerArr: Worker[];
}

export enum Mode {
  Create,
  Update,
}

export const setMedOptions = (meds: Med[]) => {
  let medOptions: { label: string; value: string }[] = [];
  meds.map((med: Med) =>
    medOptions.push({
      value: med.code,
      label: med.name,
    })
  );
  return medOptions;
};

export const setRecipeOptions = (recipes: Recipe[]) => {
  let recipeOptions: { label: string; value: string }[] = [];
  recipes.map((recipe: Recipe) =>
    recipeOptions.push({
      value: recipe.id,
      label: recipe.diagnosis,
    })
  );
  return recipeOptions;
};

export const setWorkerOptions = (workers: Worker[]) => {
  let workerOptions: { label: string; value: string }[] = [];
  workers.map((worker: Worker) =>
    workerOptions.push({
      value: worker.id,
      label: `${worker.last_Name} ${worker.first_Name} ${worker.middle_Name}`,
    })
  );
  return workerOptions;
};

export const CreateUpdateSale = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
  medArr,
  recipeArr,
  workerArr,
}: Props) => {
  const [sale_Date, setSale_Date] = useState<Dayjs | null>(
    values.sale_Date ? dayjs(values.sale_Date) : null
  );
  const [medicine_Id, setMedicine_Id] = useState<string>(values.medicine_Id);
  const [medicine, setMedicine] = useState<string>(values.medicine);
  const [count, setCount] = useState<number>(values.count);
  const [recipe_Id, setRecipe_Id] = useState<string>(values.recipe_Id);
  const [diagnosis, setDiagnosis] = useState<string>(values.diagnosis);
  const [workerId, setWorkerId] = useState<string>(values.workerId);
  const [name, setName] = useState<string>(values.name);
  const [meds, setMeds] = useState<Med[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    setSale_Date(values.sale_Date ? dayjs(values.sale_Date) : null);
    setMedicine_Id(values.medicine_Id);
    setMedicine(values.medicine);
    setCount(values.count);
    setRecipe_Id(values.recipe_Id);
    setDiagnosis(values.diagnosis);
    setWorkerId(values.workerId);
    setName(values.name);
    setMeds(medArr);
    setRecipes(recipeArr);
    setWorkers(workerArr);
  }, [values, medArr, recipeArr, workerArr]);

  const handleOnOk = async () => {
    const saleRequest = {
      sale_Date: sale_Date?.toDate() || new Date(),
      medicine_Id,
      medicine,
      count,
      recipe_Id,
      diagnosis,
      workerId,
      name,
    };
    mode == Mode.Create
      ? handleCreate(saleRequest)
      : handleUpdate(values.id, saleRequest);
  };
  const handleSaleDateChange = (date: Dayjs | null) => {
    setSale_Date(date);
  };

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <Modal
      title={
        mode === Mode.Create ? "Добавить продажу" : "Редактировать продажу"
      }
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Отмена"}
    >
      <div className="card_model">
        <p>Дата продажи</p>
        <DatePicker
          value={sale_Date}
          format={dateFormat}
          onChange={handleSaleDateChange}
        />
        <p>Лекарство</p>
        <Select
          value={medicine_Id}
          style={{ margin: "1vh" }}
          onChange={(
            value: string,
            option: { label: string; value: string }
          ) => {
            setMedicine_Id(value);
            setMedicine(option.label);
          }}
          options={setMedOptions(meds)}
        />
        <p>Количество</p>
        <Input
          value={count}
          onChange={handleCountChange}
          placeholder="0"
        ></Input>
        <p>Диагноз</p>
        <Select
          value={recipe_Id}
          style={{ margin: "1vh" }}
          onChange={(
            value: string,
            option: { label: string; value: string }
          ) => {
            setRecipe_Id(value);
            setDiagnosis(option.label);
          }}
          options={setRecipeOptions(recipes)}
        />
        <p>Фармацевт</p>
        <Select
          value={workerId}
          style={{ margin: "1vh" }}
          onChange={(
            value: string,
            option: { label: string; value: string }
          ) => {
            setWorkerId(value);
            setName(option.label);
          }}
          options={setWorkerOptions(workers)}
        />
      </div>
    </Modal>
  );
};
