import { token } from "../page";

export interface RecipeRequest {
  customer_id: string;
  customer_name: string;
  issueDate: Date;
  doctor: string;
  diagnosis: string;
}

export const getAllRecipes = async () => {
  try {
    const response = await fetch("https://localhost:7054/Recipes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка авторизации. Пожалуйста, авторизуйтесь.");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createRecipe = async (recipeRequest: RecipeRequest) => {
  await fetch("https://localhost:7054/Recipes", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeRequest),
  });
};

export const updateRecipe = async (
  id: string,
  recipeRequest: RecipeRequest
) => {
  await fetch(`https://localhost:7054/Recipes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeRequest),
  });
};

export const deleteRecipe = async (id: string) => {
  await fetch(`https://localhost:7054/Recipes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
