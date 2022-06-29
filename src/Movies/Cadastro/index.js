import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, InputNumber, Layout, Switch } from 'antd';
const { Content } = Layout;

const CadastroFilmes = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
      label="Titulo"
      name="titulo"
      rules={[
        {
          required: true,
          message: 'Favor inserir o titulo',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Classificação"
      name="classificacao"
      rules={[
        {
          required: true,
          message: 'Favor inserir a classificação do filme',
        },
      ]}
    >
      <InputNumber min={0} max={18} defaultValue={0}/>
    </Form.Item>

    <Form.Item 
    label="Lançamento"
    name="lancamento"
    rules={[
        {
          required: true,
          message: 'Favor inserir se o filme é lançamento',
        },
      ]}>
      <Switch defaultChecked/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
    </Content>
    </div>
   
  )
}

export default CadastroFilmes;