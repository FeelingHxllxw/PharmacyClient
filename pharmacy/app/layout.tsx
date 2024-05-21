"use client";
import "./globals.css";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "antd";
import { logout } from "./page";

const items = [
  { key: "home", label: <Link href={"/menu"}>Домашняяя страница</Link> },
  { key: "sales", label: <Link href={"/sales"}>Продажи</Link> },
  { key: "medicines", label: <Link href={"/medicines"}>Лекарства</Link> },
  { key: "rec", label: <Link href={"/recipes"}>Рецепты</Link> },
  { key: "clients", label: <Link href={"/customers"}>Клиенты</Link> },
  { key: "workers", label: <Link href={"/workers"}>Фармацевты</Link> },
  { key: "chart", label: <Link href={"/chart"}>Отчет о продажах</Link> },
  {
    key: "logout",
    label: (
      <Link href={"/"} onClick={logout}>
        Выход
      </Link>
    ),
    style: { marginLeft: "auto" },
    onclick,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isRootPath = pathname === "/" || pathname == "/reg";
  console.log(pathname);
  console.log(isRootPath);
  return (
    <html lang="en">
      <body>
        {!isRootPath && (
          <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ display: "grid" }}>
              <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{ flex: 1, minWidth: 0 }}
              />
            </Header>
            <Content style={{ padding: "0 48px" }}>{children}</Content>
            <Footer style={{ textAlign: "center" }}>
              Pharmacy by Malchenko Pavel
            </Footer>
          </Layout>
        )}
        {isRootPath && (
          <div>
            <Content style={{ padding: "0 48px" }}>{children}</Content>
            <Footer style={{ textAlign: "center" }}>
              Pharmacy by Malchenko Pavel
            </Footer>
          </div>
        )}
      </body>
    </html>
  );
}
