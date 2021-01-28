import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HeaderBlock/Header";
import Layout from "./Components/LayoutBlock/Layout";
import Footer from "./Components/FooterBlock/Footer";
import bg1 from "./assets/bg1.jpg";
import bg3 from "./assets/bg3.jpg";

function App() {
  return (
    <>
      <Header title="title" descr="descr" />
      <Layout
        id="1"
        title="title"
        descr="descr"
        urlBg={bg1}
        colorBg="colorBg"
      />
      <Layout
        id="2"
        title="title"
        descr="descr"
        urlBg="urlBg"
        colorBg="colorBg"
      />
      <Layout
        id="3"
        title="title"
        descr="descr"
        urlBg={bg3}
        colorBg="colorBg"
      />
      <Footer />
    </>
  );
}

export default App;
