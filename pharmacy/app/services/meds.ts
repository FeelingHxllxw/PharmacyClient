import { token } from "../page";

export interface MedRequest {
  name: string;
  type: string;
  category: string;
  price: number;
}

export const getAllMeds = async () => {
  try {
    const response = await fetch("https://localhost:7054/Medicines", {
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

export const createMed = async (medrequest: MedRequest) => {
  await fetch("https://localhost:7054/Medicines", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(medrequest),
  });
};

export const updateMed = async (code: string, medrequest: MedRequest) => {
  await fetch(`https://localhost:7054/Medicines/${code}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(medrequest),
  });
};

export const deleteMed = async (code: string) => {
  await fetch(`https://localhost:7054/Medicines/${code}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
