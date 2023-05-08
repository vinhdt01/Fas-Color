import { useEffect } from 'react'
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Search from "@components/common/search";
import React from "react";
import ChatGPT from '@components/chat/chatgpt';
import ReactGA from 'react-ga';
export const initGA = (trackingID) => {
	ReactGA.initialize(trackingID);
  };
  export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
  };
const SiteLayout: React.FC = ({ children }) => {
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
		  initGA(361834544); // Thay YOUR_TRACKING_ID bằng mã theo dõi (tracking ID) của bạn
		  window.GA_INITIALIZED = true;
		}
		logPageView();
	  }, []);
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
