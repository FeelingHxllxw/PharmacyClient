interface Props {
  diagnosis: string;
  doctor: string;
}

export const CardTitle = ({ diagnosis, doctor }: Props) => {
  return (
    <div className="new_title_name">
      <p className="card_title">{diagnosis}</p>
      <p className="card_title">{doctor}</p>
    </div>
  );
};
