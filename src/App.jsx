import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Protocol } from "./pages/Protocol";
import { Journal } from "./pages/Journal";
import { Media } from "./pages/Media";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";

function App() {
    return(
      <Router>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/protocol" element={<Protocol />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/media" element={<Media />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    )
}

export default App;