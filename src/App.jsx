import "./App.css";
import logo from "./img/logo.svg";
import chatrasm from "./img/chat.svg";
import tanishrasm from "./img/tanish.png";
import strelka from "./img/strelka.svg";
import objec from "./img/object.svg";
import yonstrel from "./img/yon-strel.svg";
function App() {
  return (
    <>
      <header className="container">
        <section className="header-container">
          <div className="logo">
            <img src={logo} alt="" />
            <p className="logo-text">RouteX</p>
          </div>
          <div className="navbar">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Services</a>
            <a href="/">Projects</a>
            <a href="/">Blog</a>
          </div>
          <div className="murojat">
            <img src={chatrasm} alt="" />
            <span>
              <a href="/">
                <span className="help">Need help?</span>
              </a>
              <a href="/">
                <p>(307) 555-0133</p>
              </a>
              <br />
            </span>
          </div>
        </section>
      </header>
      <main>
        <div className="asosiy">
          <div className="container asosiy-container">
            <h1>
              Journey with Confidence <span className="h1-sozi">Migrate</span>{" "}
              with Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet <br /> rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <button>
              Learn More <img src={yonstrel} alt="" />
            </button>
          </div>
        </div>
        <div className="container tanishtiruv">
          <img src={tanishrasm} alt="" />
          <div className="tanish-text">
            <span className="about">
              About Us <img src={objec} alt="" />
            </span>
            <h2>
              <span className="h2-sozi">Unknown Wanderlust</span>
              <br /> Your Journey into
            </h2>
            <p className="tanishtir-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet <br /> rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <div className="strelka">
              <span className="strelka-span">
                <div className="strelka-span-tas">
                  <img src={strelka} alt="" />
                  <b>Safety Guides</b>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing
                  elit
                </p>
              </span>
              <span className="strelka-span">
                <div className="strelka-span-tas">
                  <img src={strelka} alt="" />
                  <b>Passport Assistance</b>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing
                  elit
                </p>
              </span>
            </div>
            <button>
              <p>Read More</p> <img src={yonstrel} alt="" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
