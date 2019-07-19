import React, {Component} from 'react'
import './Form.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            price: 0,
            url: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        if(this.props.match.params){
            const {id} = this.props.match.params;
            axios.get(`/api/products/${id}`).then(response => {
                this.setState({
                    name: response.data[0].product_name,
                    price: response.data[0].price,
                    url: response.data[0].image_url
                })
            }).catch(err => console.log(err))
        }
    }
    componentDidUpdate(props){
        if(props !== this.props){
            this.setState({
                name: '',
                price: 0,
                url: ''
            })
        }
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            url: ''
        })
    }

    handleSubmit = () => {
        const {name, price, url} = this.state;
        if(this.props.match.paras.id){
            const {id} = this.props.match.params;
            let oldItem = {product_name: name, price: price, image_url: url}
            axios.put(`/api/products/${id}`, [oldItem])
        } else {
            let newItem = {product_name: name, price: price, image_url: url}
            axios.post('/api/products', newItem);
            this.handleCancel()
        }
    }


    render(){
        return(
            <div className='form'>
                {this.state.url === '' ?
                    <img src="" /> :
                    <img src ={this.state.url} alt="product_image" />
                }
                <h3>Image URL:</h3>
                <input name="url" type="text" value={this.state.url} onChange={this.handleChange} />
                <h3>Product Name:</h3>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                <h3>Price:</h3>
                <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
                <div className="buttons">
                    <Link to="/"><button onClick={this.handleCancel}>Cancel</button></Link>
                    <Link to="/"><button onClick={this.handleSubmit}>{this.props.match.params.id ? 'Edit Item' : "Add to Inventory"}</button></Link>

                </div>
        </div>
        )
        
    }
}
export default Form 