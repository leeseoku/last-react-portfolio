import Header from "./component/Header"
import Section from "./component/Section";
import Banner from "./component/Banner"
import data from "./data/data.json"
import "./css/App.css"

function App() {
  return (
    <>
    <Header data={data}></Header>
    <Section></Section>
    <Banner data={data}></Banner>
    </>
  );
}

export default App;

