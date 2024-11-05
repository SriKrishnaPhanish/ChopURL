import "./App.css";
import { TopBar } from "./components/Topbar";
import chopURLbg from "./images/chopURLbg.jpg";
import { URLForm } from "./components/Form";

function App() {
  return (
    <div
      className="bg-cover h-screen p-5"
      style={{ backgroundImage: `url(${chopURLbg})` }}
    >
      <TopBar />
      <div className="mt-10">
        <URLForm />
      </div>
    </div>
  );
}

export default App;
