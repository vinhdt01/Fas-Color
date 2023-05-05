import usePrice from "@lib/use-price";

export default function Info({data}) {
    const { price } = usePrice({
		amount: Number(data?.base_amount),
	});
    return (
        <div className=" w-full mx-auto flex justify-center px-[10px] mt-[10px]">
            <div className="w-[600px] px-[20px] py-[20px] h-[200px] rounded-lg border-4 border-indigo-500/75">
            <div className="flex justify-between">
                  <p>Mã đơn hàng</p>
                  <p>{data?._id}</p>
              </div>
              <div className="flex justify-between">
                  <p>Họ và tên</p>
                  <p>{data?.name}</p>
              </div>
              <div className="flex justify-between">
                  <p>Đơn giá</p>
                  <p>{price}</p>
              </div>
              <div>
            
              </div>
        </div>
        </div>
    )
} 