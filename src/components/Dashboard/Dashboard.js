import React, {Component} from 'react';
import Product from '../Product/Product'
import App from '../../App'
import axios from 'axios'


class Dashboard extends Component {
  constructor(props){
      super(props);
      this.state = {
          products: []
      }
  }
  componentDidMount(){
      axios
        .get('/api/prodcuts')
        .then(response => {
            this.setState({products: response.data})
        })
        .catch(err => console.log(err))
  } 
  handleDelete = (id) => {
    axios.delete(`/api/products/${id}`);
    axios.get('/api/products')
        .then(response => {
            this.setState({products: response.data})
        })
  }
  render(){
      return(
          <div className="dashboard">
              {this.state.products.map(e => {
                  return (
                      <Product 
                        key={e.product_id}
                        image_url={e.image_url}
                        name={e.product_name}
                        price={e.price}
                        id={e.product_id}
                        handleDelete={this.handleDelete}
                    />
                  )
              })}
          </div>
      )
  }
  
}

export default Dashboard