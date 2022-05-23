import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "./MenuSider.scss";

export default function MenuSider(props){
    const { menuCollapsed } = props;
    const { Sider } = Layout;

    return(
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="white" mode="inline" defaultSelectedKeys={["/admin"]}>
                <Menu.Item key="/admin">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/login">
                    <Link to={"/admin/login"}>
                        <MenuOutlined />
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}