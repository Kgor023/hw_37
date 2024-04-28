import "./header.css";
import "../container.css";
export default function Header() {
  return (
    <header id="header">
      <div className=" header_container container">
        <img src="src/assets/logo/logo.png" alt="" />
        <nav id="nav">
          <a href="">Features</a>
          <a href="">About</a>
          <a href="">Pricing</a>
          <a href="">Reviews</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </header>
  );
}
