import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
//import { browserHistory } from 'react-router'

import { connect } from "react-redux";
import setBgAction from "../actions/setBgAction";
import setColorAction from "../actions/setColorAction";
import setCartCountAction from "../actions/setCartCountAction";
import setCartProductsAction from "../actions/setCartProductsAction";

class ProductDetail extends Component {

  constructor(props) {
    super(props);
    console.log('History :: ', this.props.match);
    this.state = {
      error: null,
      isLoaded: false,
      productDetail: {},
      productQty: 1
    };
  }

  componentDidMount() {
    console.log('componentDidMount :: ', this.props.match);
    
    fetch("https://fakestoreapi.com/products/"+this.props.match.params.id)
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

  changeInp(ev) {
    //console.log(ev.target.value);
    this.setState({productQty: ev.target.value});
  }

  addToCart() {
    console.log('addtocart..');
    let currentCartCount = this.props.cartCount;
    let totalCartCount = currentCartCount + 1;
    this.props.setCartCountAction(totalCartCount);
   
   
    let currentCartProducts = this.props.cartProducts;
    console.log('currentCartProducts :: ', currentCartProducts);
    let objCartProd = { "id": this.props.match.params.id, "qty": this.state.productQty, "price": (this.state.productDetail.price*this.state.productQty) }
    currentCartProducts.push(objCartProd);
    this.props.setCartProductsAction(currentCartProducts);
    this.props.setBgAction("blue");
  }

  goToProducts() {
    console.log('products..');
    //browserHistory.push('/products')
  }
  
  render() {
  
    console.log("prod-detail..")
    const { error, isLoaded, productDetail, productQty} = this.state;

    console.log(productDetail);
    return(
        <div>
          <div class="row">
            <div class="col-5">
              <img src={productDetail.image} width="100%" alt={productDetail.title} title={productDetail.title} />
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-12">
                  <div><h4>{productDetail.title}</h4></div>
                  <div><h3>{productDetail.price}</h3></div>
                  <div>
                    <b>Category:</b> {productDetail.category}
                  </div>
                  <br /><br />
                  <div>
                    {productDetail.description}
                  </div>
                  <div style={{paddingTop:'20px'}}>
    {/* ***<div>{this.props.bgColor}</div>--- */}
                    <button type="button" onClick={()=>{this.addToCart()}}>Add to Cart</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="txtQty" id="txtQty" style={{width: '200px'}} value={productQty} onChange={(e)=>{this.changeInp(e)}} ></input>
                  </div>
                  <div>
                    <NavLink to="/products">Browse Products</NavLink>
                    {/* <button type="button" onClick={()=>{this.goToProducts()}}>Browse Products</button> */}
                  </div>
                </div>
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

const mapDispatchToProps = dispatch => ({
  setBgAction: (payload) => dispatch(setBgAction(payload)),
  setColorAction: (payload) => dispatch(setColorAction(payload)),
  setCartCountAction: (payload) => dispatch(setCartCountAction(payload)),
  setCartProductsAction: (payload) => dispatch(setCartProductsAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

//export default ProductDetail;