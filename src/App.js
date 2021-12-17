import "./App.scss";
import { Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser/AddUser";
import EditUser from "./pages/EditUser/EditUser";
import UsersInfo from "./pages/UsersInfo/UsersInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/allUsers" element={<UsersInfo />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
