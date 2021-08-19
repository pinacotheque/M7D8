import {Form,Container, Button,Card, Nav,  NavDropdown,  FormControl, Navbar} from 'react-bootstrap'
import React, { useEffect, useState} from 'react';
import { ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import types from '../../types/types'
import SingleCard from './SingleCard';

// interface HomeComponents{
//     album :string
// }


const Home = ({history , location} : RouteComponentProps  ) => {
    
    const [search, setSearch] = useState('')
    const [music, setMusic] = useState<types[]>([])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }

      
      
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log('search',search)
            try {
                let response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`)
                let data = await response.json()
                let musics = await data.data
                console.log('musics',musics)
                if(response.ok){
                    setMusic(musics)
                    setSearch('')
                    await console.log('state music',music)
                } else{
                    console.log('fetch error')
                }
            } catch (error) {
                console.log(error)
            }
         
    
        }
    return(
    <>
    <Container>

        <Form inline className="my-5" onSubmit={handleSubmit} >
            <FormControl type="text" placeholder="Search" value={search} className="mr-sm-2" onChange={handleInput} />
        </Form>

        <div className='d-flex flex-wrap'>

        { music.length >0 ? music.map ((artist) =>
            <SingleCard  artist= {artist}/> 
        )
      : 
        <h5>This looks empty.</h5> }
        </div>
    </Container>

    </>
    )
}
export default Home