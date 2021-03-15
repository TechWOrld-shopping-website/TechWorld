import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {saveShippingAddress} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


const ShippingScreen = ({history}) => {

     const cart = useSelector(state => state.cart)
     const {shippingAddress}=cart

    const [houseNoOrName,setHouseNoOrName]=useState(shippingAddress.houseNoOrName,)
    const [street,setStreet]=useState(shippingAddress.street)
    const [city,setCity]=useState(shippingAddress.city)
    const [pincode,setPincode]=useState(shippingAddress.pincode)
    const [regionState,setRegionState]=useState(shippingAddress.regionState)

    const dispatch = useDispatch()

    const submitHandler=(e)=>{
        console.log(street)
        e.preventDefault() 
        dispatch(saveShippingAddress({houseNoOrName,street,city,pincode,regionState}))
        history.push('/payment') 
    } 
    return (
        <FormContainer> 
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>  
                <Form.Group controlId='houseNoOrName'>
                    <Form.Label>House no/name:</Form.Label>
                    <Form.Control type='text' placeholder='enter house no/name' value={houseNoOrName}
                    required onChange={(e)=>setHouseNoOrName(e.target.value)}>
                    </Form.Control>    
                </Form.Group> 

                <Form.Group controlId='street'>
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type='text' placeholder='Street' value={street}
                    required onChange={(e)=>setStreet(e.target.value)}>
                    </Form.Control>    
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City:</Form.Label>
                    <Form.Control type='text' placeholder='Street' value={city}
                    required onChange={(e)=>setCity(e.target.value)}>
                    </Form.Control>    
                </Form.Group>

                <Form.Group controlId='pincode'>
                    <Form.Label>Pincode:</Form.Label>
                    <Form.Control type='text' placeholder='Street' value={pincode}
                    required onChange={(e)=>setPincode(e.target.value)}>
                    </Form.Control>    
                </Form.Group>

                <Form.Group controlId='region'>
                    <Form.Label>region:</Form.Label>
                    <Form.Control type='text' placeholder='Street' value={regionState}
                    required onChange={(e)=>setRegionState(e.target.value)}>
                    </Form.Control>    
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}
 
export default ShippingScreen
