import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
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
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <img src={member['img']} className="card-img-top" alt={member['name']} />
                    <div className="card-body">
                      <h5 className="card-title">{member['name']}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Detail</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
