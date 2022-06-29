import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, DatePicker, Layout } from 'antd';
import AppPost from './postCliente';

const { Content } = Layout;



const CadastroCliente = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

return(
    <div>
         <Content
      style={{
        padding: '0 50px',
      }}
    >
         <div className="site-layout-content">
         <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nome"
      name="nome"
      rules={[
        {
          required: true,
          message: 'Favor inserir o nome',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="CPF"
      name="cpf"
      rules={[
        {
          required: true,
          message: 'Favor inserir o cpf',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item 
    label="Data de Nascimento"
    name="dataNascimento"
    rules={[
        {
          required: true,
          message: 'Favor inserir a data de nascimento',
        },
      ]}>
      <DatePicker onChange={onChange} />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button title='Submit' onPress={()=>AppPost()}/>
      {/* <Button type="primary" htmlType="submit">
        Submit
      </Button> */}
    </Form.Item>
  </Form>
  </div>
    </Content>
    </div>
   
  )
}

export default CadastroCliente;