import Button from "antd/es//button/button";
import { CardTitle } from "./MedCartTitle";
import Card from "antd/es/card/Card";


interface Props {
  meds: Med[];
  handleDelete: (id: string) => void;
  handleOpen: (med: Med) => void;
}

export const Meds = ({ meds, handleDelete, handleOpen }: Props) => {
  return (
    <div className="cards">
      {meds.map((med: Med) => (
        <Card
          key={med.code}
          title={<CardTitle title={med.name} price={med.price} />}
          bordered={false}
        >
          <p>{med.category}</p>
          <div className="card_buttons">
            <Button onClick={() => handleOpen(med)} style={{ flex: 1 }}>
              Редактировать
            </Button>
            <Button
              onClick={() => handleDelete(med.code)}
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
