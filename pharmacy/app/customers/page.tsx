"use client";

import Button from "antd/es//button/button";
import { Customers } from "../components/Customers";
import { useEffect, useState } from "react";
import {
  CustomerRequest,
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  updateCustomer,
} from "../services/customers";
import Title from "antd/es/typography/Title";
import { CreateUpdateCustomer, Mode } from "../components/CreateUpdateCustomer";

export default function CustomerPage() {
  const defaultValues = {
    last_Name: "",
    first_Name: "",
    middle_Name: "",
    addres: "",
    city: "",
    phone: "+7",
  } as Customer;
  const [values, setValues] = useState<Customer>(defaultValues);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  useEffect(() => {
    const getCustomers = async () => {
      const customers = await getAllCustomers();
      setLoading(false);
      setCustomers(customers);
    };

    getCustomers();
  }, []);

  const handleCreateMed = async (request: CustomerRequest) => {
    await createCustomer(request);
    closeModal();
    const customers = await getAllCustomers();
    setCustomers(customers);
  };

  const handleUpdateMed = async (id: string, request: CustomerRequest) => {
    await updateCustomer(id, request);
    closeModal();
    const customers = await getAllCustomers();
    setCustomers(customers);
  };

  const handleDeleteMed = async (id: string) => {
    await deleteCustomer(id);
    closeModal();
    const customers = await getAllCustomers();
    setCustomers(customers);
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

  const openEditModal = (customer: Customer) => {
    setMode(Mode.Update);
    setValues(customer);
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
        Добавить клиента
      </Button>
      <CreateUpdateCustomer
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
        <Customers
          customers={customers}
          handleOpen={openEditModal}
          handleDelete={handleDeleteMed}
        ></Customers>
      )}
    </div>
  );
}
