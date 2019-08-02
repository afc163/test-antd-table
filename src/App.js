import React from 'react';
import logo from './logo.svg';
import { Table } from 'antd';
import './App.css';

function App() {
	const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
  return (
    <div className="App">
      <Table columns={columns} dataSource={data} pagination={false} scroll={{ y: 240 }} />
    </div>
  );
}

export default App;
