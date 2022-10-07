import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CardPelicula from './CardPelicula'
import { generoPelicula, validacionDescripcion, validacionGenero, validacionNombre} from '../helpers'
import { v4 as uuidv4 } from 'uuid';


const Formulario = () => {

    // let storagePeli = JSON.parse(localStorage.getItem("listaPelis")) || [];


    const [nombrePelicula, setNombrePelicula] = useState("")
    const [descripcionPelicula, setDescripcionPelicula] = useState("")
    const [generoPeli, setGeneroPeli] = useState("")

    const [arrayPelicula, setArrayPelicula] = useState([])
    
    let peliculaNueva = {
        nombrePelicula,
        descripcionPelicula,
        generoPeli,
        id: uuidv4()
    }

  
    // useEffect(() => {
    //     localStorage.setItem("listaPelis", JSON.stringify(arrayPelicula));
    //   }, [arrayPelicula]);

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
    <Col >
    <Col sm={12} md={12} lg={8} > 
    <Form onSubmit={crearPeli}>
            <Form.Group className="mb-2 mt-2">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" onChange={e => setNombrePelicula(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-2 mt-2">
                <Form.Label>Descripcion:</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={e => setDescripcionPelicula(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-2 mt-2">
                <Form.Label>Genero: </Form.Label>
                <Form.Select aria-label="Default select example" onChange={e => setGeneroPeli(e.target.value)}>
                {
                    generoPelicula.map(item => (
                        <option key={item}>{item}</option>
                        
                    ))
                }  
                </Form.Select>
            </Form.Group>
            <Button type='submit' className='btn btn-warning btn-sm mt-3 float-end'>
                Guardar
            </Button>
    </Form>
    </Col>
    
    <Col xs={12} sm={6} md={4} lg={3}>
                {
                    arrayPelicula.map(item =>

                    <CardPelicula nombre={item.nombrePelicula} key={item.id} descripcion={item.descripcionPelicula} genero={item.generoPeli}></CardPelicula>
                )}
    </Col>
    </Col>
  )
}

export default Formulario