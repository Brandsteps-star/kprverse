import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Protocol } from "./Protocol";

function App() {
    return(
      <Router>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/protocol" element={<Protocol />} />
          </Routes>
      </Router>
    )
}

export default App;