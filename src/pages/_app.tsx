import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { SWRConfig } from "swr";
import instance from "@/api/instance";

import { AppPropsWithLayout } from "@/models/layout";
import WebsiteLayout from "@/components/Layout/AdminLayout";
import LayoutAdmin from "@/components/Layout/AdminLayout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.WebsiteLayout ?? WebsiteLayout;
    return (
        <LayoutWrapper>
            <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}
export default MyApp;
