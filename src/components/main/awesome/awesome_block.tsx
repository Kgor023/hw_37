import "./awesome_block.css";

interface IAwesomeBlock {
  src: string;
  title: string;
}
export default function AwsomeBlock(props: IAwesomeBlock) {
  return (
    <div className="awesome_block">
      <div className="awesome_block__img">
        <img src={props.src} alt="" />
      </div>
      <h4>{props.title}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et
        viverra.
      </p>
    </div>
  );
}
