"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import ProductPage from "@/app/product/[slug]/page";
import Cartpage from "@/app/cart/page";
import { getCartItems } from "@/app/action/actions";


const Navbar = () => {
  const item = useSelector((state: RootStore) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md  bg-gray-900 text-white px-4 md:px-8 py-4 flex items-center justify-between font-sans" data-aos="fade-down" data-aos-duration="3000">
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="font-bold text-xl tracking-wide">My Store.pk</div>
      </div>
      <ul
        className={`${
          isMenuOpen
            ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg text-black"
            : "hidden"
        } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
      >
       <Link href="/"> <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-400 ">
          Home
        </li> </Link>
        <Link href="/AboutUs"><li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-400">
          AboutUs
        </li> </Link>
       <Link href="/componant/contact">  <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-400">
         Contact
        </li> </Link>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px] mr-12">
          <FiSearch className="text-gray-500 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
          />
        </div>


        
      <Link href="/cart">
        <FiShoppingCart className="text-2xl cursor-pointer mr-2" /></Link>
        
        {getCartItems.length}
<SignedOut>
  <SignInButton>
     <FiUser className="text-2xl cursor-pointer" />
  </SignInButton>
</SignedOut>
<SignedIn>
  <UserButton/>
</SignedIn>
        
       

        
      </div>
    </nav>
  );
};

export default Navbar