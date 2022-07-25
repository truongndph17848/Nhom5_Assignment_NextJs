import React from "react";
import { LayoutProps } from "../../models/layout";
import Auth from "../Auth";

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        // <Auth>
            <div>

            {/* Header admin CODE Ở ĐÂY , ko thì tách riêng ra */}
        <h1>admin</h1>

                <div>{children}</div>

            {/* Footer admin CODE Ở ĐÂY */}

            </div>
        // </Auth>
    );
};

export default LayoutAdmin;
