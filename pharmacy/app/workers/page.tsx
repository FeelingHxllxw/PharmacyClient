"use client";

import Button from "antd/es//button/button";
import { Workers } from "../components/Workers";
import { useEffect, useState } from "react";
import {
  WorkerRequest,
  createWorker,
  deleteWorker,
  getAllWorkers,
  updateWorker,
} from "../services/workers";
import Title from "antd/es/typography/Title";
import { CreateUpdateWorker, Mode } from "../components/CreateUpdateWorker";
import dayjs from "dayjs";

export default function WorkerPage() {
  const defaultValues = {
    last_Name: "",
    first_Name: "",
    middle_Name: "",
    employment_Date: dayjs().toDate(),
    birth_Date: dayjs().toDate(),
    education: "",
  } as Worker;
  const [values, setValues] = useState<Worker>(defaultValues);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  useEffect(() => {
    const getWorkers = async () => {
      const workers = await getAllWorkers();
      setLoading(false);
      setWorkers(workers);
    };

    getWorkers();
  }, []);

  const handleCreateWorker = async (request: WorkerRequest) => {
    await createWorker(request);
    closeModal();
    const workers = await getAllWorkers();
    setWorkers(workers);
  };

  const handleUpdateWorker = async (id: string, request: WorkerRequest) => {
    await updateWorker(id, request);
    closeModal();
    const workers = await getAllWorkers();
    setWorkers(workers);
  };

  const handleDeleteWorker = async (id: string) => {
    await deleteWorker(id);
    closeModal();
    const workers = await getAllWorkers();
    setWorkers(workers);
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

  const openEditModal = (worker: Worker) => {
    setMode(Mode.Update);
    setValues(worker);
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
        Добавить фармацевта
      </Button>
      <CreateUpdateWorker
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateWorker}
        handleUpdate={handleUpdateWorker}
        handleCancel={closeModal}
      />
      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <Workers
          workers={workers}
          handleOpen={openEditModal}
          handleDelete={handleDeleteWorker}
        ></Workers>
      )}
    </div>
  );
}
