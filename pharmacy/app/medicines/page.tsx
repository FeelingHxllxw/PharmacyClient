"use client";

import Button from "antd/es//button/button";
import { Meds } from "../components/Medicines";
import { useEffect, useState } from "react";
import {
  MedRequest,
  createMed,
  deleteMed,
  getAllMeds,
  updateMed,
} from "../services/meds";
import Title from "antd/es/typography/Title";
import { CreateUpdateMed, Mode } from "../components/CreateUpdateMed";
import { token } from "../page";
import { useRouter } from "next/navigation";

export default function MedPage() {
  const router = useRouter();
  if (token == "") router.push("/");
  const defaultValues = {
    name: "",
    type: "",
    category: "",
    price: 1,
  } as Med;
  const [values, setValues] = useState<Med>(defaultValues);
  const [meds, setMeds] = useState<Med[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  useEffect(() => {
    const getMeds = async () => {
      const meds = await getAllMeds();
      setLoading(false);
      setMeds(meds);
    };

    getMeds();
  }, []);

  const handleCreateMed = async (request: MedRequest) => {
    await createMed(request);
    closeModal();
    const meds = await getAllMeds();
    setMeds(meds);
  };

  const handleUpdateMed = async (code: string, request: MedRequest) => {
    await updateMed(code, request);
    closeModal();
    const meds = await getAllMeds();
    setMeds(meds);
  };

  const handleDeleteMed = async (code: string) => {
    await deleteMed(code);
    closeModal();
    const meds = await getAllMeds();
    setMeds(meds);
  };

  const openModal = () => {
    setValues(defaultValues);
    setMode(Mode.Create);
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
    setValues(defaultValues);
  };

  const openEditModal = (med: Med) => {
    setMode(Mode.Update);
    setValues(med);
    setisModalOpen(true);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginTop: "30px" }}
        size="large"
        onClick={openModal}
      >
        Добавить лекарство
      </Button>
      <CreateUpdateMed
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateMed}
        handleUpdate={handleUpdateMed}
        handleCancel={closeModal}
      />
      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <Meds
          meds={meds}
          handleOpen={openEditModal}
          handleDelete={handleDeleteMed}
        ></Meds>
      )}
    </div>
  );
}
