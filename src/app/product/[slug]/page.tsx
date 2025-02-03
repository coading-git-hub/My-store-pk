 
 
 import { client } from "@/sanity/lib/client";;
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { product } from "../../../../type/products";
import Link from "next/link";
import Footer from "@/app/componant/footer/page";
import { addToCart } from "@/app/action/actions";
import Swal from "sweetalert2";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
async function getProduct(slug: string): Promise<product> {
  return client.fetch(
    groq`*[_type =="product" && slug.current == $slug][0]{
            _id,
            productName,
            _type,
            image,
            price,
            description,

        }`,
    {slug}
  );
}
export default async function ProductPage({params}: ProductPageProps) {
  const {slug} = await params;
  const product = await getProduct(slug);

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
    <div className="max-w-7xl- mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8 mt-10 ">
          <h1 className="text-4xl mt-10 font-bold">{product.productName}</h1>
          <p className="text-xl w-96 mt-4 ">{product.description}</p>
          <p className="text-2xl font-sans border-b-2 w-32 border-black text-blue-600">$ {product.price}</p>

<button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
          hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
        </div>
       
      </div> 
      <Footer/>
    </div>
  );
}
