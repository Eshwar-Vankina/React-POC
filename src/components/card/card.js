import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.scss";
import WithCategories from '../withCategories'
import { withRouter } from 'react-router-dom';

const compose = (...rest) => x => rest.reduceRight((y, f) => f(y), x)

class Card extends Component {
  state = {
      Products: [],
      selectedCategory: null
    };
  

  async componentDidMount() {
    const url = "http://localhost:64666/Products";
    const response = await fetch(url);
    const ProductsData = await response.json();
    this.setState({
      Products: ProductsData
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        selectedCategory: Number(this.props.location.pathname.split("/")[2])
      })
    }
  }


  static getDerivedStateFromProps(props, state) {
    // console.log(props);
    return props;
  }
  
  
  render() {
    
    
    if (
      window.location.pathname.includes("/login") ||
      window.location.pathname.includes("/signup")
    ) {
      return <div></div>;
    } else {
     
      return (
      
        <React.Fragment>
          <main className="container product-area">
            <div className="row">
              {this.state.Products.filter(prod => prod.Cat === this.state.selectedCategory || !this.state.selectedCategory).map(prod => (
                <div className="card card-dimensions" key={prod.Id}>
                  <img
                    className="card-img-top product-img"
                    src="..."
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="cardtitle">{prod.Name}</h4>
                    <div className="card-desc">
                      <label>Product Price : {prod.Price}</label>
                      <br />
                      <label>Min Bid Price : {prod.MinBid} </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </React.Fragment>
      );
    }
  }
}

export default compose(withRouter, WithCategories)(Card);
