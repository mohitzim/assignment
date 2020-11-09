import React, {Component} from 'react';
import Styles from './Footer.style'
import {NavLink} from 'react-router-dom'

class Footer extends Component {

    render() {
      
        return(
            <div style={Styles.footer}>
              <div class="row">
                <div class="col-12 mrgn10">
                  <div><NavLink to="/">Home</NavLink></div>
                  <div><NavLink to="/products">Products</NavLink></div>
                  <div><NavLink to="/cart">Cart</NavLink></div>
                </div>
              </div>
            </div>
            
          )
    }

  }
  
  export default Footer;