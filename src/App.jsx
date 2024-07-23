import LogIn from "./components/LogIn";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Group from "./components/Group";
import AddInfo from "./components/AddInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/groups" element={<Group />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<AddInfo />} />
      </Routes>
    </>
  );
}

export default App;
