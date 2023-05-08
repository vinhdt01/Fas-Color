import App, { NextWebVitalsMetric } from 'next/app' 

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ManagedUIContext } from "@contexts/ui.context";
import ManagedModal from "@components/common/modal/managed-modal";
import ManagedDrawer from "@components/common/drawer/managed-drawer";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ToastContainer } from "react-toastify";
// import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from "next-i18next";
import DefaultSeo from "@components/common/default-seo";

// Load Open Sans and satisfy typeface font
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";
// external
import "react-toastify/dist/ReactToastify.css";
// base css file
import '@styles/imageSlider.css';

import "@styles/scrollbar.css";
import "@styles/swiper-carousel.css";
import "@styles/custom-plugins.css";
import "@styles/tailwind.css";
import { getDirection } from "@utils/get-direction";
import PageLoader from "@components/ui/page-loader/page-loader";
import ErrorMessage from "@components/ui/error-message";
import { SettingsProvider } from "@contexts/settings.context";
import { useSettingsQuery } from "@framework/settings/settings.query";
import type { NextPage } from "next";
import PrivateRoute from "@lib/private-route";
import SocialLoginProvider from "../providers/social-login-provider";
import SiteLayout from '@components/layout/layout';
import nextI18NextConfig from '../../next-i18next.config'
// import TagManager from 'react-gtm-module';

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


const CustomApp: any = ({ Component, pageProps }: AppPropsWithLayout) => {
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  // }, []);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  // const authProps = Component.authenticate;

  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  const dir = getDirection(router.locale);


  return (
    
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <AppSettings> */}
            <ManagedUIContext>
              <DefaultSeo />
              
                {getLayout(<Component {...pageProps} />)}
              <ToastContainer autoClose={2000} />
              <SocialLoginProvider />
              <ManagedModal />
              <ManagedDrawer />
            </ManagedUIContext>
          {/* </AppSettings> */}
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </AnimatePresence>
);
};

export default appWithTranslation(CustomApp , nextI18NextConfig);

export function reportWebVitals({ id, name, label, value, }: NextWebVitalsMetric): void { 
  window.gtag('event', name, { 
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric', 
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers 
    event_label: id, // id unique to current page load 
    non_interaction: true, // avoids affecting bounce rate. 
  }) 
} 