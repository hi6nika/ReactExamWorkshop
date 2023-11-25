import Navigation from "./Navigation";

import SearchBox from "./SearchBox"

function Home() {
  return (
    <section id="home" className="welcome-hero">
      {/* top-area Start */}
      <div className="top-area">
        <div className="header-area">
          <Navigation />
        </div>
        {/*/.header-area*/}
        <div className="clearfix" />
      </div>
      {/* /.top-area*/}
      {/* top-area End */}
      <div className="container">
        <div className="welcome-hero-txt">
          <h2> Sell or get your next car!</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
     <SearchBox/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
