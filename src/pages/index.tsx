

import { useState , useEffect } from "react";
import axios from 'axios';
import dynamic from 'next/dynamic'
import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
import BannerBlock from "@containers/banner-block";
import Divider from "@components/ui/divider";
import Spinner from "@components/ui/loaders/spinner/spinner";

import BannerSliderBlock from "@containers/banner-slider-block";
import ExclusiveBlock from "@containers/exclusive-block";
import NewProduct from '@containers/new-product'

import { ROUTES } from "@lib/routes";
import {
  masonryBanner,
  promotionBanner,
  modernDemoBanner as banner,
  modernDemoProductBanner as productBanner,
} from "@data/static/banners";
const Banner = dynamic(
  () => import("@components/banner/banner")
);

// export {getServerSideProps} from '@framework/ssr/get-product'
export default function Home() {
const [swiperKey, setSwiperKey] = useState(0);
const [data, setData] = useState([]);


useEffect(() => {
  setSwiperKey(1);
  console.log(process.env.NEXT_PUBLIC_BASE_URL , 'dsdsadsa');
  axios.get('https://fascolor-server.onrender.com/product')
  .then((res:any) => {
      setData(res.data)
  })
}, []);


    return (
        <>
            <BannerSliderBlock data={promotionBanner} />

            <BannerBlock data={masonryBanner} />

            <Container>
          
              

                {
                    data.length == 0 ? (<Spinner/>) :     (<NewProduct data={data} title="Sản Phẩm Bán Chạy"/>)

                }
                {
                    data.length == 0 ? (<Spinner/>) :     (<NewProduct data={data} title="Sản Phẩm Mới"/>)

                }
                 {
                    data.length == 0 ? (<Spinner/>) :     (<NewProduct data={data.slice(2,4)} title="Sản Phẩm Khuyến Mãi"/>)

                }



                {/* <ExclusiveBlock/> */}
            </Container>
            <Divider className="mb-0" />
        </>
    );


}

Home.getLayout = getLayout;


