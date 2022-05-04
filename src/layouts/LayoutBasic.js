import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props){
    const { children } = props;
    return (
        <Layout>
            <Layout>
                <h2>Menu</h2>
                <div>{children}</div>
                <h5>Footer</h5>
            </Layout>
        </Layout>
    );
}