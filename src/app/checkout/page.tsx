"use client";
import React, { useEffect } from "react";
import { product } from "../../../type/products";
import { useState } from "react";
import { getCartItems } from "../action/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { CgChevronRight }from "react-icons/cg"
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client"

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: " ",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotle = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subTotle - discount, 0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder =async () => {
Swal.fire({
      title:"Processing Your order....",
      text:"Please wait a moment",
      icon:"info",
      showCancelButton: true,
      confirmButtonColor:"#3085d6",
      cancelButtonColor:"#d33",
      confirmButtonText:"Proceed",
    }).then((result)=>{
      if(result.isConfirmed){
        if(validateForm()){
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your order has been successfully processed!",
            "success"
          );
        }else{
          Swal.fire(
            "Error!",
            "Please fill in all the fields before proceeding.",
            "error" 
          );
        }
      }
    });
    

const orderData = {
  _type: 'order',
  firstName: formValues.firstName,
  lastName: formValues.lastName,
  address:formValues.address,
  city:formValues.city,
  zipCode:formValues.zipCode,
  phone:formValues.phone,
  email:formValues.email,

  cartItems:cartItems.map(item=> ({
    type:'reference',
    ref:item._id
  })),
  total:total,
  discount:discount,
  orderDate:new Date().toISOString
};

try{
  await client.create(orderData)
  localStorage.removeItem('appliedDiscount')
}catch(error){
  console.error("error creating order", error)
}


    
    
  };
    
return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl max-auto  px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center ml-96 gap-2 py-4">
            <Link href={"/cart"} 
            className="text-[#666666] hover:text-black transition text-lg">cart</Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]"/>
            <span >CheckOut</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* order summary */}
            <div className="bg-white border rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-semibold mb-4">Order Sammary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 rounded overflow-hidden">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt="image"
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                <h3 className="text-sm font-medium">{item.productName}</h3>
                <p className="text-sm text-gray-500">Quentity:{item.inventory}</p>
            </div>    
                <p>$ {item.price * item.inventory}</p>
              </div>
            ))
          ) : (
            <p className="text-xs font-medium">No items in cart</p>
          )}
          <div className="text-right pt-4">
            <p className="text-sm">
                Subtotle: <span className="font-medium">$ {subTotle}</span>
            </p>
            <p className="text-sm">
                Discount: <span className="font-medium">$ {discount}</span>
            </p>
            <p className="text-lg font-semibold">
                Total: $ {subTotle.toFixed(2)}
                </p>
          </div>
        </div>
    
    {/* billing form */}
    <div className="bg-white border rounded-lg p-6 space-y-6 ">
        <h2  className="text-lg font-semibold mb-4 ">
            Billing Information
        </h2>
        <div className="bg-white border rounded-lg p-6 space-y-6">
            <div className="border-b border-gray-300">
                <label htmlFor="firstName">First Name :</label><br />  
                <input 
                className="mt-3 w-full"
                id="firstName"
                type="text"
                placeholder="Enter your First Name"
                value={formValues.firstName}
                onChange={handleInputChange}/>
                 {formErrors.firstName && (<p className="text-sm text-red-500">
                        First Name is Required
                    </p>
               ) }
            </div>

            <div  className="border-b border-gray-300">
                <label htmlFor="">Last Name:</label> <br />
                <input
                className="mt-3 w-full" 
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}/>
                {formErrors.lastName &&(
                    <p className="text-sm text-red-500">
                        Last Name is Required
                    </p>
                )}
            </div>
<div  className="border-b border-gray-300">
                <label htmlFor="address">Address:</label><br />
                <input 
                className="mt-3 w-full"

              
                id="address"
                placeholder="Enter your Address"
                value={formValues.address}
                onChange={handleInputChange}/>
                {formErrors.address && (
                    <p className="text-sm text-red-500">
                        Address is Required:
                    </p>
                )}
            </div>
            
             <div  className="border-b border-gray-300">
                <label htmlFor="city">City:</label> <br />
                <input 
                className="mt-3 w-full" 
                type="text"
                id="city"
                placeholder="Enter your City"
                value={formValues.city}
                onChange={handleInputChange}/>
                {formErrors.city && (
                    <p className="text-sm text-red-500">
                        City is Required:
                    </p>
                  )}
                
            </div>

            <div  className="border-b border-gray-300" >
                <label htmlFor="zipCode">Zip Code:</label><br />
                <input 
                className="mt-3 w-full" 
                id="zipCode"
                 type="text"
                placeholder="Enter your Zip Code"
                value={formValues.zipCode}
                onChange={handleInputChange}/>
                {formErrors.zipCode &&(
                    <p className="text-sm text-red-500">
                        ZipCode is Required:
                    </p>
                )}
            </div>

            <div  className="border-b border-gray-300">
                <label htmlFor="phone">Phone:</label><br />
                <input 
          className="mt-3 w-full"
           type="text"
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}/>
                {formErrors.phone &&(
                    <p className="text-sm text-red-500">
                      phone is Required:
                    </p>
                )}
            </div>

            

            <div  className="border-b border-gray-300">
                <label htmlFor="email">Email:</label><br />
                <input  
                className="mt-3 w-full"
                 type="text"
                id="email"
                placeholder="Enter your Email"
                value={formValues.email}
                onChange={handleInputChange}/>
                {formErrors.email && (
                    <p className="text-sm text-red-500">
                        Email is Required:
                    </p>
               )}
            </div>

           
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-800 text-white mt-5"
            onClick={handlePlaceOrder}>
              Place Order
            </button>

        </div>
    </div>
  </div>
 </div> 
</div>
  );
};

export default CheckOut;
