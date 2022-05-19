import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./Register.scss";
export default function Register() {
  const [inputs, setInputs] = useState({
    person_name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
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
  return (
    <Form className='register-form' onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type='name'
          name='name'
          placeholder='Nombre'
          className='register-form__input'
          value={inputs.name}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type='lastname'
          name='lastnmae'
          placeholder='Apellido'
          className='register-form__input'
          value={inputs.lastname}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<MailOutlined />}
          type='email'
          name='email'
          placeholder='Correo electronico'
          className='register-form__input'
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type='password'
          name='password'
          placeholder='Contraseña'
          className='register-form__input'
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type='password'
          name='repeatPassword'
          placeholder='Repetir contraseña'
          className='register-form__input'
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name='privacyPolicy' checked={inputs.privacyPolicy}>
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' className='register-form__button'>
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}