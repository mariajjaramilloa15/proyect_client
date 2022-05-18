import React, {useState} from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Register.scss";

export default function Register() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    });

    const changeForm = (e) => {
        if (e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
            });
        }
    };
    return(
        <Form className="register-form" onChange={changeForm}>
            <Form.Item>
                <Input 
                prefix ={
                    <UserOutlined />
                }
                type="email"
                name="email"
                placeholder="Correo electronico"
                className="register-form__input"
                value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
            <Input 
                prefix ={
                    <UserOutlined />
                }
                type="password"
                name="password"
                placeholder="Contraseña"
                className="register-form__input"
                value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
            <Input 
                prefix ={
                    <UserOutlined />
                }
                type="password"
                name="repeatPassword"
                placeholder="Repetir Contraseña"
                className="register-form__input"
                value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
                    He leido y acepto la politica de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    );
}

