import React, { useRef } from "react";
import Link from 'next/link'
import SearchIcon from "@components/icons/search-icon";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@lib/routes";
import { addActiveScroll } from "@utils/add-active-scroll";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import { menu } from "@data/static/menus";
import HeaderMenu from "@components/layout/header/header-menu";
import NewCartButton from '@components/cart/new-cart-button';
import HeaderMobile from './header-mobile'
const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});

interface Props {
	variant?: "default" | "modern";
}

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const Header: React.FC<Props> = ({
	variant = "default"
}) => {
	const {
		openSidebar,
		setDrawerView,
		openSearch,
		openModal,
		openCart,
		setModalView,
	} = useUI();
  const [ isAuthorize ] = useAtom(authorizationAtom);
	const { t } = useTranslation("common");
	const siteHeaderRef = useRef() as DivElementRef;
	addActiveScroll(siteHeaderRef);

	function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
	function handleMobileMenu() {
		setDrawerView("MOBILE_MENU");
		return openSidebar();
	}
	function handleCartOpen() {
	  return openCart();
	}
  return (

	      <div>
      	<div className="xl:block hidden">
	      	<div className="flex w-[100%] h-[49px]  m-auto justify-center items-center px-25 bg-[#fff] text-[#000000] ">
		       <div className="flex justify-between w-[1200px] ">
		             <div className="flex cursor-pointer">
		            <div className="flex  items-center">
		                {/* <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-relationship-new.svg" alt="Quan hệ cổ đông"/> */}
		                {/* <div className="mx-2 ">Quan hệ cổ đông</div> */}
		            </div>
		           
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-stores-new.svg" alt="Cửa hàng"/>
		                  <a className="mx-2" href="https://goo.gl/maps/WqmDMy8LMMd4VKbt9">Trụ Sở</a>
		            </div>
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-hotline-new.svg" alt="Hotline"/>
		                  <div className="mx-2">0702686901</div>
		            </div>
		            </div>
		            
		            <Link href="/">
		              <img className="w-[88px] h-[38.7px] cursor-pointer" src="/assets/images/logo2.png" alt="Logo"/>
		            </Link>
		            
		            <div className="flex cursor-pointer">
		            <div className="flex  items-center">
		            {/* <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-relationship-new.svg" alt="Quan hệ cổ đông"/> */}
		            {/* <div className="mx-2">Đặt lịch hẹn</div> */}
		            </div>
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-stores-new.svg" alt="Cửa hàng"/>
		                  <a href="/tracking" className="mx-2">Lịch sử đơn hàng</a>
		            </div>
		            <div className="flex  items-center"  onClick={handleCartOpen}>
		      
	  <NewCartButton/>
					    <div onClick={openCart} className="mx-2">Giỏ hàng</div>
		            </div>
		            </div>
		       </div>
		      </div>
			  <div className="max-w-[1300px] m-auto border-b-[1px] border-slate-100"></div>
			 
	      </div>
		  <HeaderMobile openSearch={openSearch} />
		  <header
			id="siteHeader"
			ref={siteHeaderRef}
			className="w-full  relative z-20"
		>
				<div className="flex items-center justify-center mx-auto max-w-[1920px] ">
				
					{variant !== "modern" ?
					<HeaderMenu data={menu}
						className="hidden xl:flex "
					/>
					:
					""
  					}				
				</div>
		</header>
      </div>
		
	);
};

export default Header;

