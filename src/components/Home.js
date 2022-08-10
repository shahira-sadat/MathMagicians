import './Home.css';

const CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse at enim viverra, volutpat velit vitae, pretium sem. 
Nullam laoreet dui eget tellus aliquam, a semper est dignissim. 
Quisque iaculis enim malesuada lacus bibendum pulvinar. 
Phasellus quis tortor in dui placerat aliquam. a semper est dignissim. 
Quisque iaculis enim malesuada lacus bibendum pulvinar. 
Phasellus quis tortor in dui placerat aliquam.
`;

function Home() {
  return (
    <section className="home">
      <h2 className="section-title">Welcome to our page!</h2>
      <p className="content">{CONTENT}</p>
      <p className="content">{CONTENT}</p>
    </section>
  );
}

export default Home;
