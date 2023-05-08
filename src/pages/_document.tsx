import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { getDirection } from "@utils/get-direction";

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}
	render() {
		const { locale } = this.props.__NEXT_DATA__;
		return (
      <Html dir={getDirection(locale)}>
		 <script async src={`https://www.googletagmanager.com/gtag/js?id=361834544`} /> 
          <script dangerouslySetInnerHTML={{ 
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
              gtag('config', '361834544', { page_path: window.location.pathname, }); 
            `, 
          }} /> 
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
		);
	}
}
