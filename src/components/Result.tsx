import data from '../data.json';

function Result() {
  const totalScore = data.reduce((total, item) => {
    return (total += item.score);
  }, 0);

  const result = (totalScore / 4).toFixed();

  return (
    <article className="result">
      <h1 className="main-heading">Your Result</h1>

      <div className="circle">
        <p className="text-xl">{result}</p>
        <p className="text-base">of 100</p>
      </div>

      <p className="text-l">Great</p>
      <p className="text-base">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </article>
  );
}

export default Result;
