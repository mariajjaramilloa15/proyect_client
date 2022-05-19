import React from "react";
import { Layout } from "antd";
import "../scss/index.scss";

export default function LayoutError404(props){
    const { children } = props;

        return (
            <Layout>
                <div className="background">
                 <div className="container">
                    <div className="row">
                        <div className="col">
                            <div align= 'center'>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Layout>
        );
}

