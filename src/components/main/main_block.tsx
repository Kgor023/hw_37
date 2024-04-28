import Awsome from "./awesome/awesome";
import Banner from "./banner/banner";
import City from "./city/city";
import Contact from "./contact/contact";
import Customer from "./customers/customer";
import Media from "./media/media";
import Options from "./options/options";
import Stylish from "./stylish/stylish";

export default function Main() {
  return (
<main style={{maxWidth:'1920px'}}>
    <Banner/>
    <Media/>
    <City/>
    <Awsome/>
    <Options/>
    <Customer/>
    <Stylish/>
    <Contact/>
</main>
  );
}
