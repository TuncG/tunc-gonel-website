import "./App.css";
import Layout from "./components/Layout";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {" "}
      <Layout></Layout>
      <Outlet />
    </div>
  );
}

export default App;
