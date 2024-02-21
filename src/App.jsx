import Main from "./components/Main";
import SearchResult from "./components/SearchResult/SearchResult";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/search" element={<SearchResult />}></Route>
      </Routes>
    </>
  );
}

export default App;
