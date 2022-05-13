import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activestyle={{
          backgroundColor: "red",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        
        style={linkStyles}
        activestyle={{
          background: "red",
        }}
      >
        About
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About!</h1>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>Page Not Found!</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));