import Body from "./components/Body";
import Card from "./components/Common/Card";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apps from "./components/Apps/Apps";

function App() {
  return (
    <div className="w-full h-full bg-[#F2EBE1] p-10">
      <BrowserRouter>
        <Card>
          <Layout>
            <Navbar />
            <div className="w-96 bg-[#F2EBE1]">
              <Routes>
                <Route path="/" element={<Apps />} />
                {/* <Route path="/upload" element={<Uploads />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/theme" element={<Home />} />
                <Route path="/settings" element={<Home />} />
                <Route path="/users" element={<Home />} /> */}
              </Routes>
            </div>
            <Body />
          </Layout>
        </Card>
      </BrowserRouter>
    </div>
  );
}

export default App;
