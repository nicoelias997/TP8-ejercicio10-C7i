import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CardPelicula from './CardPelicula'
import { generoPelicula, validacionDescripcion, validacionGenero, validacionNombre} from '../helpers'
import { v4 as uuidv4 } from 'uuid';


const Formulario = () => {

    let storagePeli = JSON.parse(localStorage.getItem("listaPelis")) || [];


    const [nombrePelicula, setNombrePelicula] = useState("")
    const [descripcionPelicula, setDescripcionPelicula] = useState("")
    const [generoPeli, setGeneroPeli] = useState("")

    const [arrayPelicula, setArrayPelicula] = useState(storagePeli)
    
    let peliculaNueva = {
        nombrePelicula,
        descripcionPelicula,
        generoPeli,
        id: uuidv4()
    }

    const eliminarPeli = (id) => {
        let arrayFiltrado = arrayPelicula.filter(item => item.id !== id)
        setArrayPelicula(arrayFiltrado)
    }


    useEffect(() => {
        localStorage.setItem("listaPelis", JSON.stringify(arrayPelicula));
      }, [arrayPelicula]);

    const crearPeli = (e) => {
        e.preventDefault()

        
        if(!validacionNombre(nombrePelicula) || !validacionDescripcion(descripcionPelicula) || !validacionGenero(generoPeli)){
            console.log("mal bro")
            return
        }
        
        setArrayPelicula([
            ...arrayPelicula,
            peliculaNueva
        ])
        setNombrePelicula("")
        setDescripcionPelicula("")
        setGeneroPeli("")
    }


  return (
    <Container>
    <Col sm={12}> 
    <Form onSubmit={crearPeli}>
            <Form.Group className="mb-2 mt-2">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" value={nombrePelicula} onChange={e => setNombrePelicula(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-2 mt-2">
                <Form.Label>Descripcion:</Form.Label>
                <Form.Control as="textarea" value={descripcionPelicula} rows={4} onChange={e => setDescripcionPelicula(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-2 mt-2">
                <Form.Label>Genero: </Form.Label>
                <Form.Select aria-label="Default select example" value={generoPeli} onChange={e => setGeneroPeli(e.target.value)}>
                {
                    generoPelicula.map(item => (
                        <option key={item}>{item}</option>
                        
                    ))
                }  
                </Form.Select>
            </Form.Group>
            <Button type='submit' className='btn btn-warning mb-2 mt-2'>
                Guardar
            </Button>
    </Form>
    </Col>
    <Row xs={3} className="mb-3">  
        
                {
                    arrayPelicula.map(item =>

                    <CardPelicula nombre={item.nombrePelicula} key={item.id} descripcion={item.descripcionPelicula} genero={item.generoPeli} eliminarPeli={() => eliminarPeli(item.id)}></CardPelicula>
                )}
    </Row>
    </Container>
  )
}

export default Formulario