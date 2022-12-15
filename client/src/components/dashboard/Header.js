import React, { Component } from 'react';
import '../../style/header.css';
// import {connect} from 'react-redux';

class Header extends Component {


  render() {

      return (
        <div>
            <header>
                <div className="container">
                  <div id="branding">
                    <h1><span className="highlight">Ed</span>Pub</h1>
                  </div>

                  <nav>
                      <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      {/* <li><a href="/services">Services</a></li> */}
                      </ul>
                  </nav>
                </div>
            </header>
  
  
        </div>
      )
    
    }
}

// const mapStateToProps=state=>({
// });

// export default connect(mapStateToProps)(Header);
export default Header;