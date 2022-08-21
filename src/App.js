import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import Appfirst from "./components/Appfirst";
import First from "./student/studentpage";
import Corner from "./lost/corner";
import Lost from "./lost/lost";
import ListAll from "./lost/found";
import Issue from "./issue/issues";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Appfirst />} />
        <Route path="/student" element={<First />} exact />
        <Route path="/student/corner" element={<Corner />} exact />
        <Route path="/student/corner/lost" element={<Lost />} exact />
        <Route path="/succes" element={<h1>thank you</h1>} exact />
        <Route path="/student/corner/found" element={<ListAll />} exact />
        <Route path="/student/issue" element={<Issue />} exact />
        {/* <Route path="/mentor" element={<NewMentor />} exact />
        <Route path="/getstudent" element={<GetStudent />} exact /> */}
      </Routes>
    </>
  );
}

export default App;
