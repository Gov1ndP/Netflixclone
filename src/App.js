import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Banner from "./Components/Banner";
import Rowposter from "./Components/Rowposter";
import {
  action,
  originals,
  comedy,
  romance,
  horror,
  documentary,
} from "./Components/constants";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rowposter url={originals} title="Netflix Originals"></Rowposter>
      <Rowposter url={action} title="Action" isSmall={true}></Rowposter>
      <Rowposter url={horror} title="Horror" isSmall={true}></Rowposter>
      <Rowposter url={comedy} title="Comedy" isSmall={true}></Rowposter>
      <Rowposter url={romance} title="Romance" isSmall={true}></Rowposter>
      <Rowposter
        url={documentary}
        title="Documentaries"
        isSmall={true}
      ></Rowposter>
    </div>
  );
}

export default App;
