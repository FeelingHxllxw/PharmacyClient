export interface MedRequest {
  name: string;
  type: string;
  category: string;
  price: number;
}

export const getAllMeds = async () => {
  const response = await fetch("https://localhost:7054/Medicines");
  return response.json();
};

export const createMed = async (medrequest: MedRequest) => {
  await fetch("https://localhost:7054/Medicines", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(medrequest),
  });
};

export const updateMed = async (code: string, medrequest: MedRequest) => {
  await fetch(`https://localhost:7054/Medicines/${code}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(medrequest),
  });
};

export const deleteMed = async (code: string) => {
  await fetch(`https://localhost:7054/Medicines/${code}`, {
    method: "DELETE",
  });
};
