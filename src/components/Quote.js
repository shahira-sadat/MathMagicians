import './Quote.css';

const quote = 'There will always be science, engineering, and technology. And there will always, always be mathematics. ';
const author = 'Katherine Johnson';

function Quote() {
  return (
    <section className="quote-section">
      <div className="line" />
      <h5 className="quote">{quote}</h5>
      <h6 className="author">{author}</h6>
    </section>
  );
}

export default Quote;
