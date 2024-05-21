"use client";
import Button from "antd/es//button/button";
import { Recipes } from "../components/Recipes";
import { useEffect, useState } from "react";
import {
  RecipeRequest,
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  updateRecipe,
} from "../services/recipes";
import Title from "antd/es/typography/Title";
import { CreateUpdateRecipe, Mode } from "../components/CreateUpdateRecipe";
import { getAllCustomers } from "../services/customers";
import dayjs from "dayjs";
import { token } from "../page";
import { useRouter } from "next/navigation";

export default function RecipePage() {
  const router = useRouter();
  if (token == "") router.push("/");
  const defaultValues = {
    customer_Id: "",
    name: "",
    issueDate: dayjs().toDate(),
    doctor: "",
    diagnosis: "",
  } as Recipe;
  const [values, setValues] = useState<Recipe>(defaultValues);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);
  const [customersArr, setCustomersValues] = useState<Customer[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const workers = await getAllRecipes();
      setLoading(false);
      setRecipes(workers);
    };

    getRecipes();

    const getCustomers = async () => {
      const positions = await getAllCustomers();
      setCustomersValues(positions);
    };
    getCustomers();
  }, []);

  const handleCreateRecipe = async (request: RecipeRequest) => {
    await createRecipe(request);
    closeModal();

    const recipes = await getAllRecipes();
    setRecipes(recipes);
  };

  const handleUpdateRecipe = async (id: string, request: RecipeRequest) => {
    await updateRecipe(id, request);
    closeModal();

    const recipes = await getAllRecipes();
    setRecipes(recipes);
  };

  const handleDeleteRecipe = async (id: string) => {
    await deleteRecipe(id);
    closeModal();

    const recipes = await getAllRecipes();
    setRecipes(recipes);
  };

  const openModal = () => {
    setValues(defaultValues);
    setMode(Mode.Create);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setValues(defaultValues);
  };

  const openEditModal = (recipe: Recipe) => {
    setMode(Mode.Update);
    setValues(recipe);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginTop: "30px" }}
        size="large"
        onClick={openModal}
      >
        Добавить рецепт
      </Button>
      <CreateUpdateRecipe
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateRecipe}
        handleUpdate={handleUpdateRecipe}
        handleCancel={closeModal}
        customersArr={customersArr}
      />
      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <Recipes
          recipes={recipes}
          handleOpen={openEditModal}
          handleDelete={handleDeleteRecipe}
        ></Recipes>
      )}
    </div>
  );
}
