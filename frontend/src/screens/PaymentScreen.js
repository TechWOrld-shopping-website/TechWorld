import React,{useState} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {savePaymentMethod} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


const PaymentScreen = ({history}) => {

     const cart = useSelector(state => state.cart)
     const {shippingAddress}=cart

     if(!shippingAddress)
     {
         history.push('/shipping')
     }

    const [paymentMethod,setPaymentMethod]=useState('razorpay')
    
   
    const dispatch = useDispatch()

    const submitHandler=(e)=>{ 
        e.preventDefault() 
        console.log(paymentMethod)
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder') 
    } 
    return (
        <FormContainer> 
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>  
               <Form.Group>
                <Form.Label as ='legend'>Select Method</Form.Label>
               
               {/* <Col>
                    <Form.Check type='radio' label='razorpay or credit card' id='razorpay' name='paymentMethod' 
                    value='razorpay' checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
               </Col>  */}
               <Col>
                    <Form.Check type='radio' label='PayPal or credit card' id='cashOnDelivery' name='paymentMethod' 
                    value='PayPal' onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
               </Col> 
               {/* <Col>
                    <Form.Check type='radio' label='cash on delivery' id='cashOnDelivery' name='paymentMethod' 
                    value='cashOnDelivery' onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
               </Col>  */}
               </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}
 
export default PaymentScreen
