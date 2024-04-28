import Title from "../../title_template/title";
import "./customer.css";
import CustomerCard from "./customer_card";
export default function Customer() {
  return (
    <div className="customer">
      <Title title="what our customers are saying" />
      <div className="customer_area">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  );
}
