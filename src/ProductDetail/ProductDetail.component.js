import React, {Component} from 'react';
import Styles from './ProductDetail.style'
import {NavLink} from 'react-router-dom'

class ProductDetail extends Component {

  constructor(props) {
    super(props);
    console.log('History :: ', this.props.match);
    this.state = {
      error: null,
      isLoaded: false,
      productDetail: {}
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

  render() {
  
    console.log("prod-detail..")
    const { error, isLoaded, productDetail } = this.state;

    console.log(productDetail);
    return(
        <div>
          <div class="row">
            <div class="col-5">
              <img src={productDetail.image} width="100%" />
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-12">
                  <div><h4>{productDetail.title}</h4></div>
                  <div><h3>{productDetail.price}</h3></div>
                  <div>
                    <b>Category:</b> {productDetail.category}
                  </div>
                  <br />
                  <div>
                    {productDetail.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

  }
}

export default ProductDetail;