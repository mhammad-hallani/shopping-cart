//feature 1
import React from 'react';
import Products from './components/Products';
import data from './data.json'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    };
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
          <a href="/admin">Admin</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
                <Products products={this.state.products} />
            </div>
                CartItems
            <div className="sidebar">

            </div>
          </div>
        </main>
        <footer>
          <div>All right is reserved.</div>
        </footer>
      </div>
    );
  }

}

export default App;
