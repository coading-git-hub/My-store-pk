 
 'use client'
import Contact from './componant/contact/page';
import React from 'react'
import Image from 'next/image'
import img1 from '../../public/shop-hero-1-product-slide-1.jpg'
import img2 from '../../public/product-cover-5 (1).png'
import img3 from '../../public/product-cover-5 (2).png'
import img4 from '../../public/product-cover-5 (3).png'
import img5 from '../../public/product-cover-5 (4).png'
import img6 from '../../public/product-colors (1).png'
import img7 from '../../public/product-cover-5 (6).png'
import img8 from '../../public/product-cover-5 (7).png'
import img9 from '../../public/product-cover-5 (5).png'
import img10 from '../../public/product-cover-5 copy.png'
import Shoes from '../app/componant/shoes/page'
import Navbar from './componant/Navebar/page';
import Footer from './componant/footer/page';

// export default function Home() {
//   return (
    
    {/* <div>
   <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image
      src={img1}
      alt="slider"
     
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image
      src={img2}
     alt="slider"
     
     className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <Image
      src={img3}
     alt="slider"
     className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <Image
      src={img4}
      alt="slider"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    </div>






 */}


 const Home = () => {
  return (
    <div className="w-full">
  
      <div className="w-full h-[716px]   relative">
        <div className="w-full lg:h-[716px] -mt-28  py-[112px]   ">
        <Image
      src={img1}
      alt="card"
     
      className="w-full" />
        </div>

        <div className="w-full h-[427px] py-[48px] gap-[30px] absolute -mt-[600px] ml-36">
          <div className=" w-[122px] lg:h-[24px] ">
            <h5 className="font-[700px] text-[16px] leading-[24px] text-white mt-32 ">
              SUMMER 2020
            </h5>
          </div>
          <div className="w-[548px] h-[80px]">
            <h1 className="font-[700] text-[58px] leadinng-[80px] tracking-tight text-white py-6">
              NEW COLLECTION
            </h1>
          </div>
          <div className="w-[376px] h-[60px] ">
            <p className="font-[40] text-[20px] text-white mt-8 leading-[30px] tracking-tight">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
          </div>
          <div className="mt-7">
  
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Shop Now
            </button>
          </div>
        </div>
        {/* 2nd page */}
        
        
        <div className="w-[607px] h-[62px] ml-[600px] mb-9 mt-28">
          <h3 className=" text-[#737373]  font-[500] text-[20px] leading-[30px] ml-9 tracking-tight">
            Featured Products
          </h3>
          <h3 className=" text-[#252B42] w-[381px] lg:h-[34px] font-[700] text-[24px] leading-[32px] tracking-tight mt-4">
            BESTSELLER PRODUCTS
          </h3>
          <p className="w-[347px] h-[20px] font-[400] text-[14px] leading-[20px] tracking-tight text-[#737373] mt-7">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        {/* card1 */}
        <div className="w-[238px] h-[615px] flex mt-36 ">
          <div className="w-[239px] h-[427px] ml-52">
            <div>
            <Image
      src={img2}
      alt="slider"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
               
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 16.4 </h3>{" "}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
            <Image
      src={img3}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 16.44 </h3>{" "}
                 <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
            <Image
      src={img4}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
               
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 36.4 </h3>{" "}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
            <Image
      src={img5}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 16.4 </h3>{" "}
                {/* <h3 className="-mt-7 ml-14">$6.488</h3> */}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>

          {/* 3rd */}
        </div>

        <Shoes/>
        {/*  */}
        {/* card1 */}
        <div className="lg:w-[238px] lg:h-[615px] flex mt-7 ml-32">
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
            <Image
      src={img7}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 16.4 </h3>{" "}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
            <Image
      src={img8}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                {/* <h3 className="-mt-7 ml-14">$6.488</h3> */}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
            <Image
      src={img9}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 16.4 </h3>{" "}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="lg:w-[239px] lg:h-screen ml-20">
            <div>
            <Image
      src={img10}
      alt="card"
     
      className="w-full" />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$ 16.44 </h3>{" "}
                <Image
      src={img6}
      alt="color"
     
      className="w-full" />
              </div>
            </div>
          </div>

          {/* 3rd */}
        </div>
      
<Footer/>
        </div>
    </div>
  );
};

export default Home;

        