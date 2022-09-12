import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

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
    <>
      <Navbar expand='lg' variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand href='#'>React-table</Navbar.Brand>
        </Container>
      </Navbar>
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
    </>
  );
}

export default App;
