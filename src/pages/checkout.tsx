
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import useUser from "@framework/auth/use-user";
import { getLayout } from "@components/layout/layout";
import Divider from "@components/ui/divider";
import Container from "@components/ui/container";
import FormCheckout from '@components/checkout/form-checkout'
export {getStaticProps} from '@framework/ssr/translation'


const RightSideView = dynamic(
  () => import("@components/checkout/right-side-view")
);

export default function CheckoutPage({data}:any) {
  return (
    <>
      <Divider className="mb-0" />
      <Container>
        <div className="pb-8 lg:py-10 xl:py-14 max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-x-7 xl:space-x-12 rtl:space-x-reverse w-full">
          
            <div className="w-full lg:w-[320px] xl:w-[440px] flex-shrink-0 mt-10 sm:mt-5 lg:mt-0">
              <RightSideView />
            </div>
            <div className="w-full space-y-6">
                <FormCheckout  data={data}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

CheckoutPage.authenticate = true;
CheckoutPage.getLayout = getLayout;


