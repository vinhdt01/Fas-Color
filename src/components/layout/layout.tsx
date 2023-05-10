import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Search from "@components/common/search";
import React from "react";
import ChatGPT from '@components/chat/chatgpt';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const SiteLayout: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
				<ChatGPT/>
				<MessengerCustomerChat
    pageId="100086798198788"
    appId="823275489155839"
  />,

			</main>
			<Footer />
			<MobileNavigation />
			<Search />
		</div>
	);
};

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
)

export default SiteLayout;
