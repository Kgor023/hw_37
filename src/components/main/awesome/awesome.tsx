import Title from "../../title_template/title";
import AwsomeBlock from "./awesome_block";
import "./awsome.css";
export default function Awsome() {
  return (
    <section className="awesome">
      <Title title="WHY THIS IS AWESOME" />
      <div className="awesome_area">
        <AwsomeBlock
          title="Thoughtful Design"
          src="src/assets/logo/light.png"
        />
        <AwsomeBlock title="Well Crafted" src="src/assets/logo/keyboard.png" />
        <AwsomeBlock
          title="Easy to Customize"
          src="src/assets/logo/lightning.png"
        />
      </div>
    </section>
  );
}
