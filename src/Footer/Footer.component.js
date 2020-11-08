import React, {Component} from 'react';
import Styles from './Footer.style'
import {NavLink} from 'react-router-dom'

class Footer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
      console.log('Footer...');
        return(
            <div style={Styles.footer}>
              <div class="row">
                <div class="col-12 mrgn10">
                  <div><NavLink to="/">Home</NavLink></div>
                  <div><NavLink to="/products">Products</NavLink></div>
                  <div><NavLink to="/cart">Cart</NavLink></div>
                </div>
                {/* <div class="col-3">
                  <NavLink to="/cart"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></NavLink>
                  &nbsp;&nbsp;<span class="dot" style={Styles.dot}></span>
                  ***<span>{this.props.cartCount}</span>---
                </div> */}
              </div>
            </div>
            
          )
    }

  }
  
  export default Footer;