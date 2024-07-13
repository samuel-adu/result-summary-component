type cardProps = {
  icon: string;
  category: string;
  score: number;
};

function Card({ icon, category, score }: cardProps) {
  return (
    <div className={`card card--${category.toLowerCase()}`}>
      <img src={icon} alt="" className="card__icon" />
      <p className="card__category">{category}</p>
      <p className="text-base">
        <span className="card__score">{score}</span>/ 100
      </p>
    </div>
  );
}

export default Card;
