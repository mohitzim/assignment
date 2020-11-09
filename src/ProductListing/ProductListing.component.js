import React, {Component} from 'react';
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
    const { error, isLoaded, products } = this.state;
        return(
            <div>
              
              <div class="container">
                <div class="row">
                  {products.map(product => (
                    <div class="col-4 padTop" key={product.id}>
                      <NavLink to={"/product/"+product.id} activeClassName="activeLink">
                      <div class="productBox pad10">
                        <div style={{textAlign:"center"}}>
                          <img src={product.image} alt={product.title} title={product.title} width="200" height="200" />
                        </div>
                        {product.title}
                      </div>
                      </NavLink>
                    </div> 
                  ))}
                </div>
              </div>
                            
            </div>
      )
  }

}

export default ProductListing;