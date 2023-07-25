import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./containers/users"
import Home from "./containers/Home"

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/usuarios" element = {<Users />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
