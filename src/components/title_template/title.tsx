import "./title.css";
export default function Title(props: { title: string }) {
  return (
    <div className="awesome_title">
      <h2>{props.title}</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}
