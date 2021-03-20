import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'


//@desc Create new order
//@route POST/api/orders
//@acess Private
const addOrderItems = asyncHandler(async(req, res) => {
 
    const {orderItems, 
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice}=req.body

    if(orderItems && orderItems.length ===0){
        res.status(400)
        throw new Error('No order Items')
        return
    }else{
        const order=new Order(
            {
                orderItems, 
                user:req.user._id, 
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                totalPrice
            }
        )
        const createdOrder=await order.save()

        res.status(201).json(createdOrder)
    }

})


//@desc GET order by id
//@route GET /api/order/:id
//@acess Private
const getOrderById = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if(order){
        console.log(order)
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }


})

//@desc Update order to paid
//@route GET /api/order/:id/pay
//@acess Private
const updateOrderToPaid = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)
    if(order){
       
        order.isPaid =true
        order.paidAt =Date.now()
         order.paymentResult = {
            id : req.body.id,
            status : req.body.status,
            update_time : req.body.update_time,
            email_address : req.body.payer.email_address
        }

        const updateOrder =await order.save()

    }else
    {
        res.status(404)
        throw new Error('Order not found')
    }


})


//@desc:GET logged in user order
//@route GET /api/order/myorders
//@acess Private
const getMyOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({user: req.user._id})
    
    res.json(orders)

})

export {addOrderItems , getOrderById, updateOrderToPaid,getMyOrders}