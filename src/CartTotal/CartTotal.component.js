import React, {Component} from 'react';

class CartTotal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
      let {cartTotal} = this.props;
        return(
            <div class="pad10" style={{fontWeight: 'bold'}}>
              <div class="row">
                <div class="col-9" style={{textAlign:'right'}}>
                  Total
                </div>
                <div class="col-3">
                {cartTotal} USD
                </div>
              </div>
            </div>  
          )
    }

  }
  
  export default CartTotal;