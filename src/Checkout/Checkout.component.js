import React, {Component} from 'react';

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      creditcard: '',
      submitted: false
    };
  }

  onChangeFname = (e) => {

    this.setState({
      fname: e.target.value
    });
    
  }

  onChangeLname = (e) => {

    this.setState({
      lname: e.target.value
    });
    
  }

  onChangePhone = (e) => {

    this.setState({
      phone: e.target.value
    });
    
  }

  onChangeCreditcard = (e) => {

    this.setState({
      creditcard: e.target.value
    });
    
  }

  isValidFname() {
    if(this.state.fname === '') {
      //this.state.errFname = "Please enter First name.";
      this.setState({errFname: "Please enter First name."});
      return false;
    }
    this.setState({errFname: ''});
    return true;
  }

  isValidLname() {
    if(this.state.lname === '') {
      this.setState({errLname: "Please enter Last name."});
      return false;
    }
    this.setState({errLname: ''});
    return true;
  }

  isValidPhone() {
    if(this.state.phone === '') {
      this.setState({errPhone: "Please enter Phone."});
      return false;
    }
    this.setState({errPhone: ''});
    return true;
  }

  isValidCreditcard() {

    if(this.state.creditcard === '' || this.state.creditcard.match(/^4[0-9]{12}(?:[0-9]{3})?$/) == null) {
      this.setState({errCreditcard: "Please enter valid Creditcard."});
      return false;
    }
    this.setState({errCreditcard: ''});
    return true;
  }

  handleSubmit = () => {
    //alert(this.isValidCreditcard());
    if(this.isValidFname() && this.isValidLname() && this.isValidPhone() && this.isValidCreditcard()) {
      
      // form is valid, complete checkout
      this.props.completeCheckout();
    }

    this.setState({
      submitted: true
    })
  }
    render() {
      //console.log('Checkout...');
        return(
            <div className="formWrapper">
              <div class="row pad10">
                <div class="col-3">
                  <input type="text" value={this.state.fname} width="100%" placeholder="First Name" onChange={(e)=>{this.onChangeFname(e)}}/>
                  <div class="error">{this.state.errFname}</div>
                </div>
                <div class="col-3">
                  <input type="text" value={this.state.lname} placeholder="Last Name" onChange={(e)=>{this.onChangeLname(e)}}/>
                  <div class="error">{this.state.errLname}</div>
                </div>
              </div>
              <div class="row pad10">
                <div class="col-3">
                  <input type="text" value={this.state.phone} placeholder="Phone" onChange={(e)=>{this.onChangePhone(e)}}/>
                  <div class="error">{this.state.errPhone}</div>
                </div>
                <div class="col-3">  
                  <input type="text" value={this.state.creditcard} placeholder="Credit Card (Visa card)" onChange={(e)=>{this.onChangeCreditcard(e)}}/>
                  <div>(i.e., 4111111111111111)</div>
                  <div class="error">{this.state.errCreditcard}</div>
                </div>
              </div>  
              <div class="row pad10">
                <div class="col-6">
                  <button onClick={this.handleSubmit}>Buy</button>
                </div>
              </div>
            </div>
          )
      }

  }
  
export default Checkout;