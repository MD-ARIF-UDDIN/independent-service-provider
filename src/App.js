import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import Notfound from "./Pages/Notfound/Notfound";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
