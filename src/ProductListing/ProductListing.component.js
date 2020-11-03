import React, {Component} from 'react';
import Styles from './ProductListing.style'
import {NavLink} from 'react-router-dom'

class ProductListing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
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
    console.log('prod-lising...');
    const { error, isLoaded, products } = this.state;
        return(
            <div style={Styles.alignLeft}>
              
            {products.map(product => (
              <div class="row" key={product.id} style={Styles.listing}>
                <div class="col-6">
                  <NavLink to={"/product/"+product.id} activeClassName="activeLink">{product.title}</NavLink> 
                </div>
                <div class="col-3">
                  {product.price} USD
                </div>
                <div class="col-3">
                  Add
                </div>
              </div>
            ))}
        
              
              <div class="row" style={Styles.listing}>
                <div class="col-12">
                  row2
                </div>
              </div>
            </div>
          )
  }

}

export default ProductListing;