import React from 'react';
import "./App.css";
import logo from "./assets/logo.png"
import mainLogo from "./assets/mainLogo.png"

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            {/* <a href=".">
              <img src={logo} alt='logo' className="logoimage"/>
            </a> */}
          </div>
          <div className="social">
            
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Website coming soon.</h1>
            <p>Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:adi@insightxlabs.in">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;