import React, {Component} from 'react';
import Styles from './Cart.style'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import CartProduct from '../CartProduct/CartProduct.component';
import CartTotal from '../CartTotal/CartTotal.component';
import Checkout from '../Checkout/Checkout.component';
import setCartCountAction from "../actions/setCartCountAction";
import setCartProductsAction from "../actions/setCartProductsAction";

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
          showCheckout: false
        }
    }

    showCheckout() {
      this.setState({showCheckout: true});
    }

    completeCheckout() {
      console.log('completeCheckout..');
      //console.log(this.props);

      //this.props.setCartCountAction(0);
      //this.props.setCartProductsAction([]);
    }

    render() {
      console.log('Cart...');
      console.log('cartProducts:: ',this.props.cartProducts)
      let {showCheckout} = this.state;
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
              <CartTotal cartTotal={cartTotal.toFixed(2)}></CartTotal>
            </div>

            {!showCheckout && 
              <div>
                <button name="btnCheckout" type="button" onClick={()=>{this.showCheckout()}}>Checkout</button>
              </div>
            }  

            <div>
              {showCheckout && <Checkout completeCheckout={this.completeCheckout} ></Checkout>}
            </div>
          </div>
        )
    }

}
  
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setCartCountAction: (payload) => dispatch(setCartCountAction(payload)),
  setCartProductsAction: (payload) => dispatch(setCartProductsAction(payload))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);