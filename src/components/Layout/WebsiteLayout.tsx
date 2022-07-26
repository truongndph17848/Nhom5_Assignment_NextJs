import React from "react";
import { LayoutProps } from "@/models/layout";
import Header from "../Header";
import Footer from "../Footer";

const WebsiteLayout = ({ children }: LayoutProps) => {
    return (
        <div className="container">
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

export default WebsiteLayout;
