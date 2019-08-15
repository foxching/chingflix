import React from "react";
import Footer from "./Footer";
import NavDrawer from "./Material UI/Drawer";
import MainDashboard from "./MainDashboard";

class App extends React.Component {
 
  render() {
    
    return (
      <div>
        <NavDrawer />
        <MainDashboard/>
        <Footer />
      </div>
    );
  }
}

export default App;
