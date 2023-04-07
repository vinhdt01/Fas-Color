import useLayoutEffect from 'react'
import { useCart } from "@store/quick-cart/cart.context";
import axios from 'axios'

export default function VietQR() {
  const { items, total, isEmpty } = useCart();


  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-white">
     
        <div className="bg-white"></div>
        <div className="m-auto mt-[45px] flex flex-col items-center bg-white">
            <img  className="m-auto bg-white" src={`https://img.vietqr.io/image/vietinbank-113366668888-compact2.jpg?amount=${total}&addInfo=dong%20qop%20quy%20vac%20xin&accountName=Thanh toán đơn hàng`}/>
            <p className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">    
              Thanh toán xong 
            </p>
            <i>Khi thanh toán xong , chúng tôi sẽ liên hệ để xác nhận 1 lần nữa trước khi tiến hành các bước tiếp theo</i>
        </div>
     
    </div>
  );
}

