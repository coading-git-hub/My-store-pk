"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { allProducts, four } from "@/sanity/lib/queries";
import { product } from "../../../../type/products";
import Link from "next/link";
import { addToCart } from "../../../app/action/actions";
import Swal from "sweetalert2";
import Footer from "../footer/page";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

const Shoes = () => {
  const [product, setProduct] = useState<product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedproduct: product[] = await client.fetch(allProducts);
      setProduct(fetchedproduct);
    }
    fetchproduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName}  added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-6 text-center mt-10">
        {" "}
        Our Latest Products
      </h1>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 ease-in-out"
          >
            <Link href={`product/${product.slug.current}`}>
            
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}

              <h2 className="text-lg font-semibold mt-7">
                {" "}
                {product.productName}
              </h2>
              <p className="text-sm ">{product.description}</p>
              <p>
                {" "}
                {product.price
                  ? `$ ${product.price}`
                  : "Price not available"}{" "}
                <br />
              </p>

              <button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
          hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
              
            </Link>
            
          </div>
        ))}

        
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Shoes;
