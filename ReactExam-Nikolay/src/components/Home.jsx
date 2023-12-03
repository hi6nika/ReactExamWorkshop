import SearchBox from "./SearchBox";

function Home() {
  return (
    <section id="home" className="welcome-hero">
      <div className="container">
        <div className="welcome-hero-txt">
          <h2>Sell or get your next car!</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchBox />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
