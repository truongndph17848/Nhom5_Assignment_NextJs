import "../styles/globals.scss";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import WebsiteLayout from "@/components/Layout/WebsiteLayout";
import { AppPropsWithLayout } from "@/models/layout";
import LayoutAdmin from "@/components/Layout/AdminLayout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.WebsiteLayout ?? LayoutAdmin;
    return (
        <LayoutWrapper>
            <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}
export default MyApp;
