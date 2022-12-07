import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Pokecard from './components/Pokecard';
import pokemon from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function App(){


  return( <div className='container'>
   <h1>Pokedex</h1> 
    <Container >
    
    <Row>
   {pokemon.map(({id,name,type,image}) =>(
      <Col xs={3} className="mb-5" key={`${id}`}>
      <Pokecard
      id={id}
      name= {name}
      image= {image}
      type={type}
      />
      </Col>
     ) ) }
    </Row>
    </Container>
    </div>
    
  );
  
  
}

export default App;
