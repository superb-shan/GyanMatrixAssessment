import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCTA from "./Components/LoginCTA";
import DisplayPage from './Components/DisplayPage';
import NoPage from "./Components/NoPage";
import DetailsPage from "./Components/DetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<LoginCTA />} />
          <Route path="display" element={<DisplayPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
