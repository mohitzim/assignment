import React, {Component} from 'react';
import Styles from './Cart.style'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import CartProduct from '../CartProduct/CartProduct.component';
import CartTotal from '../CartTotal/CartTotal.component';

class Cart extends Component {

    constructor(props) {
        super(props)
    }

    render() {
      console.log('Cart...');
      console.log('cartProducts:: ',this.props.cartProducts)
      let {cartProducts} = this.props;
      let cartTotal = 0;

        return(
          // <CartProduct id="1"></CartProduct>
          <div>
            <div>
              {cartProducts.map((cartProduct, index) => (
                  <div key={index}>
                    <span class="hide">{cartTotal = cartTotal + cartProduct.price}</span>
                    <CartProduct productId={cartProduct.id} productQty={cartProduct.qty} price={cartProduct.price}></CartProduct>
                  </div>
              ))}
            </div>
            <div>
              <CartTotal cartTotal={cartTotal}></CartTotal>
            </div>
          </div>
        )
    }

}
  
const mapStateToProps = state => ({
  ...state
});
  
export default connect(mapStateToProps)(Cart);