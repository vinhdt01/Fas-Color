import { useState } from 'react'
import axios from 'axios'
import { getLayout } from "@components/layout/layout";
import CurrencyFormat from 'react-currency-format';

export default function Tracking() {
    const [number , setNumber] = useState('')

    const [orderData , setOrderData] = useState([])
    const getHistory = async () => {
        const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/tracking/" + number)
       console.log(data.data.data , "data")
        setOrderData(data.data.data)
    }
    return (
        <div>

<div className=" mt-[50px] ">   
    <div className="relative max-w-[500px] mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={(e) => setNumber(e.target.value) } type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập số điện thoại" required/>
        <button onClick={getHistory} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div>

<div className="relative overflow-x-auto my-[10px]">
    {orderData.length > 0 ? <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Tên
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Tên sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                    Đơn giá
                </th>
                <th scope="col" className="px-6 py-3">
                    Ngày đặt
                </th>
                <th scope="col" className="px-6 py-3">
                   Trạng thái
                </th>
            </tr>
        </thead>
        <tbody>
            {
                orderData.map(value => (
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value.name}
                </th>
               
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {JSON.parse(value.items).map(result => (
                  
                 <div>{result.name}</div>
                 
                ))}
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <CurrencyFormat value={value.base_amount} displayType={'text'} thousandSeparator={true} prefix={'VND'} renderText={value => <div>{value}</div>} />

               
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.createdAt}
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.paymentStatus}
                </td>
            </tr>
                ))
            }
            
            
        </tbody>
    </table>
:
<div className="text-center font-bold text-[16px] mt-[25px]">Không có đơn hàng nào</div>    
}
</div>

        </div>
    )
}
