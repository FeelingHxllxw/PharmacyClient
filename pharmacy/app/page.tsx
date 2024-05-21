"use client";

import "./globals.css";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { getUserToken, UserRequest } from "./services/users";

export let token = "";

export function logout() {
  token = "";
}

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async () => {
    const user = {
      login,
      password,
    } as UserRequest;
    try {
      const tokenResponse = await getUserToken(user);
      if (tokenResponse) {
        // Сохранение токена
        token = tokenResponse.token;
        // Переход на страницу меню
        router.push("/menu");
      }
    } catch (error) {
      // Обработка ошибки
      console.error(error);
    }
  };

  const ToReg = () => {
    router.push("/reg");
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Item>
        <Form.Item>
          <div className="button-container">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleLogin}
            >
              Log in
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={ToReg}
              style={{ marginLeft: "10px" }}
            >
              Register
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
