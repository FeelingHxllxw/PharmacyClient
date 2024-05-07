import { Menu } from "antd";
import "C:/Projects/Pharmacy/frontend/pharmacy/app/globals.css";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  { key: "home", label: <Link href={"/menu"}>Домашнаяя страница</Link> },
  { key: "sales", label: <Link href={"/sales"}>Продажи</Link> },
  { key: "medicines", label: <Link href={"/medicines"}>Лекарства</Link> },
  { key: "rec", label: <Link href={"/recipes"}>Рецепты</Link> },
  { key: "clients", label: <Link href={"/customers"}>Клиенты</Link> },
  { key: "workers", label: <Link href={"/workers"}>Фармацевты</Link> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          ></Menu>
        </Header>
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ padding: "0 48px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Pharmacy by Malchenko Pavel
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
