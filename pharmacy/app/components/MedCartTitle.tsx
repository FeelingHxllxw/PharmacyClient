interface Props {
  title: string;
  price: number;
}

export const CardTitle = ({ title, price }: Props) => {
  return (
    <div className="new_title">
      <p className="card_title">{title}</p>
      <p className="card_price">{price}</p>
    </div>
  );
};
