import React, {Component} from 'react';
import Styles from './Checkout.style'
import {NavLink} from 'react-router-dom'

import { connect } from "react-redux";

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
    if(this.state.fname == '') {
      this.state.errFname = "Please enter First name.";
      return false;
    }
    this.state.errFname = '';
    return true;
  }

  isValidLname() {
    if(this.state.lname == '') {
      this.state.errLname = "Please enter Last name.";
      return false;
    }
    this.state.errLname = '';
    return true;
  }

  isValidPhone() {
    if(this.state.phone == '') {
      this.state.errPhone = "Please enter Phone.";
      return false;
    }
    this.state.errPhone = '';
    return true;
  }

  isValidCreditcard() {
    if(this.state.creditcard == '') {
      this.state.errCreditcard = "Please enter Creditcard.";
      return false;
    }
    this.state.errCreditcard = '';
    return true;
  }

  handleSubmit = () => {
    //alert(1);
    if(this.isValidFname() && this.isValidLname() && this.isValidPhone() && this.isValidCreditcard()) {
      console.log(1111);
      
      this.props.completeCheckout();
    }

    this.setState({
      submitted: true
    })
  }
    render() {
      console.log('Checkout...');
        return(
            <div className="formWrapper">checkout..
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
                  <input type="text" value={this.state.creditcard} placeholder="Credit Card" onChange={(e)=>{this.onChangeCreditcard(e)}}/>
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