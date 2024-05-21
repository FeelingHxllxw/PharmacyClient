import { token } from "../page";

export interface CustomerRequest {
  last_name: string;
  first_name: string;
  middle_name: string;
  addres: string;
  city: string;
  phone: string;
}

export const getAllCustomers = async () => {
  try {
    const response = await fetch("https://localhost:7054/Customers", {
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

export const createCustomer = async (customerRequest: CustomerRequest) => {
  await fetch("https://localhost:7054/Customers", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(customerRequest),
  });
};

export const updateCustomer = async (
  id: string,
  customerRequest: CustomerRequest
) => {
  await fetch(`https://localhost:7054/Customers/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(customerRequest),
  });
};

export const deleteCustomer = async (id: string) => {
  await fetch(`https://localhost:7054/Customers/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
