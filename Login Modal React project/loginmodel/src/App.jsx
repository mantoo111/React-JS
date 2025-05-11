import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modelstatus, setModel] = useState(false);

  return (
    <div className="App">
      {/* Login Button */}
      <button
        className="btn bg-blue-600 text-white px-4 py-2 rounded mt-4 ml-4"
        onClick={() => setModel(!modelstatus)}
      >
        Login
      </button>

      {/* Modal Overlay */}
      <div
        className={`Modeloverlay ${modelstatus ? "Modelshow" : ""}`}
        onClick={() => setModel(false)}
      ></div>

      {/* Login Modal */}
      <div className={`Modeldiv ${modelstatus ? "Showmodeldiv" : ""}`}>
        <h3 className="text-black font-bold text-center p-3">Login</h3>
        <div className="p-4">
          <input
            type="text"
            placeholder="Username"
            
            className="w-full border border-gray-300 rounded p-2 mb-4 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            
            className="w-full border border-gray-300 rounded p-2 mb-4 text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Submit
          </button>
        </div>
      </div>

      {/* Toggle Button for Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 text-white px-4 py-2 rounded-md bg-blue-600"
      >
        {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 w-full bg-white shadow-md transition-all duration-300 z-40 ${
          isMenuOpen ? "left-0" : "left-full"
        }`}
      >
        <ul className="flex justify-end space-x-6 p-4 text-black font-bold">
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
