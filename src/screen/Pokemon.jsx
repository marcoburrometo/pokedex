import React from 'react'
import { useParams } from 'react-router-dom'
import PokeCard from '../components/PokeCard';

function Pokemon() {
    const params = useParams();
    console.log(params)
    return (
        <PokeCard
            url={"https://pokeapi.co/api/v2/pokemon/" + params.id}
        />
    )
}

export default Pokemon