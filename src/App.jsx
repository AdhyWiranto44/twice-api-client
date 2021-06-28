import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Member from './components/Member';
import axios from 'axios';

function App() {
  let [members, setMembers] = useState("No data");

  axios.get('http://twice-api.adhywiranto.xyz/api/members')
  .then((response) => {
    let data = response['data'];
    setMembers(data);
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container mt-3">
        <div className="row">
          <h3 className="fw-bold">Members</h3>
          {members['data'] && members['data'].map((member) => {
            return (
                <Member
                name={member['name']}
                img={member['img']}
                nationality={member['nationality']}
                position={member['position']} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
