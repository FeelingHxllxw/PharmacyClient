import Button from "antd/es//button/button";
import { CardTitle } from "./CustomerCartTitle";
import Card from "antd/es/card/Card";

interface Props {
  customers: Customer[];
  handleDelete: (id: string) => void;
  handleOpen: (customer: Customer) => void;
}

export const Customers = ({ customers, handleDelete, handleOpen }: Props) => {
  console.log(customers);
  return (
    <div className="cards">
      {customers.map((customer: Customer) => (
        <Card
          key={customer.id}
          title={
            <CardTitle
              last_name={customer.last_Name}
              first_name={customer.first_Name}
              middle_name={customer.middle_Name}
            />
          }
          bordered={false}
        >
          <p>{customer.phone}</p>
          <p>{customer.city}</p>
          <div className="card_buttons">
            <Button onClick={() => handleOpen(customer)} style={{ flex: 1 }}>
              Редактировать
            </Button>
            <Button
              onClick={() => handleDelete(customer.id)}
              style={{ flex: 1 }}
              danger
            >
              Удалить
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
