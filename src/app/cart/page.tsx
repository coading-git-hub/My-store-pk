'use client';

import React, { useEffect, useState } from 'react';
import { product } from '../../../type/products';
import { getCartItems, removeFromCart, updateCartQuantity } from '../action/actions';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/image';
import Swal from 'sweetalert2';
import Footer from '../componant/footer/page';
import { useRouter } from "next/navigation";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems().filter(item => item._id !== id));
        Swal.fire('Removed!', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };
  const router = useRouter();
 const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout?',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your Order has been successfully processed', 'success');

router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold text-center my-4'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='space-y-4'>
          {cartItems.map((item) => (
            <div key={item._id} className='flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg'>
              <div className='flex items-center space-x-4'>
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={100}
                    height={100}
                    className='object-cover rounded-md'
                  />
                )}
                <div>
                  <h2 className='text-lg font-semibold'>{item.productName}</h2>
            
                  <p className='text-gray-800 font-semibold'>${item.price}</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <button onClick={() => handleDecrement(item._id)} className='px-3 py-1 bg-gray-300 rounded'>-</button>
                <span className='text-lg font-medium'>{item.inventory}</span>
                <button onClick={() => handleIncrement(item._id)} className='px-3 py-1 bg-gray-300 rounded'>+</button>
              </div>
              <button onClick={() => handleRemove(item._id)} className='text-red-500 hover:text-red-700'>Remove</button>
              

            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className='mt-6 text-center'>
          <h2 className='text-xl font-bold'>Total: ${calculateTotal()}</h2>
          <button onClick={handleProceed} className='mt-3 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600'>
            Proceed to Checkout
          </button> <br /> <br />
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Cartpage;
