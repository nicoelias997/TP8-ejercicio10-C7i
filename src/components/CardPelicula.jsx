import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardPelicula = (props) => {
  return (
    <Card className='mt-3'>
        <Card.Header>
            <Card.Title>
                {props.nombre}
            </Card.Title>
        </Card.Header>
        <Card.Body>
        <Card.Subtitle>
            {props.genero}  
        </Card.Subtitle>
        <Card.Text>
            {props.descripcion} 
        </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button type='button' className='btn btn-danger btn-sm float-end'>
                Borrar
            </Button>
        </Card.Footer>
    </Card>
  )
}

export default CardPelicula