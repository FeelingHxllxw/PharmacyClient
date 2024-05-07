export interface WorkerRequest {
  last_name: string;
  first_name: string;
  middle_name: string;
  employment_Date: Date;
  birth_Date: Date;
  education: string;
}

export const getAllWorkers = async () => {
  const response = await fetch("https://localhost:7054/Workers");
  return response.json();
};

export const createWorker = async (workerRequest: WorkerRequest) => {
  await fetch("https://localhost:7054/Workers", {
    method: "POST",
    headers: {
      "content-type": "application/json",
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
    },
    body: JSON.stringify(workerRequest),
  });
};

export const deleteWorker = async (id: string) => {
  await fetch(`https://localhost:7054/Workers/${id}`, {
    method: "DELETE",
  });
};
