export interface UserRequest {
  login: string;
  password: string;
}

export const getUserToken = async (userRequest: UserRequest) => {
  const response = await fetch("https://localhost:7054/Users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userRequest),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Ошибка при получении токена: ${error}`);
  }

  const tokenResponse = await response.json();
  return tokenResponse;
};

export const createUser = async (userRequest: UserRequest) => {
  const response = await fetch("https://localhost:7054/Users/reg", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userRequest),
  });
};
