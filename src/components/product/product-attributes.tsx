// import cn from "classnames";
// interface Props {
// 	className?: string;
// 	title: string;
// 	attributes: {
// 		id: number;
// 		value: string;
// 		meta: string;
// 	}[];
// 	active: string;
// 	onClick: any;
// }

// export const ProductAttributes: React.FC<Props> = ({
// 	className = "mb-4",
// 	title,
// 	attributes,
// 	active,
// 	onClick,
// }) => {
// 	return (
// 		<div className={className}>
// 			<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
// 				{title}
// 			</h3>
// 			<ul className="colors flex flex-wrap ltr:-mr-3 rtl:-ml-3">
// 				{attributes?.map(({ id, value, meta }) => (
// 					<li
// 						key={`${value}-${id}`}
// 						className={cn(
// 							"cursor-pointer rounded border border-gray-100 min-w-[36px] md:min-w-[44px] min-h-[36px] md:min-h-[44px] p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 ltr:md:mr-3 rtl:md:ml-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black",
// 							{
// 								"border-black": value === active,
// 								"px-3 md:px-3.5": title === "size",
// 							}
// 						)}
// 						onClick={() => onClick({ [title]: value })}
// 					>
// 						{title === "color" || title === 'colors' ? (
// 							<span
// 								className="h-full w-full rounded block"
// 								style={{ backgroundColor: meta ?? value }}
// 							/>
// 						) : (
// 							value
// 						)}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };


import cn from "classnames";
import {useState} from 'react'
interface Props {
	className?: string;
	title: string;
	attributes: {
		id: number;
		value: string;
		meta: string;
	}[];
	active: string;
	// onClick: any;
	testSetVariants:any,
	size:any
}

export const ProductAttributes: React.FC<Props> = ({
	className = "mb-4",
	title='colors',

}) => {
	const attributes = [{
		id:1,
		value:"1",
		meta:"1",
		price:5000,
		quantity:0,
		size:1,
	} , {
		id:2,
		value:"2",
		meta:"2",
		price:5001,
		quantity:25,
		size:2
	} , {
		id:3,
		value:"3",
		meta:"3",
		price:5002,
		quantity:25,
		size:3

	}]
	const [variant , setVariant] = useState()
	return (
		<div className={className}>
			<h3 className="text-[13px]   mb-2.5 capitalize">
				Chọn kích cỡ
			</h3>
			<ul className="colors flex flex-wrap ltr:-mr-3 rtl:-ml-3">
				{attributes?.map(({ id, value, meta , price , quantity , size }) => (
					<li
						key={`${value}-${id}`}
						className={cn(
							"cursor-pointer rounded border border-gray-100 min-w-[36px] md:min-w-[44px] min-h-[36px] md:min-h-[44px] p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 ltr:md:mr-3 rtl:md:ml-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black",
							{
								"border-black": variant === id,
								"px-3 md:px-3.5": title === "size",
								
							}
						)}
						// onClick={() => onClick({ [title]: value })}
					
					>
						{title === "color" || title === 'colors' ? (
							<span
								className="h-full w-full rounded block"
								style={{ backgroundColor: meta ?? value }}
							/>
						) : (
							value
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
