import Button from "antd/es//button/button";
import { CardTitle } from "./WorkerCartTitle";
import Card from "antd/es/card/Card";
import dayjs from "dayjs";

interface Props {
  workers: Worker[];
  handleDelete: (id: string) => void;
  handleOpen: (worker: Worker) => void;
}

export const Workers = ({ workers, handleDelete, handleOpen }: Props) => {
  console.log(workers);
  return (
    <div className="cards">
      {workers.map((worker: Worker) => (
        <Card
          key={worker.id}
          title={
            <CardTitle
              last_name={worker.last_Name}
              first_name={worker.first_Name}
              middle_name={worker.middle_Name}
            />
          }
          bordered={false}
        >
          <p>Образование: {worker.education}</p>
          <p>
            Дата принятия на работу:{" "}
            {dayjs(worker.employment_Date).format("DD/MM/YYYY")}
          </p>
          <div className="card_buttons">
            <Button onClick={() => handleOpen(worker)} style={{ flex: 1 }}>
              Редактировать
            </Button>
            <Button
              onClick={() => handleDelete(worker.id)}
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
