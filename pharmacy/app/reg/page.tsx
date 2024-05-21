"use client";

import "C:/Projects/Pharmacy/frontend/pharmacy/app/globals.css";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { createUser, UserRequest } from "../services/users";

export default function RegPage() {
  const router = useRouter();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const handleRegister = async () => {
    if (password == passwordCheck) {
      const user = {
        login,
        password,
      } as UserRequest;
      try {
        await createUser(user);
        ToLogin();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Пароли не сопадают");
    }
  };

  const ToLogin = () => {
    router.push("/");
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheckChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(event.target.value);
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
        <Form.Item
          name="passwordCHeck"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Repeat Password"
            onChange={handlePasswordCheckChange}
          />
        </Form.Item>
        <Form.Item>
          <div className="button-container">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleRegister}
            >
              Register
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={ToLogin}
              style={{ marginLeft: "10px" }}
            >
              Back to Login
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
