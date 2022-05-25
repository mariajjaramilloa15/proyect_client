import React from "react";
import { Layout } from "antd";
import "../scss/index.scss";
import "../layouts/LayoutError404.scss"

export default function LayoutError404(props){
    const { children } = props;
    const { Content } = Layout;

        return (
            <Layout>
                
                 <div className="container">
                    <div className="row">
                        <div className="col">
                            <div align= 'center'>
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/002/416/499/large_2x/404-error-and-page-not-found-illustration-vector.jpg"
                                    alt=""
                                    width = "" //1357 800
                                    height = "657"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
}

