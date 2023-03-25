

import Image from "next/image";
import { useUI } from "@contexts/ui.context";
import usePrice from "@lib/use-price";
import { Product } from "@framework/types";
import { useSettings } from "@contexts/settings.context";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
interface ProductProps {
  product: Product;
  index: number;
  item:any;
  imgLoading?: "eager" | "lazy";
  variant?: "left" | "center" | "combined" | "flat" | "fashion";
}

const ProductOverlayCard: React.FC<ProductProps> = ({
  index,
  variant = "left",
  imgLoading = "lazy",
  item
}) => {
  // const size =
  //   (variant === "center" && index === 1) || (variant === "left" && index === 0)
  //     ? 620
  //     : 260;
  // const classes =
  //   (variant === "center" && index === 1) || (variant === "left" && index === 0)
  //     ? "row-span-full lg:row-span-2 col-span-full lg:col-span-2"
  //     : "col-span-2 lg:col-span-1";
 
   const { price } = usePrice({
    amount: Number(item?.price!) 
  });
  let size = 260;
	let classes;
  let indexes = [2,3];
  if (variant === "left" && index === 0) {
		classes = "row-span-full lg:row-span-2 col-span-full lg:col-span-2";
		size = 620;
	} else if (variant === "center" && index === 1) {
		classes = "row-span-full lg:row-span-2 col-span-full lg:col-span-2";
		size = 620;
	} else if (variant === "combined") {
		if (index === 0) {
			classes = "col-span-2 lg:row-span-2 col-span-full lg:col-span-2";
			size = 620;
		} else if (index === 2) {
			classes = `col-span-2 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3`;
			size = 620;
		} else {
			classes = "col-span-2 lg:col-span-1";
		}
	} else if(variant === "fashion") {
    if (indexes.includes(index)) {
      classes = "lg:grid lg:grid-cols-4 sm:col-span-2"
    } else {
      classes = `sm:col-span-2 lg:col-span-1`
    }
  } else {
		classes = "col-span-2 lg:col-span-1";
	}

  const { openModal, setModalView, setModalData } = useUI();
  const settings = useSettings();

  
  function handlePopupView() {
    // setModalData(product.slug);
    setModalView("PRODUCT_VIEW");
    return openModal();
  }

  return (
   <Link href={"/products/" + item?._id}>
      <div
        // onClick={handlePopupView}
        className={`${classes} cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden`}
      >
        <div
          className={`relative flex justify-center items-center p-4 h-full 3xl:min-h-[330px] ${indexes.includes(index) && variant === "fashion" ? "lg:col-span-2" : ""}`}
          title='sfsdfdssfds'
        >
          <Image
            src={item?.main_photoURL}
            width={215}
            height={215}
            loading={imgLoading}
            alt={"Product Image"}
            className="object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
          />
                  <img className="absolute right-2 bottom-1 w-7 h-7" src="https://cdn.pnj.io/images/image-update/tag-product/icon-tragop-2.svg" alt="installment"/>
                  {/* <img  className="absolute left-2 bottom-1 w-7 h-7" src="https://cdn.pnj.io/images/image-update/2022/10/pnjfast/PNJfast-Giaotrong3h.svg" alt="pnjfast" /> */}
                  <img  className="absolute right-2 top-1 w-7 h-7" src="https://cdn.pnj.io/images/image-update/tag-product/new-icon-3-w29.svg" alt="new"/>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center px-4 pt-4 pb-2 text-[14px]"
          title="hello">
          <div className="sm:h-auto h-[45px] overflow-hidden">{item?.name}</div>
          <div className="text-[#c48c46]">{price}</div>
          <div className="text-[#eb4d4e] text-[11px]">Mua hóa đơn trên 300k để giảm phí ship</div>
          <div className="flex justify-between w-[100%] text-[11px] mt-6">
            <div className="flex items-center">
              <FontAwesomeIcon className="text-[#ffc107] w-[12px] mr-[4px]" icon={faStar}/>
              <span>5(3)</span>
            </div>
            <div>2000+ đã bán</div>
          </div>
        </div>
      </div>
   </Link>
  );
};

export default ProductOverlayCard;
