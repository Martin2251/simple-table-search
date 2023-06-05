
import { useState } from "react";
import "./App.css";

import { data } from "./data";
import { Form, InputGroup, Table } from "react-bootstrap";

function App() {

  const [search, setSearch] =useState('')
  console.log(search);
  return (
    <div className="App">
      <Form>
    <InputGroup>
    <Form.Control placeholder="search contacts" onChange={(e) => setSearch(e.target.value)} />
    
    </InputGroup>

      </Form>
      <Table>
        <thread>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thread>
        <tbody>
          {data.filter((item) =>{
            return search.toLowerCase() === '' ? item :item.first_name.toLowerCase().includes(search)
          }).map(({first_name,last_name,email,phone,id}) => (
            <tr key={id}>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
