import {Form, Button,Card, Nav,  NavDropdown,  FormControl, Navbar} from 'react-bootstrap'
import types from '../../types/types'


interface CardComponenetProps {
    artist:types
}


const SingleCard = ({ artist }: CardComponenetProps) => {
    return (
        <Card className="ml-5 mb-4" style={{ width: '18rem' }}>
         <Card.Img variant="top" src={`${artist.album?.cover_big}`} />
         <Card.Body>
             <Card.Title>{artist.album?.title}</Card.Title>
             <Card.Text>
             {artist.artist?.name}
             
             </Card.Text>
             </Card.Body>
          </Card>
    )
}

export default SingleCard