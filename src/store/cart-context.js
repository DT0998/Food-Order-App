import React from 'react'


const CartContext = React.createContext({
 items:[],
 totalAmount:0,
 addIem:(item)=>{},
 removeItem:(id)=>{}
})

export default CartContext