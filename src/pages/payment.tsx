import {  useState ,  useEffect} from 'react'
import { getLayout } from "@components/layout/layout";
import axios from 'axios'

import Container from "@components/ui/container";
import Divider from "@components/ui/divider";
import { useRouter } from 'next/router';
import Spinner from "@components/ui/loaders/spinner/spinner";
import VietQR from '@components/payment/vietQR'
export default function PaymentPage() {
  const [ show , setShow] = useState(false)
  const router = useRouter()
  const { pathname, query } = router;
  const { price, ...restQuery } = query;
  // useEffect(() => {
  //   let { paymentMethod } = router.query;
  //   let baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  //   if(paymentMethod) {
  //     baseURL = baseURL + `&paymentMethod=${paymentMethod}`
  //   }

  //   axios.put(baseURL , {
  //     paymentMethod:"cod"
  //   })
    


  //  }, [router.query])
  const handleSetShow = () => {
    setShow(!show)
    axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/update-payment?orderid=${query.orderid}` , {
      paymentMethod:"viet-qr"
    })
  
  }
  const handleSetCOD = () => {
    let baseURL = process.env.NEXT_PUBLIC_BASE_URL;

 
    axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/update-payment?orderid=${query.orderid}` , {
      paymentMethod:"cod"
    })
    .then((res)=> {
      console.log(res.data , 'dfg')
      if(res?.data.success == true) { 
        router.push('/paymentsuccessful/?orderID' + res.data.result.orderId)
       }  
       else {
        router.push('/paymentfailure/?orderID' + res.data.result.orderId)

       } 
    })
    }
return (
    <>
      <Divider className="mb-0" />
      <Container>
         <p className="text-center text-[20px] mt-[20px]">Chọn hình thức thanh toán</p>
       <div className="flex justify-between mt-[30px]">
       <div  onClick={handleSetCOD} className="flex-1 flex flex-col items-center  hover:text-red-500 cursor-pointer mx-4"> 
            
            <img className="h-[112px]" src="https://vantaithanhphat.vn/wp-content/uploads/2022/04/ship-cod-la-gi.jpg"/>
            <span className="font-bold">COD</span>
        </div>
        <div onClick={handleSetShow} className="flex-1 flex flex-col items-center hover:text-red-500 cursor-pointer mx-4">
            <img className="h-[112px]" src="https://www.vietqr.io/img/vietqr%20api%20-%20payment%20kit.png"/>
            <span className="font-bold">VietQR</span>
        </div>
     
       </div>
      </Container>
      {show &&       <VietQR handleSetShow={handleSetShow}/>}
    </>
  );
}

PaymentPage.getLayout = getLayout;


