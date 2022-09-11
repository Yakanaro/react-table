import { useState, useEffect } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { type } from 'react-bootstrap-table2-editor';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios('http://localhost:3001').then((res) => {
      setData(res.data);
    });
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'username',
      text: 'UserName',
    },
    {
      dataField: 'email',
      text: 'Email',
    },
    {
      dataField: 'phone',
      text: 'Phone Number',
    },
  ];

  return (
    <div className='App'>
      <BootstrapTable
        keyField='id'
        data={data}
        columns={columns}
        cellEdit={cellEditFactory({
          mode: 'click',
          blurToSave: true,
        })}
      />
    </div>
  );
}

export default App;
