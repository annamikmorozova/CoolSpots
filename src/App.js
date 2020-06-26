import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {Col} from 'react-bootstrap';
import Routes from "./components/Routes";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RightSidebar from "./components/RightSidebar";

function App() {
    return (
      <div className="layout">
          <Sidebar />
          <Routes />
          <RightSidebar />
        {/* <Footer /> */}
      </div>
    );
  };

export default App;
