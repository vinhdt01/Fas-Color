import Link from 'next/link'
const PaymentSuccessfully = () => {
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