import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = JSON.parse(localStorage.getItem("airspace__cart")) || []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findInCart = state.findIndex(el => el.id === action.payload.id)
            if(findInCart > -1){
                toast.error("This house is already in your cart", {id: "123"})
            }
            else{
                toast.success("This house has been added to your cart", {id: "123"})
                state.push({...action.payload, qty: 1})
                localStorage.setItem("airspace__cart", JSON.stringify(state))
            }
        },
        changeInCart(state, action){
            state.forEach(el => {
                if(el.id === action.payload.id) el.qty = action.payload.qty
            })
            localStorage.setItem("airspace__cart", JSON.stringify(state))
        },
        removeFromCart(state, action){
            const productIndex = state.findIndex(el => el.id === action.payload.id)
            state.splice(productIndex, 1)
            localStorage.setItem("airspace__cart", JSON.stringify(state))
        },
    }
})

export const {addToCart, changeInCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer