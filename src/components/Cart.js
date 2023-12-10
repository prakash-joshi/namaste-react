import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../store/cartSlice';

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className='text-center m-4 p-4'>
                <h1 className='text-2xl font-bold'>
                    Cart
                </h1>
                <button className="p-2 rounded-lg bg-black text-white shadow-lg" onClick={handleClearCart}> Clear Cart</button>
                <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
                    {cartItems.length === 0 ? <h1> Cart is empty </h1> : <ItemList items={cartItems} />}
                </div>
            </div>

        </div >
    )
}

export default Cart
