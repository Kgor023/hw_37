import Title from "../../title_template/title";
import "./options.css";
import OptionsCard from "./options_card";
export default function Options() {
  return (
    <section className="options">
      <Title title="pricing options" />
      <div style={{display:'flex', flexDirection:'row',gap:'75px',justifyContent:'center'}}>
        <OptionsCard />
        <OptionsCard />
        <OptionsCard />
      </div>
    </section>
  );
}
