import React from "react";
import HomeImage from "../assets/pexels-pixabay-416405.jpg";
import "./Index.css";
import{Container} from 'react-bootstrap';

function Index() {
  return (
    <Container fluid>
      <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="headerContainer">
        <h1>AL-HADARA </h1>
        <p> The First Company In The Middle East</p>
        <button> Order Service Now </button>
      </div>
     </div>
    </Container>
    
  );
}

export default Index;
