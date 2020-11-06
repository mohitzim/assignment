import React, {Component} from 'react';
import Styles from './Header.style'
import {NavLink} from 'react-router-dom'

import { connect } from "react-redux";

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
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  &nbsp;&nbsp;<span class="dot" style={Styles.dot}></span>
                  ***<span>{this.props.cartCount}</span>---
                </div>
              </div>
            </div>
            
          )
    }

  }
  
  const mapStateToProps = state => ({
    ...state
  });
  
  export default connect(mapStateToProps)(Header);
  //export default Header;