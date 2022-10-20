import Body from "./components/Body";
import Card from "./components/Card";
import HeadBar from "./components/HeadBar";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-full bg-[#F2EBE1] p-10">
      <Card>
        <Layout>
          <Navbar />
          <div className="w-96 bg-[#F2EBE1]">

          </div>
          <Body />
        </Layout>
      </Card>
    </div>
  );
}

export default App;
