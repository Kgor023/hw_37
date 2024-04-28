import "./city.css";
export default function City() {
  return (
    <section className="city">
      <div className="container city_container">
        <div className="city_buttons">
          <button className="city_buttons_block">Tab 1</button>
          <button className="city_buttons_block">Tab 1</button>
          <button className="city_buttons_block">Tab 1</button>
        </div>
        <div className="city_text">
          <h3>Tabs with soft transitioning effect.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet.
          </p>
          <button>Download</button>
        </div>
        <img src="src/assets/img/city.png" alt="" />
      </div>
    </section>
  );
}
