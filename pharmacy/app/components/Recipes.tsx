import Button from "antd/es//button/button";
import { CardTitle } from "./RecipeCardTitle";
import Card from "antd/es/card/Card";
import dayjs from "dayjs";

interface Props {
  recipes: Recipe[];
  handleDelete: (id: string) => void;
  handleOpen: (recipe: Recipe) => void;
}

export const Recipes = ({ recipes, handleDelete, handleOpen }: Props) => {
  console.log(recipes);
  return (
    <div className="cards">
      {recipes.map((recipe: Recipe) => (
        <Card
          key={recipe.id}
          title={
            <CardTitle diagnosis={recipe.diagnosis} doctor={recipe.doctor} />
          }
          bordered={false}
        >
          <p>Клиент: {recipe.name}</p>
          <p>Дата выдачи: {dayjs(recipe.issueDate).format("DD/MM/YYYY")}</p>
          <div className="card_buttons">
            <Button onClick={() => handleOpen(recipe)} style={{ flex: 1 }}>
              Редактировать
            </Button>
            <Button
              onClick={() => handleDelete(recipe.id)}
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
