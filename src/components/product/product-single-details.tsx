
import React, { useState } from "react";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useCart } from "@store/quick-cart/cart.context";
import { ProductAttributes } from "./product-attributes";
import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import VariationPrice from "@components/product/product-variant-price";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faBell} from '@fortawesome/free-solid-svg-icons'
import "swiper/swiper-bundle.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageSlider from './image-product-slide'
import GalleryProduct from './gallery-products'
import ProductPromotion from './product-promotion'
import ProductConsultation from './product-consultation'
import { IoClose } from "@react-icons/all-files/io5/IoClose";


import usePrice from "@lib/use-price";

const ProductSingleDetails: React.FC = ({ data }: any) => {
  var ar = data.sub_photoURL.split(', ')

  const { addItemToCart } = useCart();
     
  // const { t } = useTranslation();
  const { width } = useWindowSize();

  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(0);

  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [showAlertSize , setShowAlertSize] = useState<boolean>(false)
  const [show , setShow] = useState<boolean>(false);
  const [showSlideGalary , setShowSlideGalary] = useState<boolean>(false);

  let selectedVariation = {
    sale_price:5000
  }
 

      const { price } = usePrice({
          amount: Number(data?.price!),

      });
  function addToCart() {

      setAddToCartLoader(true);
      addItemToCart({
        id:data._id,
        price: Number(data.price),
        stock: 20,
        size:1,
        image:data.main_photoURL
      }, quantity);
      // Router.push('/checkout')

      setTimeout(() => {
        setAddToCartLoader(false);
      }, 600);
  
  
  }
 

  // fake variants
  const variations = {a:'something'}

  const handleShow = () => {
    setShow(!show)
  }
  const handleShowGalaryFromSlide = () => {
    setShowSlideGalary(!showSlideGalary)
  }
  return (
    <div>
      {show && <GalleryProduct data={ar} handleShow={handleShow}/> }
      {showSlideGalary && <GalleryProduct data={ar} handleShowGalaryFromSlide={handleShowGalaryFromSlide} /> }

      <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
    
          <div className="lg:hidden block relative">
    
    <Carousel 
    pagination={{
      clickable: true,   
    }}
    buttonClassName="hidden"

              >
                
           
                {ar.length > 0 && ar.map((item , index) => (
                  <SwiperSlide key={`product-gallery-key-`}>
                  <div  onClick={() => {setShowSlideGalary(!showSlideGalary); setId(index)}} className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex justify-center mb-[30px]">
                    <Image
                      width={485}
                      height={485}
                      src={item}
                      alt="{`${product?.name}--${index}`}"
                      className="object-cover w-full "
                    />
                    
                  </div>
                </SwiperSlide>
                ))}
                
                
              </Carousel>
              <img className="w-9 h-9 absolute top-2 right-2" src="https://cdn.pnj.io/images/image-update/tag-product/new-icon-3-w29.svg"/>

              <div className="flex justify-center mt-2 cursor-pointer" onClick={() => handleShow()}>
            <img src="https://cdn.pnj.io/images/p_detail/anh.svg"/>
          </div>         

</div>   


          <div className="col-span-5  grid-cols-1 gap-2.5 lg:block hidden">
   
<div>
  <ImageSlider data={ar} handleShowGalaryFromSlide={handleShowGalaryFromSlide} id={3}/>

  </div>       
        
          </div>
    
  
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="pb-2 border-b border-gray-300">
      
               <h2 className="text-[18px] text-[#4c4c4c]">
                 {data?.name}
              </h2>
            <div className="text-[13px] text-[#4c4c4c] text-sm lg:text-base leading-6 lg:leading-8 flex justify-between mt-2">
                 <div className="text-[13px]">Mã:  {data._id}</div>
                 <div className="flex items-center text-[13px]">

            </div>
            </div>
  
            <div className="flex items-center mt-2">
         
              {!isEmpty(variations) ? (
                <h1 className="text-[#003468] text-[24px] font-medium">{price}</h1>
              ) : (
                <>
                  <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                   25
                  </div>
  
                  {true && (
                    <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                      25
                    </del>
                  )}
                </>
              )}
            </div>
          </div>
         
       
     <ProductPromotion/>
          <div className="flex items-center  space-x-4 ">
                 <Counter
                    quantity={quantity}
                    onIncrement={() => {setQuantity((prev) => prev + 1)
}}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                
                  />
            <Button
              onClick={addToCart}
              variant="slim"
              className={`w-full   bg-[#94303a] flex flex-1
       
              `
            }
             
              loading={addToCartLoader}
            >
              <span className="py-2 3xl:px-8 ">
                'Thêm vào giỏ hàng' 
              </span>
            </Button>
         
            
          </div>
          {/* add installment button and available button */}
         
          <ProductConsultation/>
     
        </div> 
  
        <div className="col-span-5 grid grid-cols-1 gap-2.5">
           
        
  </div>
      </div>
      {/* <GalleryProduct/> */}
      {showAlertSize && 
        <div>
           <div onClick={() =>setShowAlertSize(false)} className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000]/[.5] z-[40]"></div>
           <div className="w-[300px] h-[100px] fixed top-[20%] left-[50%] translate-x-[-50%] z-50 bg-[#fff]">  
           <button
                  onClick={() =>setShowAlertSize(false)}
                  aria-label="Close panel"
                  className=
                    "fixed right-1 z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e0dada] shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md"
                  
                >
                  <IoClose className="text-xl" />
                </button>
               <div className="w-[55px] p-3 block bg-red-600 rounded-full m-auto mt-3">
               <FontAwesomeIcon className="w-[30px] h-[30px] text-[#fff] " icon={faBell}/>
               </div>
               <p className="text-center">Vui lòng chọn size</p>
           </div>
        </div>}
    </div>
  );
};

export default ProductSingleDetails;


