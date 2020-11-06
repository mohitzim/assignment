import React, {Component} from 'react';
import Styles from './CartProduct.style'
import {NavLink} from 'react-router-dom'

import { connect } from "react-redux";

class CartProduct extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
          error: null,
          isLoaded: false,
          productDetail: {}
        };
    }

  componentDidMount() {
    console.log('componentDidMount :: ', this.props.productId);
    
    fetch("https://fakestoreapi.com/products/"+this.props.productId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            productDetail: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

    render() {

      console.log('CartProduct...');
      let {productId, productQty, price} = this.props;
      const { error, isLoaded, productDetail} = this.state;
      
      return(
        <div>
          <div class="pad10 borderBtm">
            <div class="row">
              <div class="col-2">
                <img src={productDetail.image} width="50%" />
              </div>
              <div class="col-5">
                {productDetail.title}
              </div>
              <div class="col-2">
                {productQty}
              </div>
              <div class="col-3">
                {price}
              </div>  
            </div>
          </div>
        </div>  
        )
    }

  }
  
  const mapStateToProps = state => ({
    ...state
  });
  
  export default connect(mapStateToProps)(CartProduct);
  //export default Cart;