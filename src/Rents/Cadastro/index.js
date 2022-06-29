import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Layout, Select, DatePicker } from 'antd';

const { Content } = Layout;
const { Option } = Select;

const CadastroLocacao = () => {

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
      label="Clientes"
      name="clientes"
      rules={[
        {
          required: true,
          message: 'Favor escolher um cliente',
        },
      ]}
    >
      <Select
      defaultValue="edward"
      style={{
        width: 120,
      }}
    >
      <Option value="edward">Edward King</Option>
      <Option value="ana">Ana</Option>
    </Select>
    </Form.Item>

    <Form.Item
      label="Filmes"
      name="filmes"
      rules={[
        {
          required: true,
          message: 'Favor escolher um filme',
        },
      ]}
    >
      <Select
      defaultValue="viuvaNegra"
      style={{
        width: 120,
      }}
    >
      <Option value="viuvaNegra">Viuva Negra</Option>
      <Option value="homemFerro">Home de Ferro</Option>
    </Select>
    </Form.Item>

    <Form.Item 
    label="Data de Locação"
    name="dataLocacao"
    rules={[
        {
          required: true,
          message: 'Favor inserir a data de locação do filme',
        },
      ]}>
      <DatePicker />
    </Form.Item>
    <Form.Item 
    label="Data de Devolução"
    name="dataDevolucao"
    rules={[
        {
          required: true,
          message: 'Favor inserir a data de devolução do filme',
        },
      ]}>
      <DatePicker />
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

export default CadastroLocacao;