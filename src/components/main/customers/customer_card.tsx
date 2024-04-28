import "./customer_card.css";
export default function CustomerCard() {
  return (
    <div className="customer_card">
      <div className="customer_card_area">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        accusamus expedita repellat similique odio aspernatur ex, architecto
        eaque quo suscipit.
      </div>
      <div className="customer_person">
        <img src="src/assets/img/person.png" alt="" />
        <div>
          <h5>Jeremy H.</h5>
          <span>Manager</span>
        </div>
      </div>
    </div>
  );
}
