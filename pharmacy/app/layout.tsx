"use client";
import "./globals.css";
import Layout, { Content, Footer } from "antd/es/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
