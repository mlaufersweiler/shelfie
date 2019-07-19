import React, {Component} from 'react'
import './Product.css'
import {Link} from 'react-router-dom';

function Product(props){
    return (
        <div className="product">
            {props.url ? 
            <img src={props.url} /> :
            <img src='' />
            }
            <div className="productInfo">
                <div className="info">
                    <h3>{props.name}</h3>
                    <h3>{props.price}</h3>
                </div>
                <div className="buttons">
                    <Link to="/"><button onClick={() => props.handleDelete(props.id)}>Delete</button></Link>
                    <Link to={`/add/${props.id}`}><button>Edit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Product