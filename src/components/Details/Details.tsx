import {Form, Button,Card, Nav,  NavDropdown,  FormControl, Navbar, Container, Row, Col} from 'react-bootstrap'
import types from '../../types/types'
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { RouteComponentProps } from "react-router-dom";
import { TrackDetail } from "../../types/types"

interface DetailPageParams {
    id: string
}

const Details = ({history, location}: RouteComponentProps) => {

    const id = parseInt(useParams<DetailPageParams>().id)
    const [album, setAlbum] = useState <TrackDetail | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track + ${history.location.pathname}`)
                if (!response.ok) return
                const data = await response.json()
                console.log("history",history)
                console.log("data", data)
                setAlbum(data)
                
            } catch (error) {
                console.log(error)
            }
        })()
    }, [album])

    return (
        album ? 
        <Container>
            <Row>
                <Col>
                <img src= ""/>
                </Col>
                <Col>
                <h5>Album title</h5>
                <h6>Artist name</h6>
                
                </Col>
            </Row>
        </Container> 
        : <h6>Something went wrong</h6>
    )
}

export default Details