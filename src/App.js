import React from 'react';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">SafarPe</a>
          </div>
          <div className="social">
            
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Website coming soon.</h1>
            <p>Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:hello@safarpe.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;