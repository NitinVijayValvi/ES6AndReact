import {Card} from 'react-bootstrap';

import React from 'react';
   export function Pokecard({id,name,type,image}){

        return(
            <Card style={{ width: '14rem',backgroundColor:'grey' }}>
      <Card.Img variant="top" src={image} width={180} height = {180} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Type : {type}
        </Card.Text>
        
      </Card.Body>
    </Card>
        )
    }

Pokecard.defaultProp=
            {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "/images/charmender.jpg"
            }


export default Pokecard