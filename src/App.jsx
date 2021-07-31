import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MemberCard from './components/MemberCard';
import DiscographyCard from './components/DiscographyCard';
import axios from 'axios';

function App() {
  const [members, setMembers] = useState("No data");
  const [korean, setKorean] = useState("No data");
  const [japanese, setJapanese] = useState("No data");
  const [english, setEnglish] = useState("No data");
  const [renderData, setRenderData] = useState("");

  const getMembersData = () => {
    return axios.get('http://twice-api.adhywiranto.xyz/api/members')
    .then((response) => {
      let data = response['data'];
      setMembers(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getKoreanData = () => {
    return axios.get('http://twice-api.adhywiranto.xyz/api/discography/korean')
    .then((response) => {
      let data = response['data'];
      setKorean(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getJapaneseData = () => {
    return axios.get('http://twice-api.adhywiranto.xyz/api/discography/japanese')
    .then((response) => {
      let data = response['data'];
      setJapanese(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getEnglishData = () => {
    return axios.get('http://twice-api.adhywiranto.xyz/api/discography/english')
    .then((response) => {
      let data = response['data'];
      setEnglish(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  (function() {
    getMembersData()
    getKoreanData()
    getJapaneseData()
    getEnglishData()
  })()

  const renderMembers = () => {
    setRenderData(() => {
      return (
        <div className="row">
          <h3 className="fw-bold">Members</h3>
          {members['data'] && members['data'].map((member, index) => {
            return (
                <MemberCard
                key={member['slug'].toString()}
                value={index+1}
                name={member['name']}
                img={member['img']}
                nationality={member['nationality']}
                position={member['position']} />
              );
            })
          }
        </div>
      );
    });
  }

  const renderKoreanDiscography = () => {
    setRenderData(() => {
      return (
        <div className="row">
          <h3 className="fw-bold">Discography (Korean)</h3>
          {korean['data'] && korean['data'].map((release, index) => {
            return (
              <DiscographyCard
              key={release['slug'].toString()}
              value={index+1}
              title={release['title']}
              img={release['album_cover']}
              releaseDate={release['release_date']} />
            );
          })}
        </div>
      );
    })
  }

  const renderJapaneseDiscography = () => {
    setRenderData(() => {
      return (
        <div className="row">
          <h3 className="fw-bold">Discography (Japanese)</h3>
          {japanese['data'] && japanese['data'].map((release, index) => {
            return (
              <DiscographyCard
              key={release['slug'].toString()}
              value={index+1}
              title={release['title']}
              img={release['album_cover']}
              releaseDate={release['release_date']} />
            );
          })}
        </div>
      );
    })
  }

  const renderEnglishDiscography = () => {
    setRenderData(() => {
      return (
        <div className="row">
          <h3 className="fw-bold">Discography (English)</h3>
          {english['data'] && english['data'].map((release, index) => {
            return (
              <DiscographyCard
              key={release['slug'].toString()}
              value={index+1}
              title={release['title']}
              img={release['album_cover']}
              releaseDate={release['release_date']} />
            );
          })}
        </div>
      );
    })
  }

  return (
    <div>
      <Navbar />
      <div className="container border-bottom pb-4">
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <img src="./logo.png" alt="TWICE API" width="100" />
            <h1 className="display-3 mt-3 fw-bold">TWICE API Client</h1>
          </div>
          <div className="col-md-12 text-center">
            <p className="text-secondary h5 mb-3">Get TWICE data such as members' profile and album information</p>
            <button className="btn btn-secondary mx-2 shadow-sm" onClick={renderMembers}>Members</button>
            <button className="btn btn-secondary mx-2 shadow-sm" onClick={renderKoreanDiscography}>Korean</button>
            <button className="btn btn-secondary mx-2 shadow-sm" onClick={renderJapaneseDiscography}>Japanese</button>
            <button className="btn btn-secondary mx-2 shadow-sm" onClick={renderEnglishDiscography}>English</button>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        {renderData}
      </div>
    </div>
  );
}

export default App;
