import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ProductPromotion:React.FC = () => {
    return (
        <div className="w-full h-auto  my-6 rounded-lg border border-[#204d7b]">
           <div className="bg-[#f2f2f2] rounded-tr-lg rounded-tl-lg "><p className="px-[10px]">Ưu đãi:</p></div>
           <div className="font-normal text-[14px] py-[8px] px-[10px]">
               <div className="flex items-start"><FontAwesomeIcon className="w-[11px] h-[11px] mt-1 mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Freeship khi đơn hàng ở khu vực TP HCM</div>
               <div className="flex items-start"><FontAwesomeIcon className="w-[11px] h-[11px] mt-1 mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Hoàn 125% khi sản phẩm chất lượng kém , không đúng với mô tả</div>

           </div>
        </div>
    )
}
export default ProductPromotion;