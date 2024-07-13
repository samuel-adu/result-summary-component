import Card from './Card';
import data from '../data.json';

function Summary() {
  const cardList = data.map((item) => <Card {...item} />);

  return (
    <article className="summary">
      <h2 className="summary-heading">Summary</h2>
      {cardList}
      <button className="btn">Continue</button>
    </article>
  );
}

export default Summary;
