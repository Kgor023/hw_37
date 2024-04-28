import "./banner.css";
import "../../container.css";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner_container">
        <div className="banner_text">
          <img src="src/assets/logo/logo_banner.png" alt="" />
          <h2>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h2>
          <hr className="banner_hr" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Download</button>
        </div>
        <form className="banner_form">
            <h3>Try Your <span>FREE</span> Trial Today</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Get Started</button>
        </form>
      </div>
    </section>
  );
}
