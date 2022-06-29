import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Menu, Breadcrumb } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Clientes from './Clients';
import Movies from './Movies';
import CadastroCliente from './Clients/Cadastro';
import CadastroFilmes from './Movies/Cadastro';
import Locacoes from './Rents';
import CadastroLocacao from './Rents/Cadastro';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

/*const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];*/

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/Clientes">Clientes</Link>
    </li>
    <li>
      <Link to="/Clientes/Cadastro">Cadasto Cliente</Link>
    </li>
    <li>
      <Link to="/Movies">Movies</Link>
    </li>
    <li>
      <Link to="/Movies/Cadastro">Cadasto Filmes</Link>
    </li>
    <li>
      <Link to="/Rents">Locação</Link>
    </li>
    <li>
      <Link to="/Rents/Cadastro">Cadastro Locação</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/Clientes': 'Clientes',
  '/Filmes': 'Filmes',
  '/Locacao': 'Locacao',
  'CLients/Cadastro': 'Clients/Cadastro',
  '/Filmes/Cadastro': 'Filmes/Cadastro',
  '/Locacao/Cadastro': 'Locacao/Cadastro',
};

const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/Clientes">Clientes</Link>
        <Link to="/Clientes/Cadastro">Cadasto Cliente</Link>
        <Link to="/Filmes">Filmes</Link>
        <Link to="/Filmes/Cadastro">Filmes Cadastro</Link>
        <Link to="/Locacao">Locacao</Link>
        <Link to="/Locacao/Cadastro">Locacao Cadastro</Link>
      </div>
      <Routes>
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Clientes/Cadastro" element={<CadastroCliente />} />
        <Route path="/Filmes" element={<Movies />} />
        <Route path="/Filmes/Cadastro" element={<CadastroFilmes />} />
        <Route path="/Locacao" element={<Locacoes />} />
        <Route path="/Locacao/Cadastro" element={<CadastroLocacao />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);

export default App;