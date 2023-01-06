import './Home.css';

const CONTENT = `Calculators have not only greatly enhanced our ability to perform the regular computations
 that are involved in everyday life, but provided humans with the ability to understand mathematics on a 
 greater scale than ever imagined.
 This technology allows students solve complicated problems quickly and in an efficient manner Students 
 can develop fluency and mental math skills without a calculator.
`;

function Home() {
  return (
    <section className="home">
      <h2 className="section-title">Welcome to our page!</h2>
      <p className="content">{CONTENT}</p>
    </section>
  );
}

export default Home;
