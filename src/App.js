import logo from './logo.svg';
import Header from './Header/Header.component'
import Footer from './Footer/Footer.component'
import Banner from './Banner/Banner.component'
import ProductListing from './ProductListing/ProductListing.component'
import ProductDetail from './ProductDetail/ProductDetail.component'
import Cart from './Cart/Cart.component'
import './App.css';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

function App() {
  return (
    // <Router forceRefresh={true}>
    <Router>  
      <div className="App">
        <header>
          <Header></Header>
          {/* <ProductListing></ProductListing> */}
        </header>
        
        <div class="content">
          <Route exact path="/" component={Banner} />
          <Route exact path="/products" component={ProductListing} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetail} />
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
