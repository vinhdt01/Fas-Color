import axios from 'axios'
let base_url:string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

let URL = base_url +  "/create-order";

const   orderPost =async (data:any) =>   {
   let result = await axios.post(URL , data)
   console.log(result.data.orderId , 'kaka')
   return result.data.orderId;
}

export default orderPost;