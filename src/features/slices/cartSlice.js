import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log({state, action})
            const findInCart = state.find(el => el.id === action.payload.id)
            if(findInCart){
                toast.error("This house is already in your cart")
                return state
            }
            else{
                toast.success("This house has been added to your cart")
                state = [...state, {...action.payload, qty: 1}]
            }
        },
        changeInCart(state, action){
            state = state.map(el => {
                if(el.id === action.payload.id) return {...el, qty: action.payload.qty}
                else return el
            })
        },
        removeFromCart(state, action){
            state = state.filter(el => el.id !== action.payload.id)
        },
    }
})

export const {addToCart, changeInCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer