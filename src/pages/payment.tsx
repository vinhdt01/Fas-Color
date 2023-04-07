import {useEffect} from 'react'
import { getLayout } from "@components/layout/layout";
import Container from "@components/ui/container";
import Divider from "@components/ui/divider";
import Spinner from "@components/ui/loaders/spinner/spinner";
import VietQR from '@components/payment/vietQR'
export default function PaymentPage() {
return (
    <>
      <Divider className="mb-0" />
      <Container>
         <p className="text-center text-[20px] mt-[20px]">Chọn hình thức thanh toán</p>
         <div className="flex  items-center justify-center mt-[20px]">
            <div className="flex-1 flex flex-col items-center  hover:text-red-500 cursor-pointer mx-4">
            
                <img className="h-[112px]" src="https://vantaithanhphat.vn/wp-content/uploads/2022/04/ship-cod-la-gi.jpg"/>
                <span>Ship COD</span>
            </div>
            <div className="flex-1 flex flex-col items-center hover:text-red-500 cursor-pointer mx-4">
                <img className="h-[112px]" src="https://www.vietqr.io/img/vietqr%20api%20-%20payment%20kit.png"/>
                <span>VietQR</span>
            </div>
         </div>
      </Container>
      <VietQR/>
    </>
  );
}

PaymentPage.getLayout = getLayout;


