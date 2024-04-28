import Title from "../../title_template/title";
import "./contact.css";
export default function Contact() {
  return (
    <section className="contact">
      <Title title="contact us" />
      <div className="contact_inputs">
        <div className="contact_inputs_info">
          <input  className="contact_inputs_info__block" type="text" placeholder="Name" />
          <input className="contact_inputs_info__block" type="email" placeholder="Email" />
          <input className="contact_inputs_info__block" type="password" placeholder="Password" />
        </div>
        <input id="contact_inputs_message" type="text" placeholder="Message" />
      </div>
      <button>Send Message</button>
    </section>
  );
}
