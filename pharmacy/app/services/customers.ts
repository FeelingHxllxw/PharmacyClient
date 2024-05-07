export interface CustomerRequest {
  last_name: string;
  first_name: string;
  middle_name: string;
  addres: string;
  city: string;
  phone: string;
}

export const getAllCustomers = async () => {
  const response = await fetch("https://localhost:7054/Customers");
  return response.json();
};

export const createCustomer = async (customerRequest: CustomerRequest) => {
  await fetch("https://localhost:7054/Customers", {
    method: "POST",
    headers: {
      "content-type": "application/json",
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
    },
    body: JSON.stringify(customerRequest),
  });
};

export const deleteCustomer = async (id: string) => {
  await fetch(`https://localhost:7054/Customers/${id}`, {
    method: "DELETE",
  });
};
