import React, { Component } from "react";

class Nav extends Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about/">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/info/">Information</a></li>
              </ul>
            </div>
        </nav>
      </header>
    );
  }
}

export default Nav;