import { useDispatch, useSelector } from 'react-redux'
import { estate_sky } from '../assets/images'
import { changeInCart, removeFromCart } from '../features/slices/cartSlice'
import { MdClose } from 'react-icons/md'

export default function Cart() {
    const cartState = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <main className="flex flex-col relative">
            <div className="bg-main relative min-h-[65vh] h-[70vh] px-4">
                <img src={estate_sky} alt="" className="opacity-50 absolute top-0 left-0 w-full h-full object-cover" />
                <div className="relative py-10 container mx-auto text-white flex flex-col justify-center h-full gap-2">
                    <h3 className="text-3xl md:text-4xl font-bold">Cart Management</h3>
                    <p className="text-base md:text-lg">Manage the products in your cart in one page</p>
                </div>
            </div>
            <section className="bg-primary px-4 py-10">
                <div className="w-full max-w-4xl mx-auto flex flex-col divide-y divide-slate-200">
                    {
                        cartState.length ?
                            <>
                            <h3 className='font-bold leading-tight tracking-tight text-xl md:text-3xl text-white bg-slate-400 p-5'>Cart Items ({cartState.length})</h3>
                                {cartState.map(cart => (
                                    <aside key={cart.id} className="bg-white relative p-4 sm:p-6 flex item-center gap-4">
                                        <button onClick={() => dispatch(removeFromCart({id: cart.id}))} className="cursor-pointer bg-orange-600 rounded-full w-4 h-4 sm:w-5 sm:h-5 grid place-items-center absolute z-10 top-2 right-2 text-white text-sm"><MdClose /></button>
                                        <img src={cart.image[0]} alt={cart.title} className="min-h-10 sm:min-h-16 max-h-16 w-14 sm:w-20 rounded-sm object-cover flex-shrink-0" />
                                        <div className="flex-1">
                                            <h3 className="text-main text-lg sm:text-xl md:text-2xl font-semibold leading-tight">{cart.title}</h3>
                                            <p className="text-orange-600 leading-tight tracking-tight text-sm sm:text-base md:text-lg">&#8358;{cart.price.toLocaleString()}</p>
                                        </div>
                                        <div className="border border-slate-200 rounded-md w-10 h-10 overflow-hidden my-auto">
                                            <input type="number" value={cart.qty} onChange={e => dispatch(changeInCart({ id: cart.id, qty: e.target.value }))} className="w-18 ml-1 p-2 outline-none text-slate-700 text-sm md:text-base" />
                                        </div>
                                    </aside>
                                ))}
                                <div className="flex justify-between items-center gap-4 bg-main p-6">
                                    <h3 className='font-bold leading-tight tracking-tight text-xl md:text-3xl text-primary'>Total: &#8358;{(cartState.reduce((oldTotal, cart) => (cart.qty*cart.price) + oldTotal, 0)).toLocaleString()}</h3>
                                    <button className="bg-orange-600 py-2 px-4 w-28 text-white cursor-pointer rounded-md text-xs sm:text-sm md:text-base">Checkout</button>
                                </div>
                            </>
                                 : <p className="text-slate-700 text-base md:text-lg text-center">Ain&apos;t no items in this cart</p>
                    }
                            </div>
            </section>

        </main>
    )
}
