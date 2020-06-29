import React from 'react';
import './App.scss';
import Routes from "./components/Routes";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RightSidebar from "./components/RightSidebar";

function App() {
    return (
      <div>
      <div className="layout">
          <Sidebar />
          <Routes />
          <RightSidebar />
      </div>
      <div>
      <Footer /> 
      </div>
      </div>
    );
  };

export default App;
