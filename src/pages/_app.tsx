import "../styles/globals.scss";
import { SWRConfig } from "swr";
import instance from "@/api/instance";

import { AppPropsWithLayout } from "@/models/layout";
import WebsiteLayout from "@/components/Layout/WebsiteLayout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? WebsiteLayout;
    return (
        <LayoutWrapper>
            <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}
export default MyApp;
