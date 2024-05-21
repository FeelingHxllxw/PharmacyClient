import { token } from "../page";

export interface WorkerRequest {
  last_name: string;
  first_name: string;
  middle_name: string;
  employment_Date: Date;
  birth_Date: Date;
  education: string;
}

export const getAllWorkers = async () => {
  try {
    const response = await fetch("https://localhost:7054/Workers", {
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

export const createWorker = async (workerRequest: WorkerRequest) => {
  await fetch("https://localhost:7054/Workers", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workerRequest),
  });
};

export const updateWorker = async (
  id: string,
  workerRequest: WorkerRequest
) => {
  await fetch(`https://localhost:7054/Workers/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workerRequest),
  });
};

export const deleteWorker = async (id: string) => {
  await fetch(`https://localhost:7054/Workers/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
