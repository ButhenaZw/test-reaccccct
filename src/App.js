import React from "react";
import Activity from "./components/ProjectReacta/ac/Activty";
import Contact from "./components/ProjectReacta/cont/contacet2";
import Hero from "./components/ProjectReacta/hero/Contact";
import Team from "./components/ProjectReacta/teams/teams";
import Login from "./components/ProjectReacta/log/login";
import Signup from "./components/ProjectReacta/sing/signup";
import Services from "./components/ProjectReacta/services/services";
import Aboutus from './components/aboutus/aboutus'

function App() {
  return (
    <div>
 <Hero />
 <Activity/>
 <Services/>
 <Team/>
<Contact/>

    </div>
  );
}

export default App;
