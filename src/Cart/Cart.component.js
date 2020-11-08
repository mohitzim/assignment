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
        console.log('this.props :: ',this.props);
        this.state = {
          showCheckout: false,
          checkoutCompleted: false,
          emptyCart: false,
          msgThanks: ''
        }
    }

    componentDidMount() {
      console.log('componentDidMount :: ', this.props.cartCount);
      if(this.props.cartCount == 0) {
        this.setState({emptyCart: true});
      }
    }

    showCheckout() {
      this.setState({showCheckout: true});
    }

    completeCheckout() {
      console.log('completeCheckout..');
      
      // checkout completed, clear cart
      this.props.setCartCountAction(0);
      this.props.setCartProductsAction([]);

      this.setState({showCheckout: false, checkoutCompleted: true, msgThanks: 'Thank you for shopping.'});
    }

    render() {
      console.log('Cart...');
      console.log('cartProducts:: ',this.props.cartProducts)
      let {showCheckout, checkoutCompleted, emptyCart, msgThanks} = this.state;
      let {cartProducts} = this.props;
      let cartTotal = 0;

        return(
          // <CartProduct id="1"></CartProduct>
          <div class="pad10">
            {checkoutCompleted &&
              <div class="msgThanks pad10">
                {msgThanks}&nbsp;&nbsp;
                <NavLink to="/products">Browse Products</NavLink>
              </div>
            }

            {emptyCart &&
              <div class="text-center">
                <h4>Cart is empty.</h4> <NavLink to="/products">Browse Products</NavLink>
              </div>
            }

            <div>
              {cartProducts.map((cartProduct, index) => (
                  <div key={index}>
                    <span class="hide">{cartTotal = cartTotal + cartProduct.price}</span>
                    <CartProduct productId={cartProduct.id} productQty={cartProduct.qty} price={cartProduct.price}></CartProduct>
                  </div>
              ))}
            </div>

            {!checkoutCompleted && !emptyCart &&
              <div>
                <CartTotal cartTotal={cartTotal.toFixed(2)}></CartTotal>
              </div>
            }

            {!showCheckout && !checkoutCompleted && !emptyCart && 
              <div>
                <button name="btnCheckout" type="button" onClick={()=>{this.showCheckout()}}>Checkout</button>
              </div>
            }  

            <div>
              {showCheckout && <Checkout completeCheckout={()=>{this.completeCheckout()}} ></Checkout>}
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