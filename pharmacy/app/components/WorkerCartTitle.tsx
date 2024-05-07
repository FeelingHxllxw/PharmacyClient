interface Props {
  last_name: string;
  first_name: string;
  middle_name: string;
}

export const CardTitle = ({ last_name, first_name, middle_name }: Props) => {
  return (
    <div className="new_title_name">
      <p className="card_title">{last_name}</p>
      <p className="card_title">{first_name}</p>
      <p className="card_title">{middle_name}</p>
    </div>
  );
};
