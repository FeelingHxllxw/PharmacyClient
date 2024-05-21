import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import dayjs from "dayjs";

interface Props {
  sales: Sale[];
  handleDelete: (id: string) => void;
  handleOpen: (sale: Sale) => void;
}

export const Sales = ({ sales, handleDelete, handleOpen }: Props) => {
  const columns: TableProps<Sale>["columns"] = [
    {
      title: "Дата продажи",
      dataIndex: "sale_Date",
      key: "sale_Date",
    },
    {
      title: "Лекарство",
      dataIndex: "medicine",
      key: "medicine",
    },
    {
      title: "Количество",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Диагноз",
      dataIndex: "diagnosis",
      key: "diagnosis",
    },
    {
      title: "Фармацевт",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Действие",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleOpen(record)}>Изменить</Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Удалить
          </Button>
        </Space>
      ),
    },
  ];
  let dataSource: any[] | undefined = [];
  sales.map((sale: Sale) =>
    dataSource.push({
      id: sale.id,
      sale_Date: dayjs(sale.sale_Date).format("YYYY-MM-DD"),
      medicine_Id: sale.medicine_Id,
      medicine: sale.medicine,
      count: sale.count,
      recipe_Id: sale.recipe_Id,
      diagnosis: sale.diagnosis,
      workerId: sale.workerId,
      name: sale.name,
    })
  );
  return (
    <div className="Table">
      {<Table dataSource={dataSource} columns={columns} />}
    </div>
  );
};
