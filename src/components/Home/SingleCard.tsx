import {Form, Button,Card, Nav,  NavDropdown,  FormControl, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import types from '../../types/types'
import Details from '../Details/Details'


interface CardComponenetProps {
    artist:types
}


const SingleCard = ({ artist }: CardComponenetProps) => {
    return (
        <Card className="ml-5 mb-4" style={{ width: '18rem' }} >
            <Link to={`${artist.album?.id}`}> 
        
         <Card.Img variant="top" src={`${artist.album?.cover_big}`} />
         <Card.Body>
             <Card.Title>{artist.album?.title}</Card.Title>
             <Card.Text>
             {artist.artist?.name}
             
             </Card.Text>
             </Card.Body>
             </Link>
          </Card>
    )
}

export default SingleCard