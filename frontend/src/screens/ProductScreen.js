import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

//import Product from '../components/Product'
const ProductScreen = ({ match }) => {
  
    const [product,setProduct]=useState({})

    useEffect(()=>{
        
        const fetchProduct=async ()=>{

            const {data} = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)    
        }
        fetchProduct()
         
    },[match])
   

    return <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>  
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={"#f8e825"} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                         Price: Rs{product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                         Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variants='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>Rs. {product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button'>Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                        
                </Card>
            </Col>
        </Row>
    
    
    
    </>
  
}

export default ProductScreen