"use client";

import Title from "antd/es/typography/Title";
import { getAllSales } from "../services/sales";

import { Chart } from "../components/Chart";

import { useEffect, useState } from "react";

export default function Home() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSales = async () => {
      const sales = await getAllSales();
      setLoading(false);
      setSales(sales);
      console.log(sales);
    };
    getSales();
  }, []);
  return <div>{loading ? <Title>Loading</Title> : <Chart sales={sales}></Chart>}</div>;
}
