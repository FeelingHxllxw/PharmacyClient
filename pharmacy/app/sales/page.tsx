"use client";

import { Button } from "antd";
import { Sales } from "../components/Sale";
import { useEffect, useState } from "react";
import {
  createSale,
  deleteSale,
  getAllSales,
  SaleRequest,
  updateSale,
} from "../services/sales";
import dayjs from "dayjs";
import { getAllMeds } from "../services/meds";
import { getAllRecipes } from "../services/recipes";
import { getAllWorkers } from "../services/workers";
import Title from "antd/es/typography/Title";
import { CreateUpdateSale, Mode } from "../components/CreateUpdateSale";
import { token } from "../page";
import { useRouter } from "next/navigation";
import { utils, writeFile } from "xlsx";

export default function SalePage() {
  const router = useRouter();
  if (token == "") router.push("/");
  const defaultValues = {
    sale_Date: dayjs().toDate(),
    medicine_Id: "",
    medicine: "",
    count: 0,
    recipe_Id: "",
    diagnosis: "",
    workerId: "",
    name: "",
  } as Sale;
  const [values, setValues] = useState<Sale>(defaultValues);
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);
  const [medsArr, setMedsValues] = useState<Med[]>([]);
  const [recipesArr, setRecipesValues] = useState<Recipe[]>([]);
  const [workersArr, setWorkersValues] = useState<Worker[]>([]);

  useEffect(() => {
    const getSales = async () => {
      const sales = await getAllSales();
      setLoading(false);
      setSales(sales);
      console.log(sales);
    };
    getSales();

    const getMeds = async () => {
      const meds = await getAllMeds();
      setMedsValues(meds);
    };
    getMeds();

    const getRecipes = async () => {
      const recipes = await getAllRecipes();
      setRecipesValues(recipes);
    };
    getRecipes();

    const getWorker = async () => {
      const workers = await getAllWorkers();
      setWorkersValues(workers);
    };
    getWorker();
  }, []);

  const handleCreateSale = async (request: SaleRequest) => {
    await createSale(request);
    closeModal();

    const sales = await getAllSales();
    setSales(sales);
  };

  const handleUpdateSale = async (id: string, request: SaleRequest) => {
    await updateSale(id, request);
    closeModal();

    const sales = await getAllSales();
    setSales(sales);
  };

  const handleDeleteSale = async (id: string) => {
    await deleteSale(id);
    closeModal();

    const sales = await getAllSales();
    setSales(sales);
  };

  const openModal = () => {
    setValues(defaultValues);
    setMode(Mode.Create);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setValues(defaultValues);
    setIsModalOpen(false);
  };

  const openEditModal = (sale: Sale) => {
    setMode(Mode.Update);
    setValues(sale);
    console.log(sale);
    setIsModalOpen(true);
  };

  const updateData = async () => {
    const sales = await getAllSales();
    setSales(sales);
  };

  const exportData = async () => {
    updateData();
    let tableData: any[] = [];
    sales.map((sale: Sale) =>
      tableData.push({
        Дата_продажи: dayjs(sale.sale_Date).format("YYYY-MM-DD"),
        Лекарство: sale.medicine,
        Количество: sale.count,
        Диагноз: sale.diagnosis,
        Фармацевт: sale.name,
      })
    );
    var wb = utils.book_new(),
      ws = utils.json_to_sheet(tableData);
    utils.book_append_sheet(wb, ws, "Продажи лекарств");
    writeFile(wb, "Продажи лекарств.xlsx");
  };

  return (
    <div>
      <div style={{ margin: "2vh" }}>
        <Button
          onClick={() => exportData()}
          style={{
            display: "inline",
            color: "white",
            backgroundColor: "green",
          }}
        >
          Экспорт
        </Button>
        <Button
          style={{ display: "inline", marginLeft: "87%" }}
          type="primary"
          onClick={() => openModal()}
        >
          Добавить продажу
        </Button>
      </div>

      <CreateUpdateSale
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateSale}
        handleUpdate={handleUpdateSale}
        handleCancel={closeModal}
        medArr={medsArr}
        recipeArr={recipesArr}
        workerArr={workersArr}
      />

      {loading ? (
        <Title>Loading</Title>
      ) : (
        <Sales
          sales={sales}
          handleDelete={handleDeleteSale}
          handleOpen={openEditModal}
        />
      )}
    </div>
  );
}
