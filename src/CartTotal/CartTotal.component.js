import React, {Component} from 'react';

class CartTotal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
      let {cartTotal} = this.props;
      console.log('cart-total...');
        return(
            <div class="pad10">
              <div class="row">
                <div class="col-9">
                  Total
                </div>
                <div class="col-3">
                {cartTotal}
                </div>
              </div>
            </div>  
          )
    }

  }
  
  export default CartTotal;