import {useState , useEffect} from 'react'
import Link from 'next/link'
import Info from '@components/infoCustomer/info'
import { useRouter } from 'next/router';
import axios from 'axios'
import usePrice from "@lib/use-price";

const PaymentSuccessfully = () => {
  const router = useRouter()
  const [data , setData] = useState()
  const { query } = router;
  
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getorders/${query.orderID}`)
    .then(res => {
      console.log(res.data.data , query.orderID, 'res')
      setData(res.data.data[0])
    })
  } , [query.orderID])
  return(
    <div className="flex flex-col justify-center items-center mt-[50px] w-full m-auto">
        <img className="w-[100px] h-[100px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png"/>
        <h1>Thanh toán thành công</h1>
        <Info data={data}/>
        <Link href="/"  >
          <div className="bg-[#242266] w-[110px] px-2 h-[45px] mt-[20px] cursor-pointer flex items-center justify-center rounded-full font-bold text-[#fff] text-center">Trang chủ</div>
        </Link>

    </div>
  )
}
export default PaymentSuccessfully