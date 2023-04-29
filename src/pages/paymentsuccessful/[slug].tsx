import { useState , useEffect } from "react"
import { useRouter } from "next/router"
import axios from 'axios'
import Link from 'next/link'
const PaymentSuccessfully = () => {
    const router = useRouter()
    console.log(router.query.slug ,'sa')
    const [data , setData] = useState([])
    useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/getorder/' + router.query.slug)
      .then((res) => console.log(res , 123))
    } , [router.query])
    console.log(router.query , 'hehe')
    return(
      <div className="flex flex-col justify-center items-center mt-[50px] w-full m-auto">
          <img className="w-[100px] h-[100px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png"/>
          <h1>Thanh toán thành công</h1>
          <Link href="/"  >
          <div className="bg-[#5f5af6] w-[110px] px-2 h-[45px] mt-[20px] cursor-pointer flex items-center justify-center rounded-full font-bold text-[#fff] text-center">Trang chủ</div>
        </Link>
      </div>
    )
  }
  export default PaymentSuccessfully