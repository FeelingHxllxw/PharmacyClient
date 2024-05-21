import { token } from "../page";

export interface SaleRequest {
  sale_Date: Date;
  medicine_Id: string;
  medicine: string;
  count: number;
  recipe_Id: string;
  diagnosis: string;
  workerId: string;
  name: string;
}

export const getAllSales = async () => {
  try {
    const response = await fetch("https://localhost:7054/Sales", {
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

export const createSale = async (saleRequest: SaleRequest) => {
  await fetch("https://localhost:7054/Sales", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(saleRequest),
  });
};

export const updateSale = async (id: string, saleRequest: SaleRequest) => {
  await fetch(`https://localhost:7054/Sales/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(saleRequest),
  });
};

export const deleteSale = async (id: string) => {
  await fetch(`https://localhost:7054/Sales/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
