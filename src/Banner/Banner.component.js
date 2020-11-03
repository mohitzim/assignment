import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Banner extends Component {

    render() {
        return(
            <div>
              <NavLink to="/products">
                <div style={{textAlign: 'center', paddingTop:'20px'}}>
                  <h3>Let's Shop</h3>
                </div>
              </NavLink>
            </div>
          )
    }

  }
  
  export default Banner;