import React, { useContext,Text, /* View, ScrollView,*/  StyleSheet, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { Alert, Button, Form, Input, Popconfirm, Table } from 'antd';
import api from "./../services/api";
import headers from '../headers';
import headerPadrao from  '../services/ApiHeader';
import urlPadrao from '../services/ApiUrl';
/*const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.address.startsWith(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: <span>London</span>,
        value: 'London',
      },
      {
        text: <span>New York</span>,
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};*/

const Clientes = () => {
  const [users, setUsers] = useState([])
    /* const getData = () => {
      // fetch('http://localhost:5231/api/Clients/',{mode:'no-cors', Accept: 'application/json'}) 
        fetch(urlPadrao.concat('Clients'),{mode:'no-cors',headerPadrao})
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            const user = {
                id: res.id,
                nome: res.name,
                cpf: res.cpf,
                date: res.birthDate,
              };
              setUsers(res.data)
            .catch(() => alert('Erro'))
          })
      } 
      useEffect(  () => {
        getData()
      }, []); */
     
      useEffect(() => {
        fetch(urlPadrao.concat('Clients'),{mode:'no-cors',headers})
          .then(res => res.json())
          .then(res => setUsers(JSON.stringify(res.data)))
          .catch(() => alert('Erro'))
        }, 
        []);
          
        
      
      /* useEffect(() => {
        api
          .get(urlPadrao.concat('Clients'),{mode:'no-cors',headers})
          .then((response) => setUsers(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []); */
    

 return(
/*    <View styles={styles.container}>
    <h2>React Fetch API Example</h2>
    <ScrollView>
    <ul>
      {Users.map(user => (
        <Text>{user.name}</Text>
      )
        //return <li key={i}>{user.name}</li>
      )}
     
    </ul>
    </ScrollView>
  </View>
 */
    <>
      <h2>React Fetch API Example</h2>
      <h3>{JSON.stringify(users)}</h3>
      <ul>
        {users.map((user/*, i*/) => {
          <Text>{user.name}</Text>
          /* return <li key={i}>{user.name}</li> */
        })}
        <p>{users.name}XXX</p>
      </ul>
      {/* { <Table columns={columns} dataSource={data} onChange={onChange} /> } */}
    </> 
   

);
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topo: {
    height: 80,
    padding: 20,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: '#e73e33'
  },
  topoTitulo: {
    fontSize: 22,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center'
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#656565'
  }
}) */

export default Clientes; 