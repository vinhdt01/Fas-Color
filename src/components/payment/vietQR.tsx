import useLayoutEffect from 'react'
import { useCart } from "@store/quick-cart/cart.context";
import axios from 'axios'
import { useRouter } from 'next/router';
 
export default function VietQR({handleSetShow}:any) {
  const { items, total, isEmpty } = useCart();
  const router = useRouter()
  const { pathname, query } = router;

  const handleSetVietQR = () => {
    let baseURL = process.env.NEXT_PUBLIC_BASE_URL;

 
    axios.put(`https://fascolor.onrender.com/update-payment?orderid=${query.orderid}` , {
      paymentMethod:"viet-qr"
    })
    .then((res)=> {
      console.log(res.data , 'dfg')
      if(res?.data.success == true) { 
        router.push('/paymentsuccessful/orderID' + res.data.result.orderId)
       }  
       else {
        router.push('/paymentfailure/orderID' + res.data.result.orderId)

       } 
    })
    }

  return (
   <>
    <div className="fixed top-0 right-0 left-0 bottom-0  z-50  ">
     
     <div className="m-auto mt-[45px] flex flex-col items-center bg-white  max-w-[800px] p-[15px] rounded-lg">
         <img  className="m-auto bg-white" src={`https://img.vietqr.io/image/vietinbank-0702686901-compact2.jpg?amount=${total}&addInfo=dong%20qop%20quy%20vac%20xin&accountName=Thanh toán đơn hàng`}/>
         <p onClick={handleSetVietQR} className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">    
           Thanh toán xong 
         </p>
         <i>Khi thanh toán xong , chúng tôi sẽ liên hệ để xác nhận 1 lần nữa trước khi tiến hành các bước tiếp theo</i>
     </div>
  
 </div>
 <div  className="fixed top-0 right-0 left-0 bottom-0 bg-black/[.4] z-40"></div>
   </>
  );
}

