import React, { useContext, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Popconfirm, Table } from 'antd';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const Locacoes = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataSource, setDataSource] = useState([
        {
          key: '0',
          cliente: 'Edward King',
          filme: 'Homem de Ferro',
          dataLocacao: '25-06-2022',
          dataDevolucao: '28-06-2022',
        },
        {
          key: '1',
          cliente: 'Ana',
          filme: 'Viuva Negra',
          dataLocacao: '28-06-2022',
          dataDevolucao: '30-06-2022',
        },
      ]);
      const [count, setCount] = useState(2);
    
      const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
      };
    
      const defaultColumns = [
        {
          title: 'Cliente',
          dataIndex: 'cliente',
          editable: true,
        },
        {
          title: 'Filme',
          dataIndex: 'filme',
          editable: true,
        },
        {
          title: 'Data de Loca????o',
          dataIndex: 'dataLocacao',
          editable: true,
        },
        {
            title: 'Data de Devolu????o',
            dataIndex: 'dataDevolcao',
            editable: true,
          },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (_, record) =>
            dataSource.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a>Delete</a>
              </Popconfirm>
            ) : null,
        },
      ];
    
      const handleAdd = () => {
        const newData = {
          key: count,
          cliente: 'nome',
          filme: 'titulo',
          dataLocacao: 'data',
          dataDevolucao: 'data', 
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
      };
    
      const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
      };
    
      const components = {
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      };

      const columns = defaultColumns.map((col) => {
        if (!col.editable) {
          return col;
        }

        return {
          ...col,
          onCell: (record) => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave,
          }),
        };
      });

      return (
        <div>
          <Button
            onClick={handleAdd}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Add a row
          </Button>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            scroll={{
                y: 240,
              }}
          />
        </div>
      );
};

export default Locacoes;