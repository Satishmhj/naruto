import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Body/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from "./components/Series/Series";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/series"} element={<Series />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
