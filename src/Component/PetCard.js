import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


function PetCard({element}) {
  return (
    <Card>
      <Card.Img variant="top" src={element.pic} style={{width:"90px"}}/>
      <Card.Body>
        <Card.Title>name : {element.name}</Card.Title>
        <Card.Text>race :  {element.race}</Card.Text>
        <Card.Text>region:  {element.region}</Card.Text>
        <Button variant="primary">Adopt</Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;