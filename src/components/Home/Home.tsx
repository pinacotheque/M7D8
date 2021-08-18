import {Form, Button, Nav,  NavDropdown,  FormControl, Navbar} from 'react-bootstrap'

import { ChangeEvent, FormEvent, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'


interface HomeComponentProps{
    search: string
}

const Home = ({history , location, search} : RouteComponentProps & HomeComponentProps ) => {


    return(
    <>

        <Form inline className="mt-5 ml-5">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>

    </>
    )
}
export default Home