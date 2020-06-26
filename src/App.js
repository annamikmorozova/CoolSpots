import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {Col} from 'react-bootstrap';
import Routes from "./components/Routes"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

function App() {
    return (
      <div className="layout">
          <Sidebar />
          <Routes />
        {/* <Footer /> */}
      </div>
    );
  };

export default App;
