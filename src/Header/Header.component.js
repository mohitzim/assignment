import React, {Component} from 'react';
import Styles from './Header.style'
import {NavLink} from 'react-router-dom'

class Header extends Component {

    name = 'A1';
    status = 'Online';

    constructor(props) {
        super(props)
    }

    render() {
      console.log('header...');
        return(
            <div style={Styles.header}>
              <div class="row">
                <div class="col-9">
                  <h3>
                    <NavLink to="/">Shopping Cart</NavLink>
                  </h3>
                </div>
                <div class="col-3">
                  Cart
                </div>
              </div>
            </div>
            
          )
    }

  }
  
  export default Header;