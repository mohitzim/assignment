import logo from './logo.svg';
import Header from './Header/Header.component'
import ProductListing from './ProductListing/ProductListing.component'
import ProductDetail from './ProductDetail/ProductDetail.component'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <header>
          <Header></Header>
          {/* <ProductListing></ProductListing> */}
        </header>

        <Route exact path="/products" component={ProductListing} />
        <Route path="/product/:id" component={ProductDetail} />
      </div>
    </Router>
  );
}

export default App;
