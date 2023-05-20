// import Link from 'next/link'
// const PaymentSuccessfully = () => {
//   return(
//     <div className="flex flex-col justify-center items-center mt-[50px] w-full m-auto">
//         <img className="w-[100px] h-[100px]" src="data:image/png;base64,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"/>
//         <h1>Thanh toán thất bại</h1>
//         <Link href="/"  >
//           <div className="bg-[#5f5af6] w-[110px] px-2 h-[45px] mt-[20px] cursor-pointer flex items-center justify-center rounded-full font-bold text-[#fff] text-center">Trang chủ</div>
//         </Link>
//     </div>
//   )
// }
// export default PaymentSuccessfully


import {useState , useEffect} from 'react'
import Link from 'next/link'
import Info from '@components/infoCustomer/info'
import { useRouter } from 'next/router';
import axios from 'axios'
import usePrice from "@lib/use-price";

const PaymentFailure = () => {
  const router = useRouter()
  const [data , setData] = useState()
  const { query } = router;
  
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getorders/${query.orderID}`)
    .then(res => {
      setData(res.data.data)
    })
  } , [query.orderID])
  return(
    <div className="flex flex-col justify-center items-center mt-[50px] w-full m-auto">
<img className="w-[100px] h-[100px]" src="data:image/png;base64,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"/>
        <h1>Thanh toán thất bại</h1>
        <Info data={data}/>
        <Link href="/"  >
          <div className="bg-[#5f5af6] w-[110px] px-2 h-[45px] mt-[20px] cursor-pointer flex items-center justify-center rounded-full font-bold text-[#fff] text-center">Trang chủ</div>
        </Link>

    </div>
  )
}
export default PaymentFailure