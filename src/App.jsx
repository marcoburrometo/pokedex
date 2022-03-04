import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screen/Home";
import Pokemon from "./screen/Pokemon";
import NotFound from "./screen/NotFound";
import ButtonAppBar from "./components/AppBar";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from "./assets/loader.json";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, [])

  if (loading) {
    return (
      <div className="loader">

        <Lottie animationData={loader} width={100} height={100} autoPlay loop />
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
