import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
const ProductScreen = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id)
 //   console.log(p._id)
    console.log(product)
    return <div>Product</div>
}

export default ProductScreen
