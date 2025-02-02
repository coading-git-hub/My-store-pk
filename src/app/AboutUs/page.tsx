import React from "react";
import Image from "next/image"
import Footer from "../componant/footer/page";

import img1 from '../../../public/yell.png'
import img2 from '../../../public/Video card.png'
import img3 from '../../../public/card1.png'
import img4 from '../../../public/card2.png'
import img5 from '../../../public/card3.png'
import img6 from '../../../public/icon0.png'
import img7 from '../../../public/icon1.png'
import img8 from '../../../public/icon2.png'
import img9 from '../../../public/icon3.png'
import img10 from '../../../public/icon4.png'
import img11 from '../../../public/image5.png'
import img12 from '../../../public/desktop-testimonials-4.png'


const About = () => {
  return (
    <div>
      
      <div className="w-[1440px] h-[545px]  ml-[195px] py-[112px] gap-[80px] -mt-10">
        <div className="w-[599px] h-[321px] gap-[35px] ">
          <h5 className="font-[700] text-[16px] leading-[24px] tracking-tight text-[#252B42] mt-8">
            ABOUT COMPANY
          </h5>
          <h1 className="font-[700] text-[58px] leading-[80px] tracking-normal text-[#252B42] mt-8">
            ABOUT US
          </h1>
          <h4 className="font-[400] text-[20px] leading-[30px] tracking-normal text-[#737373] mt-8">
            We know how large objects will act, <br />
            but things on a small scale
          </h4>
          <button className="w-[195px] h-[52px] text-[14px] mt-7 rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0] text-white">
            Get Quote Now
          </button>

          <div className="w-[800px] h-[321px]  ml-[600px] -mt-[400px]">
          <Image
      src={img1}
      alt="yellowgirl"
     
       />
          </div>
        </div>

        {/* 2nd page */}

        <div className="w-[1440px] h-[236px] bg-white  mt-28">
          <div className="w-[1018px] h-[188px] gap-[60px] flex">
            <div className="w-[394px] h188px] py-[24px] gap-[80px]">
              <p className="w-[116px] h-[20px]  font-[400] text-[14px] leading-[20px] tracking-wide text-[#E74040] mb-8">
                {" "}
                Problems trying
              </p>
              <h3 className="w-[394px] h-[96px] font-[700] text-[24px] leading-[32px] tracking-wide text-[#252B42]">
                Met minim Mollie non desert <br /> Alamo est sit cliquey dolor
                do <br /> met sent.
              </h3>
            </div>
            <div className="w-[545px] h-[40px] mt-20">
              <p className="font-[400] text-[14px] leading-[20px] tracking-normal text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>
        {/* 3rd */}

        <div className="w-[1440px] h-[264px] bg-white ">
          <div className="w-[1050px] h-[264px] ml-[5px] py-[80px] gap-[50px] ">
            <div className="w-[1049px] h-[104px] gap-[30px] flex">
              <div className="w-[238px] h-[104px]">
                <h1 className="font-[700] text-[58px] leading-[80px] tracking-wider text-[#252B42]">
                  15K
                </h1>
                <h5 className="font-[700] text-[16px] leading-[24px] tracking-normal text-[#737373]">
                  Happy Customers
                </h5>
              </div>

              <div className="w-[238px] h-[104px]">
                <h1 className="font-[700] text-[58px] leading-[80px] tracking-wider text-[#252B42]">
                  150K
                </h1>
                <h5 className="font-[700] text-[16px] leading-[24px] tracking-normal text-[#737373]">
                  Monthly Visitors
                </h5>
              </div>

              <div className="w-[238px] h-[104px]">
                <h1 className="font-[700] text-[58px] leading-[80px] tracking-wider text-[#252B42]">
                  15K
                </h1>
                <h5 className="font-[700] text-[16px] leading-[24px] tracking-normal text-[#737373]">
                  Countries Worldwide
                </h5>
              </div>

              <div className="w-[238px] h-[104px]">
                <h1 className="font-[700] text-[58px] leading-[80px] tracking-wider text-[#252B42]">
                  100+
                </h1>
                <h5 className="font-[700] text-[16px] leading-[24px] tracking-normal text-[#737373]">
                  Top Partners
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* 4th */}

        <div className="w-[1440px] f-[764px] bg-white">
          <div className="w-[1050px] h-[764px] ml-[5px]">
            <div className="w-[989px] h-[540px] pt-[112px] pl-[31px] rounded-[20px]">
            <Image
      src={img2}
      alt="videocard"
     
       />
            </div>
          </div>
        </div>

        {/* 5th */}
        <div className="w-[1440px] h-[826px] bg-white -mt-24">
          <div className="w-[1440px] h-[826px] py-[112px] ml-[px] gap-[112px]">
            <div className="w-[607px] h-[100px]">
              <h2 className=" w-[316px] h-[50px] font-[700] text-[40px] leading-[50px] tracking-wide  ml-96">
                Meet Our Team
              </h2>
              <p className=" w-[469px] h-[40px] font-[400] text-[14px] leading-[20px] tracking-wide  ml-80 mt-4 text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>

            <div className="w-[1034px] h-[383px] gap-[30px] mt-20 flex ">
              <div className="w-[316px] h-[383px]">
              <Image
      src={img3}
      alt="card1"
     
       />
              </div>

              <div className="w-[316px] h-[383px]">
              <Image
      src={img4}
      alt="card2"
     
       />
              </div>

              <div className="w-[316px] h-[383px]">
              <Image
      src={img5}
      alt="card3"
     
       />
              </div>
            </div>
          </div>
        </div>

        {/* 6th */}

        <div className="w-[1440px] h-[479px] bg-[#FAFAFA] -ml-48 -mt-24">
          <div className="w-[1050px] h-[479px] ml-[400px] py-[80px] gap-[24px]">
            <div className="w-[864px] h-[120px]">
              <h2 className="w-[496px] h-[50px] font-[700] text-[40px] leading-[50px] tracking-normal text-[#252B42]">
                Big Companies Are Here
              </h2>
              <p className="w-[547px] h-[40px] font-[400] text-[14px] leading-[20px] tracking-normal text-[#737373] text-center">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>

            <div className="w-[1054px] h-[175px] py-[50px] gap-[30px] flex -ml-48">
              <div className="w-[153px] h-[34px] ">
              <Image
      src={img6}
      alt="icon1"
     
       />
              </div>

              <div className="w-[153px] h-[34px]">
              <Image
      src={img7}
      alt="icon2"
     
       />
              </div>

              <div className="w-[153px] h-[34px]">
              <Image
      src={img8}
      alt="icon1"
     
       />
              </div>

              <div className="w-[153px] h-[34px]">
              <Image
      src={img9}
      alt="icon1"
     
       />
              </div>

              <div className="w-[153px] h-[34px]">
              <Image
      src={img10}
      alt="icon1"
     
       />
              </div>

              <div className="w-[153px] h-[34px]">
              <Image
      src={img11}
      alt="icon1"
     
       />
              </div>
            </div>
          </div>
        </div>

        {/* 7th */}

        <div className="w-[1440px] h-[636px] bg-[#2A7CC7] -ml-52 -mt-11">
        <Image
      src={img12}
      alt="testimonial"
     
       />
        </div>
<div className="-ml-48">
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
